import { useEffect, useState } from "react";
import axios from "axios"; 
import Header from "../header/header";
import Item from "../item/item"

const Main =() => {
  const [oldSchool, setOldSchool]=useState([]);
  const [bestSeller, setBestSeller]=useState([]);
     useEffect(()=> {
        axios.get('http://localhost:1337/api/best-sellers').then((bestSeller)=>{
           setOldSchool(bestSeller.data.data)
    }).catch(()=>{      
    }).finally(()=>{
    });
    axios.get('http://localhost:1337/api/old-schools').then((oldSchools)=>{
        setBestSeller(oldSchools.data.data)
    }).catch(()=>{      
    }).finally(()=>{
    });
}, [])
    return (
        <>
             <Header/>
             <section>
                <article>best Seller</article>
                {bestSeller.map((item, key)=>{
                  return<Item item={item.attribut}/>
                })}

                <article>old School</article>
                {oldSchool.map((Item, key)=>{
                 return<Item item={Item.attribut}/>
                })}
             </section>
        </>
    )
}
export default Main;