export interface User {
    id: number;
    name: string;
    password: string;
}

export interface Question {
    id: number;
    userId: number;
    creationDate: Date;
    title: string;
    message: string;
}

export interface Answer {
    id: number;
    questionId: number;
    userId: number;
    creationDate: Date;
    message: string;
}
