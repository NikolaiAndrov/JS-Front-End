function search() {

   let listItems = document.querySelectorAll("li");
   let keyword = document.querySelector("#searchText").value;
   let matchesCount = 0;

   for (const li of listItems) {
      li.style.fontWeight = "";
      li.style.textDecoration = "";
   }

   for (const li of listItems) {
      if (li.textContent.includes(keyword)) {
         matchesCount++;
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
      }
   }

   document.querySelector("#result").textContent = `${matchesCount} matches found`;
}
