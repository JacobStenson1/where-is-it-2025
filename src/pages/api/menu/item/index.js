import "@lib/mongodb";
import MenuItemModel from "@models/menuItem";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const data = await MenuItemModel.find({});
      res.status(200).json({ data });
      break;
    case "POST":
      try {
        console.log("req.body");
        console.log(req.body);
        console.log("req.body.name");
        console.log(req.body.name);
        // res.status(200).send("ok");
        await MenuItemModel.create({ name: req.body.name });
        res.redirect("/");
      } catch (e) {
        console.error(e);
        res.status(500);
      }
      break;
    default:
      res.status(400).json({ error: "Wrong request method" });
  }
}
