import { Grid } from "@chakra-ui/react";
import React from "react";
import ProfilePost from "./ProfilePost";


const ProfilePosts = () => {
    return (
        <Grid templateColumns={"repeat(3, 1fr)"} gap={6}>
            <ProfilePost img={"/img1.png"} />
            <ProfilePost img={"/img2.png"} />
            <ProfilePost img={"/img3.png"} />
            <ProfilePost img={"/img4.png"} />
        </Grid>
    );
};

export default ProfilePosts;
