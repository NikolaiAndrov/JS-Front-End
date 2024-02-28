function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let keyword = document.getElementById("searchField");
   let tableElements = document.querySelectorAll("tbody tr");
   const className = "select";

   function onClick() {

      for (const row of tableElements) {

         row.classList.remove(className);

         if (row.textContent.includes(keyword.value)) {
            row.className = className;
         }
      }

      keyword.value = "";
   }
}