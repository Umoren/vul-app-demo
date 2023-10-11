import axios from 'axios';
import { Box, Heading, Image, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';


export default function ProductDetail({ product }) {
    return (
        <Box padding="10">
            <Heading marginBottom="6">{product.name}</Heading>
            <Image src={product.image} alt={product.name} boxSize="400px" objectFit="cover" marginBottom="6" />
            <Text marginBottom="4">{product.description}</Text>
            <Text fontWeight="bold" marginBottom="4">${product.price}</Text>
            <Link href="/">
                <Button colorScheme="blue" variant="outline">
                    Back to Products
                </Button>
            </Link>
        </Box>
    );
}

// Fetch product details from the backend
export async function getStaticPaths() {
    const response = await axios.get('https://vulnerable-app-api.fly.dev/api/products');
    const products = response.data;
    const paths = products.map(product => ({ params: { id: product.id.toString() } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const response = await axios.get(`https://vulnerable-app-api.fly.dev/api/products/${params.id}`);
    const product = response.data;
    return { props: { product } };
}
