//console.log(path.join( 'C:/Dev-Cpp/laikipia/git assignments/teachtasks', 'starter.txt'))
const fs = require('fs');
const fsPromise = fs.promises;
const path = require('path');

const filesOps = async() => {
  try {
    const data = await fsPromise.readFile(path.join(__dirname, 'starter.txt'), {encoding: 'utf8'});
    console.log('File read successfully:', data);

    const newFilePath = path.join(__dirname,  'newtext.txt');
    await fsPromise.writeFile(newFilePath, data);
    console.log('File written successfully');

    const appendData = '\nAppended data.';
    await fsPromise.appendFile(newFilePath, appendData);
    console.log('Data appended successfully');

    const renamedFilePath = path.join(__dirname, 'files', 'renamedtext.txt');
    await fsPromise.rename(newFilePath, renamedFilePath);
    console.log('File renamed successfully');
  } catch (error) {
    console.error('Error:', error);
  }
};

filesOps();
