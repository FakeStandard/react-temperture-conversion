# #!/usr/bin/env sh

# # abort on errors
# set -e

# # build
# npm run build

# # navigate into the build output directory
# cd dist

# # if you are deploying to a custom domain
# # echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# # if you are deploying to https://<USERNAME>.github.io
# # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# # if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/FakeStandard/react-timer.git master:gh-pages

# cd -

# first install gh-pages
# npm install gh-pages --save-dev

# https://github.com/gitname/react-gh-pages

# 2022/6/6
# npm run build
npm run gh-pages -d build

npm run deploy