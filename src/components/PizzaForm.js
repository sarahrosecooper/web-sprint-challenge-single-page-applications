import React from "react";

// A name text input field
//  Validation for name - name must be at least 2 characters
//  A dropdown for pizza size
//  A checklist for toppings - at least 4 (hint: name each separately!)
//  Text input for special instructions
//  An Add to Order button that submits form and returns a database record of name, size, toppings and special instructions

const PizzaForm = () => {
  return (
    <div>
      <form onSubmit="">
        {/* ----- NAME ----- */}

        <label htmlFor="name">
          name:
          <input
            name="name"
            type="text"
            id="name"
            value=""
            placeholder="please enter your name."
            onChange=""
            data-cy="name"
          />
        </label>

        {/* ----- SIZE DROPDOWN ------- */}

        <label htmlFor="sizes">
          pizza size:
          <select
            name="sizes"
            id="sizes"
            value=""
            defaultValue="large"
            onChange=""
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
              onChange=""
              data-cy="pepperoni"
            />
            pepperoni
          </label>

          <label htmlFor="mushroom">
            <input
              name="mushroom"
              type="checkbox"
              id="mushroom"
              onChange=""
              data-cy="mushroom"
            />
            mushroom
          </label>

          <label htmlFor="cheeseOnly">
            <input
              name="cheeseOnly"
              type="checkbox"
              id="cheeseOnly"
              onChange=""
              data-cy="cheeseOnly"
            />
            cheese only
          </label>

          <label htmlFor="anchovie">
            <input
              name="anchovie"
              type="checkbox"
              id="anchovie"
              onChange=""
              data-cy="anchovie"
            />
            anchovie
          </label>
        </fieldset>

        {/* ---- INSTRUCTIONS ---- */}

        <label htmlFor="instructions">
          any special instructions?
          <text
            area
            name="instructions"
            id="instructions"
            value=""
            placeholder="anything extra special...?"
            onChange=""
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
