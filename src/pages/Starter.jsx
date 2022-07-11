import { AllContent, Content } from '../containers';

import { ReactComponent as DeleteIco } from '../images/delete.svg';
import { ReactComponent as ViewIco } from '../images/view.svg';
import { ReactComponent as EditIco } from '../images/edit.svg';

const Starter = () => {
    return (
        <AllContent id="blogcontent">
            <h1>All Starter Pack(s)</h1>
            <Content>
            <input type='checkbox' id="blog1" name="blog1"/>
            <label for="checkbox">Select All</label>
            <span><DeleteIco />Delete Pack(s)</span>
            </Content>
            
            <Content id="topbar">
            <span id="author" className="author">Author</span>
            <span id="title" className="title">Title</span>
            <span id="date" className="date">Date</span>
            <span id="datemod" className="datemod">Date Modified</span>
            <span id="views" className="views">Stats</span>
            </Content>

            <div className='ContentContainer'>
                <Content>
                <input type='checkbox' id="blog1" name="blog1"/>
                <label for="vehicle1">Fortune</label>
                <span id="title" className="title">Tech Bro Starter Pack</span>
                <span id="date" className="date">12/12/2022</span>
                <span id="datemod" className="datemod">N/A</span>
                <span id="views" className="views">400 Buys</span>
                <span id="viewbutton" className="viewbutton"><ViewIco />View</span>
                <span id="editbutton" className="editbutton"><EditIco />Edit</span>
                </Content>

                <Content>
                <input type='checkbox' id="blog1" name="blog1"/>
                <label for="vehicle1">Fortune</label>
                <span id="title" className="title">Tech Bro Starter Pack</span>
                <span id="date" className="date">12/12/2022</span>
                <span id="datemod" className="datemod">N/A</span>
                <span id="views" className="views">400 Buys</span>
                <span id="viewbutton" className="viewbutton"><ViewIco />View</span>
                <span id="editbutton" className="editbutton"><EditIco />Edit</span>
                </Content>

                <Content>
                <input type='checkbox' id="blog1" name="blog1"/>
                <label for="vehicle1">Fortune</label>
                <span id="title" className="title">Tech Bro Starter Pack</span>
                <span id="date" className="date">12/12/2022</span>
                <span id="datemod" className="datemod">N/A</span>
                <span id="views" className="views">400 Buys</span>
                <span id="viewbutton" className="viewbutton"><ViewIco />View</span>
                <span id="editbutton" className="editbutton"><EditIco />Edit</span>
                </Content>

                <Content>
                <input type='checkbox' id="blog1" name="blog1"/>
                <label for="vehicle1">Fortune</label>
                <span id="title" className="title">Tech Bro Starter Pack</span>
                <span id="date" className="date">12/12/2022</span>
                <span id="datemod" className="datemod">N/A</span>
                <span id="views" className="views">400 Buys</span>
                <span id="viewbutton" className="viewbutton"><ViewIco />View</span>
                <span id="editbutton" className="editbutton"><EditIco />Edit</span>
                </Content>

                <Content>
                <input type='checkbox' id="blog1" name="blog1"/>
                <label for="vehicle1">Fortune</label>
                <span id="title" className="title">Tech Bro Starter Pack</span>
                <span id="date" className="date">12/12/2022</span>
                <span id="datemod" className="datemod">N/A</span>
                <span id="views" className="views">400 Buys</span>
                <span id="viewbutton" className="viewbutton"><ViewIco />View</span>
                <span id="editbutton" className="editbutton"><EditIco />Edit</span>
                </Content>

                <Content>
                <input type='checkbox' id="blog1" name="blog1"/>
                <label for="vehicle1">Fortune</label>
                <span id="title" className="title">Tech Bro Starter Pack</span>
                <span id="date" className="date">12/12/2022</span>
                <span id="datemod" className="datemod">N/A</span>
                <span id="views" className="views">400 Buys</span>
                <span id="viewbutton" className="viewbutton"><ViewIco />View</span>
                <span id="editbutton" className="editbutton"><EditIco />Edit</span>
                </Content>

                <Content>
                <input type='checkbox' id="blog1" name="blog1"/>
                <label for="vehicle1">Fortune</label>
                <span id="title" className="title">Tech Bro Starter Pack</span>
                <span id="date" className="date">12/12/2022</span>
                <span id="datemod" className="datemod">N/A</span>
                <span id="views" className="views">400 Buys</span>
                <span id="viewbutton" className="viewbutton"><ViewIco />View</span>
                <span id="editbutton" className="editbutton"><EditIco />Edit</span>
                </Content>
            </div>
        </AllContent>
    )
}

export default Starter;