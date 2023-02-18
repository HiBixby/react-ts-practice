import React from "react";
import Calendar from "../components/Calendar";
import NoTodo from "../components/NoTodo";
import TodosList from "../components/todoslist";
import styled from "styled-components";

const S = {
  HomeLayout: styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8fffe;
  `,

  Calendar: styled(Calendar)`
    margin-top: 3rem;
    width: 90.7%;
    height: 35.3%;
  `,
};

const Home = () => {
  return (
    <S.HomeLayout>
      <S.Calendar />
      <NoTodo />
    </S.HomeLayout>
  );
};

export default Home;
