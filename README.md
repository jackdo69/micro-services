## NodeJs Micro Services

This repo is the simulation of real world micro-services system build upon

1. NodeJs  
   The main logic handling service

2. RabbitMQ  
   Act as a message broker (the way we implemented in this repo is the most simple form)

3. Prometheus & Grafana  
   Act as monitoring tool

4. Nginx  
   Act as the proxy server for NodeJs app

### Running

```
# Build the service
docker build -t app:v1 .

# Start the service
docker-compose up -d

# Stop the service
docker-compose down
```
