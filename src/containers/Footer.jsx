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

const Footer = ({list}) => {
  return (
    <footer>
      <FooterList>
        {
          list.map(({label, value}) => {
            return <li key={label}>
              <Label>{label}</Label>
              <Value>{value}</Value>
            </li>
          })
        }
      </FooterList>
    </footer>
  );
};

export default Footer;
