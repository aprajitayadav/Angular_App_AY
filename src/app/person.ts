export class person {
  private Firstname: string;
  private Lastname: string;
  private Age: number;

  constructor(Firstname: string, Lastname: string, Age: number) {
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.Age = Age;
  }

  getFirstname(): string {
    return "Person's first name is : " + this.Firstname;
  }

  getLastname(): string {
    return "Person's last name is : " + this.Lastname;
  }

  setFirstname(Firstname: string): void {
    this.Firstname = Firstname;
  }

  setLastname(Lastname: string): void {
    this.Lastname = Lastname;
  }
  getAge(): number {
    return this.Age;
  }
  setAge(Age: number): void {
    this.Age = Age;
  }
}
