export interface FieldType {
    email?: string,
    password?: string
}

export interface CustomError {
    message: string;
    response?: {
        status: number;
    };
}
