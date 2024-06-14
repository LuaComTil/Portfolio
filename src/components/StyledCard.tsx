import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "./StyledButton";
import cardPlaceholder from "../assets/images/card-placeholder.jpg"

const StyledCard = () => {

    const StyledCard = styled("div")(()=>({
        background: "linear-gradient(to right, #23074d, #cc5333)",
        borderRadius: "16px",
        boxShadow: "0px 0px 4px 2px black inset",
        textAlign: "center",
        padding: "20px",
        color: "#FFF",
    }))

    const StyledImg = styled("img")(({theme})=>({
        width: "100%",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "4px",
    }))

    return (
    <>
        <StyledCard>
            <StyledImg src={cardPlaceholder}/>
            <Typography variant="h6"><b>Landing Page</b></Typography>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at iaculis velit.</p>
            <Grid gap={2} display="flex" justifyContent="space-evenly">
                <StyledButton onClick={() => console.log("View Project")}>
                    View Project
                </StyledButton>
                <StyledButton onClick={() => console.log("View Code")}>
                    View Code
                </StyledButton>
            </Grid>
        </StyledCard>
    </>
  )
}

export default StyledCard;
