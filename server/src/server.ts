import fastify from "fastify";
//import {prisma} from "./lib/prisma"
import cors from "@fastify/cors"
import { appRouts } from "./routs";

const app = fastify()

app.register(cors)
app.register(appRouts)
app.listen({
   port:8081
}).then(()=>{
   console.log("server running...!")
})