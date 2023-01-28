import { useState } from 'react';
import { useRouter } from "next/router";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { addNinja } from "../admin/Util";
import { NinjaProps } from "../admin/Ninja";

const ModalForm = () => {
    const router = useRouter();

    const [show, setShow] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [clan, setClan] = useState<string>("");

    const handleClose = () => {
        setName("");
        setImage("");
        setAge("");
        setClan("");
        setShow(false);
    }

    const handleShow = () => setShow(true);

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
            clan: clan,
            name: name,
            age: parseInt(age),
            image: image
        };


        (async ()=> {
            await addNinja("/api/ninjas", ninjaData);
        })();

        handleClose();
        router.reload();
    }

    return (
        <>
            <Button variant={"ceruleanFrost"} onClick={handleShow} className={"mr-5"}>
                Add Ninja
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Ninja</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className={"mb-3"} controlId={"name"}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={name}
                                onChange={formChangeHandler}
                                placeholder={"Sakumo Hatake"}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"} controlId={"age"}>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type={"number"}
                                value={age}
                                onChange={formChangeHandler}
                                placeholder={"18"}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"} controlId={"clan"}>
                            <Form.Label>Clan</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={clan}
                                onChange={formChangeHandler}
                                placeholder={"Hyuga"}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"} controlId={"image"}>
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={image}
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