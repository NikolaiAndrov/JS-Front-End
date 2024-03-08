function solve() {

  let buttons = document.getElementsByTagName("button");
  let generateButton = buttons[0];
  let buyButton = buttons[1];

  generateButton.addEventListener("click", generate);
  buyButton.addEventListener("click", buy)

  enableCheckboxes();

  function generate() {

    let inputTextArea = document.querySelector("textarea").value;
    let elements = JSON.parse(inputTextArea);
    let tbody = document.querySelector("table.table tbody");

    for (const element of elements) {

      let newtableRow = document.createElement("tr");

      let imgCell = document.createElement("td");
      let img = document.createElement("img");
      img.src = element.img;
      imgCell.appendChild(img);
      newtableRow.appendChild(imgCell);

      let nameCell = document.createElement("td");
      let nameParagraph = document.createElement("p");
      nameParagraph.textContent = element.name;
      nameCell.appendChild(nameParagraph);
      newtableRow.appendChild(nameCell);

      let priceCell = document.createElement("td");
      let priceParagraph = document.createElement("p");
      priceParagraph.textContent = element.price;
      priceCell.appendChild(priceParagraph);
      newtableRow.appendChild(priceCell);

      let decFactorCell = document.createElement("td");
      let decFactorParagraph = document.createElement("p");
      decFactorParagraph.textContent = element.decFactor;
      decFactorCell.appendChild(decFactorParagraph);
      newtableRow.appendChild(decFactorCell);

      let markCell = document.createElement("td");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.disabled = true;
      markCell.appendChild(checkbox);
      newtableRow.appendChild(markCell);

      tbody.appendChild(newtableRow);
    }

    enableCheckboxes();
  }

  function buy() {

    let tableRows = document.querySelectorAll("table.table tbody tr");
    let boughtProducts = [];
    let count = 0;
    let sum = 0;
    let factor = 0;

    for (const tableRow of tableRows) {

      let rowItems = tableRow.querySelectorAll("td");
      
      let isChecked = rowItems[4].querySelector("input").checked;

      if (isChecked) {

        let name = rowItems[1].querySelector("p").textContent;
        let price = Number(rowItems[2].querySelector("p").textContent);
        let decFactor = Number(rowItems[3].querySelector("p").textContent);

        boughtProducts.push(name);
        sum += price;
        factor += decFactor;
        count++;
      }
    }

    let avgFactor = factor / count;

    let textarea = document.querySelectorAll("#exercise textarea")[1];

    let text = "Bought furniture: " + boughtProducts.join(", ") + "\n";
    text += `Total price: ${sum.toFixed(2)}` + "\n";
    text += `Average decoration factor: ${avgFactor}`;

    textarea.textContent = text;
  }

  function enableCheckboxes() {

    let checkboxes = document.querySelectorAll("table.table tbody tr td input");

    for (const checkbox of checkboxes) {

      checkbox.disabled = false;
    }
  }

}