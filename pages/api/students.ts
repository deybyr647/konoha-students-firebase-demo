// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import db from "../../components/admin/FirebaseConfig";
import { Student, StudentProps } from "../../components/admin/Student";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const { method, body } = req;
  const studentsRef = db.collection("students");

  if (method === "GET") {
    const outList = [];

    try {
      let allProjects = await studentsRef.get();

      for (const project of allProjects.docs) {
        outList.push({ ...project.data(), uid: project.id });
      }

      res.status(200).json(outList);
    } catch (err) {
      res.status(500).send({ message: "GET Request Failed", error: err });
    }
  }

  if (method === "PUT") {
    const { uid } = body;

    const modifiedStudentData: StudentProps = {
      cohort: body.cohort,
      name: body.name,
      age: body.age,
      image: body.image
    }

    try {
      await studentsRef.doc(uid).set(modifiedStudentData);
      console.log(`Updated student "${body.name}" successfully`);
      res.status(200).send({ message: "PUT Request Succeeded" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "PUT Request Failed", error: err });
    }
  }

  if (method === "POST") {
    const newStudentData: StudentProps = {
      cohort: body.cohort,
      name: body.name,
      age: body.age,
      image: body.image
    }

    try {
      await studentsRef.add(newStudentData);
      console.log(`Added student "${body.name}" successfully`);
      res.status(200).send({ message: "POST Request Succeeded" });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "POST Request Failed", error: err });
    }
  }

  res.status(200).json({ name: 'John Doe' })
}

export default handler;