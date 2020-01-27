// import React, { Component } from "react";
// import "./todo.css";
// class Todo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       currentItem: {
//         text: "",
//         key: ""
//       }
//     };
//     this.addItem = this.addItem.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//     this.setUpdate = this.setUpdate.bind(this);
//     }

//      handleInput(e)
//       {
//       this.setState({
//         currentItem: {
//          text: e.target.value,
//         key: Date.now()
//         }
//      });

//   addItem(e)
//    {
//     e.preventDefault();
//     const newItem = this.state.currentItem;
//     if (newItem.text !== "") {
//       const items = [...this.state.items, newItem];
//       this.setState({
//         items: items,
//         currentItem: {
//           text: "",
//           key: ""
//         }
//       });
//     }

//     deleteItem(key)
//     {
//       const filteredItems = this.state.items.filter(item => item.key !== key);
//       this.setState({
//         items: filteredItems
//       });
//     }
//     setUpdate(text, key)
//      {
//       console.log("items:" + this.state.items);
//       const items = this.state.items;
//       items.map(item => {
//         if (item.key === key) {
//           console.log(item.key + "    " + key);
//           item.text = text;
//         }
//       });
//       this.setState({
//         items: items
//       });
//   }
//   render()
//   {
//     return (
//       <div className="Todo">
//         <form id="to-do-form" onSubmit={this.addItem}  >
//           <input
//            type="text"
//             placeholder="Enter your task"
//             value= {this.state.currentItem.text}
//             onChange={this.handleInput}/>
//           <button type="submit">Add</button>
//         </form>
//         <p>{}</p>
//       </div>
//     );
//   }

// export default Todo;
