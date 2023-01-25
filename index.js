export default function handler(req, res) {
    const { name = 'servless' } = req.query;
    return res.send(`Hello ${name}!`);
}