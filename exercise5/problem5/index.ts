function wait(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function logAsync() {
    await wait(1000);
    console.log("Passed 1 sec");
    await wait(2000);
    console.log("Passed 2 sec");
}

logAsync()

export default wait;
