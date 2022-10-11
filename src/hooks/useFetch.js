import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(async (data) => {
        if (data.status === 404) throw new Error("Could not find the user");
        let responseData = await data.json();
        if (responseData) {
          setUserData(responseData);
        }
        setLoading(false);
      })
      .catch((e) => {
        setErrorMessage(e.message);
        setLoading(false);
      });
  }, [url]);

  return { userData, loading, errorMessage };
};

export default useFetch;
