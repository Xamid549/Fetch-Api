const btn = document.getElementById("btn");
const userBox = document.getElementById("user");

async function getUser() {
  const javob = await fetch("https://randomuser.me/api/");
  const malumot = await javob.json();
  chizish(malumot.results[0]);
}

btn.addEventListener("click", () => {
  getUser();
});

function chizish(odam) {
  userBox.innerHTML = `
    <img src=${odam.picture.large} alt="">
    <h2>${odam.name.title} ${odam.name.first} ${odam.name.last}</h2>
    <hr>
    <p><b>Phone:</b> ${odam.phone}</p>
    <p><b>Yoshi:</b> ${odam.dob.age}</p>
    <p><b>Manzil:</b> ${odam.location.country} ${odam.location.city}</p>
    <p><b>Yoshi:</b> ${odam.email}</p>
  `;
}

