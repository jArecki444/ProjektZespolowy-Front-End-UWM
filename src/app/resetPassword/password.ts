export class Password {
    constructor(
        public userId: string,
        public code: string,
        public password: string,
        public confirmPassword: string
    ) {}
}
