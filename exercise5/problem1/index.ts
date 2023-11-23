function callbackExec(func: () => void): void {
    setTimeout(func, 2000); // Execute the provided function after 2 seconds (2000 milliseconds)
}

function displayHello() {
    console.log('Hello');
}

callbackExec(displayHello); // This will call displayHello after 2 seconds


export default callbackExec;
