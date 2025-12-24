import http from 'http'

const server = http.createServer((request,response)=>{
    response.write("welcome to node js,we are learning node js")
    response.end()
})
server.listen(5000)