import BigChart from "./bigChart";
import useData from "./useData";
const Solana = () => {
  const { solana, dataIsLoading } = useData();
  const renderData = () => {
    if (dataIsLoading) {
      return <div>Loading...</div>;
    }
    return <BigChart data={solana} />;
  };
  return renderData();
};
export default Solana;
