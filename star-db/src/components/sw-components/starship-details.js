import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import { withSwapiService } from '../hoc-helpers';


const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};


export default withSwapiService(StarshipDetails, mapMethodsToProps);
