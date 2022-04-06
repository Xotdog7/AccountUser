import styled from "styled-components";

export const StyleBorder = styled.div<{}>`
  border-top: 2px solid #c9a66b;
`;

export const StyleInput = styled.input<{
  background: string;
  color: string;
}>`
  background-color: ${(props) => props.background || "transparent"};
  color: ${(props) => props.color || "black"};
`;

export const StyleAnswer = styled.div<{
  answer: boolean;
  padBottom: string;
}>`
  margin-bottom: ${(props) => props.padBottom || "5px"};
  color: ${(props) => (props.answer ? "#598234" : "#AF4425")};
`;
