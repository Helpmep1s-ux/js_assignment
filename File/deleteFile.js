const fs = require('fs').promises;

async function deleteFile(path){
    try{
        await fs.unlink(path)
    }
    catch(error){
        console.log(error);
    }
}

deleteFile("myFirstFile.txt");