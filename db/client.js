var client = require('redis').createClient({
  host: '120.24.165.153'
});

client.on('connect', (err) => {
  console.log("Error " + err);
})

module.exports = client;
