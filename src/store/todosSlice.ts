import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  timestamp: number;
  title: string;
  link: string;
  noti: boolean;
}

const initialState = [
  {
    id: 0,
    timestamp: 0,
    title: "hello",
    link: "http://naver.com",
    noti: false,
  },
] as Todo[];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
