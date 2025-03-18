export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      res.status(200).send("this is the menu get route");
      break;
    // case "POST":
    //   try {
    //     console.log("req.body");
    //     console.log(req.body);
    //     console.log("req.body.input");
    //     console.log(req.body.input);
    //     return res.status(200).send("ok");
    //   } catch (e) {
    //     console.error(e);
    //     return res.status(500);
    //   }
    default:
      res.status(400).json({ error: "Wrong request method" });
  }
}
