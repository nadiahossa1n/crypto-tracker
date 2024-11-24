import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import axios from "axios";

function DashboardPage() {
  const [coins, setCoins] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/coins/markets",
    params: { vs_currency: "usd" },
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-MP5yijyBeggk3MU7Ygxuk5n9",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => setCoins(res.data))
      .catch((err) => console.error(err));
      console.log(coins)
  }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={coins} />
    </div>
  );
}

export default DashboardPage;
