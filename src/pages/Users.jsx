import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import axios from "axios";
import Loader from "../components/Common/Loader";
import Notification from "../components/Common/Notification";
import UserCard from "../components/Users/UserCard";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState({ message: '', type: '' });

    useEffect(() => {
        async function getAllUsers() {
            try {
                setLoading(true);
                let res = await axios.get("/api/users/all");
                setUsers(res.data);
                console.log(res.data);
                setNotification({ message: "Users fetched successfully", type: "success" });
            } catch (error) {
                setNotification({ message: "Something went wrong", type: "error" });
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        getAllUsers();
    }, []);
    return (
        <>
            {notification.message ? <Notification message={notification.message} type={notification.type} /> : null}
            {loading ? <Loader /> :
                <>
                    <Typography variant="h3" textAlign="center" sx={{ my: 2 }}>My Users</Typography>
                    <Grid container spacing={2} sx={{ px: 1 }}>
                        {
                            users.map((user) => (
                                <Grid item key={user._id} md={4} sm={6} xs={12}>
                                    <UserCard details={user} />
                                </Grid>
                            )
                            )
                        }
                    </Grid>
                </>}
        </>
    );
};

export default Users;