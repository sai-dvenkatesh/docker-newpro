Steps to execute
=================
Initial Check
  nginx host port 80, 443
  node-server port 8080 --> /app1
  node-server port 8081 --> /app2

Enable Firewall to allow these ports

step-1:
 git clone https://github.com/sai-dvenkatesh/docker-newpro.git 

step-2:
 cd docker-newpro 
 
 step-3:
 docker-compose up -d --build

verify:
 curl -k https://localhost

 curl -k https://localhost/app1
 
 curl -k https://localhost/app2
