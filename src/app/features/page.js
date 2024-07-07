import React, { Suspense } from "react";
import FeatureContent from "../../components/FeatureContent";

export default function FeaturesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeatureContent />
    </Suspense>
  );
}
