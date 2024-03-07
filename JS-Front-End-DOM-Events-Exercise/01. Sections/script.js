function create(words) {
   
   let content = document.getElementById("content");
   
   for (const word of words) {

      let div = document.createElement("div");
      let paragraph = document.createElement("p");
      
      paragraph.textContent = word;
      div.appendChild(paragraph);
      
      paragraph.style.display = "none";
      div.addEventListener("click", displayContent);

      content.appendChild(div);
   }

   function displayContent(event) {
      let currentContent = event.currentTarget.querySelector("p");
      currentContent.style.display = "";
   }
}