import { useRef, useState, useEffect } from "react";
import gecko from "../dashComponents/gecko";
import BigChart from "./bigChart";
import Coin from "./coin";
const CoinsData = () => {
  const [coinsData, setCoinsData] = useState(null);
  const [chartsData, setChartsData] = useState(null);
  const [dataIsLoading, setDataIsLoading] = useState(false);

  /* format coin data to less number */
  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };
  /* id for big chart */
  /* create func for add coin id for big chart */
  useEffect(() => {
    const fetchData = async () => {
      setDataIsLoading(true);
      const [coins, chart] = await Promise.all([
        gecko.get(
          "coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20solana%2C%20cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        ),
        gecko.get("/coins/bitcoin/market_chart/", {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
      ]);

      setCoinsData(coins.data);
      setChartsData(formatData(chart.data.prices));
      /* console.log(coinsData, chartsData); */
      setDataIsLoading(false);
    };
    fetchData();
  }, []);
  const renderData = () => {
    if (dataIsLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Coin coinsData={coinsData} />
        <BigChart chartsData={chartsData} />
      </div>
    );
  };
  return renderData();
};

export default CoinsData;
