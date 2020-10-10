import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import PizzaForm from "./components/PizzaForm";

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <Navigation />

      <Route path="/pizza" render={() => <PizzaForm />} />
      <Route exact path="/" render={() => <Homepage />} />
    </div>
  );
};
export default App;
