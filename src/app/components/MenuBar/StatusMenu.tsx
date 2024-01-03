import controlIcon from './icons/controlc.svg'
import Image from 'next/image'

export const StatusMenu = () => {
    return (
        <div>
            <Image src={controlIcon} alt="Control Icon" width={18}/>
        </div>
    )
}
