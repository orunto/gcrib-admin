import './header.css';
import Add from './Add.svg';
import Delete from './Delete.svg';

function Header() {
  return (
      <header className="App-header">
        <h1>Admin Dashboard</h1>
        <h3>Hello, Fortune!</h3>
        <span id="add" onClick={appear}><img src={Add} alt="Plus"/> Add Post</span>
        <span id="delete" onClick={hold}><img src={Delete} alt="Bin"/> Delete Post(s)</span>
        <a href="https://bbbm.bm">Log out</a>
      </header>
  );
}



function appear () {
    var addPop = document.querySelector('editPop');
    addPop.style.display= "block";
}

function hold () {
  var addPop = document.querySelector('editPop');
  addPop.style.display= "block";
}

export default Header;
