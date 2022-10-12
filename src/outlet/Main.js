import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../component/Header/Header";

export const TopicsContext = createContext([]);

const Main = () => {
  const topics = useLoaderData();
  return (
    <TopicsContext.Provider value={topics.data}>
      <Header></Header>
      <Outlet></Outlet>
    </TopicsContext.Provider>
  );
};

export default Main;
