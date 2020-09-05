const fs = require("fs");
const Promise = require("bluebird");

Promise.promisifyAll(fs);

let read = async () => {

    const fp1 = "/home/vishvajit/Desktop/nodejs/day7/temp.txt";
    const mp1 = await fs.readFileAsync(fp1, { encoding: "utf-8" });
    console.log("temp", mp1);

    const fp2 = "/home/vishvajit/Desktop/nodejs/day7/temp1.txt";
    const mp2 = await fs.readFileAsync(fp2, { encoding: "utf-8" });
    console.log("temp1", mp2);

    const fp3 = "/home/vishvajit/Desktop/nodejs/day7/temp2.txt";
    const mp3 = await fs.readFileAsync(fp3, { encoding: "utf-8" });
    console.log("temp2", mp3);

}

read();


//Instead of using .then() and .catch() here we use async and await.
//This is installed by bluebird module.
//This will used for avoiding the nesting of callback function. which makes the programm complex
//Read about async and await