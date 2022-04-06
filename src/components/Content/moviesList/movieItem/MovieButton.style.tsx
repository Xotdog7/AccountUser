import styled from "styled-components";

export const StyleButton = styled.button<{
  background: string;
  selected: boolean;
  border: string;
}>`
  background: ${(props) => (props.selected ? props.background : "transparent")};
  color: ${(props) => (props.selected ? "#AF4425" : "#662E1C")};
  border: 1px solid ${(props) => props.border || "transparent"};
`;
