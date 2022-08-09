import { useState } from 'react';
import { useRouter } from "next/router";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { addStudent } from "../admin/Util";
import { StudentProps } from "../admin/Student";

const ModalForm = () => {
    const router = useRouter();

    const [show, setShow] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [cohort, setCohort] = useState<string>("");

    const handleClose = () => {
        setName("");
        setImage("");
        setAge("");
        setCohort("");
        setShow(false);
    }

    const handleShow = () => setShow(true);

    //@ts-ignore
    const formChangeHandler = (e) => {
        e.preventDefault();
        const { id, value } = e.currentTarget;

        if (id == "name") setName(value);
        else if (id == "cohort") setCohort(value);
        else if (id == "age") setAge(value);
        else if (id == "image") setImage(value);
    };

    //@ts-ignore
    const submitHandler = (e) => {
        e.preventDefault();

        const studentData: StudentProps = {
            cohort: cohort,
            name: name,
            age: parseInt(age),
            image: image
        };


        (async ()=> {
            const newStudent = await addStudent("/api/students", studentData);
            console.log(newStudent.status)
        })();

        handleClose();
        router.reload();
    }

    return (
        <>
            <Button variant={"ceruleanFrost"} onClick={handleShow} className={"mr-5"}>
                Add Student
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className={"mb-3"} controlId={"name"}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={name}
                                onChange={formChangeHandler}
                                placeholder={"John Doe"}
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

                        <Form.Group className={"mb-3"} controlId={"cohort"}>
                            <Form.Label>Cohort</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={cohort}
                                onChange={formChangeHandler}
                                placeholder={"MLB-HTML"}
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
                        Save Student
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalForm;