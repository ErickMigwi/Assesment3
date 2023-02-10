import React, { useState } from 'react';
function User() {
  const [users, setItems] = useState([
    { name: "John Doe", id: 1, career: "Software engineer" }, 

    { name: "Jane Doe", id: 2, career: "data scientist" }, 
  
    { name: "Billy Doe", id: 3, career: "cyber security analyst" } 
  ]);

  return (
    <ul>
      {users.map(item => (
        <li >
         <h2>Name:</h2> {item.name}

         <h2>ID:</h2> {item.id}
         <h2>Career</h2> {item.career}
          </li>
      ))}
    </ul>
  );
}

export default User;

