import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadContainer = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .left-tasks {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
  const todos = useTodoState();
  // console.log("todos: ", todos);
  const unDoneTodos = todos.filter((todo) => !todo.done);
  // console.log("unDoneTodos: ", unDoneTodos);

  const today = new Date();
  // console.log("today: ", today);
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  // console.log("dateString: ", dateString);
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  // console.log("dayName: ", dayName);

  return (
    <TodoHeadContainer>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="left-tasks">할 일 {unDoneTodos.length}개 남음</div>
    </TodoHeadContainer>
  );
};

export default TodoHead;
