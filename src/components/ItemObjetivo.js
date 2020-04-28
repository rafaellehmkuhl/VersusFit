import React from "react";

class ItemObjetivo extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.itemName}</li>
        <input type="checkbox" name="" id="" />
      </div>
    );
  }
}

export default ItemObjetivo;
