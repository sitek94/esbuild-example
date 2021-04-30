import * as React from 'react';
import * as Server from 'react-dom/server';

function Greet() {
  return <h1>Hello, world!</h1>;
}

console.log(Server.renderToString(<Greet />));
