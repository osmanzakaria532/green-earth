const loadCategory = (category) => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((category) => displayCategoryItem(category.categories));
};

const displayCategoryItem = (items) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.classList = "space-y-2";

  // console.log(items);

  // All category button
  const allCategory = document.getElementById("all-category");
  allCategory.addEventListener("click", () =>
    handleCategoryClick(allCategory, "all")
  );
  allCategory.className =
    "category-btn bg-[#15803D] hover:bg-[#15803D] w-full !text-start px-[10px] py-2 rounded-md text-white hover:text-white font-medium transition-all duration-200";

  for (let item of items) {
    const li = document.createElement("li");
    li.innerText = item.category_name;
    li.className =
      "category-btn hover:bg-[#15803D] w-full !text-start px-[10px] py-2 rounded-md text-black hover:text-white font-medium transition-all duration-200";

    li.addEventListener("click", () =>
      handleCategoryClick(li, item.category_name)
    );

    categoryContainer.appendChild(li);
  }
};

const handleCategoryClick = (li, category) => {
  document.querySelectorAll(".category-btn").forEach((li) => {
    li.classList.remove("bg-[#15803D]", "text-white");
    li.classList.add("text-black");
  });

  li.classList.add("bg-[#15803D]", "text-white");
  li.classList.remove("text-black");

  if (category === "all") {
    loadPlants();
  } else {
    loadPlants(category);
  }
};

const loadPlants = (filterCategory) => {
  spinner(true);
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((plant) => {
      if (filterCategory) {
        const filteredPlants = plant.plants.filter(
          (item) => item.category === filterCategory
        );
        displayPlantsItems(filteredPlants);
      } else {
        displayPlantsItems(plant.plants);
      }
    });
};

let cartItems = [];

const displayPlantsItems = (plants, category) => {
  const treesContainer = document.getElementById("trees-container");
  treesContainer.innerHTML = "";

  plants.forEach((el) => {
    const div = document.createElement("div");
    div.classList =
      "bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-auto lg:w-full";

    div.innerHTML = `
      <div class="space-y-3">
        <div>
          <img src="${el.image}" alt="${el.name}" class="h-[200px] w-full object-cover rounded-md">
        </div>
        <div class="space-y-2">
          <h3 class="plant-title text-sm font-semibold leading-5 text-[#1F2937]">
            ${el.name}
          </h3>
          <p class="text-xs h-[65px] overflow-hidden line-clamp-3">${el.description}</p>
          <div class="flex justify-between items-center">
            <button class="text-[#15803D] py-1 px-3 bg-[#DCFCE7] rounded-full">
              ${el.category}
            </button>
            <p class="text-sm font-semibold text-[#1F2937]">${el.price}</p>
          </div>
        </div>
        <div>
          <button class="addToCart btn w-full rounded-full bg-[#15803D] text-white">
            Add to Cart
          </button>
        </div>
      </div>
    `;

    div.querySelector(".plant-title").addEventListener("click", () => {
      openPlantModal(el);
    });

    div.querySelector(".addToCart").addEventListener("click", () => {
      alert(`${el.name} added to the cart!`);
      addToCart(el);
    });

    treesContainer.appendChild(div);
  });
  spinner(false);
};

const addToCart = (product) => {
  const existingItem = cartItems.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
  displayCartItems();
};

const displayCartItems = () => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    totalPrice += parseFloat(item.price) * item.quantity;

    const div = document.createElement("div");
    div.classList =
      "flex justify-between items-center mb-2 p-2 bg-gray-100 rounded";

    div.innerHTML = `
      <div>
        <p class="text-sm font-semibold">${item.name}</p>
        <div class="flex items-center gap-2 mt-1">
          <p class="text-sm">$${
            parseFloat(item.price) * parseFloat(item.quantity)
          }</p>
        </div>
      </div>
      <div>
        <button class="removeBtn px-2 py-1 ">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `;

    div.querySelector(".removeBtn").addEventListener("click", () => {
      cartItems.splice(index, 1);
      displayCartItems();
    });

    cartContainer.appendChild(div);
  });

  const priceDetails = document.getElementById("price-details");

  if (cartItems.length === 0) {
    priceDetails.style.display = "none";
  } else {
    priceDetails.style.display = "block";
    priceDetails.innerHTML = "";
    const divTotal = document.createElement("div");
    divTotal.classList = "flex justify-end font-bold mt-2";
    divTotal.innerHTML = `
      <p>Total:</p>
      <p>$${parseFloat(totalPrice)}</p>
    `;
    priceDetails.appendChild(divTotal);
  }
};

const openPlantModal = (id) => {
  const treesDetails = document.getElementById("trees-details");
  treesDetails.innerHTML = `
    <div>
      <h2 class="text-2xl font-bold">${id.name}</h2>
      <div class="my-3">
        <img src="${id.image}" alt="${id.name}" class="w-full h-[200px] object-cover rounded-md">
      </div>
      <p class="text-xl font-semibold">
        Category : <span class="text-gray-600">${id.category}</span>
      </p>
      <p class="text-xl font-semibold">
        Price : <span class="text-gray-600">${id.price}</span>
      </p>
      <p class="mt-2">
        Description : <span class="text-gray-500">${id.description}</span>
      </p>
    </div>
  `;

  document.getElementById("my_modal_2").showModal();
};

const spinner = (status) => {
  if (status == true) {
    const spinnerContainer = document.getElementById("spinner-container");
    spinnerContainer.classList.remove("hidden");

    const treesContainer = document.getElementById("trees-container");
    treesContainer.classList.add("hidden");
  } else {
    const treesContainer = document.getElementById("trees-container");
    treesContainer.classList.remove("hidden");

    const spinnerContainer = document.getElementById("spinner-container");
    spinnerContainer.classList.add("hidden");
  }
};

// initial load
loadCategory();
loadPlants();
