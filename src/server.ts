import express, { Request, Response, NextFunction } from "express"
import "express-async-errors"
import cors from "cors"
import { router } from "./routes"

const app = express()

app.use((req, res, next) => {
    if(req.originalUrl === "/webhook"){
        next
    }else{
        express.json()(req, res, next)
    }

})
app.use(cors())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    if(err instanceof Error){
        res.status(400).json({
            error: err.message
        })
    }

    res.status(500).json({
        status:"error",
        message:"Internal server error"
    })

})

app.listen(process.env.PORT, () => console.log("server online"))