#!/usr/bin/env bash

# 确保脚本抛出遇到的错误
set -e

push_addr=`git remote get-url --push origin`
commit_info=`git describe --all --always --long`
dist_path=docs/.vuepress/dist
push_branch=gh-pages

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd $dist_path

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m "deploy: ${commit_info}"
git push -f $push_addr HEAD:$push_branch

cd -
rm -rf $dist_path

# 如果发布到 https://<USERNAME>.github.io