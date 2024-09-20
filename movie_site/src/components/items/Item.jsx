import './Item.css'
import {BACKDROP_BASE_URL} from '../../config'
const MAX_TITLE_CHAR = 30

const Item = ({recomendation, onClickItem}) => {
    
    return(
        
        <div className='item' style={{backgroundImage: `url(${BACKDROP_BASE_URL}${recomendation.backdrop_path})`}} onClick={() => onClickItem(recomendation)}>
           
            
            <div className="item_title">
                
                {
                    recomendation.name.length > MAX_TITLE_CHAR
                    ? recomendation.name.slice(0, MAX_TITLE_CHAR) + "..."
                    : recomendation.name
                }
                
               
            </div>
        </div>
    )
}

export default Item;