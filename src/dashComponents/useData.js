import { useState, useEffect } from "react";
import gecko from "../dashComponents/axios";
const useData = () => {
  const [solana, setSolana] = useState();
  const [bitcoin, setBitcoin] = useState();
  const [ethereum, setEthereum] = useState();
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
  useEffect(() => {
    const fetchData = async () => {
      setDataIsLoading(true);
      const [bitcoin, ethereum, solana] = await Promise.all([
        gecko.get("/coins/bitcoin/market_chart/", {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        gecko.get("/coins/ethereum/market_chart/", {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
        gecko.get("/coins/solana/market_chart/", {
          params: {
            vs_currency: "usd",
            days: "1",
          },
        }),
      ]);
      setBitcoin(formatData(bitcoin.data.prices));
      setEthereum(formatData(ethereum.data.prices));
      setSolana(formatData(solana.data.prices));
      setDataIsLoading(false);
    };
    fetchData();
  }, []);

  const renderData = () => {
    if (!bitcoin && !ethereum && !solana) {
      return <div>Loading...</div>;
    }
    return { bitcoin, ethereum, solana, dataIsLoading };
  };
  return renderData();
};

export default useData;
