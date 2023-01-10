const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const url = "https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3";

async function getCountryNames() {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $(".plainlist ul li");
    const countries = [];

    listItems.each((idx, el) => {
      const country = { name: ""};
      country.name = $(el).children("a").text();
      countries.push(country);
    });

    console.dir(countries);

    fs.writeFile("coutries.json", JSON.stringify(countries, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Data successfully written to file");
    });
  } catch (err) {
    console.error(err);
  }
}
getCountryNames();
