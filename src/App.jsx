import { Component } from "react";
import "./App.css";
import Hello from "./Hello";
import CardList from "./CardList";
import { users } from "./placeholders";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userList: users,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    return (
      <>
        <h1 className="text-3xl font-bold">DigiBook</h1>
        <SearchBox
          placeholder="Who's your friend?"
          onSearchChange={this.onSearchChange}
        />
        <CardList cardList={filteredUsers} />
      </>
    );
  }
}

export default App;
