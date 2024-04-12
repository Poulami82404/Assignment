import React from "react";
import { Helmet } from "react-helmet";
import {
  Image,
  Heading,
  Text,
  Flex,
  IconButton,
  InputRightElement,
  InputGroup,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";

export default function Frame5596Page() {
  return (
    <>
      <Helmet>
        <title>Poulami's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Flex
        bgGradient="linear-gradient(138deg, #e6eeff,#e6eeff00)"
        w="100%"
        justifyContent="center"
        px="56px"
        py="110px"
        p={{ md: "", base: "20px" }}
      >
        <Box
          borderColor="white.A700"
          borderWidth="7px"
          borderStyle="solid"
          bg="white.A700"
          w={{ md: "20%", base: "100%" }}
          borderRadius="20px"
          p={{ md: "", base: "20px" }}
        >
          <Flex
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            bg="gray.100_02"
            boxShadow="xs"
            justifyContent="space-between"
            gap="20px"
            p="10px"
          >
            <Flex ml={{ md: "10px", base: "0px" }} gap="10px" w="60%" justifyContent="center" alignItems="center">
              <Box h={{ md: "50px", base: "auto" }} w="50px" position="relative">
                <Image src="images/img_simple_chatbots.png" borderRadius="50%" h="50px" w="50px" />
                <Box
                  h="8px"
                  bg="light_green.A700"
                  w="8px"
                  position="absolute"
                  bottom="2.00px"
                  right="3.50px"
                  m="auto"
                  borderRadius="4px"
                />
              </Box>
              <Flex flex={1} flexDirection="column" py="5px">
                <Flex gap="10px" alignSelf="start" alignItems="start">
                  <Flex>
                    <Heading size="s" as="h1" color="blue.A200">
                      Timpu{" "}
                    </Heading>
                  </Flex>
                  <Image src="images/img_checkmark.svg" h="15px" mt="5px" w="14px" />
                </Flex>
                <Flex mt="-2px" alignSelf="start" position="relative">
                  <Text size="lg" color="blue.A200">
                    Chat assistant
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex mr={{ md: "10px", base: "0px" }} gap="5px" w="19%" justifyContent="center" alignItems="end" py="9px">
              <Box h="8px" mb="5px" bg="light_green.A700" w="8px" borderRadius="4px" />
              <Text size="lg" color="blue.A200" mt="18px">
                Online
              </Text>
            </Flex>
          </Flex>
          <Box bgGradient="radial-gradient(228deg, #ffffff,#e2e1e100)" px="5px">
            <Flex gap="20px" flexDirection="column" p="10px">
              <Flex mt="40px" gap="20px" flexDirection="column">
                <Flex gap="4px" flex={1} flexDirection="column" alignItems="start">
                  <Flex
                    bgGradient="linear-gradient(141deg, #e5edff,#ffffff)"
                    w={{ md: "76%", base: "100%" }}
                    justifyContent="center"
                    p="10px"
                    borderRadius="15px"
                  >
                    <Text w="96%">Hi Sam! I am your personal shopping assistant , how can i help you today ?</Text>
                  </Flex>
                  <Flex px="10px">
                    <Text size="xs">4:45 PM</Text>
                  </Flex>
                </Flex>
                <Flex gap="4px" flex={1} flexDirection="column" alignItems="end">
                  <Flex
                    borderColor="white.A700"
                    borderWidth="1px"
                    borderStyle="solid"
                    bg="light_green.100"
                    w={{ md: "65%", base: "100%" }}
                    justifyContent="center"
                    p="10px"
                    borderRadius="15px"
                  >
                    <Text w="95%">I am looking for a hand bag, with long strap .</Text>
                  </Flex>
                  <Flex px="10px">
                    <Text size="xs" textAlign="right">
                      4:46 PM
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap="8px" flexDirection="column" alignItems="start">
                <Text color="gray.500">Popular tags for handbag</Text>
                <Flex gap="5px" alignSelf="stretch" alignItems="center">
                  <Flex gap="10px" flex={1}>
                    <Button
                      size="sm"
                      colorScheme="gray_50_02"
                      fontWeight={500}
                      borderColor="blue.A200"
                      borderWidth="1px"
                      borderStyle="solid"
                      flex={1}
                      w="100%"
                      borderRadius="5px"
                    >
                      Clutch
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="gray_50_02"
                      fontWeight={500}
                      borderColor="blue.A200"
                      borderWidth="1px"
                      borderStyle="solid"
                      minW="100px"
                      borderRadius="5px"
                    >
                      Fabric lining
                    </Button>
                    <Button
                      size="sm"
                      colorScheme="gray_50_02"
                      fontWeight={500}
                      borderColor="blue.A200"
                      borderWidth="1px"
                      borderStyle="solid"
                      flex={1}
                      w="100%"
                      borderRadius="5px"
                    >
                      Baggit{" "}
                    </Button>
                    <Flex
                      borderColor="blue.A200"
                      borderWidth="1px"
                      borderStyle="solid"
                      bg="gray.50_02"
                      w="15%"
                      justifyContent="flex-end"
                      py="3px"
                      borderRadius="5px"
                    >
                      <Text color="blue.A200" fontWeight={500} alignSelf="end">
                        Multi Compartment
                      </Text>
                    </Flex>
                  </Flex>
                  <Image src="images/img_arrow_right_blue_a200.svg" h="24px" w="24px" />
                </Flex>
              </Flex>
              <Flex mb="21px" gap="10px" flexDirection="column">
                <Flex gap="4px" flexDirection="column" alignItems="start">
                  <Flex
                    gap="10px"
                    bgGradient="linear-gradient(152deg, #e5edff,#f9fbff)"
                    w={{ md: "76%", base: "100%" }}
                    flexDirection="column"
                    p="10px"
                    borderRadius="20px"
                  >
                    <Flex
                      gap="11px"
                      bg="white.A700"
                      justifyContent="center"
                      alignItems="center"
                      p="7px"
                      borderRadius="10px"
                    >
                      <Image src="images/img_frame_5591.png" h="50px" w="34%" borderRadius="5px" />
                      <Flex gap="7px" flexDirection="column" alignItems="center" px="4px" my="2px">
                        <Flex gap="5px" alignSelf="start" alignItems="center">
                          <Flex>
                            <Text fontWeight={500}>
                              <Text as="span" color="blue_gray.900">
                                Bags on&nbsp;
                              </Text>
                              <Text as="span" color="blue_gray.900" fontWeight={600}>
                                Timpu
                              </Text>
                            </Text>
                          </Flex>
                          <Image src="images/img_checkmark.svg" h="15px" w="14px" />
                        </Flex>
                        <Flex gap="20px" alignSelf="start" alignItems="center">
                          <Text size="s" color="gray.500" alignSelf="end">
                            1123 products{" "}
                          </Text>
                          <Image src="images/img_arrow_right_gray_500.png" h="24px" w="24px" />
                        </Flex>
                      </Flex>
                    </Flex>
                    <Text>Or set filter and help us choose the best bag for you.</Text>
                  </Flex>
                  <Flex px="10px">
                    <Text size="xs">4:48 PM</Text>
                  </Flex>
                </Flex>
                <Flex gap="9px" flexDirection="column">
                  <Flex justifyContent="space-between" gap="20px">
                    <Text color="gray.500">Select filters</Text>
                    <Flex w="18%" justifyContent="space-evenly">
                      <Image src="images/img_sliders_horizontal.svg" h="20px" w="20px" />
                      <Text color="gray.700">Filter</Text>
                    </Flex>
                  </Flex>
                  <Flex gap="10px" flexDirection="column" alignItems="start">
                    <Flex gap="10px" w={{ md: "85%", base: "100%" }}>
                      <Flex
                        borderColor="blue.A200"
                        borderWidth="1px"
                        borderStyle="solid"
                        bg="gray.50_01"
                        flex={1}
                        justifyContent="space-evenly"
                        alignItems="start"
                        borderRadius="5px"
                      >
                        <Flex gap="5px" alignItems="center" flexWrap="wrap">
                          <Text color="blue.A200" alignSelf="end">
                            Strap
                          </Text>
                          <Text color="blue.A200" alignSelf="start">
                            -
                          </Text>
                          <Text color="blue.A200" fontWeight={500} alignSelf="end">
                            Long
                          </Text>
                        </Flex>
                        <Image src="images/img_check_square_2.svg" h="11px" mt="4px" w="10px" />
                      </Flex>
                      <Button
                        rightIcon={<Image src="images/img_checksquare2_gray_600.svg" w="10px" h="11px" />}
                        gap="5px"
                        minW="79px"
                        borderRadius="5px"
                      >
                        Colour
                      </Button>
                      <Button
                        rightIcon={<Image src="images/img_checksquare2_gray_600.svg" w="10px" h="11px" />}
                        gap="5px"
                        minW="60px"
                        borderRadius="5px"
                      >
                        Size
                      </Button>
                    </Flex>
                    <Flex gap="10px">
                      <Button
                        rightIcon={<Image src="images/img_checksquare2_gray_600.svg" w="10px" h="11px" />}
                        gap="5px"
                        minW="74px"
                        borderRadius="5px"
                      >
                        Brand
                      </Button>
                      <Button
                        rightIcon={<Image src="images/img_checksquare2_gray_600.svg" w="10px" h="11px" />}
                        gap="5px"
                        minW="88px"
                        borderRadius="5px"
                      >
                        Material
                      </Button>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Flex
            gap="9px"
            borderColor="white.A700"
            borderWidth="2px"
            borderStyle="solid"
            bgGradient="linear-gradient(164deg, #eff3fd,#eff3fd00)"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex gap="5px" alignSelf="stretch">
              <InputGroup>
                <Input placeholder={`Type your message`} />
                <InputRightElement>
                  <Image src="images/img_paperclip.svg" w="20px" h="20px" />
                </InputRightElement>
              </InputGroup>
              <IconButton
                size="md"
                colorScheme="blue_A200"
                icon={<Image src="images/img_arrow_right.svg" />}
                aria-label="1:256-arrowright_five"
                borderRadius="10px"
              />
            </Flex>
            <Flex gap="5px" alignItems="center" flexWrap="wrap" px={{ md: "90px", base: "20px" }}>
              <Text color="gray.400" alignSelf="end">
                Powered by{" "}
              </Text>
              <Heading alignSelf="start">Krunk.ai</Heading>
              <Image src="images/img_logo.png" h="18px" alignSelf="start" w="18px" />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
