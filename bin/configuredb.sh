#!/bin/bash

echo "Configuring database: monstersdb"

dropdb -U node_user monstersdb
createdb -U node_user monstersdb

psql -U node_user monstersdb < ./bin/sql/monsters.sql

echo "monstersdb configured"

