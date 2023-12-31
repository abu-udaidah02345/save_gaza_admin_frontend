/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Chip } from "@mui/material";

const UserCard = ({ details }) => {
    return (
        <Card variant="elevation" sx={{ width: "100%" }} elevation={2}>
            <CardContent sx={{ position: "relative" }}>
                {details.country ? <Chip label={details.country} sx={{ textTransform: "capitalize" }} color="warning" /> : null}
                <Typography variant="h6" textAlign={"center"} sx={{ textTransform: "uppercase", my: 1 }} >{details.firstName} {details.lastName}</Typography>
                <Typography variant="body2" sx={{ position: "absolute", top: 25, right: 10 }}>{details.phoneNumber}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserCard;