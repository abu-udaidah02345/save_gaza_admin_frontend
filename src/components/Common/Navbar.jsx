import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1, ml: "180px" }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Admin Panel
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;