const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "test@email6.ru" },
    update: {},
    create: {
      email: "test@email6.ru",
      balance: 0,
      debt: 0,
      fio: "Негиматжанов Марат Ромилевич",
      passport: 12332,
      phone: "+7999712712",
      image: null,
    },
  });
  await prisma.user.upsert({
    where: { email: "test@email7.ru" },
    update: {},
    create: {
      email: "test@email7.ru",
      balance: 0,
      debt: 0,
      fio: "Байден Джо Обамович",
      passport: 1334123,
      phone: "+71231231233",
      image: null,
    },
  });
  await prisma.user.upsert({
    where: { email: "test@email8.ru" },
    update: {},
    create: {
      email: "test@email8.ru",
      balance: 0,
      debt: 0,
      fio: "Красных Артем Алекович",
      passport: 3234123,
      phone: "+71231231233",
      image: null,
    },
  });
  await prisma.user.upsert({
    where: { email: "test@email9.ru" },
    update: {},
    create: {
      email: "test@email9.ru",
      balance: 1000000,
      debt: 0,
      fio: "Цурюпа Илья Староста",
      passport: 4234123,
      phone: "+71231231233",
      image: null,
    },
  });
  await prisma.user.upsert({
    where: { email: "test@email10.ru" },
    update: {},
    create: {
      email: "test@email10.ru",
      balance: 0,
      debt: 0,
      fio: "Прокофьева Нина Николаевна",
      passport: 5234123,
      phone: "+71231231233",
      image: null,
    },
  });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
