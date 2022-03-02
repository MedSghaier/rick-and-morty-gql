#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# deploying to https://medsghaier.github.io/rick-and-morty-gql
# git push -f git@github.com:medsghaier/rick-and-morty-gql.git main:gh-pages

cd -