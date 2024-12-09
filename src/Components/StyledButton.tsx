import { ReactNode } from "react";
import { useTheme } from '../Contexts/ThemeContext';
import styled from "styled-components";

interface StyledButtonProps {
    children: ReactNode;
    onClick: ()=> void;
}

const StyledBtn = styled.button`
  border: 1px solid ${props => props.theme.text};
  border-radius: 4px;
  width: 100%;
  padding: 8px 0;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {
  const { theme } = useTheme();

  return (
  <>
    <StyledBtn theme={theme} onClick={onClick}>
      {children}
    </StyledBtn>
  </>
  )
}

export default StyledButton;