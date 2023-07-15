'use client';

import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Tabs } from 'flowbite-react';


const Category = ({data}) => {
    return(
    
       <Grid.Container gap={2} justify="flex-start">
      {data?.map((item, index) => {
          return(
            <Grid xs={6} sm={4} key={index}>
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={"https://nextui.org" + item.img}
                  objectFit="cover"
                  width="100%"
                  height={300}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {item.price}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          )
        
      }
       )}
    </Grid.Container>
      
    )
}

export default Category;