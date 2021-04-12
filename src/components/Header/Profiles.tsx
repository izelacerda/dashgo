import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jose Luiz</Text>
          <Text color="gray.300" fontSize="small">
            alo@teste.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="jose luiz" src="" />
    </Flex>
  )
}