import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  tertiary: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  ${(props) => {
    return `background-color: ${buttonVariants[props.variant]};`;
  }}
`;
