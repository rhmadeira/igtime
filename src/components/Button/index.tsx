import { ButtonContainer, ButtonVariant } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
}

const Button = ({ variant = "primary" }: ButtonProps) => {
  return <ButtonContainer variant={variant}> Click me </ButtonContainer>;
};

export default Button;
