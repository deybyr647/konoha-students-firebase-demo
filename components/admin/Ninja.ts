//Interface for Student objects
interface NinjaProps {
    uid?: string;
    clan: string;
    name: string;
    age: number;
    image: string;
}

//Class for Creating Students
class Ninja {
    name: string;
    age: number;
    clan: string;
    image: string;

    constructor(name: string, age: number, cohort: string, image: string) {
        this.name = name;
        this.age = age;
        this.clan = cohort;
        this.image = image;
    }

    static toFirestore(user: Ninja): NinjaProps {
        return {
            name: user.name,
            age: user.age,
            clan: user.clan,
            image: user.image
        }
    }
}

export { Ninja };
export type { NinjaProps };
