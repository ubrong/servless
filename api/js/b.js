//export default function handler(req, res) {
//    const { name = 'servless' } = req.query;
//    return res.send(`Hello ${name}!`);
//}

export default async (req, res) => {
	//const { name = 'servless' } = req.query;
    return res.send(`this is api/js/bbb.js!`);
}