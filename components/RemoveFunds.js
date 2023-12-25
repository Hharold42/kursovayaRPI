"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const removeFundsRequest = (data) => {
  axios.put("http://localhost:3000/api/user?process=rf", data).then((res) => {
    if (res.status === 200) alert("Успешно");
    else alert("Ошибка при попытке создания пользователя ");
  });
};

const RemoveFunds = ({ closeHandler = () => {} }) => {
  const [formData, setFormData] = useState({
    user: -1,
    amount: 0,
  });
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      await axios
        .get("http://localhost:3000/api/user")
        .then((res) => res.data)
        .then((data) => {
          const opts = data.map((item, index) => (
            <option value={item.id} key={index + "opt"}>
              {item.fio}({item.balance}руб.)
            </option>
          ));

          setOptions((prev) => [
            <option value={-1} key={0}>
              Выберите клиента
            </option>,
            ...opts,
          ]);
        });
    }

    fetchUsers();
  }, []);
  return (
    <div className="relative px-16 py-4 flxcol bg-white border-2 border-solid border-[#2a72f8] rounded-md">
      <h1 className="font-bold text-xl">Снять сумму со счета</h1>
      <div className="flxcol w-full my-2">
        <label className="mb-1">Клиент</label>
        <select
          className="input-def"
          value={formData.user}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, user: e.target.value }))
          }
        >
          {options}
        </select>
      </div>
      <div className="flxcol w-full my-2">
        <label className="mb-1">Сумма (в рублях)</label>
        <input
          type="number"
          value={formData.amount}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, amount: e.target.value }))
          }
          className="input-def"
        />
      </div>
      <button
        className=" bg-[#2a72f8] rounded-md shadow-md py-2 mt-4 text-white"
        onClick={() => {
          removeFundsRequest(formData);
          closeHandler(null);
        }}
      >
        Начислить
      </button>
    </div>
  );
};

export default RemoveFunds;
