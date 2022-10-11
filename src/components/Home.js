import useFetch from "../hooks/useFetch";
import UserCard from "./UserCard";

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { userData, loading, errorMessage } = useFetch(url);

  return loading ? (
    <p>Loading...</p>
  ) : errorMessage ? (
    <p>{errorMessage}</p>
  ) : (
    <div>
      <div className="grid-container">
        {userData.map((data) => (
          <UserCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
