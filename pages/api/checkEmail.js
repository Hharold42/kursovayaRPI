import prisma from "@/prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const email = req.query.email;
      const uid = req.query.uid;

      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (user) {
        if (uid && user.id === Number(uid)) {
          return res.status(200).json({ valid: true });
        }

        return res.status(200).json({ valid: false });
      }
      return res.status(200).json({ valid: true });
    } catch (error) {
      return res.status(500).json({ message: "api error" });
    }
  }

  return res.status(400).json({ message: "Invalid method" });
}
