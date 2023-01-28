import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

import Jumbotron from "../Jumbotron";
import NinjaCard from "./NinjaCard";
import { NinjaProps } from "../admin/Ninja";

const NinjaCardContainer = () => {
    const [ninjas, setNinjas] = useState([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const req = await fetch("/api/ninjas");
            const data = await req.json();

            setNinjas(data);
            setIsLoaded(true);
        })();
    }, []);

    if (!isLoaded) {
        return (
            <Jumbotron
                className={"d-flex flex-column align-items-center"}
            >
                <Spinner animation={"grow"} variant={"sizzlingRed"} style={{width: "40px", height: "40px"}}/>
                <h3 className={"mt-4"}>Fetching Ninjas...</h3>
            </Jumbotron>
        );
    }

    return (
        <Jumbotron
            className={"d-flex flex-row flex-wrap justify-content-center bg-oceanGreen"}
        >
            {ninjas.map((ninja: NinjaProps) => (
                <NinjaCard
                    clan={ninja.clan}
                    name={ninja.name}
                    age={ninja.age}
                    image={ninja.image}
                    key={ninja.uid}
                    uid={ninja.uid}
                />
            ))}
        </Jumbotron>
    );
};

export default NinjaCardContainer;