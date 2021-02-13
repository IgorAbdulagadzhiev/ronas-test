import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: inline-flex;
  flex-grow: 1;
`;

const Input = styled.input`
  padding: 30px;
  width: 580px;
  font-size: 30px;
  line-height: 36px;
  outline: none;
  border: none;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  color: #000000;
  @media screen and (max-width: 900px) {
		width: 100%;
    padding: 20px 10px;
	}
`;

const Button = styled.button`
  padding: 0 30px;
  color: #1086ff;
  font-size: 30px;
  line-height: 36px;
  font-weight: 400;
  outline: none;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  background-color: #ffffff;
  &:hover {
    background-color: rgb(212, 212, 212);
  }
  @media screen and (max-width: 900px) {
		font-size: 15px;
    line-height: 18px;
	}
`;

const TextInput = ({textButton = 'OK', handleSubmit ,...props}) => {
  return (
    <Form>
      <Input type="text" autoFocus {...props} />
      <Button onSubmit={handleSubmit} type="submit">
        {textButton}
      </Button>
    </Form>
  );
};

export default TextInput;
