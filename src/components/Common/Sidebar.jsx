import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Dashboard as DashboardIcon, PeopleAlt as UsersIcon, VideoLibrary as VideoIcon, Book as BookIcon } from '@mui/icons-material';
import { useNavigate } from "react-router-dom"
    ;
const Sidebar = () => {
    const navigate = useNavigate();

    const navItems = [
        { id: 1, name: "Dashboard", icon: <DashboardIcon /> },
        { id: 2, name: "Users", icon: <UsersIcon /> },
        { id: 3, name: "Videos", icon: <VideoIcon /> },
        { id: 4, name: "Content", icon: <BookIcon /> }
    ];

    const handleListItemClick = (item) => {
        switch (item.name) {
            case "Dashboard":
                navigate("/");
                break;
            case "Users":
                navigate("/users");
                break;
            case "Videos":
                navigate("/videos");
                break;
            case "Content":
                navigate("/content");
                break;
            default:
                navigate("/");
                break;
        }
    };

    return (
        <Drawer anchor="left" open={true} variant="permanent">
            <Toolbar sx={{ background: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)" }}>
                <Typography variant="h5" textAlign="center" >Logo Here</Typography>
            </Toolbar>
            <List sx={{ width: "180px" }}>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton onClick={() => handleListItemClick(item)}>
                            <ListItemIcon sx={{ minWidth: "35px" }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;