import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const UsersList = ({users}) => {

   return(
    <ListGroup>
        {users.map((user)=>{
            return <ListGroupItem key={user.id}>{user.firstName}</ListGroupItem>
        })}
    </ListGroup>
   )

};

export default UsersList;