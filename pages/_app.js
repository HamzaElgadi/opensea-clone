import { ChainId, ThirdwebProvider} from '@thirdweb-dev/react'
import '../styles/globals.css'
import {ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {

  return(

    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}
    chainRpc={{
      [ChainId.Rinkeby]:'https://rinkeby.infura.io/v3/755011ab28cb426bb8ed3cd63856bff3'
    }
    }
    >
     {/* <NFTBasicinfo/>*/} 
      <ThemeProvider>
         <Component {...pageProps}/> 

      </ThemeProvider>
     

      
    </ThirdwebProvider>

  ) 
}

export default MyApp
