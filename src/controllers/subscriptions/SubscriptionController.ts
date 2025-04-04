import { Request, Response } from "express";
import { SubscribeService} from "../../services/subscriptions/SubscriptionService";


class SubscriptionController{

    async handle(req:Request, res:Response){

        const user_id = req.user_id

        const subscribeService = new SubscribeService()

        const subscribe = await subscribeService.execute({
            user_id
        })


        res.json(subscribe)
    }
}


export {SubscriptionController}