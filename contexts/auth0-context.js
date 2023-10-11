import { UserProvider } from '@auth0/nextjs-auth0/client';

function UserContextProvider({ children }) {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    );
}

export default UserContextProvider;