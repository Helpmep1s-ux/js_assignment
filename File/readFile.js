const fs = require('fs').promises;

async function readFiles(path){
    try{
        const data = await fs.readFile(path)
        console.log(data.toString());
    }
    catch(error){
        console.log(error);
    }
}

readFiles("myFirstFile.txt");