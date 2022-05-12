#!/bin/bash
git fetch origin main
git reset --hard FETCH_HEAD
git clean -df
mvn package -T4
java -jar target/server-0.0.1-SNAPSHOT.jar
