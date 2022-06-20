import { useState, useEffect } from "react";
import AddMovie from "../AddMovie/AddMovie.js";
import "./app.css";
import MovieList from "../MovieList/MovieList.js";
import Filtring from "../Filtring/Filtring.js";

const info = [
  {
    title: "Law Abiding Citizen",
    img: "/image/Law Abiding Citizen.jpg",
    description:
      "Clyde Shelton is desperate to exact revenge on those who killed his family as well as on the police officials, including assistant DA Nick Rice, who could not guarantee an appropriate sentence.",

    rating: 7.4,
  },
  {
    title: "Shawshank Redemption",
    img: "/image/Shawshank Redemption.jpg",
    description:
      "Andy Dufresne a successful banker is arrested for the murders of his wife and her lover and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner. ",

    rating: 9.3,
  },
  {
    title: "Shot Caller",
    img: "/image/Shot Caller.jpg",
    description:
      "Jacob Harlon, a former businessman and convicted criminal, tries to adjust to his new life in prison by becoming part of a gang. However, when he gets out on parole, the violent lifestyle follows him.",

    rating: 7.3,
  },
  {
    title: "Sicario",
    img: "/image/Sicario.jpg",
    description:
      "During a dangerous mission to stop a drug cartel operating between the US and Mexico, Kate Macer, an FBI agent, is exposed to some harsh realities. ",

    rating: 7.6,
  },
  {
    title: "The Founder",
    img: "/image/The Founder.jpg",
    description:
      "Ray, a salesman, meets the owners of McDonald's, a burger joint in Southern California. He realises the potential of the place and decides to make it the biggest restaurant business in the world.",

    rating: 7.2,
  },
  {
    title: "The Godfather",
    img: "/image/The Godfather.jpg",
    description:
      "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger. ",

    rating: 9.2,
  },
  {
    title: "The Platform",
    img: "/image/The Platform.jpg",
    description:
      "In the future, prisoners housed in vertical cells watch as inmates in the upper cells are fed while those below starve.",

    rating: 7,
  },
  {
    title: "Troy",
    img: "/image/Troy.jpg",
    description:
      "After Paris, a Trojan prince, has an affair with Menelaus's wife, Helen, he decides to take her with him. Later, Menelaus's brother uses that as an excuse to wage a war against the city of Troy.",

    rating: 7.3,
  },
  {
    title: "Wolf of the wallstreet",
    img: "/image/Wolf of the wallstreet.jpg",
    description:
      "Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.",

    rating: 8.2,
  },
];

function App() {
  const [list, setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate, setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie) {
    if (movie.title && movie.img && movie.description && movie.posterURL) {
      setList([...list, movie]);
    }
  }

  function filter(key, rate) {
    setKeyword(key);
    setRate(rate);
    console.log(rate + "  " + key);
    setFiltredList(
      list.filter((element) => {
        return (
          element.title.toLowerCase().includes(key.toLowerCase()) &&
          element.rating >= rate
        );
      })
    );
  }

  useEffect(() => {
    filter(keyword, rate);
  }, [list]);

  return (
    <div className="App">
      <Filtring filter={filter} />
      <MovieList list={filtredList} />
      <AddMovie adding={adding} />
    </div>
  );
}

export default App;
