import { CircularProgress, Backdrop } from "@mui/material";
const Loader = () => {
    return (
        <Backdrop open={true} sx={{ zIndex: 2000 }}>
            <CircularProgress sx={{ color: "#fff" }} />
        </Backdrop>
    );
};

export default Loader;