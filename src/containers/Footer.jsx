import React from "react";
import styled from "styled-components";

const FooterList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Label = styled.div`
  margin-bottom: 15px;
  opacity: 60%;
  font-size: 18px;
  line-height: 22px;
  @media screen and (max-width: 479px) {
    margin-bottom: 5px;
    font-size: 15px;
  }
`;

const Value = styled.div`
  font-size: 25px;
  line-height: 30px;
  @media screen and (max-width: 479px) {
    font-size: 18px;
  }
`;

const Footer = () => {
  return (
    <footer>
      <FooterList>
        <li>
          <Label>Ветер</Label>
          <Value>5 м/c, западный</Value>
        </li>
        <li>
          <Label>Давление</Label>
          <Value>752 мм рт. ст.</Value>
        </li>
        <li>
          <Label>Влажность</Label>
          <Value>60%</Value>
        </li>
        <li>
          <Label>Вероятность дождя</Label>
          <Value>10%</Value>
        </li>
      </FooterList>
    </footer>
  );
};

export default Footer;
