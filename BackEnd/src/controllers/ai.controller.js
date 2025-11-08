import aiServices from "../services/ai.services.js";

export async function getReview(req, res) {

    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiServices(code);


    res.send(response);

}