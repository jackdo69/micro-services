#!/bin/bash
host="$1"
set -e

    echo "$host"
  until $(curl -s --output /dev/null --silent --head --fail "$host"); do
    printf '.'
    sleep 1
  done

  # First wait for Service to start...
  response=$(curl -s "$host")
  until [ "$response" = "200" ]; do
    response=$(curl --write-out %{http_code} --silent --output /dev/null "$host")
    if [ "$response" != "200" ] ; then
      >&2 echo "Service is unavailable - sleeping [$response]"
      sleep 1
    fi
  done

   >&2 echo "Service is up [$host, $response]"
   printf '\n'