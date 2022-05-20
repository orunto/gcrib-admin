import './Body.css';
import ListItem from './ListItem';



function Body() {
  return (
    <div className="App-body">
        <div className='topcheck' id='topcheck'>
            <input className="checkbox" type="checkbox" name="selectall" value="all" id="selectall" />
            <label htmlFor="selectall">Select All</label>
        </div>

        <div className='itemlist' onScroll={scrollshadow}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />

        </div>
    </div>
  );
}

function scrollshadow() {
    const topcheck = document.querySelector('.topcheck');
    const itemlist = document.querySelector('.itemlist');

    if (itemlist.scrollTop === 10) {
        topcheck.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.1)";    
    }

    else if (itemlist.scrollTop === 0) {
        topcheck.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0)";    
    }
}

export default Body;
