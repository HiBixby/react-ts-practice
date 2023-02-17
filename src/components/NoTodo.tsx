import styled from "styled-components";
import { ReactComponent as AddIcon } from "../assets/add.svg";
const NoTodoLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoTodoParagraph = styled.p`
  margin: 0;
  color: var(--warm-grey);
  font-size: 0.938rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.03px;
`;

const NoTodo = () => {
  return (
    <NoTodoLayout>
      <NoTodoParagraph>오늘은 한가하네요</NoTodoParagraph>
      <NoTodoParagraph>일정을 추가해봐요!</NoTodoParagraph>
    </NoTodoLayout>
  );
};

export default NoTodo;
