class Timer {
    private isRunning: boolean;
    private startTime: Date;
    private elapsedTime: number;

    constructor() {
        this.isRunning = false;
        this.elapsedTime = 0;
        this.startTime = new Date();
    }

    start(): void {
        if (!this.isRunning) {
            this.startTime = new Date();
            this.isRunning = true;
        }
    }

    pause(): void {
        if (this.isRunning) {
            const now = new Date();
            this.elapsedTime += now.getTime() - this.startTime.getTime();
            this.isRunning = false;
        }
    }

    reset(): void {
        this.elapsedTime = 0;
        this.isRunning = false;
    }

    log(): { h: number; m: number; s: number; ms: number } {
        const time = this.elapsedTime + (this.isRunning ? (new Date().getTime() - this.startTime.getTime()) : 0);

        const hours = Math.floor(time / 3600000);
        const minutes = Math.floor((time % 3600000) / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor(time % 1000);

        console.log(`{ h: ${hours}, m: ${minutes}, s: ${seconds}, ms: ${milliseconds} }`);
        return { h: hours, m: minutes, s: seconds, ms: milliseconds };
    }
}

// Testing the Timer class
const time = new Timer();
time.start();

setTimeout(() => {
    time.log(); // logs the time after 1 sec 234 ms
    time.pause();
    time.log(); // logs the paused time

    time.start();
    setTimeout(() => {
        time.log(); // logs the time after an additional 3 sec 221 ms
        time.reset();
        setTimeout(() => {
            time.log(); // logs the time after resetting (should be 0)
        }, 1000);
    }, 1987);
}, 1234);

export default Timer;
