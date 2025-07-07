import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => (
  <div className="flex flex-col justify-center items-center min-h-[120px]">
    <Puff color="#2563eb" height={80} width={80} />
    <span className="mt-2 text-blue-700 dark:text-blue-300 text-sm" aria-live="polite">Loading...</span>
  </div>
);

export default Loading;
