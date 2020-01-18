import React from "react";
import '../Buttons/index.css'

const Button = () => {
  return (
    <div>
      <table className = 'table'>
      
        <tr className= 'rows'>
          <td className = 'each'>7</td>
          <td>8</td>
          <td>9</td>
          <td>x</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>-</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>+</td>
        </tr>
        <tr>
          <td>0</td>
          <td>.</td>
          <td>=</td>
          <td>/</td>
        </tr>
      </table>
    </div>
  );
};

export default Button;
