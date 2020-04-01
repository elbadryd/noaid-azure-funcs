const cheerio = require('cheerio');
const axios = require('axios');

const fetchData = async (siteUrl) => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
  };


module.exports = async function (context, req) {
  const siteUrl = "https://worknola.com/coronavirus-resources";
  const resources = await fetchData(siteUrl);
  const body = resources('#container > .boxed > .image-container > .panel > .panel-body  > .panel-inner > .panel-body').text();

    // context.log('JavaScript HTTP trigger function processed a request.');

    // if (req.query.name || (req.body && req.body.name)) {
    //     context.res = {
    //         // status: 200, /* Defaults to 200 */
    //         body: "Hello " + (req.query.name || req.body.name)
    //     };
    // }
    // else {
        context.res = {
            status: 200,
            body,
        };
    // }
};