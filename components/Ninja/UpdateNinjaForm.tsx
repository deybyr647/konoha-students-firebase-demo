import {useEffect, useState} from 'react';
import { useRouter } from "next/router";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { updateNinja } from "../admin/Util";
import { NinjaProps } from "../admin/Ninja";

const ModalForm = ({ name, image, clan, age, uid }: NinjaProps) => {
    const router = useRouter();

    const [show, setShow] = useState<boolean>(false);
    const [ninjaName, setName] = useState<string>("");
    const [ninjaImage, setImage] = useState<string>("");
    const [ninjaAge, setAge] = useState<string>("");
    const [ninjaClan, setClan] = useState<string>("");

    const handleClose = () => {
        setName("");
        setImage("");
        setAge("");
        setClan("");
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    //@ts-ignore
    const formChangeHandler = (e) => {
        e.preventDefault();
        const { id, value } = e.currentTarget;

        if (id == "name") setName(value);
        else if (id == "clan") setClan(value);
        else if (id == "age") setAge(value);
        else if (id == "image") setImage(value);
    };

    //@ts-ignore
    const submitHandler = (e) => {
        e.preventDefault();

        const ninjaData: NinjaProps = {
            clan: ninjaClan,
            name: ninjaName,
            age: parseInt(ninjaAge),
            image: ninjaImage,
            uid: uid
        };


        (async ()=> {
            await updateNinja("/api/ninjas", ninjaData);
        })();

        handleClose();
        router.reload();
    }

    useEffect(() => {
        setName(name);
        setImage(image);
        setAge(`${age}`);
        setClan(clan);
    }, [name, image, age, clan])

    return (
        <>
            <Button variant={"ceruleanFrost"} onClick={handleShow} className={"mr-5"}>
                Edit Ninja
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Ninja</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className={"mb-3"} controlId={"name"}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={ninjaName}
                                onChange={formChangeHandler}
                                placeholder={"Sakumo Hatake"}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"} controlId={"age"}>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type={"number"}
                                value={ninjaAge}
                                onChange={formChangeHandler}
                                placeholder={"18"}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"} controlId={"clan"}>
                            <Form.Label>Clan</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={ninjaClan}
                                onChange={formChangeHandler}
                                placeholder={"Hyuga"}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"} controlId={"image"}>
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={ninjaImage}
                                onChange={formChangeHandler}
                                placeholder={"https://i.imgur.com/Mdw2mMo.png"}
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"spaceCadet"} onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant={"oceanGreen"} onClick={submitHandler}>
                        Save Ninja
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalForm;