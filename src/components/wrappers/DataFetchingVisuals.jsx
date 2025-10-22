/* eslint-disable react/prop-types */
import { LoadingAnim, NoDataFound } from "../../components";

const DataFetchingVisuals = ({
  dataLength,
  isLoading,
  loadingType,
  loadingCardNum,
  noDataFoundText,
  children,
}) => {
  return isLoading ? (
    <LoadingAnim type={loadingType} cardNum={loadingCardNum} />
  ) : dataLength > 0 ? (
    children
  ) : (
    <NoDataFound text={noDataFoundText} />
  );
};

export default DataFetchingVisuals;
