// import json-server
const jsonServer =  require("json-server")

//create json server application
const server = jsonServer.create()


//set up route for db.json
const router = jsonServer.router("db.json")

//to return middleware used by json server
const middleware = jsonServer.defaults()

//set up port number for server app
const port = process.env.PORT || 3000

//use router and middle wear
server.use(middleware)
server.use(router)


//to list the server app in port
server.listen(port,()=>{
    console.log(`contact server app started at port ${port}`);
})
