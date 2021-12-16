import React from 'react';
import './UserData.css';

const UserData = ({Repos}) => {
    return (
  <div className='primary'> 
  <table>
  <thead>
  {Repos.length > 0 ?
    <tr>
      <th>REPO NAME</th>
      <th>LANGUAGE</th>
      <th>DESCRIPTION</th>
    </tr> : ' '
}
  </thead>
  <tbody>
      {Repos.length > 0 && Repos.map(data => {
       return(<tr key={data.id}>
      <td>{data.name}</td>
      <td>{data.language}</td>
      <td>{data.description}</td>  
      </tr>
       )
    })}
  </tbody>
  </table>
  </div>
    )
};

export default UserData;