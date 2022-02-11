import React from "react";

export default class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Friends</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        );
    }
}