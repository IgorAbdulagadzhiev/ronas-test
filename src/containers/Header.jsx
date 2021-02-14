import React from "react";
import styled from "styled-components";

import locationSVG from "../img/icons/location.svg";

import Button from "containers/Button";
import TextInput from "./Input";

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const City = styled.span`
  font-weight: 400;
  font-style: normal;
  font-size: 50px;
  line-height: 60px;
  color: #ffffff;
`;

const UnitWrapper = styled.div`
  position: relative;
  padding-left: 10px;
  &::before {
    content: "o";
    position: absolute;
    opacity: 0.4;
    font-size: 10px;
    left: 0;
    top: 1px;
    color: #ffffff;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const UnitForm = styled.form`
  display: flex;
  margin-left: 10px;
  border: 1px solid #ffffff50;
  border-radius: 8px;
  overflow: hidden;
`;

const UnitInput = styled.input`
  appearance: none;
  &:checked + label {
    background-color: #ffffff20;
    opacity: 100%;
  }
`;

const UnitLabel = styled.label`
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  opacity: 50%;
  padding: 3px 15px;
  cursor: pointer;
`;

const Header = ({
  name = "",
  currentWeather,
  changeSearchPanelStatus,
  status,
  handleSubmit,
  unitChange,
}) => {
  return (
    <header>
      <FirstLine>
        {status ? (
          <TextInput handleSubmit={handleSubmit} />
        ) : (
          <City>{name}</City>
        )}
        <UnitWrapper>
          <UnitForm onChange={unitChange}>
            <UnitInput
              name="unit-switcher"
              type="radio"
              value="celsius"
              id="unitC"
              defaultChecked
            ></UnitInput>
            <UnitLabel htmlFor="unitC">C</UnitLabel>
            <UnitInput
              name="unit-switcher"
              type="radio"
              value="fahrenheit"
              id="unitF"
            ></UnitInput>
            <UnitLabel htmlFor="unitF">F</UnitLabel>
          </UnitForm>
        </UnitWrapper>
      </FirstLine>
      <div>
        <Button onClick={changeSearchPanelStatus}>Сменить город</Button>
        <Button onClick={currentWeather} icon={locationSVG}>
          Мое местоположение
        </Button>
      </div>
    </header>
  );
};

export default Header;
