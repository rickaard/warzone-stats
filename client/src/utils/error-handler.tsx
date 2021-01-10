export class CustomError extends Error {
    constructor(msg: string) {
        super();
        this.message = msg;
        this.name  = 'CustomError';
    }
}