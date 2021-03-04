import styled from "styled-components";
export const LoaderContainer = styled.div`
  opacity: ${(props) => (props.isLoading ? "1" : "0")};
  position: fixed;
  display: block;
  top: 45%;
  left: 45%;
`;
