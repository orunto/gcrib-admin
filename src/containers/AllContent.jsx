import '../css/AllContent.css';

const AllContent = (props) => {
    return (
        <div className="AllContent">
            {props.children}
        </div>
    )
}

export default AllContent;