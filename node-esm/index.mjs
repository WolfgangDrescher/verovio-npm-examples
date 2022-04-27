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
