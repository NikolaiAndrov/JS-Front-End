function solve() {

  let text = document.querySelector("#text").value.toLocaleLowerCase().split(" ");
  const convention = document.querySelector("#naming-convention").value;
  let words = [];

  if (convention === "Camel Case") {

    words.push(text[0]);

    for (let i = 1; i < text.length; i++) {
      const element = text[i];

      const char = element.charAt(0).toUpperCase();
      const wordPart = element.slice(1);
      const entireWord = char + wordPart;
      words.push(entireWord)
    }
    
  } else if (convention === "Pascal Case") {

    for (let i = 0; i < text.length; i++) {
      const element = text[i];

      const char = element.charAt(0).toUpperCase();
      const wordPart = element.slice(1);
      const entireWord = char + wordPart;
      words.push(entireWord)
    }

  } else {
    words.push("Error!");
  }

  document.querySelector("#result").textContent = words.join("");
}