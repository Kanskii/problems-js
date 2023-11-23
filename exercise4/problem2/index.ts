class Name {
     firstName: string;
     lastName: string;
     fullName:string;
     initials:string;


  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }


    #formatName(name:string):{
      
    }


  //  getFirstName(): string {
  //     return this.firstName;
  //   }
  
  //   getLastName(): string {
  //     return this.lastName;
  //   }
  
  //   getFullName(): string {
  //     return `${this.firstName} ${this.lastName}`;
  //   }
  
  //   getInitials(): string {
  //     return `${this.firstName[0]}.${this.lastName[0]}.`;
  //   }


  }

    export default Name;
