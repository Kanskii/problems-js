class Calculator {
    #initialValue:number;

    add(value:number){
        this.#initialValue+=value;
    }
    subtract(value:number){
        this.#initialValue-=value;
    }
    divide(value:number){
        this.#initialValue/=value;
    }
    multiply(value:number){
        this.#initialValue*=value;
    }

    logResult(){
        console.log(this.#initialValue);
    }

    
}

export default Calculator;
