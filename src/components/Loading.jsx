import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => (
  <div className="flex justify-center items-center">
    <Puff color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loading;
