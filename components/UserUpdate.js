"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const sendUpdateReq = async (data) => {
  const emailValid = await axios.get(
    `http://localhost:3000/api/checkEmail?email=${data.email}&uid=${data.user}`
  );

  if (emailValid.data.valid) {
    await axios
      .put("http://localhost:3000/api/user?process=uu", data)
      .then((res) => console.log(res));
  } else {
    alert("Данный почтовый адрес уже зарегестрирован");
  }
};

const UserUpdate = ({ closeHandler = () => {} }) => {
  const [options, setOptions] = useState([]);
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({
    user: -1,
    fio: "",
    email: "",
    phone: "",
  });

  const changeHandler = (paramName) => (e) => {
    e.preventDefault();

    if (paramName === "user") {
      const currUser = userData.filter((item) => item.id == e.target.value)[0];
      setFormData((prev) => ({
        ...prev,
        user: e.target.value,
        fio: currUser.fio,
        email: currUser.email,
        phone: currUser.phone,
      }));
    }

    setFormData((prev) => ({ ...prev, [paramName]: e.target.value }));
  };

  useEffect(() => {
    async function fetchUsers() {
      await axios
        .get("http://localhost:3000/api/user")
        .then((res) => res.data)
        .then((data) => {
          setUserData((prev) => data);
          const opts = data.map((item, index) => (
            <option value={item.id} key={index + "opt"}>
              {item.fio}
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
      <h1 className="font-bold text-xl">Редактировать клиента</h1>
      <div className="flxcol w-full my-2">
        <label className="mb-1">Клиент</label>
        <select
          className="input-def"
          value={formData.user}
          onChange={changeHandler("user")}
        >
          {options}
        </select>
      </div>
      <div className="flxcol w-full my-2">
        <label className="mb-1">ФИО</label>
        <input
          value={formData.fio}
          onChange={changeHandler("fio")}
          className="input-def"
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
          onChange={changeHandler("phone")}
          value={formData.phone}
          className="input-def"
        />
      </div>
      <button
        className=" bg-[#2a72f8] rounded-md shadow-md py-2 mt-4 text-white"
        onClick={() => {
          sendUpdateReq(formData);
          closeHandler(null);
        }}
      >
        Изменить
      </button>
    </div>
  );
};

export default UserUpdate;
