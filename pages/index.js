import axios from 'axios';
import { Box, Heading, SimpleGrid, Image, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home({ products }) {
  return (
    <Box padding="10" width={1200} mx="auto" >
      <Heading marginBottom="6">Products</Heading>
      <SimpleGrid columns={3} spacing="10">
        {products.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" padding="6" overflow="hidden">
            <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" marginBottom="4" />
            <Heading size="md" marginBottom="2">{product.name}</Heading>
            <Text marginBottom="4">{product.description}</Text>
            <Text fontWeight="bold" marginBottom="4">${product.price}</Text>
            <Link href={`/products/${product.id}`}>
              <Button colorScheme="blue" variant="outline">
                View Details
              </Button>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

// Fetch products from the backend
export async function getStaticProps() {
  const response = await axios.get('https://vulnerable-app-api.fly.dev/api/products');
  const products = response.data;
  return { props: { products } };
}
