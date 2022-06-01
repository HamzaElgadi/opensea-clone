import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'


const style ={
    wrapper:` relative flex h-[450] w-[450] cursor-pointer flex-col rounded-lg bg-white shadow-lg transition-all duration-300
    hover:shadow-2xl dark:bg-[#333333]`,
    imageContainer:`h-3/4 overflow-hidden`,
    nftImage:`rounded-t-lg object-cover`,
    nftLowerContainer:`flex h-1/4 flex-col justify-between p-4`,
    NFTInfoContainer:`flex justify-between`, 
    collectionTitle:`text-sm text-gray-500 dark:text-gray-400`,
    nftTitle:`text-sm font-bold`,
    priceContainer:`flex flex-col items-end justify-center space-y-1`,
    priceTitle:`text-xs font-light`,
    likeContainer:`flex items-center justify-end space-x-2`,
    heartIcon:`h-3 w-3 text-gray-500 dark:text-gray-400`,
    likeCounter: `text-xs text-gray-500 dark:text-gray-400`, 
    wethImageContainer:`flex items-center justify-end space-x-2`
    

}



const NFTCard = ({listing}) => {
    return (
        <div className={style.wrapper}>
            <div className={style.imageContainer}>
                <Image
                    className={style.nftImage}
                    src = {listing.asset.image}
                    height ={340}
                    width={340}
                    alt="nft"
                />                
            </div>
            <div className={style.nftLowerContainer}>
                <div className={style.NFTInfoContainer}>
                    <div>
                        {listing.asset.collection && (<div className={style.collection.title}>
                            {listing.asset?.collection?.name}    
                        </div>)}
                        <div className={style.nftTitle}>
                            {listing.asset.name}
                        </div>
                    </div>

                    <div className={style.priceContainer}>
                        <div className={style.priceTitle}> Buy at </div>
                        <div className={style.wethImageContainer}>
                            <Image
                                height={16}
                                width={16}
                                src='/weth-logo.svg'
                                alt="weth"
                            />
                        </div>
                        <div className={style.priceValue}>
                            {listing.buyoutCurrencyValuePerToken?.displayValue}
                        </div>
                    </div>
                </div>
            </div> 

            <div className={style.likeContainer}>
                <AiOutlineHeart className={style.heartIcon}></AiOutlineHeart>
                <div className={style.likeCounter}>
                    {listing.asset?.stats?.favorites ?? 0}
                </div>

            </div>
        </div>
    )
}

export default NFTCard