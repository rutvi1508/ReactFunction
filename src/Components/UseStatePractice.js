import { useState, useEffect } from "react";



function FavoriteColor() {
  const [color, setColor] = useState("red");


  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });


  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }


  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer)
  }, []);


  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>

      <button
        type="button"
        onClick={updateColor}
      >Blue</button>

      <h1>I've rendered {count} times!</h1>
    </>
  )
}

export default FavoriteColor