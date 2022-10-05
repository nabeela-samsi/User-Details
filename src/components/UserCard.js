import { Link } from "react-router-dom";

const UserCard = (props) => {
    return (
        <div className="grid-item">
            <p className="profileImage">{props.data.name.charAt(0)}</p>
            <p>{props.data.name}</p>
            <p className="username">{'@' + props.data.username}</p>
            <Link to='#'>{props.data.email}</Link>
            <br />
            <br />
            <button className="moreDetails">
                <Link style={{textDecoration: "none", color:"white"}} to={`/detail/${props.data.id}`}>More Details</Link>
            </button>

        </div>
    )
};

export {UserCard as default}