import React from "react";
import { Card, Row, Text } from "@nextui-org/react";
import { Modal, Button, Image} from "@nextui-org/react";


const ProductCard = ({item}) => {

    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
    return(
        <div>
        <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={"https://nextui.org" + item.img}
                  objectFit="cover"
                  width="100%"
                  height={200}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {item.price}
                  </Text>
                  <Button auto shadow onPress={handler}>
                Read More
              </Button>
                </Row>
              </Card.Footer>
            </Card>

            <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
            >
            <Modal.Header>
            <Text id="modal-title" size={18}>
            {item.title}
            </Text>
            </Modal.Header>
            <Modal.Body>
             
            <Image
                width={320}
                height={180}  
                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                alt="Default Image"
                objectFit="cover"
            />
                <div></div>
           
            
            </Modal.Body>
            <Modal.Footer>
            <Button auto flat color="error" onPress={closeHandler}>
                Close
            </Button>
            <Button auto onPress={closeHandler}>
                Sign in
            </Button>
            </Modal.Footer>
            </Modal>

            </div>
    )
}

export default ProductCard;