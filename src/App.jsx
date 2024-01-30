import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
import SearchComponent from "./components/SearchComponent";
import GithubProfileComponent from "./components/GithubProfileComponent";
import { fetchUser } from "./services";

function App() {
  const [username, setUsername] = useState("MuriithiMark");
  const [userProfile, setUserProfile] = useState();
  const [message, setMessage] = useState("Search for a user")

  const onSearch = (username) => {
    setUsername(username);
  };

  useEffect(() => {
    fetchUser(username).then((data) => {
      if (!data.success) {
        setUserProfile(() => undefined);
        setMessage(() => data.message)
        return;
      }
      setUserProfile(() => data);
    });
  }, [username]);

  return (
    <div className="app">
      <h1>Github Search Tool</h1>
      <SearchComponent onSearch={onSearch} />
      {userProfile === undefined ? (
        <div className="search-error">
          <span>{message}</span>
        </div>
      ) : (
        <GithubProfileComponent profile={userProfile} />
      )}
    </div>
  );
}

export default App;
