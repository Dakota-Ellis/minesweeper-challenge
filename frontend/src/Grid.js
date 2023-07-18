import React from 'react';
import './Grid.css';

const Grid = () => {
    return (
   <div className="grid">
       {Array.from({ length: 10 }, (_, row) => (
         <div key={row} className="row">
           {Array.from({ length: 10 }, (_, col) => (
             <button key={col} className="button">

             </button>
           ))}
           </div>
       ))}
   </div>
 );
 };

 export default Grid;