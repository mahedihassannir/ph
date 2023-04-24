let loadData = (get2) => {
  let url = `https://openapi.programming-hero.com/api/phones?search=${get2}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => ShowData(data.data));
};

let ShowData = (phones) => {
  let get1 = document.getElementById("container");

  get1.textContent = "";

  phones.slice(0, 9).map((phones) => {
    let { brand, image, phone_name } = phones;
    //   console.log(image);

    let forCreate = document.createElement("div");

    forCreate.innerHTML = `
    


    
    <div class="border-2 shadow-lg w-[400px] h-[500px] rounded-lg">
    <div>
      <img class="h-[300px] p-5 w-full" src=${image} alt="" />
    </div>
    <div class="pl-5 mt-5">
      <h1>${brand}</h1>
      <p class="py-3">${phone_name}</p>
      <p>.....</p>

      <button class="py-3">buy now</button>
    </div>
  </div>


    
    `;

    get1.appendChild(forCreate);
  });
};

document.getElementById("btn-Search").addEventListener("click", function () {
  let get2 = document.getElementById("search-Feild").value;

  loadData(get2);
});

document
  .getElementById("show-more-btn")
  .addEventListener("click", function () {


    


  });

loadData();
