import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'

const style = {
    wrapper:`rounded -lg border dark:border-transparent
    dark:bg-[#313339]`,
    nftHeader:`flex items-center justify-end space-x-2 `,
    hearIcon:`h-5 w-5 text-gray-500 dark:text-gray-400`,
    likeCount:`text-sm font-semibold text-gray-500 dark:text-gray-400`,
    nftImage:`rounded-b-lg object-cover`

}

const NFTImage = ({image}) => {
    
    return (
            
        <div className={style.wrapper}>

            <div className={style.nftHeader}>
                <Image height = {20} width={20} src='/eth-logo.svg' alt='eth' />
                <div className={style.likesConatainer}>
                    <AiOutlineHeart className={style.hearIcon}/>
                    <div className={style.likeCount}> 200 </div>
                </div>
             </div>
             

            <div>
                {image&&<Image
                    src={image}
                    width = {400}
                    height = {400}
                    alt = "nft"/>
                }

            </div>
        </div>
    )
}

export default NFTImage