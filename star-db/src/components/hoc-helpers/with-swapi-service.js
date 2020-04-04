import React from 'react';
import { SwapiServiceComsumer } from '../swapi-service-context';

const withSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceComsumer>
        {
          (swapiService) => {
            const serviceProps = mapMethodsToProps(swapiService);
            return (
              <Wrapped {...props} {...serviceProps}/>
            );
          }
        }
      </SwapiServiceComsumer>
    )
  }
}

export default withSwapiService;