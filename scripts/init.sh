#!/bin/bash
set -e

docker-compose up -d &
nodemon --exec babel-node servers/main &
nodemon --exec babel-node servers/post &
nodemon --exec babel-node servers/user &