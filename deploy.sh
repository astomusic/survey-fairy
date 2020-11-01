#!/usr/bin/env bash

yarn build
cd dist
surge --domain https://survey-fairy.surge.sh
cd ..