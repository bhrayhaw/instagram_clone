import { Avatar, Link, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedUsersHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Avatar src="/profilepic.png" size={"lg"} name="Bhrayhaw" />
            <Text fontSize={12} fontWeight={400}>
                Bhrayhaw
            </Text>
            <Link
                to={"/"}
                as={RouterLink}
                fontSize={14}
                fontWeight={"medium"}
                cursor={"pointer"}
                color={"blue.500"}
                textDecoration={"none"}
            >Logout</Link>
        </Flex>
    );
};

export default SuggestedUsersHeader;
