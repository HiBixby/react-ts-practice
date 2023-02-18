import React from "react";

const Todo = () => {
  return (
    <>
      <nav><button>뒤로</button></nav>
      <time>2022.09.06</time>
      <time>14:50</time>
      <form>
        <label>Todo</label>
        <input type="text" placeholder="제목을 입력해주세요." />
        <label>Link</label>
        <input type="url" placeholder="URL을 입력해주세요." />
      </form>
    </>
  );
};

export default Todo;
