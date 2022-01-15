const app = require("express")();
const port = process.env.PORT || 3000;

console.log(process.env.NODE_VERSION);

app.get("/", (req, res) => {
  const name = req.query.name || "world";
  console.log(name);
  res.json({
    text: `Hello, ${name}`,
  });
});

app.listen(port, async () => {
  console.log(`Listening on port ${port}`);
});
