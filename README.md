# Learn Typescript

> https://www.typescriptlang.org/


## Install typescript

Dependence `node` and `npm`. Fist you can install `nvm`, then execute `nvm install` and `nvm use`.

For example on Arch:

```shell
sudo pacman -S nvm
echo 'source /usr/share/nvm/init-nvm.sh' >> ~/.zshrc
source ~/.zshrc

nvm install
nvm use
```

Now, we can install typescript and other package if need by `npm`.

```shell
npm install typescript --save-dev
```

Or globally installing TypeScript

```shell
sudo npm install -g typescript
```

## Typescript Basic

> https://www.typescriptlang.org/docs/handbook/2/basic-types.html


## tsconfig

> More about `tsconfig`: https://www.typescriptlang.org/play

Execute `tsc --init` in project root directory, will auto generate `tsconfig.json` file.

Also, execute `npm init -y`, will generate `package.json` file.

Tsc watch mode: `tsc -w `