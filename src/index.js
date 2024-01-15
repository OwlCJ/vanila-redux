import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");

const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
  }
};

const countStore = createStore(countModifier);

add.addEventListener("click", () => {
  countStore.dispatch({ type: "add" });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: "minus" });
});

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
