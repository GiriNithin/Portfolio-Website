import React from "react";
import { Box, Flex, Link, useColorModeValue } from "@chakra-ui/react";

const Header = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.600", "white");

  return (
    <Flex
      as="nav"
      align="center"
      //justify="space-between"
      alignItems={"center"}
      justifyContent={"center"}
      wrap="wrap"
      padding="1.5 rem"
      bg={bgColor}
      color={textColor}
      position="sticky"
      top={0}
      zIndex={1}
    >
      <Flex align="center" mr={5}>
        <Link href="#home" fontSize="xl" fontWeight="bold">
          Home
        </Link>
      </Flex>

      <Box
        display={{ base: "block", md: "flex" }}
        width={{ base: "full", md: "auto" }}
      >
        <Link href="#about" p={2}>
          About Me
        </Link>
        <Link href="#skills" p={2}>
          Skills
        </Link>
        <Link href="#contact" p={2}>
          Contact Me
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
