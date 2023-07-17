'use client';
import { Card, Grid, Row, Text } from "@nextui-org/react";

import { Tabs } from 'flowbite-react';
import { HiBookOpen } from 'react-icons/hi';
import Category from "./Category";
import { useEffect, useState } from "react";

export default function Products() {
  const list = [
    {
      title: "WEEGO A4 BOOK CR 40PGS (=) SINGLE RULED",
      img: "/images/fruit-1.jpeg",
      price: "Rs.145.00",
      category: "CR Books"
    },
    {
      title: "WEEGO B5 BOOK 80PGS (=) SINGLE RULED",
      img: "/images/fruit-1.jpeg",
      price: "Rs.145.00",
      category: "B5 Books"
    },
    {
      title: "WEEGO B5 BOOK 120PGS (=) SINGLE RULED",
      img: "/images/fruit-1.jpeg",
      price: "Rs.145.00",
      category: "B5 Books"
    },
    {
      title: "WEEGO A5 BOOK CR 40PGS (=) SINGLE RULED",
      img: "/images/fruit-1.jpeg",
      price: "Rs.145.00",
      category: "A5 Books"
    },
    {
      title: "WEEGO A5BOOK CR 80PGS (=) SINGLE RULED",
      img: "/images/fruit-1.jpeg",
      price: "Rs.145.00",
      category: "A5 Books"
    },
    {
      title: "WEEGO A5BOOK CR 80PGS (=) SINGLE RULED",
      img: "/images/fruit-1.jpeg",
      price: "Rs.145.00",
      category: "A5 Books"
    }
  ];

  const [products, setProducts] = useState({});

  let categories = [
    ...new Set(list.map(item => {
      return item.category;
    }))
  ];

  function loadData(){
    const data = {}
    categories.forEach((category) => {
      data[category] = []
      list.forEach(item => {
        if(item.category == category){
          data[category].push(item);
        }

      });
    
    })
    setProducts(data);
  }

  useEffect(() => {
    loadData()
  },[]);

  console.log(products)

  return (
    <div className='container mx-auto p-8'>
      <Tabs.Group
      aria-label="Tabs with icons"
      style="pills"
      className=' mx-auto '
    >
      { categories.map(category => (
        <Tabs.Item active title={category}>
          <Category data={products[category]} />
          {/* TODO: get data by a proper way */}
        </Tabs.Item>
      ))}

      
       
     
    </Tabs.Group>

    
    </div>
  )
}


