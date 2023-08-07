import { Component } from "react";
import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import Footer from "./Footer";

const API_URL = "https://jsonplaceholder.cypress.io/users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch(API_URL).then(response => response.json()).then(users => this.setState({userList: users}));
  }

  render() {
    const { userList, searchField } = this.state;
    const filteredUsers = userList.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase()),
    );
    return (
      <>
        <div className="main">
          <h1 className="text-[8rem] text-sky-800 title">DigiBook</h1>
          <SearchBox
            placeholder="Who's your friend?"
            onSearchChange={this.onSearchChange}
          />
          <Scroll>
            <CardList cardList={filteredUsers} />
          </Scroll>
        </div>
        <Footer copyOwner={"InfiniteDebugging"} />
      </>
    );
  }
}

export default App;
