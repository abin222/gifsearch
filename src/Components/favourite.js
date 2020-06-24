import React, { Component } from 'react';
import './favourite.css'
import {IoIosHeart,IoIosHeartEmpty } from 'react-icons'
const Fav = props => { 
    const addFav = (props:any)=>{
        let array=favourites;
        let addArray=true;
        array.map((item: any,key: number)=>{
            if item===props
        })

    }
    
      return(
    <div>
        {favourites.includes(i)?(
            <IoIosHeart 
            onClick={()=>addFav({items,i})}
            style={{color:red}}/>
        ):(
            <IoIosHeartEmpty
            oonClick={()=>addFav({items,i})}
            style={{color:red}}/>
        )}
    </div>
      );
    }

  export default Fav;