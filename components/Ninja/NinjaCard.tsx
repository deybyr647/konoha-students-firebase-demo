import { useRouter } from "next/router";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import UpdateNinjaForm from "./UpdateNinjaForm";
import {deleteNinja} from "../admin/Util";
import { NinjaProps } from "../admin/Ninja";

const NinjaCard = ({ uid, clan, name, image, age }: NinjaProps) => {
    const router = useRouter();

    //@ts-ignore
    const deleteHandler = (e) => {
        e.preventDefault();

        (async () => {
            const ninjaData: NinjaProps = {
                name: name,
                image: image,
                clan: clan,
                age: age,
                uid: uid
            }
            await deleteNinja("/api/ninja", ninjaData);
        })();

        router.reload();
    }

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
                    <Card.Text>Clan: {clan}</Card.Text>
                    <Card.Text>Age: {age}</Card.Text>
                </Container>

                <Container className={"d-flex flex-row justify-content-between mt-4"}>
                    <Button variant={"sizzlingRed"} onClick={deleteHandler}>Delete Ninja</Button>
                    <UpdateNinjaForm clan={clan} name={name} age={age} image={image} uid={uid}/>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default NinjaCard;