import { styled } from "@mui/material";
import { ReactNode } from "react";

interface ButtonWhiteProps {
    children: ReactNode;
    onClick: ()=> void;
}

const ButtonWhite: React.FC<ButtonWhiteProps> = ({children, onClick}) => {

    const ButtonWhite = styled("button")(({theme})=>({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        }
    }))

    return (
    <>
        <ButtonWhite onClick={onClick}>
            {children}
        </ButtonWhite>
    </>
  )
}

export default ButtonWhite;
