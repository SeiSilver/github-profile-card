import Card from "./Card";
import React from 'react';

const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
);

export default CardList;
