import React from "react";

import { Col, Card, Collection, CollectionItem, Icon } from "react-materialize";
import "./startup.css";

const StartUp = () => {
  return (
    <div className="container info">
      <h4 className="center">How to get Started with Chefinately</h4>
      <p>Have a current Food Service Sanitation Certificate. </p>
          
      <p> Apply for a Shared Kitchen User License and Certificate of Insurance.</p>

      <p>List of Shared Kitchens in the City of Chicago and Evanston to help you find the perfect kitchen for your needs. </p>
      

    
      <Collection>
      {/* <Icon tiny>attachment</Icon> */}
        <CollectionItem href="https://www.cityofchicago.org/city/en/depts/cdph/provdrs/healthy_restaurants/svcs/enroll_in_a_foodsanitationcertificationcourse.html">City of Chicago-Food Service Sanitation Certificate</CollectionItem>
        <CollectionItem href="https://www.cityofchicago.org/city/en/depts/bacp/sbc/business_licensing.html">City of Chicago-Shared Kithen User License</CollectionItem>
        <CollectionItem href="https://www.cityofevanston.org/government/departments/health-human-services/preserve/food-service-manager-certification">City of Evanston-Food and Sanitation Certificate</CollectionItem>
        <CollectionItem href="https://www.cityofevanston.org/government/departments/health-human-services/protect/permits-licenses/shared-kitchens">City of Evanston- Shared Kitchen User License</CollectionItem>
        <CollectionItem href="http://chicagosmokekitchen.com/wp-content/uploads/2015/11/Insurance-Requirements-for-Shared-Kitchen.pdf">Sample-Certificate of Insurance</CollectionItem>
        {/* <CollectionItem href="/">Shared Kitchen List</CollectionItem> */}
      </Collection>

<h4>Shared Kitchen List</h4>
      <Collection>
        <CollectionItem href="http://chicagosmokekitchen.com/" >Chicago Smoke Kitchen </CollectionItem>
        <CollectionItem href="http://kitchenchicago.com/" >Kitchen Chicago</CollectionItem>
        <CollectionItem href="https://www.mykitchensllc.com/">My Kitchens</CollectionItem>
        <CollectionItem href="https://edgeofsweetness.com/">Edge of Sweetness Bakery-Kitchen-Coffee</CollectionItem>
        <CollectionItem href="http://www.lakeviewkitchenandmarket.com/">LakeView Kitchen and Market</CollectionItem>
        <CollectionItem href="http://www.mypremiercaterer.com/premier-shared-kitchen/">Premier Catering and Events</CollectionItem>
        <CollectionItem href="http://shareddreamkitchen.com/">Shared Dream Kitchen</CollectionItem>
        <CollectionItem href="http://www.feastandimbibe.com/commissary/">Feast and Imbibe- Evanston's Shared Kitchen</CollectionItem>
        
      </Collection>


      
    </div>
  );
};





export default StartUp;
  /* <Col m={6} s={12}>
        <Card
          //   className="blue-grey darken-1"
          //   textClassName="white-text"
          title="Chefs"
          actions={[<a href="#">This is a link</a>]}
        >
          <Collection header="First Names">
            <CollectionItem>Alvin</CollectionItem>
            <CollectionItem>Alvin</CollectionItem>
            <CollectionItem>Alvin</CollectionItem>
            <CollectionItem>Alvin</CollectionItem>
          </Collection>
        </Card>
      </Col> */

