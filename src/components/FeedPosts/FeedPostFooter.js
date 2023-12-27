import {
    Box,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
    CommentLogo,
    NotificationsLogo,
    UnlikeLogo,
} from "../../assets/constants";

const FeedPostFooter = ({username}) => {
    const [liked, setLiked] = useState(false);
    const [numberOfLikes, setNumberOfLikes] = useState(0);
    const [comment, setComment] = useState("");
    const [numberOfComments, setNumberOfComments] = useState(0);

    const handleLikes = () => {
        if (liked) {
            setLiked(!liked);
            setNumberOfLikes(numberOfLikes - 1);
        } else {
            setLiked(!liked);
            setNumberOfLikes(numberOfLikes + 1);
        }
    };

    const HandlePost = () => {
        if (comment !== ""){
            // setComment(comment);
            setNumberOfComments(numberOfComments + 1);
            setComment("")
        }
    }
    return (
        <Box mb={10}>
            <Flex alignItems={"center"} w={"full"} mt={2} mb={2} pt={0} gap={4}>
                <Box onClick={handleLikes} cursor={"pointer"} fontSize={18}>
                    {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
                </Box>
                <Box cursor={"pointer"} fontSize={18}>
                    <CommentLogo />
                </Box>
            </Flex>
            <Text fontWeight={600} fontSize={"sm"}>
                {numberOfLikes} Likes
            </Text>
            <Text fontWeight={700} fontSize={"sm"}>
                {username}{" "}
                <Text as={"span"} fontWeight={400}>
                    Feeling Good
                </Text>
            </Text>
            <Text fontSize={"sm"} color={"gray"}>
                View all {numberOfComments} Comments
            </Text>
            <Flex justifyContent={"space-between"} gap={2}>
                <InputGroup>
                    <Input
                        variant={"flushed"}
                        placeholder="Add a comment..."
                        fontSize={14}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <InputRightElement
                        cursor={"pointer"}
                        color={"blue.500"}
                        _hover={{ color: "white" }}
                        transition={"0.2s ease-in-out"}
                        onClick={HandlePost}
                        fontSize={14}
                    >
                        Post
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    );
};

export default FeedPostFooter;
