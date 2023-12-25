import prisma from "@/prisma/client";

export default async function hander(req, res) {
  if (req.method === "GET") {
    try {
      if (req.query.id) {
        const uid = Number(req.query.id);

        const user = await prisma.user.findUnique({
          where: {
            id: uid,
          },
        });

        return res.status(200).json(user);
      }

      const users = await prisma.user.findMany({});
      return res.status(200).json(users);
    } catch (e) {
      return res.status(500).json({ message: "Error in api" });
    }
  } else if (req.method === "PUT") {
    try {
      if (req.query.process === "uu") {
        const { user, email, fio, phone } = req.body;
        const data = await prisma.user.update({
          where: {
            id: Number(user),
          },
          data: {
            email: String(email),
            fio: String(fio),
            phone: String(phone),
          },
        });
        return res.status(200).json(data);
      } else if (req.query.process === "af") {
        const { user, amount } = req.body;

        const userData = await prisma.user.findUnique({
          where: {
            id: Number(user),
          },
        });

        const newValue = userData.balance + Number(amount);

        const data = await prisma.user.update({
          where: {
            id: Number(user),
          },
          data: {
            balance: newValue,
          },
        });

        return res.status(200).json(data);
      } else if (req.query.process === "nc") {
        const { user, amount } = req.body;

        const userData = await prisma.user.findUnique({
          where: {
            id: Number(user),
          },
        });

        const newValue = userData.balance + Number(amount);
        const newDebt = userData.debt - Number(amount);

        const data = await prisma.user.update({
          where: {
            id: Number(user),
          },
          data: {
            balance: newValue,
            debt: newDebt,
          },
        });

        return res.status(200).json(data);
      }
    } catch (e) {
      return res.status(500).json({ message: "Error in api" });
    }
  } else if (req.method === "POST") {
    try {
      const { email, fio, phone, passport } = req.body;
      console.log(email, fio, phone, passport);

      const data = await prisma.user.upsert({
        where: {
          email: String(email),
        },
        update: {},
        create: {
          fio: String(fio),
          phone: String(phone),
          passport: Number(passport),
          email: String(email),
          balance: 0,
          debt: 0,
        },
      });

      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: "create user error" });
    }
  }
  return res.status(400).json({ message: "Unallowed method" });
}
