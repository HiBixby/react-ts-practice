import React from "react";
import styled from "styled-components";
import { ReactComponent as RightArrowIcon } from "../assets/btn-right-arrow.svg";
import { ReactComponent as LeftArrowIcon } from "../assets/btn-left-arrow.svg";

const S = {
  CalendarLayout: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 3px 6px 0 var(--black-16);
    overflow-x: scroll;
  `,
  YearTime: styled.time`
    margin: 1.705rem 0 0 1.344rem;
    font-size: 1.125rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.17;
    letter-spacing: normal;
    display: block;
    color: var(--green-blue);
  `,

  MonthTime: styled.time`
    font-size: 1.563rem;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    display: block;
    color: var(--green-blue);
  `,

  SecondLineBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1.742rem 0 1.281rem;
  `,

  ArrowBtnBox: styled.div`
    width: 2.313rem;
    display: flex;
    justify-content: space-between;
  `,
  ChangeMonthBtn: styled.button`
    border: none;
    background: transparent;
    padding: 0;
    &:hover {
      cursor: pointer;
    }
  `,
};
const Calendar = (props: any) => {
  return (
    <S.CalendarLayout className={props.className}>
      <S.YearTime>2023</S.YearTime>
      <S.SecondLineBox>
        <S.MonthTime>02</S.MonthTime>
        <S.ArrowBtnBox>
          <S.ChangeMonthBtn title="이전 달">
            <LeftArrowIcon />
          </S.ChangeMonthBtn>
          <S.ChangeMonthBtn title="다음 달">
            <RightArrowIcon />
          </S.ChangeMonthBtn>
        </S.ArrowBtnBox>
      </S.SecondLineBox>
    </S.CalendarLayout>
  );
};

export default Calendar;
