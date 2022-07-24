#!/bin/bash

## Generate Recoil Script

if [ -z $1 ]; then
  echo "Error: Please input recoil name"
  exit
fi

if [ -d "src/recoil/"$1 ]; then
    echo "Error:" $1 "File already exist"
    exit
fi

_STORE_NAME=$1
_STORE=src/recoil/$1
_IMPORT="import {} from 'recoil';"


mkdir $_STORE
touch $_STORE/index.ts
touch $_STORE/atom.ts
touch $_STORE/selector.ts

CONFIG=script/index_config

echo $_IMPORT >> $_STORE/atom.ts;
echo $_IMPORT >> $_STORE/selector.ts;
echo "export * from './atom';" >> $_STORE/index.ts
echo "export * from './selector';" >> $_STORE/index.ts

# cat "$CONFIG" | while read line; do
#   cat "$line"
#   echo "$line" >> $_STORE/index.ts
# done
