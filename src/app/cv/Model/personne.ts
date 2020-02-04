export class Personne {
  id: number;
  name: string;
  firstname: string;
  Age: number;
  Cin: number;
  Job: string;
  path: string;
  constructor(
    id: number = 0,
    name: string = '',
    firstname: string = '',
    Age: number = 0,
    Cin: number = 0,
    Job: string = '',
    path: string = '') {
          this.id = id;
          this.name = name;
          this.firstname = firstname;
          this.Age = Age;
          this.Cin = Cin;
          this.Job = Job;
          this.path = path;
  }
}
