
import styles from '../styles/Home.module.css'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import Main from '../components/Home/index'

const style = {
  wrapper: `flex h-screen items-center justify-center`,
  connectWalletButton: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  
}

export default function Home() {
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  console.log(address)
  console.log("Connect your wallet ")

  const Auth = ()=>{
    return(
      <div className={style.wrapper}>
        <button onClick={connectWithMetamask} className={style.connectWalletButton}>
           Connect your wallet please
        </button>
      </div>
    )     
  }
  return <>{address ? <Main/> : Auth()} </>
}
