// @ts-ignore
export default async function handler(req, res) {
    switch (req.method) {
        case "GET":
            res.status(200).json({ name: "jacob" });
            break;
        default:
            res.status(400).json({ error: "Wrong request method" });
    }
}
