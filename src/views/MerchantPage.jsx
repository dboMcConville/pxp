import React, { useState } from "react";
import CodeCard from "../components/CodeCard";
import emojipedia from "../emojipedia";
import Navbar from "../components/Navbar";

function createCard(emojiTerm) {
  return (
    <CodeCard
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
function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

var location = titleCase(window.location.pathname.replace("/", ""));
location = location === "Doordash" ? "DoorDash" : location;
location = location === "Home_chef" ? "Home Chef" : location;
location = location === "Fetch_rewards" ? "Fetch Rewards" : location;
location = location === "Cash_app" ? "Cash App" : location;

function MerchantPage() {
  const [filter] = useState(location.toLowerCase());

  return (
    <div>
      <Navbar />
      <h1>{location}</h1>
      <div className="cardSection">
        {emojipedia
          .filter((emoji) => {
            return (
              emoji.name.toLowerCase().includes(filter) ||
              emoji.meaning.toLowerCase().includes(filter) ||
              emoji.tags.toLowerCase().includes(filter)
            );
          })
          .map(createCard)}
      </div>
    </div>
  );
}

export default MerchantPage;
