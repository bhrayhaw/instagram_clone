import Home from "./Home";
import Search from "./Search";
import Profile from "./Profile";
import Notification from "./Notification";
import CreatePost from "./CreatePost";

const SideBarItems = () => {
    return (
        <>
            <Home />
            <Search />
            <Notification />
            <CreatePost />
            <Profile />
        </>
    );
};

export default SideBarItems;
