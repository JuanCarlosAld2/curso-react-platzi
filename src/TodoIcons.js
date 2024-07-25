import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcons.css'

const iconTypes = {

    check: (color)=><CheckSVG  className='Icon-svg' fill={color}/>, // fill=  establecer el color de los íconos SVG 
    delete:(color)=><DeleteSVG className='Icon-svg' fill={color}/>

}

function TodoIcons({type, color, onClick,text}) {
    return (
        <span className={`Icon-container Icon-container-${type}`} onClick={()=>onClick(text)}>
            {iconTypes[type](color)}
        </span>
    )
    
}

export { TodoIcons }