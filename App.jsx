import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
         	<Hello></Hello>
         	<h1>Hello World!!!</h1>
         </div>
      );
   }
}

class Hello extends React.Component {
	render(){
		return (
			<h1>I Would like to say, </h1>
		);
	}
}


export default App;
