// reset all `node_modules` folders

import fs from 'fs-extra';
import path from 'path';

const toRemove = [path.resolve(__dirname, './node_modules')];

(async () => {
    for (const dir of toRemove) {
        await fs.remove(dir);
    }
})();
