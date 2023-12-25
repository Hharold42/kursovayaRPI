import { FaX } from "react-icons/fa6";

const Card = ({ children, popupHandler = () => {}, text, subtext }) => {
  return (
    <div
      className=" border-4 border-[#2a72f8] border-solid h-[240px] rounded-md flxcol items-center justify-center shadow-md p-2"
      onClick={popupHandler}
    >
      {children || <FaX size={40} className="mb-8" />}
      <span className=" text-lg font-bold my-2">{text}</span>
      <p>{subtext}</p>
    </div>
  );
};

export default Card;
