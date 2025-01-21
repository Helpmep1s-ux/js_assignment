const fs = require('fs').promises;

async function openFile(){
    try{
        await fs.writeFile("myFirstFile.txt","My first file content")
    }
    catch(error){
        console.log(error);
    }
}

openFile();