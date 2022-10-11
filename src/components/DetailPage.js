import useFetch from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const { userData, loading, errorMessage } = useFetch(url);

  return loading ? (
    <p>Loading...</p>
  ) : errorMessage.trim().length > 0 ? (
    <p>{errorMessage}</p>
  ) : (
    <div className="detailPage">
      <div>
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
            if (data[0] !== "geo") {
              return (
                <li key={`${data[0]}~${index}`}>{`${data[0]}: ${data[1]}`}</li>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
      <br />
    </div>
  );
};

export { DetailPage as default };
