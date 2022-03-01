import CoinsData from "../dashComponents/coinsData";
import HistoryChart from "../dashComponents/chart";
import Coin from "../dashComponents/coin";
import useData from "../dashComponents/fetchData";
import dashData from "../dashComponents/fetchData";
import Dashboard from "./dash";
import "./product.scss";

const Product = () => {
  const { coinsData, chartsData, dataIsLoading } = useData();

  return (
    <>
      <div className="Dashboard">
        {/* <Coin coinsData={(coinsData, chartsData)} />
        <HistoryChart chartsData={chartsData} /> */}
        <CoinsData />
      </div>
    </>
  );
};

export default Product;
