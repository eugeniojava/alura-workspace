var api = {};

api.data = function (request, response) {
  response.json([
    { amount: 200.5, times: 2 },
    { amount: 100.2, times: 5 },
    { amount: 50.5, times: 1 },
    { amount: 70.5, times: 2 },
  ]);
};

module.exports = api;
