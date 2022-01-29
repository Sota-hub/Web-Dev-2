const API_URL = "https://randomuser.me/api?results=50";
const result = document.getElementById("result");
const filter = document.getElementById("filter");
const searchInput = document.querySelector("#filter");

const renderResults = (results) => {
  const resultHTML = results.map(
    (result) => `
      <li>
          <img src='${result.picture.large}'>
          <div class='user-info'>
              <h4>${result.name.first} ${result.name.last}</h4>
              <p>${result.location.state}, ${result.location.country}</p>
          </div>
      </li>
  `
  );
  result.innerHTML = resultHTML;
};

const filterResult = (results, input) => {
  const filteredResults = results.filter((result) => {
    const firstName = result.name.first.toLowerCase();
    const lastName = result.name.last.toLowerCase();
    const stateName = result.location.state.toLowerCase();
    const countryName = result.location.country.toLowerCase();
    const string = firstName + lastName + stateName + countryName;
    return string.includes(input);
  });
  return filteredResults;
};

async function getData() {
  const response = await fetch(API_URL);
  const { results } = await response.json();

  result.innerHTML = "";

  renderResults(results);

  searchInput.addEventListener("keydown", (e) => {
    const input = e.target.value.toLowerCase();
    const filteredResult = filterResult(results, input);
    renderResults(filteredResult);
  });
}

getData();
