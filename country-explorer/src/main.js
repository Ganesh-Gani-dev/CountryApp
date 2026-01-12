console.log("Welcome to Country App");


const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const loaderElem = document.getElementById("loader");
const error = document.getElementById("error");
const countryDetails = document.getElementById("countryDetails");




searchBtn.addEventListener("click", async () => {
  const country = searchInput.value.trim();

  if (!country) return;

  await fetchCountry(country);
});


async function fetchCountry(name) {
  console.log(`Details loading for the country ${name}......`);
  loaderElem.classList.remove("hidden");
  error.classList.add("hidden");
  countryDetails.innerHTML = "";
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );

    const data = await response.json();
    const country = data[0];
    if(!country)
    {
        throw new Error("Invalid country name")
    }

      const languages = country.languages
            ? Object.values(country.languages).join(",")
            : "N/A";

     countryDetails.innerHTML = `
            <div class="p-4 border rounded shadow">
                <img src="${country.flags.svg}" alt="flag" class="w-32 mb-2" />
                <h2 class="text-xl font-bold">${country.name.common}</h2>
                <p><strong>Capital:</strong> ${country.capital}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Languages:</strong> ${languages}</p>
                <div class="mb-4">
                    <h2 class="text-xl font-semibold mb-2">Local Times</h2>
                    <ul id="timezoneList" class="list-disc ml-6"></ul>
                </div>
            </div>
        `;
  } catch (err) {
    error.classList.remove("hidden");
    error.textContent = err.message || "Failed To load the country";
  } finally {
    loaderElem.classList.add("hidden");
  }
}
