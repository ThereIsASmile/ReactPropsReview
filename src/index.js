// 1.) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2.) Get reference to the div with the ID root
const el = document.getElementById('root');

// 3.) Tell React to control of the element
const root = ReactDOM.createRoot(el);

// 4.) Create a Component
function App() {
  const inputType = "number";
  const minValue = 5;

  return (
    <div className="bg-dark container-fluid p-2 text-center">
      <h2 className='text-light'>Customizing Elements with Props</h2>

      <div className="bg-warning container-md p-2 text-center">
        <h5>Props written in the element: Strings and Numbers</h5>
        <p>When using props in the element, strings need to be in double quotes and numbers need to be in curly braces. </p>
        <input type="number" min={5} max={10} />
      </div>

      {/* <div className="bg-primary container-md p-2 text-center">
        <h5>Props written in the element: Arrays</h5>
        <p>Arrays inside props needs to be in curly braces AND square brackets. </p>
        <input type="number" list={[19,12,33,14]} />
      </div> */}

      <div className="bg-primary container-md p-2 text-center">
        <h5>Props written in the element: Objects</h5>
        <p>When using props in the element, objects need to be in double curly braces. </p>
        <p>This will not display the object, instead it will us the object in props.</p>
        <input type="number" style={{ border:' 2px dashed green' }} />
      </div>

      <div className="bg-info container-md p-2 text-center">
        <h5>Props written by declaring variables.</h5>
        <p>Variables need to be wrapped with curly braces.</p>
        <input
          type={inputType}
          min={minValue}
        />
      </div>
    </div>
  );
}

// for plain html to create an input that accepts numbers
// <input type="number">
// to make this in jsx this can be written using props/properties
// <input type="number" min={5} max={10} />

// 5.) Show Component on the screen/viewport
root.render(<App />);