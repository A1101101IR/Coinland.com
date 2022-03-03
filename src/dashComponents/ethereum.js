import BigChart from "./bigChart";
import useData from "./useData";
const Ethereum = () => {
  const { ethereum, dataIsLoading } = useData();
  const renderData = () => {
    if (dataIsLoading) {
      return <div>Loading...</div>;
    }
    return <BigChart data={ethereum} />;
  };
  return renderData();
};
export default Ethereum;
