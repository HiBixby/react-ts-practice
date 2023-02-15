import React from "react";
import Calendar from "../components/calendar";
import TodosList from "../components/todoslist";

const Home = () => {
  return (
    <>
      <Calendar />
      <TodosList />
    </>
  );
};

export default Home;
