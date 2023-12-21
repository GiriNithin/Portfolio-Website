import { Text, Flex, Button } from "@chakra-ui/react";

const LandingComponent = () => {
  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent={"Center"}
      direction={"column"}
    >
      <Text fontSize={"1.5rem"} marginBottom={"10px"} maxWidth={"50vw"}>
        Hello, I'm Giri Nithin Yogendra.
      </Text>
      <Text textAlign={"center"} maxWidth={"50vw"}>
        I am a Computer Science graduate student with a keen interest in
        Full-Stack Development, Data Engineering and Machine Learning.
      </Text>
      <Button margin={"20px 0px"} width={"10rem"}>
        Contact Me
      </Button>
      <Button width={"10rem"}>Resume</Button>
    </Flex>
  );
};

export default LandingComponent;
