'use client';

import React from "react";
import { Navbar, Button, Link, Text, Card, Radio  } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { icons } from "./Icons.js";


const NavbarComp = () => {
    
      
        const [variant, setVariant] = React.useState("sticky");

const variants = ["static", "floating", "sticky"];

return (
  <div className=" bg-white">
    <Navbar isBordered variant={variant}>
      <Navbar.Brand>
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link  href="#">About</Navbar.Link>
        <Navbar.Link  isActive href="#">Products</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Order Now
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
       
  
      </div>
    )
}

export default NavbarComp;