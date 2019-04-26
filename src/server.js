const httple = require("httple");

httple("POST", 3000, /^\/post$/, {
  a: (v) => { return v.length > 0; },
  b: (v) => { return v.length > 1; },
  c: (v) => { return v.length > 2; },
}, (req, res, json) => {
  console.log(json);
  res.writeHead(200, "Success");
  res.end();
}, () => {
  console.log("server start");
})
