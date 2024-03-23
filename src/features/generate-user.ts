import { User } from "@/types/types";
import { v4 as uuidv4 } from 'uuid';

const getRandomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomUser = (): User => {
    const names = ["Leanne", "Ervin", "Clementine", "Patricia", "Chelsey", "Dennis", "Kurtis"];
    const surnames = ["Graham", "Howell", "Bauch", "Lebsack", "Dietrich", "Schulist", "Weissnat"];

    return {
        id: uuidv4(),
        name: names[getRandomNumber(0, 6)],
        surname: surnames[getRandomNumber(0, 6)],
        age: getRandomNumber(18, 60),
        email: names[getRandomNumber(0, 6)] + "@gmail.com",
    }
}

export const getRandomUsers = (count: number): User[] => {
    const res = [];
    for (let i = 0; i < count; i++) {
        res.push(getRandomUser());
    }
    return res;
}

// иммитация api

type Response = {
    users: User[],
    next: number | null,
}

export const server = {
    getUsers(page: number) {
        const finished = page >= 1000;
        const next = finished ? null : page + 1

        return new Promise((resolve) => {
            setTimeout(() => {
                const res: Response = { users: getRandomUsers(30), next }
                resolve(res)
            }, 150)
        })
    },
}
