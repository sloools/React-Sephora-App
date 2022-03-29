import React, { useState, useEffect ,useReducer, useCallback} from 'react';
import { Stack, Box, Typography } from "@mui/material";
import Data from "./Data"
import { GuiIcon } from "@gsretail.com/gui-icons";
import {
  GuiCard,
  GuiCardHeader,
  GuiCardContent,
  GuiCardActionArea,
  GuiCardActions,
  GuiCardMedia,
  GuiButton,
  GuiIconButton,
  GuiAvatar
} from "@gsretail.com/gui-core";

function Card({prdName, prdType, price, imageLink, prdLink}){
    
    //TO-Do : 팝업 (https://muna76.tistory.com/126)
    // const [detailLink, setDetailLink] = useState(false);

    // const showDetail = useCallback((event) => {
    //     setDetailLink(event.target.value);
    // }, [prdLink]);

    console.log(prdLink);

    return(
    <React.Fragment>
        <Stack spacing={10} direction="row"
                justifyContent="center">
          <GuiCard>
            <GuiCardActionArea>
              <GuiCardMedia 
                style={{ height:"200px", width:"200px", padding: 0, minHeight: "180px"}}
                image={imageLink}
                title="img title"
              />
              <GuiCardContent>
                <Typography variant="h5" className="subject">
                    {prdName}
                </Typography>
                <Typography variant="body2" className="subscript">
                    {prdType}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {price}
                </Typography>
              </GuiCardContent>
            </GuiCardActionArea>
          </GuiCard>
        </Stack>
      </React.Fragment>  
    );
}

function CardMedia({prds}){

    // prds.map(e => console.log(e));

    // const[prd, setPrd] = useState(null);

    // setPrd(prds);

    // const {
    //     name,
    //     product_type,
    //     price,
    //     image_link,
    //     product_link        
    //  } = prd;

    //  console.log(prd.name);

    return(
        <div>
        {prds.map(e => <Card key={e.id} 
        prdName={e.name} 
        prdType={e.product_type} 
        price={e.price} 
        imageLink={e.image_link} 
        prdLink={e.product_link}></Card>)}
        </div>
    );
};

export default CardMedia;