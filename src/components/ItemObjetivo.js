import React from "react";

class ItemObjetivo extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" name="" id={this.props.itemName} />
        <label for={this.props.itemName}>{this.props.itemName}</label>
      </div>
    );
  }
}

export default ItemObjetivo;
