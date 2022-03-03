import useData from "./useData";
import BigChart from "./bigChart";
const Bitcoin = () => {
  const { bitcoin, dataIsLoading } = useData();
  const renderData = () => {
    if (dataIsLoading) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <BigChart data={bitcoin} />
      </>
    );
  };
  return renderData();
};
export default Bitcoin;
