const fs = require('fs');

function countStudents(path) {
  let content;

  try {
    content = fs.readFileSync(path);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  content = content.toString().split('\n');

  let students = content.filter((item) => item);
