import React, { useContext } from 'react'
import './CSS/Scategory.css'
import { ShopContext } from '../components/Context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import { Item } from '../components/Item/Item'

export const Scategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='S-category'>
       <img className='shopcategory-banner' src={props.banner} alt="" /> 
       <div className="shopcategory-indexsort">
        <p>
           <span className='shubham'>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
       </div>
       <div className="shopcategory-products">
        {all_product.map((item,i)=>{
            if (props.category===item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
        })}
       </div>
       <div className="shopcategory-loadmore">
        Explore More
       </div>
    </div>
  )
}
