interface CreateUserData {
    name?: string,
    email: string,
    password: string
    techs?: Array<UserTechs | string>
}

interface UserTechs {
    tech: string,
    experience: number
}

export function createUser({ name, email, password, techs }: CreateUserData) {
    return {
        name,
        email,
        password,
        techs
    }
}