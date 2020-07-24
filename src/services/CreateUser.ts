interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs?: Array<UserTechs | string>;
}

interface UserTechs {
    tech: string;
    experience: number;
}

interface BasicTypes {
    isAtivo: boolean,
    idade: number,
    location: string
}

interface GenericTypes {
    lista: Array<any>
}

/** Tuples, quando se sabe quantos elementos e quais tipos terão o array */
interface Tuples {
    list: [string, boolean]
}

/** Enums - Nomear conjunto de valores */
enum Techs {
    React,
    Angular,
    Vue
}

interface DynamicProperties {
    name: string;
    [propName: string]: string;
}

export default function createUser({ name, email, password, techs }: CreateUserData) {
    return {
        name,
        email,
        password,
        techs
    }
}

export function overKillConsoleLog(arg1: string, arg2: string): void {
    console.log(arg1, arg2);
}

export function returnAnotherCallBackExample(callback: (arg: number) => string): string {
    return callback(9)
}

/** Implements */

interface BalanceInterface {
    increment(income: number): void;
    decrement(outcome: number): void;
}

class Balance implements BalanceInterface {
    private balance: number;

    constructor() {
        this.balance = 0;
    }

    increment(income: number): void {
        this.balance += income;
    }

    decrement(outcome: number): void {
        this.balance -= outcome;
    }
}

/** Extends */

interface Aircraft {
    speed: number;
}

interface Fighter extends Aircraft {
    hasMissiles: boolean;
    missiles?: number;
}

/**
 * Pick<T, K>
 * Utilizado quando queremos pegar apenas algumas propriedades (K) de uma outra interface (T). Exemplo:
 */

interface Video {
    title: string;
    description: string;
    fps: number;
    duration: number;
}

type Image = Pick<Video, 'title' | 'description'>;

const picture: Image = {
    title: 'Profile',
    description: "Picture taken for my driver's license",
};

/**
 * Omit<T, K>
 * Utilizando quando queremos excluir apenas algumas propriedades (K) de uma outra interface (T). Exemplo:
 */

interface Video {
    title: string;
    description: string;
		fps: number;
    duration: number;
}

type Img = Omit<Video, 'fps' | 'duration'>;

const figure: Img = {
    title: 'Profile',
    description: "Picture taken for my driver's license",
};