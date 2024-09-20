import Item from '../items/Item'
import './List.css'


const List = ({tvRecomendations, onClickItem}) => {
    // console.log(tvRecomendations)
    

    return(
        <div className='list'>
            <p>You'll probably like :</p>

            <div className='Items'>
                
                {
                    tvRecomendations.map(recomendation => {
                        return(
                            <Item key={recomendation.id} recomendation={recomendation} onClickItem={onClickItem} />
                        )
                    })   
                }
               
            
            </div>

        </div>
    )
}

export default List;