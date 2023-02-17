import React from "react";
import "./Home.css";
import Calendar from "../components/Calendar";
import NoTodo from "../components/NoTodo";
import TodosList from "../components/todoslist";

const Home = () => {
  return (
    <>
      <Calendar />
      <NoTodo />
    </>
  );
};

export default Home;
