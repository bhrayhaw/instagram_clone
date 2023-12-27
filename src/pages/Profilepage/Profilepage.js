import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import ProfileHeader from "../../components/ProfilePosts/ProfileHeader";
import ProfileTabs from "../../components/ProfilePosts/ProfileTabs";
import ProfilePosts from "../../components/ProfilePosts/ProfilePosts";

const Profilepage = () => {
    return (
        <Container maxW={"container.lg"} py={5}>
            <Flex
                py={10}
                px={4}
                pl={{ base: 4, md: 10 }}
                mx={"auto"}
                w={"full"}
                flexDirection={"column"}
            >
                <ProfileHeader />
            </Flex>
            <Flex
                px={{ base: 2, sm: 4 }}
                maxW={"full"}
                mx={"auto"}
                direction={"column"}
                borderTop={"1px solid"}
                borderColor={"whiteAlpha.500"}
            >
                <ProfileTabs />
                <ProfilePosts />
            </Flex>
        </Container>
    );
};

export default Profilepage;
