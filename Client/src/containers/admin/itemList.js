import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from '../../components/box'
import { faDolly } from '@fortawesome/free-solid-svg-icons'

const ItemList = ()=>{
    const [itemList, setItemList] = useState([])

    const fetchData = async()=>{
        const response = await fetch("http://localhost:4000/items")
        const data = await response.json()

        if(data){
            setItemList(data.itemList)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return(
        <section>
            <div className='container'>
                <div className='orderList'>
                    <h1 className='title'><i><FontAwesomeIcon icon={faDolly}/></i> &nbsp; Item List</h1><br/>
                    {itemList.length > 0 ? itemList.map((item, id)=>{
                        return(
                            <Box item={item} fetchData={fetchData}/>
                            )
                    }): 'list not found'}
                </div>
            </div>
        </section>
    )
}

export default ItemList;