#!/usr/bin/env bash

pwd=x
host=x
rm -rf ./output && mkdir ./output

CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o ./output/songbin main.go

sshpass -p $pwd scp -r ./output/songbin files/* root@$host:/home