import React from "react";
import ReactDOM from "react-dom";
import { Button, Input, List, Icon } from "antd";
import Title from "./components/Title";
import ListItem from "./components/ListItem";
import "./index.less";

class App extends React.Component {
  state = {
    data: ["json"],
    value: ""
  };

  getData = () => {
    return this.state.data.map((item, index) => (
      <ListItem
        title={item}
        key={item}
        onClick={this.deleteItem}
        index={index}
      />
    ));
  };

  changeValue = e => {
    const value = e.target.value;

    this.setState({ value });
  };

  deleteItem = index => {
    const newData = [...this.state.data];

    newData.splice(index, 1);
    this.setState(({ data }) => ({
      data: newData
    }));
  };

  addItem = () => {
    this.setState(({ data, value }) => ({
      data: data.concat(value),
      value: ""
    }));
  };

  render() {
    return (
      <div className="app">
        <Title title="Todo List" />
        <div className="add">
          <Input
            className="input"
            value={this.state.value}
            onChange={this.changeValue}
          />
          <Button type="primary" onClick={this.addItem}>
            增加
          </Button>
        </div>
        <List>{this.getData()}</List>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
