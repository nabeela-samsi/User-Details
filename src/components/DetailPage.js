import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const DetailPage = (props) => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(setLoading(true))
        .then(async (data) => {
            let responseData = await data.json();
            if (responseData) {
                setUserData(responseData);
             }
             setLoading(false);
        })
    }, [id]);

    return (
        loading ? <p>Loading...</p> :
        (<div className="detailPage">
            <div >
                <button onClick={() => navigate(-1)}>Back</button>
                <p>name: {userData.name}</p>
                <p>username: {userData.username}</p>
                <p>email: {userData.email}</p>
                <p>phone: {userData.phone}</p>
                <p>company: {userData.company.name}</p>
                <p>website: {userData.website}</p>
                <p>address</p>
                <ul>
                    {Object.entries(userData.address).map((data, index) => {
                        if(data[0] !== 'geo') {
                            return (<li key={`${data[0]}~${index}`}>{`${data[0]}: ${data[1]}`}</li>)
                        } else {
                            return null;
                        }
                    })}
                </ul>
            </div>
            <br />
        </div>)
    )
}

export {DetailPage as default}