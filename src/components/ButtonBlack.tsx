import { styled } from "@mui/material";
import { ReactNode } from "react";

interface ButtonBlackProps {
    children: ReactNode;
    onClick: ()=> void;
}

const ButtonBlack: React.FC<ButtonBlackProps> = ({children, onClick}) => {

    const ButtonBlack = styled("button")(({theme})=>({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.secondary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.secondary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
    }))

    return (
    <>
        <ButtonBlack onClick={onClick}>
            {children}
        </ButtonBlack>
    </>
  )
}

export default ButtonBlack;
