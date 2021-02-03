import React from 'react';

   const Issue = ({Id,Description,severity,status}) => (
        <tr>
          <td>{Id}</td>
          <td>{Description}</td>
          <td>{severity}</td>
          <td>{status}</td>
        </tr>
    );
  
export default Issue;