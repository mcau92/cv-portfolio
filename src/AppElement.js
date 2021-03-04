import styled from "styled-components";
export const LoaderContainer = styled.div`
  opacity: ${(props) => (props.isLoading ? "1" : "0")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
