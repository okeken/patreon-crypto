import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient, chain } from "wagmi";

import { ThemeProvider } from 'next-themes'

import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
import Layout from "../components/Layout"



const client = createClient(
  getDefaultClient({
    appName: "Patreon",
    alchemyId,
    chains:[chain.polygonMumbai]
  }),
);


function MyApp({ Component, pageProps }: AppProps) {
  return <>
  
  <WagmiConfig client={client}>
      <ConnectKitProvider>
      <ThemeProvider attribute="class" enableSystem={false}>
      <Layout>

      <Component {...pageProps} />
      </Layout>
        </ThemeProvider>
      
      </ConnectKitProvider>
    </WagmiConfig>
  </>
}

export default MyApp
