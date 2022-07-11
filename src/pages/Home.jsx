import { StatItem } from "../components";
import { AllContent } from "../containers";

import '../css/Home.css';

const Home = () => {
    return (
        <AllContent>
            <h1>All Stats</h1>
            <div className="statcontainer">
                <StatItem/>
                <StatItem/>
                <StatItem/>
            </div>
            <div className="statcontainer">
                <StatItem/>
                <StatItem/>
                <StatItem/>
            </div>
        </AllContent>
    )
}

export default Home;