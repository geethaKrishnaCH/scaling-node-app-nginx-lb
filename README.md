##### Run the following command to spin up few node backend servers and allow the nginx to load balance them

> docker-compose up -d --scale api=3

Now simply run `**curl http://localhost:3000**` few times to see the magic. 
