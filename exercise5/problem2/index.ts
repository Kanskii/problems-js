function printNumberInInterval(num: number) { 
    let i: number = 1; 
    const timer = setInterval(() => { 
        if (i <= num) { 
            console.log(i); 
            i ++; 
        } else { 
            clearInterval(timer); 
        } 
    }, 1000) 
} 
 
export default printNumberInInterval;
