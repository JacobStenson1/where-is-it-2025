// @ts-ignore
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).json({ name: "jacob" });
      break;
    case "POST":
      try {
        console.log("req.body");
        console.log(req.body);
        return res.status(200);
      } catch (e) {
        console.error(e);
        return res.status(500);
      }
    default:
      res.status(400).json({ error: "Wrong request method" });
  }
}
