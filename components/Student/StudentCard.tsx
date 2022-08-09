import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

import UpdateStudentForm from "./UpdateStudentForm";
import { StudentProps } from "../admin/Student";
import styles from "../../styles/Home.module.scss";


const StudentCard = ({ uid, cohort, name, image, age }: StudentProps) => {
    return (
        <Card
            className={`bg-platinum text-onyx m-3 border-medpurple`}
        >
            <Image
                className={"card-img-top rounded ps-3 pe-3 pt-3"}
                src={image}
                alt={name}
                width={400}
                height={400}
            />

            <Card.Body>
                <Card.Title className={"mb-3 text-center"}>
                    <a
                        href={""}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={""}
                        title={name}
                    >
                        {name}
                    </a>
                </Card.Title>

                <Container className={"d-flex flex-column"}>
                    <Card.Text>Cohort: {cohort}</Card.Text>
                    <Card.Text>Age: {age}</Card.Text>
                </Container>

                <Container className={"d-flex flex-row justify-content-between mt-4"}>
                    <Card.Link className={"btn btn-sizzlingRed"} href={`/student/${uid}`}>Delete Student</Card.Link>
                    <UpdateStudentForm cohort={cohort} name={name} age={age} image={image} uid={uid}/>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default StudentCard;