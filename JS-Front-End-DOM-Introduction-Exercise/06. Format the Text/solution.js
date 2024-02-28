function solve() {
  let text = document.getElementById("input").value.split(".").filter(t => t.length > 0).map(t => t += ".");
  
  while (text.length > 0) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text.splice(0, 3).join("");
    document.getElementById("output").appendChild(paragraph);
  }
}