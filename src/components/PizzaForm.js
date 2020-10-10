import React, { useState } from "react";
import axios from "axios";

// A name text input field
//  Validation for name - name must be at least 2 characters
//  A dropdown for pizza size
//  A checklist for toppings - at least 4 (hint: name each separately!)
//  Text input for special instructions
//  An Add to Order button that submits form and returns a database record of name, size, toppings and special instructions

const PizzaForm = () => {
  const [formStart, setFormStart] = useState({
    name: "",
    sizes: {
      small: false,
      medium: false,
      large: false,
    },
    toppings: {
      pepperoni: false,
      mushroom: false,
      anchovie: false,
      cheeseOnly: false,
    },
    instructions: "",
  });

  const handleChanges = (e) => {
    if (e.target.type === "checkbox") {
      setFormStart({
        ...formStart,
        toppings: {
          ...formStart.toppings,
          [e.target.name]: e.target.checked,
        },
      });
    } else {
      setFormStart({
        ...formStart,
        [e.target.name]: e.target.value,
      });
    }
  };


  const submitForm = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        {/* ----- NAME ----- */}

        <label htmlFor="name">
          name:
          <input
            name="name"
            type="text"
            id="name"
            value={formStart.name}
            placeholder="please enter your name."
            onChange={handleChanges}
            data-cy="name"
          />
        </label>

        {/* ----- SIZE DROPDOWN ------- */}

        <label htmlFor="sizes">
          pizza size:
          <select
            name="sizes"
            id="sizes"
            value={formStart.sizes}
            onChange={handleChanges}
            data-cy="sizes"
          >
            <option value="small" data-cy="small">
              small
            </option>
            <option value="medium" data-cy="medium">
              medium
            </option>
            <option value="large" data-cy="large">
              large
            </option>
          </select>
        </label>

        {/* ----- TOPPINGS ---- */}

        <fieldset>
          <legend>toppings:</legend>

          <label htmlFor="pepperoni">
            <input
              name="pepperoni"
              type="checkbox"
              id="pepperoni"
              onChange={handleChanges}
              data-cy="pepperoni"
            />
            pepperoni
          </label>

          <label htmlFor="mushroom">
            <input
              name="mushroom"
              type="checkbox"
              id="mushroom"
              onChange={handleChanges}
              data-cy="mushroom"
            />
            mushroom
          </label>

          <label htmlFor="cheeseOnly">
            <input
              name="cheeseOnly"
              type="checkbox"
              id="cheeseOnly"
              onChange={handleChanges}
              data-cy="cheeseOnly"
            />
            cheese only
          </label>

          <label htmlFor="anchovie">
            <input
              name="anchovie"
              type="checkbox"
              id="anchovie"
              onChange={handleChanges}
              data-cy="anchovie"
            />
            anchovie
          </label>
        </fieldset>

        {/* ---- INSTRUCTIONS ---- */}

        <label htmlFor="instructions">
          any special instructions?
          <textarea
            name="instructions"
            id="instructions"
            value={formStart.instructions}
            placeholder="anything extra special...?"
            onChange={handleChanges}
            data-cy="instructions"
          />
        </label>

        {/* ----BUTTON-------- */}

        <button type="submit" data-cy="submit">
          ready?
        </button>
      </form>
    </div>
  );
};

export default PizzaForm;
