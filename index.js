const Instagram = require("instagram-web-api");

const client = new Instagram({ username, password });

(async () => {
  const result = await client.login();

  console.log(result);
})();
