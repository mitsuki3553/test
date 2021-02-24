import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputText;

  const backButton = document.createElement("button");
  backButton.innerText = "戻る";

  backButton.addEventListener("click", () => {
    const backtarget = backButton.parentNode;
    document.getElementById("incomplete-list").appendChild(backtarget);
    backtarget.removeChild(backButton);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
  });

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    li.innerText = text;
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);

  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
