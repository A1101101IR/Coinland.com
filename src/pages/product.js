import HistoryChart from "../components/chart";
import Coin from "../components/coin";
import useData from "../components/fetchData";
import dashData from "../components/fetchData";
import Dashboard from "./dash";
import "./product.scss";

const Product = () => {
  const { coinsData, chartsData, dataIsLoading } = useData();

  return (
    <>
      <div className="Dashboard">
        <Coin coinsData={(coinsData, chartsData)} />
        <HistoryChart chartsData={chartsData} />
      </div>
    </>
  );
};

export default Product;
