export class Email {
    private pAddress: string;

    get address(): string {
        return this.pAddress;
    }

    constructor(address: string) {
        if (this.isInvalidAddress(address)) {
            throw new Error("Invalid email address");
        } else {
            this.pAddress = address.toLowerCase();
        }
    }

    isInvalidAddress = (address: string): boolean => {
        const validEmailRegex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return !validEmailRegex.test(address);
    };
}
