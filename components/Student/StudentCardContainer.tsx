import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import Jumbotron from "../Jumbotron";
import StudentCard from "./StudentCard";
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
                className={"d-flex flex-column align-items-center"}
            >
                <Spinner animation={"grow"} variant={"sizzlingRed"} style={{width: "40px", height: "40px"}}/>
                <h3 className={"mt-4"}>Fetching Students...</h3>
            </Jumbotron>
        );
    }

    return (
        <Jumbotron
            className={"d-flex flex-row flex-wrap justify-content-center bg-oceanGreen"}
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