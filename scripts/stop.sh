#!/bin/bash

set -e

killall node &
docker-compose down

exit 0