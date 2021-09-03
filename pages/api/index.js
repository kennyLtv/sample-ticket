import reverseString from '../../lib/reverseString';

export default function handler(req, res) {
    const {method, body} = req;
    switch(method){
        case "POST":
            if(typeof body.data === "string"){
                res.status(200).json({text: reverseString(body.data)});
            } else {
                res.status(400).json({error: "Request must be a string"});
            }
            break
        default: 
            res.setHeader("Allow", ["POST"])
            res.status(405).end(`Method ${method} not allowed`);            
    }
}
