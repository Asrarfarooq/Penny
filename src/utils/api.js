import axios from "axios";

const OPEN_EXCHANGE_RATES_APP_ID =
  process.env.NEXT_PUBLIC_OPEN_EXCHANGE_RATES_APP_ID;
const BASE_URL = "https://openexchangerates.org/api";

export const fetchLatestRates = async (baseCurrency = "USD") => {
  try {
    const response = await axios.get(`${BASE_URL}/latest.json`, {
      params: {
        app_id: OPEN_EXCHANGE_RATES_APP_ID,
        base: baseCurrency,
      },
    });
    const rates = response.data.rates;
    localStorage.setItem("latestRates", JSON.stringify(rates));
    localStorage.setItem("lastUpdate", new Date().toISOString());
    return rates;
  } catch (error) {
    console.error("Error fetching latest rates:", error);
    const cachedRates = localStorage.getItem("latestRates");
    if (cachedRates) {
      return JSON.parse(cachedRates);
    }
    return {};
  }
};

export const fetchHistoricalData = async (baseCurrency, targetCurrency) => {
  try {
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 30 * 24 * 60 * 60 * 1000); // 30 days ago

    const requests = [];
    for (
      let d = new Date(startDate);
      d <= endDate;
      d.setDate(d.getDate() + 1)
    ) {
      const dateStr = d.toISOString().split("T")[0];
      requests.push(
        axios.get(`${BASE_URL}/historical/${dateStr}.json`, {
          params: {
            app_id: OPEN_EXCHANGE_RATES_APP_ID,
            base: "USD", // Open Exchange Rates free plan only supports USD as base
            symbols: `${targetCurrency}`,
          },
        })
      );
    }

    const responses = await Promise.all(requests);
    const historicalData = responses.map((response) => ({
      date: response.data.date,
      rate: response.data.rates[targetCurrency],
    }));

    // If base currency is not USD, we need to convert the rates
    if (baseCurrency !== "USD") {
      const latestRates = await fetchLatestRates();
      historicalData.forEach((data) => {
        data.rate = (1 / latestRates[baseCurrency]) * data.rate;
      });
    }

    return historicalData;
  } catch (error) {
    console.error("Error fetching historical data:", error);
    return [];
  }
};
