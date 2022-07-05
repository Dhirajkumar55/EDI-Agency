import { Agency } from "../models/Agency.js";
import generateResponse from "../helpers/genResponse.js"

export async function getAgency(req, res) {

    const { agency } = req.body;
    const query = { Agency : agency };

    let response = null;

    try{
        const data = await Agency.find(query);

        if(data.length > 0){
            response = generateResponse(true, "found successfully", data);
        }
        else if(data.length === 0){
            response = generateResponse(true, "No Agency found", null);
        }
    }
    catch(err){
        response = generateResponse(false, `there occured some error : ${err}`, null);
        res.status(500).send(response);
    }

    res.status(200).send(response);
}

