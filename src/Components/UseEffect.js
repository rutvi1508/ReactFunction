import React, { Component } from 'react';
import { useState, useEffect } from "react";



function Garage() {
    const [car, setCar] = useState({
        color: "red"
    });
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <>
            <h1>My Garage Color is {car.color}.  </h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </>
    );
}



export default Garage