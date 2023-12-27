import React from 'react'
import FeedPostHeader from './FeedPostHeader'
import { Box, Image } from '@chakra-ui/react'
import FeedPostFooter from './FeedPostFooter'

const FeedPost = ({img, username, avatar}) => {
  return (
    <>
    <FeedPostHeader username={username} avatar={avatar}/>
    <Box overflow={"hidden"}>
        <Image src={img} alt={username} borderRadius={6}/>
    </Box>
    <FeedPostFooter username={username}/>
    </>
  )
}

export default FeedPost