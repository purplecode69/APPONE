import React from 'react';

const Contauct = () => {
    return (
        <div>


            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <textarea placeholder="Enter your message"></textarea>
            <button onClick={()=>alert("Hello")} type="submit">Submit</button>
            
        </div>
    );
};

export default Contauct;