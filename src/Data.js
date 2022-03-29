import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardMedia from "./CardMedia"

// function Product({prd}){

//     const {
//         name,
//         product_type,
//         price,
//         image_link,
//         product_link        
//      } = prd;

//      const each_prd = 

//     // console.log(name);
//     // console.log(product_type);
//     // console.log(prd)

//     return(
//         name
//     );
// }

function Data(){

    const[cosmetics, setCosmetics] = useState(null);

    const getData = async () => {
        const response = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');

        setCosmetics(response.data);
    };


    useEffect(() => {
            try{
                getData();
            }catch (e){
                console.log("Error");
            }   
    }, []);

    // console.log(cosmetics);
    // const row_data = cosmetics;
    // console.log(cosmetics[0]);
    // const prd = row_data.map(val => val);

    return(
        cosmetics && <CardMedia prds={cosmetics}></CardMedia>
            // cosmetics && cosmetics.map( e=> e)
    );
}

export default Data;