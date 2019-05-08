# eslint-config-koot

_Koot.js_ 开发及其模板项目使用的 _ESLint_ 配置规则。基于 [@Daqi](https://github.com/daqi) 提供的规则开发。

## 如何使用

1. 安装 `eslint` 和 `eslint-config-koot` 为开发依赖包

```bash
> npm i eslint eslint-config-koot --save-dev
```

2. 添加或编辑 _ESLint_ 配置文件 (如 `.eslintrc`)，将 `koot` 添加至 `extends` 选项中

```json
{
    "extends": ["koot"]
}
```

## 推荐的开发环境

除了使用该 _ESLint_ 配置外，我们还推荐使用 _VS Code (Visual Studio Code)_ 配合 _Prettier_，以下是完整的环境配置方案：

1. 下载安装 _VS Code_ : https://code.visualstudio.com/download
2. 在 _VS Code_ 中安装以下扩展:
    - [_ESLint_](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [_Prettier_](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. 在项目根目录中创建名为 `.vscode` 的目录，并添加名为 `settings.json` 的文件，其内容为：

```json
{
    "editor.rulers": [80, 120],
    "editor.formatOnSave": true,
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "files.trimTrailingWhitespace": true,
    "files.insertFinalNewline": true,
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    "javascript.implicitProjectConfig.experimentalDecorators": true,
    "javascript.validate.enable": false,
    "prettier.eslintIntegration": true,
    "eslint.autoFixOnSave": true,
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}
```

4. 在项目根目录中创建名为 `.prettierrc` 的文件，其内容为：

```json
{
    "printWidth": 80,
    "singleQuote": true,
    "tabWidth": 4,
    "jsxBracketSameLine": false,
    "useTabs": false,
    "semi": true,
    "bracketSpacing": true,
    "eslintIntegration": true
}
```

5. 重启 _VS Code_

现在，除了 _ESLint_ 的自动代码检测外，_VS Code_ 也有了在保存代码文件时自动修正书写习惯的能力。
