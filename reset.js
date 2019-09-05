// reset all `node_modules` folders

const fs = require('fs-extra');
const path = require('path');

const toRemove = [path.resolve(__dirname, './node_modules')];

(async () => {
    for (const dir of toRemove) {
        await fs.remove(dir);
    }
})();
