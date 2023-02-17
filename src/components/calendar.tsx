import React from "react";
import styled from "styled-components";

const CalendarLayout = styled.div`
  width: 90.7%;
  height: 35.3%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 3px 6px 0 var(--black-16);
`;
const YearTime = styled.time`
  margin: 7.2% 0 0 5.6%;
  font-size: 1.125rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  display: block;
  color: var(--green-blue);
`;

const MonthTime = styled.time`
  margin: 0 0 0 5.4%;
  font-size: 1.563rem;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  display: block;
  color: var(--green-blue);
`;
const Calendar = () => {
  return (
    <CalendarLayout>
      <YearTime>2023</YearTime>
      <MonthTime>02</MonthTime>
    </CalendarLayout>
  );
};

export default Calendar;
