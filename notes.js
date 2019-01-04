console.log('Starting notes.js');
var addNote = function(){
  console.log('Adding note', title, body);
};
var getAll = () => {
  console.log('Getting all notes');
};
var getNote = (title) => {
  console.log('Getting note', title);
};
var removeNote = (title) => {
  console.log('Removing note', title);
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
