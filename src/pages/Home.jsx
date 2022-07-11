import { StatItem } from "../components";
import { AllContent } from "../containers";

import '../css/Home.css';

const Home = () => {
    return (
        <AllContent>
            <h1>All Stats</h1>
            <StatItem/>
            <StatItem/>
            <StatItem/>
            <StatItem/>
            <StatItem/>
            <StatItem/>
        </AllContent>
    )
}

export default Home;