#!/bin/bash
set -e

nodemon --exec babel-node servers/main &
nodemon --exec babel-node servers/post &
nodemon --exec babel-node servers/user &