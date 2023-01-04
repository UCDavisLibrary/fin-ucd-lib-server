#! /bin/bash

rm -rf dist
mkdir dist
mkdir dist/elements
mkdir dist/elements/utils

cp -r public/images dist/
cp -r public/loader dist/
cp -r public/elements/utils/pdfjs dist/elements/utils/pdfjs

cp public/index.html dist/
cp public/jwt.html dist/
cp public/ie.html dist/
cp public/manifest.json dist/

webpack --config webpack-dist.config.js