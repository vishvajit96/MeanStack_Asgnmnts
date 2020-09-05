
// This is by using Sync (readFileSync).
//It is Asynchronous and Blocking.
//means it blocks the next line still current line gets executed.
//This is simple , but not an appropriate or good practise. NOT USEFULL.

const fs = require("fs");

let readwithException = () => {

    try {
        const filepath = "/home/vishvajit/Desktop/nodejs/day7/temp.txt";
        const filedata = fs.readFileSync(filepath, { encoding: "utf-8" });

        console.log(filedata);

    }
    catch (error) {
        console.log("Errorr occurs", error.message);
    }

}

readwithException();