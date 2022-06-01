import { Disclosure } from "@headlessui/react"
import {BiChevronUp , BiChevronDown} from 'react-icons/bi'
import { BsFillBookFill } from "react-icons/bs"
import { GrTextAlignLeft } from "react-icons/gr"
import Dropdown from './Dropdown'

const style = {
    wrapper:`flex flex-col divide-y rounded-lg overflow-hidden border dark:divide-black dark:border-black`,
    icon:`h-5 w-5 text-gray-600`,

}

const NFTDetails = () => {
    const dropdownData = [
        {
            title:'Description',
            icon: <GrTextAlignLeft className={style.icon}/>

        },
        {
            title: 'Properties',
            icon : <BsFillBookFill className={style.icon}/>
        }
    ]

    return(
        <div className={style.wrapper}>
            {dropdownData.map((item,index)=>(
                <Dropdown key={index} title={item.title} icon={item.icon}/>
            ))}

        </div>
    )
}

export default Dropdown