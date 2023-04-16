"dibuatkan 6 buah card, 3 deret";
"DIBUTUHKAN cases.active, cases.new, cases.recovered, cases.total, deaths.total, tests.total";

//Link: https://rapidapi.com/api-sports/api/covid-193
// fetch: https://covid-193.p.rapidapi.com/statistics?country=indonesia"

// Button get data
let getDataBtn = document.getElementById("getData-btn");

// Inputan country
let countryInput = document.getElementById("input-country");

setTimeout(() => {
  getDataBtn.addEventListener("click", () => {
    let countryName = countryInput.value;
    let thisURL = `https://covid-193.p.rapidapi.com/statistics?country=${countryName}`;

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
        // Variabel untuk card
        const thisActiveCases = data.response[0].cases.active;
        const thisNewCases = data.response[0].cases.new;
        const thisRecoveredCases = data.response[0].cases.recovered;
        const thisTotalCases = data.response[0].cases.total;
        const thisTotalDeaths = data.response[0].deaths.total;
        const thisTotalTests = data.response[0].tests.total;

        result.innerHTML = `
        <div class="row text-center">
            <div class="col-md-4 mb-3">
              <div id="card-1" class="card">
                <div class="icon"><i class="bi bi-speedometer2"></i></div>
                <div class="card-body">
                  <p>Active Cases</p>
                </div>
                <div class="card-text">${thisActiveCases}</div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div id="card-2" class="card">
                <div class="icon"><i class="bi bi-cloud-plus-fill"></i></div>
                <div class="card-body">
                  <p>New Cases</p>
                </div>
                <div class="card-text">${thisNewCases}</div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div id="card-3" class="card">
                <div class="icon"><i class="bi bi-journal-check"></i></div>
                <div class="card-body">
                  <p>Recovered Cases</p>
                </div>
                <div class="card-text">${thisRecoveredCases}</div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div id="card-4" class="card">
                <div class="icon"><i class="bi bi-list"></i></div>
                <div class="card-body">
                <p>Total Cases</p>
                </div>
                <div class="card-text">${thisTotalCases}</div>
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <div id="card-5" class="card">
                <div class="icon"><i class="bi bi-emoji-dizzy-fill"></i></div>
                <div class="card-body">
                  <p>Total Deaths</p>
                </div>
                <div class="card-text">${thisTotalDeaths}</div>
              </div>
            </div>
            <div class="col-md-4">
            <div id="card-6" class="card">
                <div class="icon"><i class="bi bi-person-lines-fill"></i></div>
                <div class="card-body">
                  <p>Total Tests</p>
                </div>
                <div class="card-text">${thisTotalTests}</div>
                </div>
            </div>
        </div>
        `;
      })
      .catch(() => {
        if (countryName.length == 0) {
          result.innerHTML = `<h5>The input value cannot be empty.</h5>`;
        } else {
          result.innerHTML = `<h5>This country is not available.</h5>`;
        }
      });
  });
}, 1000);
