import FrontImgHead from "./FrontImgHead";

const FrontImage = ({ image, header1, header2, translateName }) => {
  return (
    <div
      // className="frontDiv"
      className="flex flex-col items-center justify-center gap-16 h-screen bg-cover bg-no-repeat bg-center bg-fixed "
      style={{ backgroundImage: `url(${image})` }}
    >
      <FrontImgHead
        header1={header1}
        header2={header2}
        translateName={translateName}
      />
    </div>
  );
};

export default FrontImage;
