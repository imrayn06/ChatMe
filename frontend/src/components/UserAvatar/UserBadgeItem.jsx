import { CloseIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React from 'react'

const UserBadgeItem = ({user, handleFunction}) => {
  return (
    <Box
    px={2}
    py={1}
    borderRadius="lg"
    m={1}
    mb={2}
    bg="gray.500"
    color="white"
    fontSize="12px"
    cursor="pointer"
    onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1}/>
    </Box>
  )
}

export default UserBadgeItem