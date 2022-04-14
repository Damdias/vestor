#!/bin/bash
cp -R common server/common
docker compose build
rm -r server/common 