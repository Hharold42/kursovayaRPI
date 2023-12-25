import Link from "next/link";
import {
  FaBriefcase,
  FaUserGroup,
  FaMoneyBills,
  FaUsersGear,
} from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full h-[90px] flxrow justify-between bg-[#2a72f8] text-white items-center px-8">
      <Link className=" font-extrabold text-2xl" href={"/"}>
        ЛОГОТИП@
      </Link>
      <div className=" text-xl">СВОЙ БАНК</div>
      <div className="flxrow [&>*]:flxrow [&>*>*]:mx-2">
        <Link
          href={"/"}
          className="border-b-2 border-transparent hover:border-white def-transition"
        >
          <FaBriefcase size={20} />
          Главная
        </Link>
        <Link
          href={"/users"}
          className="border-b-2 border-transparent hover:border-white def-transition"
        >
          <FaUserGroup size={20} />
          Пользователи
        </Link>
        <Link
          href={"#"}
          className="border-b-2 border-transparent hover:border-white def-transition"
        >
          <FaMoneyBills size={20} />
          Транзакции
        </Link>
        <Link
          href={"#"}
          className="border-b-2 border-transparent hover:border-white def-transition"
        >
          <FaUsersGear size={20} />
          Администрирование
        </Link>
      </div>
    </header>
  );
};

export default Header;
