import styled from "styled-components";

export const ContactFormContainer = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
`;

export const FormBox = styled.form`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
export const FormName = styled.div`
  float: left;
  width: 100%;
  margin-top: 6px;
`;
export const FormEmail = styled.div`
  float: left;
  width: 100%;
  margin-top: 6px;
`;

export const FormMessage = styled.div`
  float: left;
  width: 100%;
  margin-top: 6px;
`;

export const FormArea = styled.textarea`
  height: 200px;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;
export const FormInput = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 12px;
  border-radius: 4px;
  resize: vertical;
  box-sizing: border-box;
  font-weight: bold;

  font-family: Arial, Helvetica, sans-serif;
`;

export const FormButton = styled.input`
  background-color: rgb(241, 113, 27);
  color: white;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 0;
  margin-bottom: 6px;

  &:hover {
    background-color: rgba(241, 113, 27, 0.7);
  }
`;
