import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";
import "./../styles/App.css";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <div id="main">
        <Loading />
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div id="main">
        <h2>No tours left</h2>
        <button onClick={fetchTours}>Refresh</button>
      </div>
    );
  }

  return (
    <div id="main">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;