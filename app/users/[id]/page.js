"use client";

import axios from "axios";
import { useLayoutEffect, useState } from "react";

const page = ({ params: { id } }) => {
  const [userData, setUserData] = useState({});
  const [isPassportHidden, setPassportHidden] = useState(true);

  useLayoutEffect(() => {
    async function fetchUser(id) {
      console.log(id);
      await axios
        .get(`http://localhost:3000/api/user?id=${id}`)
        .then((res) => res.data)
        .then((data) => {
          console.log(data);
          setUserData(data);
        });
    }

    fetchUser(id);
  }, []);

  return (
    <div className=" w-full flxrow px-8 py-4">
      <div className="w-full flxcol mx-4">
        <div className="flxcool mb-4 w-full p-2 border-black border-solid border-2 rounded-lg">
          <label className=" font-bold text-lg">Фамилия Имя Отчество:</label>
          <div className="w-full bg-[#d1d1d1]  px-4 py-2 rounded-md">
            {userData?.fio || "Загрузка"}
          </div>
        </div>
        <div className="flxcool mb-4 w-full p-2 border-black border-solid border-2 rounded-lg">
          <label className=" font-bold text-lg">Номер телефона</label>
          <div className="w-full bg-[#d1d1d1]  px-4 py-2 rounded-md">
            {userData?.phone || "Загрузка"}
          </div>
        </div>
        <div className="flxcool mb-4 w-full p-2 border-black border-solid border-2 rounded-lg">
          <label className=" font-bold text-lg">Эл.почта</label>
          <div className="w-full bg-[#d1d1d1] px-4 py-2 rounded-md">
            {userData?.email || "Загрузка"}
          </div>
        </div>
        <div
          className="flxcool mb-4 w-full p-2 border-black border-solid border-2 rounded-lg"
          onClick={() => setPassportHidden((prev) => !prev)}
        >
          <label className=" font-bold text-lg">Пасспорт</label>
          <div
            className={`w-full  px-4 py-2 rounded-md def-transition ${
              isPassportHidden ? "bg-[#2c2c2c]" : "bg-[#d1d1d1]"
            }`}
          >
            {isPassportHidden ? "" : userData?.passport || "Загрузка"}
          </div>
        </div>
      </div>
      <div className="w-full flxcol mx-4 border-2 border-solid border-[#2a72f8] rounded-lg mb-4 px-2">
        <div className="flxcol justify-center items-center mb-4">
          <label className="font-bold text-lg text-[#2a72f8]">Баланс</label>
          <div className="w-full bg-[#d1d1d1] px-4 py-2 rounded-md">
            {userData?.balance || 0} руб.
          </div>
        </div>
        <div className="w-full flxcol flxcol justify-center items-center">
          <label className="font-bold text-lg text-[#f82a2a]">
            Сумма кредитов
          </label>
          <div className="w-full bg-[#d1d1d1] px-4 py-2 rounded-md">
            {userData?.debt || 0} руб.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
