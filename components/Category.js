'use client';

import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Tabs } from 'flowbite-react';

import React from "react";
import { Modal, Button,  Input,  Checkbox } from "@nextui-org/react";
import ProductCard from "./Card";


const Category = ({data}) => {

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

    return(

      <div>
    
       <Grid.Container gap={2} justify="flex-start">
      {data?.map((item, index) => {
          return(
            <Grid xs={6} sm={3} key={index}>
             <ProductCard item={item} />
          </Grid>
          )
        
      }
       )}
    </Grid.Container>

    
    </div>
      
    )
}

export default Category;