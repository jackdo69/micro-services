#!/bin/bash
set -e

docker-compose up -d
./scripts/wait-for-service.sh "http://guest:guest@localhost:15672/api/aliveness-test/%2F"
nodemon --exec babel-node servers/main &
nodemon --exec babel-node servers/post &
nodemon --exec babel-node servers/user &