import express from 'express';
import { validationResult } from 'express-validator'

let checkValidResponse = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        console.log(req.method);
        
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()})
        }
        else{
            next()
        }
    } catch (error) {

        return res.status(500).json({ status: 500, error: error.message })
    }
}


export {
    checkValidResponse
}