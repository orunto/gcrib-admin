import './Edit.css';
import Edit from './Edit.svg';

function Hold() {
  return (
    <div className='App-PopUp' id='holdPop'>
        <h2>Hold On!</h2>
        <span id='think'>Are you sure you want to delete this post?</span>
        <span id='instead'><img src={Edit} alt='edit' />Edit Instead</span>
        <span id='cancel' onClick={disappear}>Cancel</span>
        <span id='editspan'>Delete</span>
    </div>
  );
}

function disappear () {
    var addPop = document.querySelector('editPop');
    addPop.style.display= "none";
}
export default Hold;
