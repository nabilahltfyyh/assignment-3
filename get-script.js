// Button get data
let getDataBtn = document.getElementById("getData-btn");

// Inputan country
let countryInput = document.getElementById("input-country");

main();

function main() {
  renderButton();
}

function renderButton() {
  getDataBtn.addEventListener("click", fetchData(renderData));
}

function fetchData(callback) {
  let countryName = countryInput.value;
  let thisURL = `https://covid-193.p.rapidapi.com/statistics?country=${countryName}`;

  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "491d34a3cdmsh55fe2b550cd1ae9p168652jsn07234f075fa2",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };

    // Fetch API
    fetch(thisURL, options)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  } catch {
    if (countryName.length == 0) {
      result.innerHTML = `<h3>The input value cannot be empty.</h3>`;
    } else {
      result.innerHTML = `<h3>This country is not available.</h3>`;
    }
  }
}

function renderData(data) {
  // Variabel untuk card
  const thisActiveCases = data.response[0].cases.active;
  const thisNewCases = data.response[0].cases.new;
  const thisRecoveredCases = data.response[0].cases.recovered;
  const thisTotalCases = data.response[0].cases.total;
  const thisTotalDeaths = data.response[0].deaths.total;
  const thisTotalTests = data.response[0].tests.total;

  result.innerHTML = `
    <div class="row text-center mb-3">
        <div class="col-md-4 mb-2">
          <div class="card">
            <div class="icon-1"><i class="bi bi-speedometer2"></i></div>
            <div class="card-body">
              <p class="card-text">Active Cases</p>
            </div>
            <div class="card-text">${thisActiveCases}</div>
          </div>
        </div>
        <div class="col-md-4 mb-2">
          <div class="card">
            <div class="icon-2"><i class="bi bi-cloud-plus-fill"></i></div>
            <div class="card-body">
              <p class="card-text">New Cases</p>
            </div>
            <div class="card-text">${thisNewCases}</div>
          </div>
        </div>
        <div class="col-md-4 mb-2">
          <div class="card">
            <div class="icon-3"><i class="bi bi-journal-check"></i></div>
            <div class="card-body">
              <p class="card-text">Recovered Cases</p>
            </div>
            <div class="card-text">${thisRecoveredCases}</div>
          </div>
        </div>
        <div class="col-md-4 mb-2">
          <div class="card">
            <div class="icon-4"><i class="bi bi-list"></i></div>
            <div class="card-body">
              <p class="card-text">Total Cases</p>
            </div>
            <div class="card-text">${thisTotalCases}</div>
          </div>
        </div>
        <div class="col-md-4 mb-2">
          <div class="card">
            <div class="icon-5"><i class="bi bi-emoji-dizzy-fill"></i></div>
            <div class="card-body">
              <p class="card-text">Total Deaths</p>
            </div>
            <div class="card-text">${thisTotalDeaths}</div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="icon-6"><i class="bi bi-person-lines-fill"></i></div>
            <div class="card-body">
              <p class="card-text">Total Tests</p>
            </div>
            <div class="card-text">${thisTotalTests}</div>
            </div>
        </div>
    </div>
    `;
}
