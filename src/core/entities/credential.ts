import { Email } from "./email";

export class Credential {
  private privateEmail: Email;

  private privatePassword: string;

  constructor(email: string, password: string) {
    // if (this.isInvalid(password)) {
    //   throw new Error("Your password must contains only letter and numbers");
    // }

    this.privatePassword = password;
    this.privateEmail = new Email(email);
  }

  get email(): string {
    return this.privateEmail.address;
  }

  get password(): string {
    return this.privatePassword;
  }

  get rawEmail(): Email {
    return this.privateEmail;
  }

  isInvalid = (password: string): boolean => {
    const passwordRegex = /^.*(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return !passwordRegex.test(password);
  };
}
