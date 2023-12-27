import { Avatar, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
      <Flex>
          <Avatar
              src="/profilepic.png"
              size={"lg"}
              border={"1px solid"}
              borderColor={"whiteAlpha.500"}
          />
          <VStack>
            <Flex>
                <Text>Bhrayhaw</Text>
                <Button>Edit Profile</Button>
            </Flex>
            <Flex>
                
            </Flex>
          </VStack>
      </Flex>
  );
}

export default ProfileHeader