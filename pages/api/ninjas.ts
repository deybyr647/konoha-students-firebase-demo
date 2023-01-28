// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from "../../components/admin/FirebaseConfig";
import { NinjaProps } from "../../components/admin/Ninja";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  const ninjasRef = db.collection("ninjas");

  if (method === "GET") {
    const outList = [];

    try {
      let allNinjas = await ninjasRef.get();

      for (const ninja of allNinjas.docs) {
        outList.push({ ...ninja.data(), uid: ninja.id });
      }

      res.status(200).json(outList);
    } catch (err) {
      res.status(500).send({ message: "GET Request Failed", error: err });
    }
  }

  if (method === "PUT") {
    const { uid } = body;

    const modifiedninjaData: NinjaProps = {
      clan: body.clan,
      name: body.name,
      age: body.age,
      image: body.image
    }

    try {
      await ninjasRef.doc(uid).set(modifiedninjaData);
      console.log(`Updated ninja "${body.name}" successfully`);
      res.status(200).send({ message: "PUT Request Succeeded" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "PUT Request Failed", error: err });
    }
  }

  if (method === "POST") {
    const newNinjaData: NinjaProps = {
      clan: body.clan,
      name: body.name,
      age: body.age,
      image: body.image
    }

    try {
      await ninjasRef.add(newNinjaData);
      console.log(`Added ninja "${body.name}" successfully`);
      res.status(200).send({ message: "POST Request Succeeded" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "POST Request Failed", error: err });
    }
  }

  if (method === "DELETE") {
    const { uid } = body;

    try {
      await ninjasRef.doc(uid).delete();
      console.log(`Deleted ninja "${body.name}" successfully`);
      res.status(200).send({ message: "DELETE Request Succeeded" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "DELETE Request Failed", error: err });
    }
  }
}

export default handler;