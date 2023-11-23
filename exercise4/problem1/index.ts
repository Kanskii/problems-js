class Person {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    compareAge(otherPerson: Person): string {
      if (this.age < otherPerson.age) {
        return `${otherPerson.getName()} is older than me.`;
      } else if (this.age > otherPerson.age) {
        return `${otherPerson.getName()} is younger than me.`;
      } else {
        return `${otherPerson.getName()} is the same age as me.`;
      }
    }
  
    getName(): string {
      return this.name;
    }
  }
  
  export default Person;
  
