import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

//import { ISong } from "./spotify";
import Jumbotron from "../Jumbotron";
import StudentCard from "./StudentCard";
import styles from "../../styles/Home.module.scss";
import { StudentProps } from "../admin/Student";

const StudentCardContainer = () => {
    const [students, setStudents] = useState([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const req = await fetch("/api/students");
            const data = await req.json();

            setStudents(data);
            setIsLoaded(true);
        })();
    }, []);

    if (!isLoaded) {
        return (
            <Jumbotron
                className={`d-flex align-items-center justify-content-between bg-onyx text-platinum`}
            >
                <h3 className={"m-0 p-0"}>Fetching Students...</h3>
                <Spinner animation={"grow"} variant={"medpurple"} />
            </Jumbotron>
        );
    }

    return (
        <Jumbotron
            className={`d-flex flex-row flex-wrap justify-content-center bg-onyx`}
        >
            {students.map((student: StudentProps) => (
                <StudentCard
                    cohort={student.cohort}
                    name={student.name}
                    age={student.age}
                    image={student.image}
                    key={student.uid}
                    uid={student.uid}
                />
            ))}
        </Jumbotron>
    );
};

export default StudentCardContainer;