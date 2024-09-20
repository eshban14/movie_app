

import Listitem from "../list_item/Listitem"

import "./List.css"

const List = () => {
    return(
        <div className="list">
            <p>May you like these ones</p>

            <div className="Items">

                <Listitem/>

            </div>
        </div>
    )
}

export default List;