import React from 'react';


function Home(props) {

  const routeToLogin = event => {
    event.preventDefault();
    props.history.push('/login');
  };

  const routeToRegister = event => {
   event.preventDefault();
   props.history.push('/register');
 };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt=""
      />
      <button onClick={routeToLogin} className="md-button shop-button">
        Login
      </button>
      <button onClick={routeToRegister} className="md-button shop-button">
        Register
      </button>
    </div>
  );
}

export default Home;
