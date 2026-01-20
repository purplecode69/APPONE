import React from 'react';

const App = () => {
  let  status = true;

  return (
    <div>
      <h1>Login Status </h1>
      {status && <button>LogOut</button>}

      
    </div>
  );
};

export default App;