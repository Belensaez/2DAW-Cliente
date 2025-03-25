window.onload = function () {
  const laptops = [
    {
      id: 1,
      brand: "Dell",
      model: "XPS 13",
      RAM: 16,
      processor: "Intel i7",
      hardDisk: "512GB SSD",
      price: 1200,
    },
    {
      id: 2,
      brand: "HP",
      model: "Spectre x360",
      RAM: 8,
      processor: "Intel i5",
      hardDisk: "256GB SSD",
      price: 1000,
    },
    {
      id: 3,
      brand: "Apple",
      model: "MacBook Pro",
      RAM: 16,
      processor: "M1",
      hardDisk: "512GB SSD",
      price: 2000,
    },
    {
      id: 4,
      brand: "Lenovo",
      model: "ThinkPad X1",
      RAM: 32,
      processor: "Intel i9",
      hardDisk: "1TB SSD",
      price: 1800,
    },
    {
      id: 5,
      brand: "Asus",
      model: "ROG Zephyrus",
      RAM: 16,
      processor: "AMD Ryzen 7",
      hardDisk: "1TB SSD",
      price: 1500,
    },
    {
      id: 6,
      brand: "Dell",
      model: "Inspiron 15",
      RAM: 8,
      processor: "Intel i3",
      hardDisk: "1TB HDD",
      price: 600,
    },
    {
      id: 7,
      brand: "HP",
      model: "Pavilion 14",
      RAM: 8,
      processor: "Intel i5",
      hardDisk: "512GB SSD",
      price: 800,
    },
    {
      id: 8,
      brand: "Apple",
      model: "MacBook Air",
      RAM: 8,
      processor: "M1",
      hardDisk: "256GB SSD",
      price: 1000,
    },
    {
      id: 9,
      brand: "Lenovo",
      model: "Yoga Slim 7",
      RAM: 16,
      processor: "Intel i7",
      hardDisk: "512GB SSD",
      price: 1100,
    },
    {
      id: 10,
      brand: "Asus",
      model: "VivoBook",
      RAM: 8,
      processor: "Intel i5",
      hardDisk: "1TB HDD",
      price: 700,
    },
  ];

  const containerLaptops = document.createElement("div");
  document.body.appendChild(containerLaptops);

  let editingLaptop = null;

  function showLaptop(laptop) {
    const card = document.createElement("div");
    card.className = "laptop-card";
    card.dataset.id = laptop.id;

    let brand = document.createElement("h2");
    brand.innerHTML = laptop.brand;
    let model = document.createElement("h3");
    model.innerHTML = laptop.model + "<br>";
    let ram = document.createElement("p");
    ram.innerHTML = "RAM: " + laptop.RAM;
    let processor = document.createElement("p");
    processor.innerHTML = "PROCESSOR: " + laptop.processor;
    let hardDisk = document.createElement("p");
    hardDisk.innerHTML = "HARDDISK: " + laptop.hardDisk;
    let price = document.createElement("p");
    price.innerHTML = "PRICE: " + laptop.price;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("remove-btn");
    deleteButton.addEventListener("click", function () {
      removeLaptop(laptop.id);
    });

    let editButton = document.createElement("button");

    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";

    editButton.onclick = function () {
      let id = this.parentElement.dataset.id;
      let laptop = laptops.find((laptop) => laptop.id == id);
      editLaptop(laptop);
      let title = document.querySelector("h1");
      title.scrollIntoView({ behavior: "smooth" });
    };

    card.appendChild(brand);
    card.appendChild(model);
    card.appendChild(ram);
    card.appendChild(processor);
    card.appendChild(hardDisk);
    card.appendChild(price);
    card.appendChild(deleteButton);
    card.appendChild(editButton);

    containerLaptops.appendChild(card);
  }

  function showLaptops(laptops) {
    for (let laptop of laptops) {
      showLaptop(laptop);
    }
  }

  // CLEAN CONTAINER
  function cleanContainer() {
    containerLaptops.innerHTML = "";
  }

  // REMOVE BUTTON
  function removeLaptop(id) {
    let index = laptops.findIndex((laptop) => laptop.id == id);
    if (index !== -1) {
      laptops.splice(index, 1);
      cleanContainer();
      showLaptops(laptops);
    }
  }

  // EDIT BUTTON
  let laptopSelected = null;
  function editLaptop(laptop) {
    laptopSelected = laptop;
    var formDiv = document.getElementsByClassName("form-container")[0];
    var h2 = document.querySelector("h2");
    var form = document.getElementById("add-laptop-form");
    var brand = document.getElementById("brand");
    var model = document.getElementById("model");
    var ram = document.getElementsByName("ram");
    var processor = document.getElementById("processor");
    var hardDisk = document.getElementById("hard-disk");
    var price = document.getElementById("price");
    var submitBtn = document.getElementById("submit");

    formDiv.style.display = "block";
    h2.innerText = "Edit Laptop";
    form.style.display = "block";
    brand.value = laptop.brand;
    model.value = laptop.model;
    processor.value = laptop.processor;
    hardDisk.value = laptop.hardDisk;
    for (let i = 0; i < ram.length; i++) {
      console.log(ram[i].value);
      if (ram[i].value == laptop.RAM) {
        ram[i].checked = true;
        console.log(laptop.RAM);
        break; // Salir del bucle una vez que se encuentra la opción correcta
      }
    }
    price.value = laptop.price.toString();
  }

  var submitBtn = document.getElementById("submit");
  submitBtn.onclick = function (e) {
    e.preventDefault();
    var formDiv = document.getElementsByClassName("form-container")[0];
    var h2 = document.querySelector("h2");
    var form = document.getElementById("add-laptop-form");
    var brand = document.getElementById("brand");
    var model = document.getElementById("model");
    var ram = document.getElementsByName("ram");
    var processor = document.getElementById("processor");
    var hardDisk = document.getElementById("hard-disk");
    var price = document.getElementById("price");
    let selectedRam = "";
    for (let i = 0; i < laptops.length; i++) {
      if (ram[i].checked) {
        selectedRam = ram[i].value;
        break;
      }
    }
    if (laptopSelected) {
      laptopSelected.brand = brand.value;
      laptopSelected.model = model.value;
      laptopSelected.RAM = selectedRam;
      laptopSelected.processor = processor.value;
      laptopSelected.hardDisk = hardDisk.value;
      laptopSelected.price = parseFloat(price.value);
      laptopSelected = null;
      formDiv.style.display = "none";
      form.style.display = "none";
      form.reset();
      cleanContainer();
      showLaptops(laptops);
    } else {
      var id = document.getElementById("id");
      let newLaptop = {
        id: laptops.length + 1,
        brand: brand.value,
        model: model.value,
        RAM: selectedRam,
        processor: processor.value,
        hardDisk: hardDisk.value,
        price: parseFloat(price.value),
      };

      laptops.push(newLaptop);
      cleanContainer();
      formDiv.style.display = "none";
      form.style.display = "none";
      form.reset();
      showLaptops(laptops);
    }
  };

  let btnFormMostrar = document.getElementById("mostrarForm");
  let estaMostrado = false;
  var formDiv = document.getElementsByClassName("form-container")[0];
  var form = document.getElementById("add-laptop-form");

  btnFormMostrar.onclick = function () {
    if (estaMostrado) {
      btnFormMostrar.innerText = "Mostrar formulario";
      formDiv.style.display = "none";
      form.style.display = "none";
      estaMostrado = false;
    } else {
      btnFormMostrar.innerText = "Ocultar formulario";
      formDiv.style.display = "block";
      form.style.display = "block";
      estaMostrado = true;
    }
  };

  //ORDER BY
  function orderByRAM(laptops) {
    laptops.sort((a, b) => {
      if (a.RAM < b.RAM) {
        return -1;
      } else if (a.RAM > b.RAM) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  function orderByBrand(laptops) {
    laptops.sort((a, b) => {
      if (a.brand < b.brand) {
        return -1;
      } else if (a.brand > b.brand) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  let btnOrderByRAM = document.getElementById("orderByRAM");
  btnOrderByRAM.onclick = function () {
    orderByRAM(laptops);
    cleanContainer();
    showLaptops(laptops);
  };

  let btnOrderByBrand = document.getElementById("orderByBrand");
  btnOrderByBrand.onclick = function () {
    orderByBrand(laptops);
    cleanContainer();
    showLaptops(laptops);
  };

  //FILTER BY
  let removeFilters = document.getElementById("removeFilters");
  let btnFilterByPrice = document.getElementById("filter");
  btnFilterByPrice.onclick = function () {
    filterBy();
  };
  removeFilters.onclick = function () {
    let maxPrice = document.getElementById("maxPrice");
    maxPrice.value = "";
    cleanContainer();
    showLaptops(laptops);
  };

  let processorSelect = document.getElementById("processorSelect");
  let arrayOptions = [];
  for (let laptop of laptops) {
    if (!arrayOptions.includes(laptop.processor)) {
      arrayOptions.push(laptop.processor);
    }
  }

  for (let option of arrayOptions) {
    let optionInput = document.createElement("option");
    optionInput.value = option;
    optionInput.textContent = option;
    processorSelect.appendChild(optionInput);
  }

  function filterBy() {
    let maxPrice = document.getElementById("maxPrice").value;
    let filteredLaptops = laptops.filter((laptop) => laptop.price <= maxPrice);
    let optionSelected = processorSelect.value;
    filteredLaptops = filteredLaptops.filter(
      (laptop) => laptop.processor == optionSelected
    );
    cleanContainer();
    showLaptops(filteredLaptops);
  }

  //MONTAR SELECT DE BRANDS DINÁMICO
  let selectBrands = document.getElementById("brand");
  let arrayOptionsBrand = [];
  for (let laptop of laptops) {
    if (arrayOptions.indexOf(laptop.brand) == -1) {
      arrayOptions.push(laptop.brand);
    }
  }
  for (let optionBrand of arrayOptionsBrand) {
    let option = document.createElement("option");
    
  }

  showLaptops(laptops);
};
