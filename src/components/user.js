import React from "react";
/*
const usersDBFull = [
{id:1, username:'Art', firstname:'Serge', lastname:'Artikhovich',year:'1974'},
{id:2, username:'Begenot', firstname:'Boris', lastname:'Beginner',year:'1980'},
{id:3, username:'Dry', firstname:'Diana', lastname:'Dry',year:'1996'}
];

*/
const usersDBFull = [
{id:1, username:"Art", firstname:"Serge", lastname:"Artikhovich", year:1974 },
{id:2,username:"Begenot",firstname:"Boris",lastname:"Beginner",year:1980},
{id:3,username:"Dry",firstname:"Diana",lastname:"Dry",year:1996}
];


  const validChildrenToRender = {
    string: 'string',
    number: 12,
    element: <div>an element!</div>,
    funcThatReturnsValidChild: () => <div>a component!</div>,
  }

const usersDB = ["Art", "Begenot", "Dry"];

export default function User(){
    return(
        <div className="user">
            <ul className="list-users-items">

            {usersDBFull.map((user) =>
                    <li 
                        key={user.id}
                        className="user-item"
                        >
                        <div className="title">
                            <span className="id">{user.id}: </span>
                            <span className="username">{user.username}</span>
                            <span className="year">( {user.year} )</span>
                        </div>
                        <div className="names">
                            <span className="firstname">{user.firstname}</span>
                            <span className="lastname">{user.lastname}</span>
                        </div>
                    </li>
                )
            }</ul>
            </div>
    );
}
