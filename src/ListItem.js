import './Body.css';
import Link from './Link.svg';
import Date from './Date.svg';
import Delete from './Delete.svg';
import Edit from './Edit.svg';
import Eye from './Eye.svg';
import Stats from './Stats.svg';

const item1link = "https://blablabla.com";

function Body() {
  return (
    <div>
        <input className="checkbox" type="checkbox" name="item1" value="item1" id="item1" />
        <label htmlFor="item1">Top 10 suit styles to fit the occasion</label>
        <img src={Link} alt='Link' title='Copy Link'/>
        <label className='url'>https://www.the-atlantic-pacific.com/2022/05/17/a-spring-green-edit/</label>
        <img src={Date} alt='Date' title='Date Posted'/>
        <label>22/05/22</label>
        <a href={item1link}>
            <img src={Eye} alt='View' title='View Post'/>
        </a> 
        <img id="delete" src={Delete} alt='Delete' title='Delete Post'/>
        <img src={Stats} alt='Stats' title='Article Stats'/>
        <img id="edit" src={Edit} alt='Edit' title='Edit Post'/>
    </div>
  );
}

export default Body;
