import { emojiList } from "./data.js";

let emojisContainer = document.querySelector(".emojis-container");
let searchInput = document.getElementById("search-input");
let btnsContainer = document.querySelector(".btns-container");




function updateUI(check) {
  let word = "";
  word = check === "" ? searchInput.value.toLowerCase() : check.toLowerCase();
  if (word === "all") word = "";
  let filteredEmojiList = emojiList.filter((eachEmojiObj) => {
    return (
      eachEmojiObj.description.includes(word) ||
      eachEmojiObj.category.includes(word) ||
      eachEmojiObj.aliases.join("").includes(word) ||
      eachEmojiObj.tags.join("").includes(word)
    );
  });
  console.log(filteredEmojiList);
  emojisContainer.innerHTML = "";
  filteredEmojiList.forEach((obj) => {
    let eachEmojiDiv = document.createElement("div");
    eachEmojiDiv.className = "each-emoji-container";
    eachEmojiDiv.innerText = obj.emoji; 
    emojisContainer.append(eachEmojiDiv);
    eachEmojiDiv.addEventListener('click',()=>{
      alert(eachEmojiDiv.innerText);
      navigator.clipboard.writeText(eachEmojiDiv.innerText);
    })
  });
}

updateUI("");
searchInput.addEventListener("keyup", () => updateUI(""));

btnsContainer.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    if (e.target.innerText === "All") {
      updateUI("All");
    } else if (e.target.innerText === "Heart") {
      updateUI("Heart");
    } else if (e.target.innerText === "Face") {
      updateUI("Face");
    } else if (e.target.innerText === "Book") {
      updateUI("Book");
    } else if (e.target.innerText === "Hand") {
      updateUI("Hand");
    } else if (e.target.innerText === "Sports") {
      updateUI("Sports");
    } else if (e.target.innerText === "Flag") {
      updateUI("Flag");
    }
  }
});


  