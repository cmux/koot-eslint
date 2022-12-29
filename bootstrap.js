import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const runCmd = async (cmd) => {
    // print name
    console.log('\n');
    console.log(`\x1b[43m \x1b[0m\x1b[33m ` + cmd + `\x1b[0m`);
    console.log('');

    // spawn
    const chunks = cmd.split(' ');
    await new Promise((resolve) => {
        const child = spawn(chunks.shift(), chunks, {
            stdio: 'inherit',
            shell: true,
        });
        child.on('close', () => {
            resolve();
        });
    });
};

const run = async () => {
    // 检查 `lerna` 是否安装到本地依赖
    const lernaInstalled = fs.existsSync(
        path.resolve(
            dirname(fileURLToPath(import.meta.url)),
            'node_modules/lerna'
        )
    );

    if (lernaInstalled) await runCmd(`lerna clean --yes"`);
    await runCmd('npm install --no-save');
    await runCmd(`lerna bootstrap --hoist"`);

    //

    console.log('\n');
    console.log(`\x1b[42m \x1b[0m\x1b[32m Bootstrap complete\x1b[0m`);
    console.log('');
};

run().catch((err) => console.error(err));
