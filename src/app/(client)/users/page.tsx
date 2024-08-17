import React from 'react';
import {getAllUsers} from "@/services/api.service";
import Link from "next/link";

const UsersPage = async () => {

    let allUsers = await getAllUsers();

    return (
        <div>
            <ul>

                {
                    allUsers.map(value => <li key={value.id}>
                        {value.username} <Link href={{pathname: '/users/' + value.id, query: {data: JSON.stringify(value)}}}><button>More Info</button></Link>
                    </li>)


                }
            </ul>
        </div>
    );
};

export default UsersPage;
