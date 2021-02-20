import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>{name} in Swan</h1>
      <h1>{rating}/5</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string,
};

const foodIlike = [
  {
    name: "kimchi",
    image: "https://www.sbstore.net/data/goods/20/11/47//1000001009/register_detail_08.png",
    id: "0001",
    rating: 5,
  },
  {
    name: "samgubsal",
    image: "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
    id: "0002",
    rating: 4.9,
  },
  {
    name: "chicken",
    image: "https://miro.medium.com/max/1838/1*2kHAAe4MpPTXMpeIeULegg.jpeg",
    id: "0003",
    rating: 4.8,
  },
];

function renderfood(dish) {
  console.log(dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image} alt={dish.name} rating={dish.rating}></Food>;
}

function App() {
  console.log(">>>>>" + foodIlike.map(renderfood));
  return (
    <div>
      <h1>Hi swan!!!!</h1>
      {foodIlike.map(renderfood)}
    </div>
  );
}

export default App;
