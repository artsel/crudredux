import React from "react";
const usersDB = ['Art','Begenot','Dry'];

export default function User(){

    return(
        <div className="user">
            <ul className="list-users-items">

            {usersDB.map((username, index) =>
                    <li 
                        key={index}
                        className="useritem"
                        >
                            {username}
                    </li>
                )
            }</ul>
            </div>
    );
}
