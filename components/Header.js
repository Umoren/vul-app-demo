import { Box, Button, Flex, Spacer, Heading } from '@chakra-ui/react';
import MyUserButton from './UserButton';  // Make sure the path is correct
import Link from 'next/link';

export default function Header() {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="blue.500"
            color="white"
            boxShadow="md"
            width="100%"
            position="sticky"
            top="0"
            zIndex="1000"
        >
            <Flex align="center">
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    <Link href="/">
                        Demo App
                    </Link>

                </Heading>
            </Flex>
            <Spacer />
            <Box>
                <Link href="/orders">
                    <Button
                        size="md"
                        bg="blue.300"
                        color="white"
                        _hover={{ bg: "blue.700" }}
                    >
                        Orders
                    </Button>
                </Link>
            </Box>
            <Spacer />
            <Box>
                <MyUserButton />  {/* This replaces the previous login/logout button logic */}
            </Box>
        </Flex>
    );
}
