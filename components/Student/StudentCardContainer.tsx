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
            const req = await fetch("/api/hello");
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
                <h3 className={"m-0 p-0"}>Fetching Music...</h3>
                <Spinner animation={"grow"} variant={"medpurple"} />
            </Jumbotron>
        );
    }

    return (
        <Jumbotron
            className={`d-flex flex-column align-items-center bg-onyx`}
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

            <StudentCard/>
        </Jumbotron>
    );
};

export default StudentCardContainer;