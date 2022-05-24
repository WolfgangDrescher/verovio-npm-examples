import createVerovioModule from 'verovio/wasm';
import { VerovioToolkit } from 'verovio/next';
import fs from 'node:fs';

createVerovioModule().then(VerovioModule => {
    const verovioToolkit = new VerovioToolkit(VerovioModule);
    console.log(verovioToolkit.getVersion());
    const score = fs.readFileSync('demo.mei').toString();
    verovioToolkit.loadData(score);
    const data = verovioToolkit.renderToSVG(1, {});
    console.log(data);
});
