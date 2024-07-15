const axios = require("axios");
const cheerio = require("cheerio");

const scrapeData = async (id) => {
  try {
    const { data } = await axios.get(
      "https://emma.maryland.gov/page.aspx/en/rfp/request_browse_public"
    );
    const $ = cheerio.load(data);

    const element = $(`[data-id="${id}"]`);
    if (element.length === 0) {
      console.log(`Element with data-id="${id}" not found.`);
      return null;
    }

    console.log("Found element:", element.html());
    return element.html();
  } catch (error) {
    console.error("Error scraping data:", error);
    return null;
  }
};

const dynamicId = "72206";
scrapeData(dynamicId).then((elementHtml) => {});
