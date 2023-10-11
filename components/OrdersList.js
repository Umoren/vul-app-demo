import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

export default function OrdersList({ orders, error }) {
    return (
        <Box padding="10">
            <Heading marginBottom="6">Your Orders</Heading>
            {error ? (
                <Text color="red.500">{error}</Text>
            ) : orders.length > 0 ? (
                orders.map(order => (
                    <Box key={order.id} borderWidth="1px" borderRadius="lg" padding="6" marginBottom="4">
                        <Text fontWeight="bold" marginBottom="2">Order ID: {order.id}</Text>
                        <Text marginBottom="2">Products:</Text>
                        <UnorderedList marginBottom="2">
                            {order.products.map((productId, index) => (
                                <ListItem key={index}>Product ID: {productId}</ListItem>
                            ))}
                        </UnorderedList>
                        <Text>Total Price: ${order.total}</Text>
                    </Box>
                ))
            ) : (
                <Text>No orders found</Text>
            )}
        </Box>
    );
}
