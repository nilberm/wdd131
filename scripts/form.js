const productSelect = document.getElementById("product");

const productOptions = products
  .map((product) => `<option value="${product.id}">${product.name}</option>`)
  .join("");

productSelect.insertAdjacentHTML("beforeend", productOptions);
