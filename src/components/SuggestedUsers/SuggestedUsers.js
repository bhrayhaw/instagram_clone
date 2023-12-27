import { Box, Flex, Link, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedUsersHeader";
import { Text } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />
            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                w={"full"}
            >
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Suggested Users
                </Text>
                <Text
                    fontSize={12}
                    fontWeight={"bold"}
                    _hover={{ color: "gray.400" }}
                    cursor={"pointer"}
                >
                    See All
                </Text>
            </Flex>
            <SuggestedUser name="Nas" followers={123} avatar="/img1.png"/>
            <SuggestedUser name="Coded" followers={1023} avatar="/img2.png"/>
            <SuggestedUser name="Prof" followers={1923} avatar="/img3.png"/>


            <Box fontSize={12} mt={5} color={"gray.400"} alignSelf={"start"}>
                2023 Built by {""}{" "}
                <Link
                    href="https://github.com/bhrayhaw"
                    target="_blank"
                    fontSize={14}
                    color={"blue.500"}
                >
                    Bhrayhaw
                </Link>
            </Box>
        </VStack>
    );
};

export default SuggestedUsers;
