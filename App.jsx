import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
         	<Hello></Hello>
            Hello World!!!
         </div>
      );
   }
}

class Hello extends React.Component {
	render(){
		return (
			<h1>TEST10</h1>
		);
	}
}


export default App;