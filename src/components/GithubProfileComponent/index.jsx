import React from "react";
import "./index.css";
import TwitterIcon from "../icons/TwitterIcon";
import GithubIcon from "../icons/GithubIcon";

const GithubProfileComponent = ({ profile }) => {
  const { avatar_url, name, bio, login, twitter_username } = profile;
  return (
    <div className="github-profile">
      <div className="side-bar">
        <img src={avatar_url} alt="" />
        <span>{name}</span>
        <div className="socials">
          <a href={`https://github.com/${login}`}>
            <GithubIcon width={20} height={20} color="black" />
          </a>
          {twitter_username && (
            <a href={`https://twitter.com/${twitter_username}`}>
              <TwitterIcon width={20} height={20} color="black" />
            </a>
          )}
        </div>
        {bio && (
        <blockquote>
          {bio}
        </blockquote>
        )}
      </div>
      <div className="main-section"></div>
    </div>
  );
};

export default GithubProfileComponent;
