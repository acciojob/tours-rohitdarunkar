import React, { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

// ✅ Your data
const data = [
  {
    id: "rec6d6T3q5EBIdCfD",
    name: "Best of Paris in 7 Days Tour",
    info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas...",
    image: "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
    price: "1,995"
  },
  {
    id: "recIwxrvU9HfJR3B4",
    name: "Best of Ireland in 14 Days Tour",
    info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin...",
    image: "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
    price: "3,895"
  },
  {
    id: "recJLWcHScdUtI3ny",
    name: "Best of Salzburg & Vienna in 8 Days Tour",
    info: "Let's go where classical music, towering castles...",
    image: "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
    price: "2,695"
  },
  {
    id: "recK2AOoVhIHPLUwn",
    name: "Best of Rome in 7 Days Tour",
    info: "Our Rome tour serves up Europe's most intoxicating brew...",
    image: "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
    price: "2,095"
  },
  {
    id: "receAEzz86KzW2gvH",
    name: "Best of Poland in 10 Days Tour",
    info: "Starting in the colorful port city of Gdańsk...",
    image: "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
    price: "2,595"
  }
];

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(data);
    setLoading(false);
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const refreshTours = () => {
    setTours(data);
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={refreshTours}>Refresh</button>
      </div>
    );
  }

  return (
    <main>
      <h1>Our Tours</h1>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;