const cluster = require('cluster');
const fs = require("fs"); //Load the filesystem module

if(cluster.isMaster){
    //master mode
    console.log('111');
    cluster.fork();
} else{
    console.log('122221');
//child mode
const express = require('express');
const app = express();

function doWork(duration){
    console.log('hghgf')
    const start = Date.now();
    while((Date.now() - start) < duration) {
        console.log('fjjj')
    }
}

app.get('/', (req, res) => {
   let myarray = [];
   myarray.push('./myfile.txt')
   console.log(myarray[0])
const stats = fs.statSync(myarray[0]);
const fileSizeInBytes = stats.size;
//Convert the file size to megabytes (optional)
const fileSizeInMegabytes = fileSizeInBytes / 1000000.0;
console.log(fileSizeInBytes)
    res.send('hi there');
});

app.get('/fast', (req, res) => {
    res.send('am fast')
})

app.listen(3000);
};