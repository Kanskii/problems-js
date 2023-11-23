function printAsyncNumbers(n: number): Promise<void> {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  
    const printNumber = async (num: number) => {
      await delay(num * 1000);
      console.log(`after ${num} sec - ${num}`);
    };
  
    const printNumberPromises = Array.from({ length: n }, (_, i) => printNumber(i));
  
    return Promise.all(printNumberPromises).then(() => {});
  }
  
  export default printAsyncNumbers;
