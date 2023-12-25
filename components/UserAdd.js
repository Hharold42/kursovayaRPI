"use client";

import axios from "axios";
import { useState } from "react";

const userAddRequest = async (data) => {
  const emailValid = await axios.get(
    `http://localhost:3000/api/checkEmail?email=${data.email}`
  );

  if (emailValid.data.valid) {
    await axios.post("http://localhost:3000/api/user", data).then((res) => {
      if (res.status === 200) alert("Успешно");
      else alert("Ошибка при попытке создания пользователя ");
    });
  }
};
const UserAdd = ({ closeHandler = () => {} }) => {
  const [formData, setFormData] = useState({
    fio: "",
    email: "",
    phone: "",
    passport: "",
  });

  const isFormDataValid = () => {
    if (formData.fio && formData.email && formData.passport && formData.phone)
      return true;
    return false;
  };

  const changeHandler = (paramName) => (e) => {
    setFormData((prev) => ({ ...prev, [paramName]: e.target.value }));
  };

  return (
    <div className="relative px-16 py-4 flxcol bg-white border-2 border-solid border-[#2a72f8] rounded-md">
      <h1 className="font-bold text-xl">Новый клиент</h1>
      <div className="flxcol w-full my-2">
        <label className="mb-1">ФИО</label>
        <input
          type="text"
          className="input-def"
          value={formData.fio}
          onChange={changeHandler("fio")}
        />
      </div>
      <div className="flxcol w-full my-2">
        <label className="mb-1">Эл. почта</label>
        <input
          value={formData.email}
          onChange={changeHandler("email")}
          className="input-def"
        />
      </div>
      <div className="flxcol w-full my-2">
        <label className="mb-1">Номер телефона</label>
        <input
          value={formData.phone}
          onChange={changeHandler("phone")}
          className="input-def"
        />
      </div>
      <div className="flxcol w-full my-2">
        <label className="mb-1">Номер пасспорта</label>
        <input
          onChange={changeHandler("passport")}
          value={formData.passport}
          className="input-def"
        />
      </div>
      <button
        className=" bg-[#2a72f8] rounded-md shadow-md py-2 mt-4 text-white"
        onClick={() => {
          if (isFormDataValid) {
            userAddRequest(formData);
            closeHandler(null);
          } else {
            alert("Не все поля заполнены");
          }
        }}
      >
        Создать
      </button>
    </div>
  );
};

export default UserAdd;
