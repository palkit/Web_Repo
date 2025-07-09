const gettingAccessOfData = (data) => {
  const displayInHtml = document.getElementById("store");
  data.map((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}"/>
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>Price : ${product.price}</p>
    `;
    displayInHtml.appendChild(productCard);
  });
};
 
const getProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    gettingAccessOfData(data.products);
  } catch (error) {
    console.log("error fetching products", error);
  }
};

getProducts();