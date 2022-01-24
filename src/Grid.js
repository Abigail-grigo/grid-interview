import React from 'react';

const Grid = ({ config, data }) => (

  <table>
    <thead>
      <tr>
        {config.map((item, index) => {
          return <td key={index}>{item.title}</td>
        })}
      </tr>
    </thead>
    <tbody>
      {data.map((dItem, dIndex) => {
        {
          return <tr key={dIndex}>
            {config.map((cItem, cIndex) => {
              return <td key={cIndex}> {cItem.component ? cItem.component({data:dItem[cItem.field]}) : dItem[cItem.field]}</td>
            })}
          </tr>
        }
      })}
    </tbody>
  </table>
);

export default Grid;