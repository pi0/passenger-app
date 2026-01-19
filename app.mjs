import { serve } from "srvx";


const server = serve({
  fetch() {
    return Response.json({ message: "Passenger + Node.js works!" });
  }
})

console.log(`!!!! Server running at ${server.url}`);
