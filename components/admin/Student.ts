//Interface for Student objects
interface StudentProps {
    uid?: string;
    cohort: string;
    name: string;
    age: number;
    image: string;
}

//Class for Creating Students
class Student {
    name: string;
    age: number;
    cohort: string;
    image: string;

    constructor(name: string, age: number, cohort: string, image: string) {
        this.name = name;
        this.age = age;
        this.cohort = cohort;
        this.image = image;
    }

    static toFirestore(user: Student): StudentProps {
        return {
            name: user.name,
            age: user.age,
            cohort: user.cohort,
            image: user.image
        }
    }
}

export { Student };
export type { StudentProps };
