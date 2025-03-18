export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).send("this is the menu get route");
      break;
    default:
      res.status(400).json({ error: "Wrong request method" });
  }
}
