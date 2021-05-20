import styled from "styled-components";

export const HomeContainer = styled.div`
  opacity: ${(props) => (props.isLoading ? "0" : "1")};
`;
