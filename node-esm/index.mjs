// https://github.com/emscripten-core/emscripten/issues/11792#issuecomment-877120580
import {dirname} from 'path';
globalThis.__dirname = dirname(import.meta.url);
// import { createRequire } from 'module';
// globalThis.require = createRequire(import.meta.url);

import Module from 'verovio/wasm/verovio-toolkit-wasm-hum.js';
import { VerovioToolkit } from 'verovio';
import fs from 'fs';

Module().then((VerovioModule) => {
    const verovioToolkit = new VerovioToolkit(VerovioModule);
    console.log(verovioToolkit.getVersion());
    const score = fs.readFileSync('demo.krn');
    verovioToolkit.loadData(score);
    const data = verovioToolkit.renderToSVG(1, {});
    console.log(data);
});
