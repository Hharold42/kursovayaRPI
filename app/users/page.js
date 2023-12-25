"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState, useLayoutEffect } from "react";

const page = () => {
  const [users, setUsers] = useState([]);

  useLayoutEffect(() => {
    async function fetchUsers() {
      await axios
        .get("http://localhost:3000/api/user")
        .then((res) => res.data)
        .then((data) => {
          setUsers((prev) => data);
        });
    }

    fetchUsers();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center my-8">
        <span className=" text-[2.2rem] font-extrabold">
          Таблица пользователей
        </span>
      </div>
      <div>
        <table className="w-full border-2 border-solid border-black border-collapse">
          <thead>
            <tr className="user-table__row [&>*]:user-table__cell">
              <th>ID</th>
              <th>ФИО</th>
              <th>Номер телефона</th>
              <th>Почтовый адрес</th>
              <th>Баланс</th>
              <th>Сумма кредита</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user, index) => (
                <tr
                  key={index + "user"}
                  className="user-table__row [&>*]:user-table__cell"
                >
                  <td>{user.id}</td>
                  <td>
                    <Link href={`/users/${user.id}`}>{user.fio}</Link>
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.balance}</td>
                  <td>{user.debt}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
