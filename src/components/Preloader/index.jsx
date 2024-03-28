import { TailSpin } from "react-loader-spinner";

const Preloader = () => {
  return (
    <TailSpin
      height="70"
      width="70"
      color="blue"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        position: "fixed",
        zIndex: 1000,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Preloader;
