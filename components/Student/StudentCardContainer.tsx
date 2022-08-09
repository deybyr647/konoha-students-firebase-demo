import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

//import { ISong } from "./spotify";
import Jumbotron from "../Jumbotron";
import StudentCard from "./StudentCard";
import styles from "../../styles/Home.module.scss";

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
            {/*{songs.map((s: ISong) => (
                <SongCard
                    previewURL={s.previewURL}
                    name={s.name}
                    image={s.image}
                    spotifyURL={s.spotifyURL}
                    key={s.id}
                />
            ))}*/}

            <StudentCard cohort={"Medidata-JS"} age={16} name={"Rasul Mohammad"} image={"/images/unknown.png"} uid={"0"}/>
            <StudentCard cohort={"Medidata-JS"} age={16} name={"Rasul Mohammad"} image={"/images/unknown.png"} uid={"0"}/>
            <StudentCard cohort={"Medidata-JS"} age={16} name={"Rasul Mohammad"} image={"/images/unknown.png"} uid={"0"}/>
            <StudentCard cohort={"Medidata-JS"} age={16} name={"Rasul Mohammad"} image={"/images/unknown.png"} uid={"0"}/>
            <StudentCard cohort={"Medidata-JS"} age={16} name={"Rasul Mohammad"} image={"/images/unknown.png"} uid={"0"}/>
            <StudentCard cohort={"Medidata-JS"} age={16} name={"Rasul Mohammad"} image={"/images/unknown.png"} uid={"0"}/>
            <StudentCard cohort={"Medidata-JS"} age={16} name={"Rasul Mohammad"} image={"/images/unknown.png"} uid={"0"}/>
            <StudentCard cohort={"Medidata-JS"} age={16} name={"Rasul Mohammad"} image={"/images/unknown.png"} uid={"0"}/>
            <StudentCard cohort={"Medidata-JS"} age={16} name={"Rasul Mohammad"} image={"/images/unknown.png"} uid={"0"}/>
            <StudentCard cohort={"Medidata-JS"} age={16} name={"Rasul Mohammad"} image={"/images/unknown.png"} uid={"0"}/>
        </Jumbotron>
    );
};

export default StudentCardContainer;