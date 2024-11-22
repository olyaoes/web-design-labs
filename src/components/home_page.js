import React from "react";


const HomePage = () => {
    const logo = process.env.PUBLIC_URL + '/img/photoflowers.jpg';
    return (
        <main className="home">
            <img className="home-logo" src={logo} alt="Brand Logo" />
            <div className="home-description">
                <h1 className="title">World of Flowers</h1>
                <p className="description">Our Flower Guide helps you discover the connection between your<br /> 
                unique preferences and different types of flowers. <br />
                Find the blooms that perfectly reflect your style and personality. </p>
            </div>
        </main>
    )
}

export default HomePage;