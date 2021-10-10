#!/bin/bash
set -e
# ./scripts/wait-for-service.sh "http://guest:guest@rabbitmq:15672/api/aliveness-test/%2F"
./scripts/wait-for-it.sh rabbitmq:5672 --timeout=30 -- node ./build/servers/main && node ./build/servers/post && node ./build/servers/user 

# node ./build/servers/main &
# node ./build/servers/post &
# node ./build/servers/user &

