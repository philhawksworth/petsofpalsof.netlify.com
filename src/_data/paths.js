module.exports = () => {

  var URL = process.env.URL ? process.env.URL : "https://petsofpalsof.netlify.com";

  return {
    "rootURL" : process.env.PULL_REQUEST ? process.env.DEPLOY_PRIME_URL : URL
  }
}
