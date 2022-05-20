import './Edit.css';
function Log() {
  return (
    <div className='App-PopUp' id='logPop'>
        <h2>Log In</h2>
        <input className='fillform' id='posttitle' placeholder='Username' />
        <input className='fillform' id='posturl' placeholder='Password' />
        <span id='editspan'>Log In</span>
    </div>
  );
}
export default Log;
