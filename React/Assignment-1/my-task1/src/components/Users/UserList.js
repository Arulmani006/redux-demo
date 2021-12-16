import React from 'react';

import Card from '../UI/Card';
import classes from './UserList.module.css';

const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((x) => (
                    <li key={x.id}>
                       {x.name} ({x.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UserList;