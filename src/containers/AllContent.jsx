import '../css/AllContent.css';

const AllContent = (props) => {
    return (
        <div className="AllContent" id={props.id}>
            {props.children}
        </div>
    )
}

export default AllContent;