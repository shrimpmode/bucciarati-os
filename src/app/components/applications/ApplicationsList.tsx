import {apps} from '../applications/apps'
import { ApplicationIcon } from "./ApplicationIcon"

export const ApplicationsList = () => {
    return (
        <>
        {
            apps.map((app) => {
                   return (<ApplicationIcon src={app.iconSrc} alt={app.name} key={app.name}/>)
            })
            } 
        </>
    )
}
