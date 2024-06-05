const fspromise= require('fs').promises;
const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs=require('fs')

const logDir = path.join(__dirname, 'Logs');
const logEvents=async(message)=>{
    if(!fs.existsSync(logDir)){
        await fspromise.mkdir(logDir)
    }
    const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;
    console.log(logItem);
    try{
        await fspromise.appendFile(path.join(logDir, 'eventLogs.txt'), logItem);


    }catch(err){
        console.log(err.message)
    }

}


module.exports = logEvents;
