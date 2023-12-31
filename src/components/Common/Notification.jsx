/* eslint-disable react/prop-types */
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const Notification = ({ message, type }) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpen(false);
    };
    return (
        <Snackbar open={isOpen} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;