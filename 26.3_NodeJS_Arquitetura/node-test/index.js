const util = require('util');
const fs = require('fs');

const readVideoFromDisc = (fileName) => {
    const startTime = Date.now();
    const buf = fs.readFileSync(`/Users/berwa/Desktop/node-test/${fileName}`);
    const totalReadingTime = Date.now() - startTime;
  
    const stats = fs.statSync(`/Users/berwa/Desktop/node-test/${fileName}`);
    const fileSize = `${Math.round(stats.size/1000000)} mb`

    console.log("read disc", fileName);
    console.log(`Reading the file took ${totalReadingTime}ms`);
    console.log(`File size is ${fileSize}`);

    return buf;
  };

readVideoFromDisc("Map.svg" )
