import React from "react";
import {Card, CardTitle, Row, Col, Carousel, Button } from "react-materialize";

export default () => (
    <Row>
        <Col s={6}>
 <Card header={<CardTitle reveal image={"https://i.postimg.cc/D0LDSR8R/Takeout.jpg"} waves='light'/>}
    title="Create A Name for Yourself"
    reveal={<p>Join the Revolution, Earn Income by simply doing what you love.</p>}>
    <p><a href="/Signup">Become A Chef On our Platform</a></p>

   
</Card>
</Col>
<Col s={6}>
<Carousel options={{ fullWidth: true }} images={[
  'https://i.postimg.cc/wM1Zrb2M/Chef-background.png',
  'https://i.postimg.cc/PJbM1HTs/ChefHome.jpg',
  '../../images/IMG_0295.PNG',
  'https://lorempixel.com/800/400/food/4',
  'https://lorempixel.com/800/400/food/5'
]} />
<Button className="ChefButton">Find Chefs</Button>
</Col>
</Row>
)