import './Edit.css';

const urlplace = "Top 10 suit styles to fit the occasion";
const linkplace = "https://www.the-atlantic-pacific.com/2022/05/17/a-spring-green-edit/";
const dateplace = "22/05/22";

function Edit() {
  return (
    <div className='App-PopUp' id='editPop'>
        <h2>Edit Post</h2>
        <input className='fillform' id='posttitle' value={urlplace} />
        <input className='fillform' id='posturl' value={linkplace} />
        <input className='fillform' id='postdate' placeholder={dateplace} readOnly title='Date Posted' />
        <span id='cancel' onClick={disappear}>Cancel</span>
        <span id='editspan'>Edit</span>
    </div>
  );
}

function disappear () {
    var addPop = document.querySelector('editPop');
    addPop.style.display= "none";
}
export default Edit;
