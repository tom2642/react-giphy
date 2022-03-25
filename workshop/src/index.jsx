import React from 'react';
import ReactDom from 'react-dom';

import '../assets/stylesheets/application.scss';

const root = document.getElementById('root');

// rsc
const Hello = (props) => {
  const { name, age } = props;
  const msg = `Hello ${name} and I'm ${age}`;
  return <h1>{msg}</h1>;
};

// rcc
// class Hello extends React.Component {
//   render() {
//     const { name, age } = this.props;
//     const msg = `Hello ${name} and I'm ${age}`;
//     return <h1>{msg}</h1>;
//   }
// }

ReactDom.render(<Hello name="Ryan" age="10" />, root);
