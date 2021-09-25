#!/bin/bash
set -e

nodemon --exec babel-node main-server/index.js &
nodemon --exec babel-node post-server/index.js &
nodemon --exec babel-node user-server/index.js &