import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedUsersHeader from "./SuggestedUsersHeader";
import SuggestedUser from "./SuggestedUser";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import useAuthStore from "../../store/AuthStore";

const SuggestedUsers = () => {
    const { isLoading, suggestedUsers } = useGetSuggestedUsers();
    const setUser = useAuthStore((state) => state.setUser);

    // optional: render loading skeleton
    if (isLoading) return null;

    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedUsersHeader />

            {suggestedUsers.length !== 0 && (
                <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    w={"full"}
                >
                    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                        Suggested for you
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
            )}

            {suggestedUsers.map((user) => (
                <SuggestedUser user={user} key={user.id} setUser={setUser} />
            ))}

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
                © 2023 Built By{" "}
                <Link
                    href="https://www.github.com/bhrayhaw"
                    target="_blank"
                    color="blue.500"
                    fontSize={14}
                >
                    Bhrayhaw
                </Link>
            </Box>
        </VStack>
    );
};

export default SuggestedUsers;
