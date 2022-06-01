import {useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import { useAddress, useMarketplace } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import TopNavbarLayout from '../../../layouts/TopNavbarLayout'
import NFTImage from '../../../components/NFTDetails/NFTImage'
import { Marketplace } from '@thirdweb-dev/sdk'
import NFTSalesInfo from '../../../components/NFTDetails/NFTSalesInfo'
import NFTDetails from '../../../components/NFTDetails/NFTDetails'
import NFTBasicinfo from '../../../components/NFTDetails/NFTBasicinfo'

const style =  {
    wrapper:`h-[100vh] mx-auto flex max-w-2xl flex-col space-y-4 py-4 dark:bg-[#202226] lg:max-w-none lg:py-8 lg:px-24`,
    nftContainer:`flex flex-col lg:flex-row lg:space-x-4`,
    leftContainer:`flex flex-col space-y-4`,
    leftElement:`hidden lg:block`,
    rightContainer:`flex flex-1 flex-col space-y-4`,
    buyoutContainer:`flex-1`

}



const NFT = ()=>{
 
    const [listing, setListing] = useState()
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { tokenID } = router.query
    
    


    const marketplace = useMarketplace('0x66a5779cB9Df2fA79101d7DBa7B14d2D87B61cE5')
    
    const address = useAddress() 
    
    useEffect(()=>{
        getListing()
    },[])

    
    

    
    
    const getListing = async () => {
        try{
            setLoading(true)
            const listing = await marketplace.getListing(BigNumber.from(tokenID))
            setListing(listing)
            setLoading(false)
            console.log("running")
        }
        catch(e){
            console.log(e)
        }    
    }

    const buyNFT = async () => {
        try{
            await marketplace.buyoutListing(tokenID, 1)
        } catch(error){
            console.log(error)
        }


    }



    return(
        <TopNavbarLayout>
            <div className={style.wrapper}>
                {loading ? (
                    <div> LOading...</div>
                ) : (
                <div className={style.nftContainer}>
                    <div className= {style.leftContainer}>
                        <div className= {style.leftElement}>
                            <NFTImage  image={listing?.asset?.image }/>

                        </div>
                        <div className={style.leftElement}>
                            <NFTDetails/>
                        </div>
                    </div>
                    <div className={style.rightContainer}>
                        <NFTBasicinfo name={listing?.asset?.name}/>  
                       <div className={style.buyoutContainer}>
                            <NFTSalesInfo price = {listing?.buyoutCurrencyValuePerToken?.displayValue} buyNFT= {buyNFT}/>
                       </div>

                    </div>
                </div>
                )}
            </div>
             
        </TopNavbarLayout>
        
    )
    
}

export default NFT