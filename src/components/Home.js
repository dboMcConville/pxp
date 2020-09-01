import React, { useState } from "react";
import Entry from "./Entry";
import Navbar from "./Navbar";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      logo={emojiTerm.logo}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
      code={emojiTerm.code}
      link={emojiTerm.link}
      externallink={emojiTerm.externallink}
    />
  );
}

function Home() {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <Navbar />
      <h1>
        <span>Promos by People</span>
      </h1>
      <p className="subheading">
        Discounts verified by <b>people</b> (not robots 🤖).
      </p>

      <div id="searchDiv">
        <form className="form-inline">
          {/* <i className="fas fa-search" ariaHidden="true"></i> */}
          <input
            className="searchIcon form-control form-control-sm ml-3 w-75"
            // aria-label="Search"
            type="text"
            id="myInput"
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
            placeholder="Find top promos..."
          />
        </form>
      </div>

      <div>
        <dl className="dictionary">
          {emojipedia
            .filter((emoji) => {
              return (
                emoji.name.toLowerCase().includes(filter) ||
                emoji.meaning.toLowerCase().includes(filter) ||
                emoji.tags.toLowerCase().includes(filter)
              );
            })
            .map(createEntry)}
        </dl>
      </div>
    </div>
  );
}

export default Home;
