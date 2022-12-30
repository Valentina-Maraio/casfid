import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import noticias from "../api/apiCall";
//import { useParams } from 'react-router-dom';

//all news
export const AllNewsContext = createContext();

export const AllNewsProvider = ({ children }) => {
  const [allNews, setAllNews] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getAllNews();
    //getFormatted();
  }, []);

  const getAllNews = async () => {
    try {
      const response = await axios.get(noticias.allNews);
      setAllNews(response.data.noticias);
    } catch (error) {
      console.log(error);
    }
  };

  //queria utilizar este try catch para quitar los tags de html pero recibo en la consola un error que no he visto nunca.

  /*const getFormatted = async () => {
    try {
      const inLocalStorage = localStorage.getItem("news");
      if (inLocalStorage) {
        setNews(JSON.parse(inLocalStorage));
      } else {
        const response = await axios.get(noticias.news);
        localStorage.setItem(
          "news",
          JSON.stringify(response.data.noticias).replace(/<[^>]*>/g, "")
        );
        setNews(response.data.noticias);
      }
    } catch (error) {
      console.log(error);
    }
  };*/

  return (
    <AllNewsContext.Provider value={[allNews, setAllNews, news, setNews]}>
      {children}
    </AllNewsContext.Provider>
  );
};

//add news to favs
export const FavNewsContext = createContext({
  favs: [],
  addToFav: () => {},
});

export const FavNewsProvider = ({ children }) => {
  const [favNews, setFavNews] = useState(() => {
    try {
      const savedNews = localStorage.getItem("saved-news");
      return savedNews ? JSON.parse(savedNews) : [];
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "saved-news",
      JSON.stringify(favNews).replace(/<[^>]*>/g, "")
    );
  }, [favNews]);

  const addToFav = (título, imagen) => {
    setFavNews((prevState) => [...prevState, { título, imagen }]);
  };

  <FavNewsContext.Provider value={{ favNews, addToFav }}>
    {children}
  </FavNewsContext.Provider>;
};
