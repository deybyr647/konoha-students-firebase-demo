import {useEffect, useState} from 'react';
import { useRouter } from "next/router";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { updateStudent } from "../admin/Util";
import { StudentProps } from "../admin/Student";

const ModalForm = ({ name, image, cohort, age, uid }: StudentProps) => {
    const router = useRouter();

    const [show, setShow] = useState<boolean>(false);
    const [studentName, setName] = useState<string>("");
    const [studentImage, setImage] = useState<string>("");
    const [studentAge, setAge] = useState<string>("");
    const [studentCohort, setCohort] = useState<string>("");

    const handleClose = () => {
        setName("");
        setImage("");
        setAge("");
        setCohort("");
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
        else if (id == "cohort") setCohort(value);
        else if (id == "age") setAge(value);
        else if (id == "image") setImage(value);
    };

    //@ts-ignore
    const submitHandler = (e) => {
        e.preventDefault();

        const studentData: StudentProps = {
            cohort: studentCohort,
            name: studentName,
            age: parseInt(studentAge),
            image: studentImage,
            uid: uid
        };


        (async ()=> {
            await updateStudent("/api/students", studentData);
        })();

        handleClose();
        router.reload();
    }

    useEffect(() => {
        setName(name);
        setImage(image);
        setAge(`${age}`);
        setCohort(cohort);
    }, [name, image, age, cohort])

    return (
        <>
            <Button variant={"ceruleanFrost"} onClick={handleShow} className={"mr-5"}>
                Edit Student
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className={"mb-3"} controlId={"name"}>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={studentName}
                                onChange={formChangeHandler}
                                placeholder={"John Doe"}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"} controlId={"age"}>
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type={"number"}
                                value={studentAge}
                                onChange={formChangeHandler}
                                placeholder={"18"}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"} controlId={"cohort"}>
                            <Form.Label>Cohort</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={studentCohort}
                                onChange={formChangeHandler}
                                placeholder={"MLB-HTML"}
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className={"mb-3"} controlId={"image"}>
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control
                                type={"text"}
                                value={studentImage}
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