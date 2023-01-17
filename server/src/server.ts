import fastify from "fastify";

const app = fastify()


app.get('/', ()=>{
   return "home page"
})


app.listen({
   port:8080
}).then(()=>{
   console.log("server running!")
})