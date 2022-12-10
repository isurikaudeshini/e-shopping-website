// const fs = require('fs');
import fs  from 'fs';

// Define a function to export to app.js
export const resHandler =  (req, res, next) => {
    fs.readFile('my-page.html', 'utf8', (err, data) => {
      res.send(data);
    });
  }

// exporting
//   module.exports = resHandler;

// export default resHandler; 