import '../styles/globals.css'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import Header from '../components/Header';
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
      <ChakraProvider>
        <>
          <SignedIn>
            <>
              <Header />
              <Component {...pageProps} />
            </>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>

      </ChakraProvider>
    </ClerkProvider>
  );
}

export default MyApp
