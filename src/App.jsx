import React from 'react';

const loginStatus = (status)=>{
  if (status){
    return (
     <div>
      <h1>akhon login kora acha </h1>
      <button>Logout</button>
     </div>
    )

  }else{
    return(
      <div>
        <h1>Akhon LOgout kora acha </h1>
        <button>Please Login </button>
      </div>
    )
  }
}

const App = () => {
  return (
    <div>
      {loginStatus(true)}
      
    </div>
  );
};

export default App;