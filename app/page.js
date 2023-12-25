"use client";

import AddFunds from "@/components/AddFunds";
import Card from "@/components/Card";
import NewCredit from "@/components/NewCredit";
import PopUpWrapper from "@/components/PopUpWrapper";
import UserAdd from "@/components/UserAdd";
import UserUpdate from "@/components/UserUpdate";
import { useState } from "react";
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaUserGear,
  FaUserPlus,
} from "react-icons/fa6";

export default function Home() {
  const [currentModal, setCurrentModal] = useState(null);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-4 my-4">
      <Card
        text="Изменить клиента"
        subtext={"Изменить личные данные клмента"}
        popupHandler={() =>
          setCurrentModal(<UserUpdate closeHandler={setCurrentModal} />)
        }
      >
        <FaUserGear size={40} className="mb-8" />
      </Card>
      <Card
        text="Новый клиент"
        subtext="Создать нового клиента"
        popupHandler={() =>
          setCurrentModal(<UserAdd closeHandler={setCurrentModal} />)
        }
      >
        <FaUserPlus size={40} className="mb-8" />
      </Card>
      <Card
        text="Начислить деньги"
        subtext="Начислить сумму денег пользователю"
        popupHandler={() =>
          setCurrentModal(<AddFunds closeHandler={setCurrentModal} />)
        }
      >
        <FaMoneyBillWave size={40} className="mb-8" />
      </Card>
      <Card
        text="Оформить кредит"
        subtext="Оформить кредит для клиента"
        popupHandler={() =>
          setCurrentModal(<NewCredit closeHandler={setCurrentModal} />)
        }
      >
        <FaCreditCard size={40} className="mb-8" />
      </Card>
      {currentModal && (
        <PopUpWrapper controll={setCurrentModal}>{currentModal}</PopUpWrapper>
      )}
    </main>
  );
}
