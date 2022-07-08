import StatItem from "../components/StatItem";

import '../css/QuickStats.css'
const QuickStats = () => {
    return (
        <div className="QuickStats">
            <h1>Quick Stats</h1>
            <div className="statholder">
                <StatItem/>
                <StatItem/>
                <StatItem/>
            </div>
        </div>
    )
}

export default QuickStats;