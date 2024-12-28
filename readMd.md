# 整体流程

## lerna

```js
npm install -g lerna
lerna init
```

- 修改配置
- package.json

```json
{
  "name": "root",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "dependencies": {},
  "devDependencies": {
    "lerna": "^8.1.9"
  }
}
```

lerna.json

```json
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "version": "0.0.0",
  "useWorkspaces": true,
  "packages": [
    "packages/*"
  ]
}
```

## pnpm

要创建pnpm-workspace.yaml文件，指定workspace

## 新增仓库

lerna create demo1
一步步走下去
创建packages/demo1

三个疑问：
待解决

## deploy.sh

怎么用GitHub搭静态网站

## GitHub actions怎么用

## lerna新增仓库怎么使用的
