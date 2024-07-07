import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6";

export const fetchLatestRates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/USD`);
    const rates = response.data.conversion_rates;
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
      const [year, month, day] = dateStr.split("-");
      requests.push(
        axios.get(
          `${BASE_URL}/${API_KEY}/history/${baseCurrency}/${year}/${month}/${day}`
        )
      );
    }

    const responses = await Promise.all(requests);
    const historicalData = responses.map((response) => ({
      date: response.data.date,
      rate: response.data.conversion_rates[targetCurrency],
    }));

    return historicalData;
  } catch (error) {
    console.error("Error fetching historical data:", error);
    return [];
  }
};
