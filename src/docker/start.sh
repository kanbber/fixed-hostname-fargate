#!/bin/bash

app="flask"
docker build -t ${app} .
docker run -d -p 56733:5000 -h container --name=${app} ${app}
