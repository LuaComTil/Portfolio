import { Grid, NativeSelect, Typography } from "@mui/material";
import WestIcon from '@mui/icons-material/West'

const PortfolioFilter = () => {

    return (
    <>
        <Grid sx={{
                    '@media (max-width: 600px)': {
                    flexDirection: "column"
                    }}} style={{ background: "#aaaaaa" }} display="flex" justifyContent="center" alignItems="center" p="8px">
            <Typography variant="h6" m="1rem">What technology would solve your problem?</Typography>
            <NativeSelect disableUnderline>
                <option>Any of them</option>
                <option>Landing Page</option>
                <option>React</option>
            </NativeSelect>
            <Typography 
                sx={{
                    '@media (max-width: 600px)': {
                    display: "none"
                    }}} fontSize="32px">
                <WestIcon fontSize="inherit"/>
            </Typography>
        </Grid>
    </>
  )
}

export default PortfolioFilter;
