#!/bin/bash

## Generate React Script

if [ -z $1 ]; then
  echo "Error: Please input react component name"
  exit
fi

if [ -d "src/components/"$1 ]; then
    echo "Error:" $1 "File already exist"
    exit
fi

_COMP_NAME=$1
_STORE=src/components/$1


mkdir $_STORE
touch $_STORE/index.tsx
touch $_STORE/$1.tsx
touch $_STORE/$1.module.scss

echo "export { default } from './$1';" >> $_STORE/index.tsx

echo "import classNames from 'classnames/bind';" >> $_STORE/$1.tsx
echo "import styles from './$1.module.scss';" >> $_STORE/$1.tsx
echo "const cx = classNames.bind(styles);" >> $_STORE/$1.tsx
echo "function $1 () { return <div>$1</div> }" >> $_STORE/$1.tsx
echo "export default $1" >> $_STORE/$1.tsx