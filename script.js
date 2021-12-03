const renderCountries = (countries) => {
  let returnHtml = "";

  for (const country of countries) {
    returnHtml += `
    <div>${country.name.official}</div>
    `;
  }
  return returnHtml;
};

const renderFlags = (flags) => {
  let returnHtml = "";

  for (const flag of flags) {
    returnHtml += `
    <img src="${flag.flags.png}">
    `;
  }
  return returnHtml;
};

async function init() {
  const countryRes = await fetch("https://restcountries.com/v3.1/all");
  const countryArr = await countryRes.json();

  document
    .getElementById("root")
    .insertAdjacentHTML("beforeend", `<div id="countryNames">${renderCountries(countryArr)}</div>`);
  document
    .getElementById("root")
    .insertAdjacentHTML("beforeend", `<div id="countryFlags">${renderFlags(countryArr)}</div>`);
  // renderCountries(countryArr);
}

window.addEventListener("load", init);
