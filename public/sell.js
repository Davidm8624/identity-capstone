const url = "/api/v1/products";
const fileFormDOM = document.querySelector(".file-form");

const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const imageInput = document.querySelector("#image");
const fileForm = document.querySelector(".file-form");

const container = document.querySelector(".container");
let imageValue;

fileForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  const priceValue = priceInput.value;
  try {
    const product = { name: nameValue, price: priceValue, image: imageValue };
    console.log(product);
    await axios.post(`${url}/sell`, product);
    priceValue = 0;
    fetchProducts();
  } catch (error) {
    console.log(error);
  }
});

imageInput.addEventListener("change", async (e) => {
  const imageFile = e.target.files[0];
  console.log(imageFile);
  const formData = new FormData();
  formData.append("image", imageFile);
  // console.log([...formData.values()]);
  try {
    const {
      data: {
        image: {
          src 
        },
      },
    } = await axios.post(`${url}/uploads`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    imageValue = src
    console.log(data);
  } catch (err) {
    console.log(err);
  }
});