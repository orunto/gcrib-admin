import './Edit.css';

var today = new Date(),
date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
function Add() {
  return (
    <div className='App-PopUp' id='addPop'>
        <h2>Add Post</h2>
        <input className='fillform' id='posttitle' type='text' placeholder='Title' />
        <input className='fillform' id='posturl' placeholder='URL' />
        <input className='fillform' id='postdate' type='date' placeholder={date} />
        <span id='cancel' onClick={disappear}>Cancel</span>
        <span id='editspan'>Post</span>
    </div>
  );
}

function disappear () {
  var addPop = document.querySelector('addPop');
  addPop.style.display= "none";
}
export default Add;
