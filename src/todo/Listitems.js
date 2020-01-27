// import React from 'react';

// function ListItems(props)
// {
//     const items = props.items;
//     const listItems = items.map(item =>
//    {

//        return (
//        <div className="list" key={item.key}>
//      <p>
//          <input type="text" id={item.key} value={item.text} onChange={(e)=>{
//              props.setUpdate(e.target.value,item.key)}}/>
//         <span>

//         <div className="faicons" onClick={() => {
//             props.deleteItem(item.key)
//         }} icon="trash" />
//         </span>
//      </p>

//     </div>)
//     return <div>(
//         <p duration={300} easing="ease-in-out">
//         {listItems}
//         </p>

//     </div>);
//   }
//   export default ListItems;
