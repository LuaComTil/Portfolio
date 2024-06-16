import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledCardProps {
    children: ReactNode;
}

const StyledCard: React.FC<StyledCardProps> = ({children}) => {

    const StyledCard = styled("div")(()=>({
        background: "linear-gradient(to right, #23074d, #cc5333)",
        //background: "linear-gradient(to right, #16222a, #3a6073)",  SECOND OPTION
        borderRadius: "16px",
        boxShadow: "0px 0px 4px 2px black inset",
        textAlign: "center",
        padding: "20px",
        color: "#FFF",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        lineHeight: "1.2rem"
    }))

    return (
    <>
        <StyledCard sx={{
                    '@media (max-width: 600px)': {
                    borderRadius: "0"
                    }}}>
            {children}
        </StyledCard>
    </>
  )
}

export default StyledCard;
