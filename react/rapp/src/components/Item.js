// import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// class Item extends Component {
//     state = {};
   
//     render() {
//       return (
//         <React.Fragment>
//           <ul className="list-group">
//             <li className="list-group-item list-group-item-primary">List item 1</li>
//             <li className="list-group-item list-group-item-primary">List item 2</li>
//             <li className="list-group-item list-group-item-primary">List item 3</li>
//           </ul>
//         </React.Fragment>
//       );
//     }
//   }
   
//   export default Item;

// import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.css';

// class Item extends Component {
//   state = {
//     listitems: ["Spring", "Summer", "Fall"]
//   };
 
//   render() {
//     return (
//       <React.Fragment>
//         <ul className="list-group">
//           {this.state.listitems.map((listitem, index) => (
//             <li
//               key={index}
//               className="list-group-item list-group-item-primary"
//             >
//               {listitem}
//             </li>
//           ))}
//         </ul>
//       </React.Fragment>
//     );
//   }
// }
 
// export default Item;


import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
 
class Item extends Component {
  state = {
    listitems: [
      {
        id: 0,
        context: "Primary",
        modifier: "list-group-item list-group-item-primary"
      },
      {
        id: 1,
        context: "Secondary",
        modifier: "list-group-item list-group-item-secondary"
      },
      {
        id: 2,
        context: "Success",
        modifier: "list-group-item list-group-item-success"
      },
      {
        id: 3,
        context: "Danger",
        modifier: "list-group-item list-group-item-danger"
      },
      {
        id: 4,
        context: "Warning",
        modifier: "list-group-item list-group-item-warning"
      }
    ]
  };
 
  render() {
    return (
      <React.Fragment>
        <ul className="list-group">
          {this.state.listitems.map(listitem => (
            <li key={listitem.id} className={listitem.modifier}>
              {listitem.context}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
 
export default Item;