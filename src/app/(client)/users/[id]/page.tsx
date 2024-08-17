import React from 'react';


const UserPage = ({searchParams}: any) => {
    let user = JSON.parse(searchParams.data);
    console.log(user);
    return (
        <div>
           <h1> Details about User with id: {user.id}</h1>
            <p1>{user.name}</p1><br/>
            <p1>{user.email}</p1>
        </div>
    );
};

export default UserPage;
