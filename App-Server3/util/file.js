const fs = require('fs');

const deleteFile = (filePath) => {
    fs.unlink(filePath,(err) => {   //unlink => deletes the file and the path
        if (err) {
            throw (err);
        }
    });
}

exports.deleteFile = deleteFile;