import '../css/AllContent.css'

const Content = (props) => {
    return (
        <div className="Content" id={props.id}>
            {props.children}
        </div>
    )
}

export default Content;