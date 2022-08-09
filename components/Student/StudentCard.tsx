import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
//import { ISong } from "./spotify";
import styles from "../../styles/Home.module.scss";

const StudentCard = () => {
    return (
        <Card
            className={`bg-platinum text-onyx mb-3 border-medpurple`}
        >
            <Image
                className={"card-img-top rounded ps-3 pe-3 pt-3"}
                src={"/images/unknown.png"}
                alt={"Student"}
            />

            <Card.Body>
                <Card.Title className={"mb-3 text-center"}>
                    <a
                        href={""}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        className={""}
                        title={`First Last`}
                    >
                        First Last
                    </a>
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default StudentCard;