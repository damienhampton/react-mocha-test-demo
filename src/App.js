import React, { useState } from "react";

const App = ({ greeting = 'Dave'}) => {
  const [subtext, setSubtext] = useState('');
  return (<div>
    <p>Hello {greeting}!</p>
    {subtext ? <p>Subtext: {subtext}</p> : ''}
    <button id="subtextButton" onClick={() => setSubtext(greeting)}>Press me</button>
  </div>);
}

export default App;