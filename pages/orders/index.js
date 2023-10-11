import axios from 'axios';
import { useEffect, useState } from 'react';
import OrdersList from '../../components/OrdersList';
import { useClerk } from '@clerk/clerk-react';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const { session } = useClerk();

    useEffect(() => {
        // Ensure the session is available
        if (!session) return;

        const fetchOrders = async () => {
            console.log('session', session)
            try {
                const token = session.lastActiveToken.jwt.claims.__raw;
                console.log(token)
                const response = await axios.get('https://vulnerable-app-api.fly.dev/api/orders', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                console.log(response)
                setOrders(response.data);

            } catch (err) {
                console.error(err);
                if (err.response && err.response.status === 401) {
                    setError('Unauthorized');
                } else {
                    setError('An error occurred while fetching orders');
                }
            }
        };

        fetchOrders();
    }, [session]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return <OrdersList orders={orders} />;
}
