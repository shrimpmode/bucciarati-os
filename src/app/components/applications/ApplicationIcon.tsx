
import Image, { StaticImageData } from "next/image"

export type ApplicationIconProps = {
    src: string | StaticImageData
    alt: string
} 

export const ApplicationIcon = (props: ApplicationIconProps) => {
    const {src, alt}= props

return (
        <div>
            <Image src={src} alt={alt} height={48} width={48} />
        </div>
)
}
