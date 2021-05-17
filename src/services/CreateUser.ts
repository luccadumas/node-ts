interface TechsData {
    title: string,
    experience: number,
}

interface CreateUserData {
    email: string,
    name: string,
    password: string,
    techs?: Array <string | TechsData> // string[]
}

export default function createUser({email, name, password} : CreateUserData){
    const user = {
        email, name, password
    }

    return user;
}