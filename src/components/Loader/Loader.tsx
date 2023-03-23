import { TailSpin } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.style";

export const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin color="#A6D5FA" height={100} width={100} />
    </LoaderContainer>
  );
};
