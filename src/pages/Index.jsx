import React from "react";
import { Box, Heading, Text, VStack, HStack, Flex, Image, Button, IconButton, Link, FormControl, FormLabel, Input, Textarea, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box fontFamily="Helvetica, Arial, sans-serif">
      {/* Navigation */}
      <Box as="nav" bg="white" boxShadow="md" py={4} px={8} position="fixed" top={0} left={0} right={0} zIndex={1}>
        <Flex align="center" justify="space-between">
          <Heading as="h1" size="lg" color="blue.600">
            Product Consulting
          </Heading>
          <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
            <IconButton icon={isMenuOpen ? <FaTimes /> : <FaBars />} variant="ghost" aria-label="Toggle Navigation" />
          </Box>
          <HStack spacing={8} display={{ base: isMenuOpen ? "flex" : "none", md: "flex" }}>
            <Link href="#about">About Us</Link>
            <Link href="#services">Services</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#contact">Contact Us</Link>
            <Link href="#blog">Blog</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box as="section" pt={24} pb={12} px={8} textAlign="center" bg="blue.50">
        <VStack spacing={8}>
          <Heading as="h2" size="2xl">
            Empowering Businesses with Innovative Product Solutions
          </Heading>
          <Text fontSize="xl" maxW="2xl" mx="auto">
            We are a leading product consulting firm dedicated to helping businesses create successful products that drive growth and customer satisfaction.
          </Text>
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
      </Box>

      {/* About Us Section */}
      <Box as="section" id="about" py={12} px={8}>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <Box flex={1} mr={{ md: 8 }}>
            <Heading as="h3" size="xl" mb={4}>
              About Us
            </Heading>
            <Text fontSize="lg">With years of experience and a team of skilled professionals, we provide end-to-end product consulting services. From ideation to launch, we work closely with our clients to understand their unique needs and deliver tailored solutions that exceed expectations.</Text>
          </Box>
          <Box flex={1}>
            <Image src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwb2YlMjBwcm9mZXNzaW9uYWxzJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDB8fHx8MTcxMTQ4Njk5NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="About Us" />
          </Box>
        </Flex>
      </Box>

      {/* Services Section */}
      <Box as="section" id="services" py={12} px={8} bg="gray.50">
        <Heading as="h3" size="xl" mb={8} textAlign="center">
          Our Services
        </Heading>
        <Flex wrap="wrap" justify="center">
          <Box width={{ base: "100%", md: "30%" }} p={4} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwc3RyYXRlZ3l8ZW58MHx8fHwxNzExNDg2OTk1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Strategy" mb={4} />
            <Heading as="h4" size="lg" mb={2}>
              Product Strategy
            </Heading>
            <Text>We help define your product vision, identify market opportunities, and create a roadmap for success.</Text>
          </Box>
          <Box width={{ base: "100%", md: "30%" }} p={4} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1eCUyMGRlc2lnbnxlbnwwfHx8fDE3MTE0ODY5OTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="UX Design" mb={4} />
            <Heading as="h4" size="lg" mb={2}>
              UX Design
            </Heading>
            <Text>Our UX experts craft intuitive and engaging user experiences that delight your customers.</Text>
          </Box>
          <Box width={{ base: "100%", md: "30%" }} p={4} textAlign="center">
            <Image src="https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTE0ODY5OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Development" mb={4} />
            <Heading as="h4" size="lg" mb={2}>
              Development
            </Heading>
            <Text>We bring your product to life with cutting-edge technologies and agile development methodologies.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Testimonials Section */}
      <Box as="section" id="testimonials" py={12} px={8}>
        <Heading as="h3" size="xl" mb={8} textAlign="center">
          What Our Clients Say
        </Heading>
        <Flex justify="center">
          <Box maxW="sm" borderWidth={1} borderRadius="lg" overflow="hidden" p={6} m={4}>
            <Text fontSize="lg" mb={4}>
              "Product Consulting helped us transform our idea into a successful product. Their expertise and dedication were invaluable."
            </Text>
            <Text fontWeight="bold">- John Doe, CEO of XYZ Inc.</Text>
          </Box>
          <Box maxW="sm" borderWidth={1} borderRadius="lg" overflow="hidden" p={6} m={4}>
            <Text fontSize="lg" mb={4}>
              "The team at Product Consulting exceeded our expectations. They delivered a high-quality product on time and within budget."
            </Text>
            <Text fontWeight="bold">- Jane Smith, Founder of ABC Startup</Text>
          </Box>
        </Flex>
      </Box>

      {/* Contact Us Section */}
      <Box as="section" id="contact" py={12} px={8} bg={useColorModeValue("gray.100", "gray.700")}>
        <Flex direction={{ base: "column", md: "row" }} justify="space-between">
          <Box flex={1} mb={{ base: 8, md: 0 }}>
            <Heading as="h3" size="xl" mb={4}>
              Contact Us
            </Heading>
            <VStack align="start" spacing={4}>
              <HStack>
                <Icon as={FaEnvelope} color="blue.500" />
                <Text>info@productconsulting.com</Text>
              </HStack>
              <HStack>
                <Icon as={FaPhone} color="blue.500" />
                <Text>+1 123-456-7890</Text>
              </HStack>
              <HStack>
                <Icon as={FaMapMarkerAlt} color="blue.500" />
                <Text>123 Main St, City, Country</Text>
              </HStack>
            </VStack>
          </Box>
          <Box flex={1}>
            <form>
              <FormControl id="name" mb={4}>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your Name" />
              </FormControl>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your Email" />
              </FormControl>
              <FormControl id="message" mb={4}>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your Message" />
              </FormControl>
              <Button type="submit" colorScheme="blue">
                Send Message
              </Button>
            </form>
          </Box>
        </Flex>
      </Box>

      {/* Blog Section */}
      <Box as="section" id="blog" py={12} px={8}>
        <Heading as="h3" size="xl" mb={8} textAlign="center">
          Latest Blog Posts
        </Heading>
        <Flex justify="center">
          <Box maxW="sm" borderWidth={1} borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://images.unsplash.com/photo-1603975711481-18b7aaca4caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNzExNDg2OTk2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Blog Post 1" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>
                5 Tips for Successful Product Development
              </Heading>
              <Text>Learn the key strategies for developing successful products that meet customer needs and drive business growth.</Text>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth={1} borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZXxlbnwwfHx8fDE3MTE0ODY5OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Blog Post 2" />
            <Box p={6}>
              <Heading as="h4" size="md" mb={2}>
                The Importance of User Experience in Product Design
              </Heading>
              <Text>Discover why user experience is crucial for creating products that engage and retain customers.</Text>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" py={8} px={8} bg="gray.800" color="white" textAlign="center">
        <Text>&copy; {new Date().getFullYear()} Product Consulting. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
