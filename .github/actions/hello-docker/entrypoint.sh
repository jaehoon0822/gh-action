#!/bin/sh

TIME=$(date)

echo "::debug::Running entrypoint.sh"
echo "Hello $1"
echo "HELLO: $HELLO"
echo "time=$TIME" >> $GITHUB_OUTPUT
echo "HELLO_TIME=$TIME" >> $GITHUB_ENV
