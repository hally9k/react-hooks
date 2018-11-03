// @flow
// $FlowTODO flow types for hooks not in alpha yet.
import React, { useState } from "react";
import { hot } from "react-hot-loader";

function App(props) {
  const [name, setName] = useState("hally9k");
  function handleNameChange({ target: { value } }) {
    setName(value);
  }

  return (
    <form>
      <input value={name} onChange={handleNameChange} />
    </form>
  );
}

export default hot(module)(App);
