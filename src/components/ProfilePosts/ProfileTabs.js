import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";

const ProfileTabs = () => {
    return (
        <Flex w={"full"} justifyContent={"center"} textTransform={"uppercase"}>
            <Flex
                borderTop={"1px solid white"}
                p={3}
                gap={1}
                alignItems={"center"}
                cursor={"pointer"}
            >
                <Box fontSize={20}>
                    <BsGrid3X3 />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>
                    Posts
                </Text>
            </Flex>

            <Flex p={3} gap={1} alignItems={"center"} cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsBookmark />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>
                    Saved
                </Text>
            </Flex>

            <Flex p={3} gap={1} alignItems={"center"} cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsSuitHeart />
                </Box>
                <Text fontSize={12} display={{ base: "none", sm: "block" }}>
                    Likes
                </Text>
            </Flex>
        </Flex>
    );
};

export default ProfileTabs;
