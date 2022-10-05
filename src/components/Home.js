import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Home = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(async (data) => {
            let responseData = await data.json();
            setUserData(responseData);
        });
    },[]);

    return(
        <div>
            <div className="grid-container">
                {userData.map((data) => <UserCard key={data.id} data={data} />)}
            </div>
        </div>
    )
}

export default Home;