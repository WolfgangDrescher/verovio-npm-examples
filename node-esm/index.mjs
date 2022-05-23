import Module from 'verovio/wasm';
import { VerovioToolkit } from 'verovio';
import fs from 'node:fs';

Module.onRuntimeInitialized = () => {
    const verovioToolkit = new VerovioToolkit(Module);
    console.log(verovioToolkit.getVersion());
    const score = fs.readFileSync('demo.mei').toString();
    verovioToolkit.loadData(score);
    const data = verovioToolkit.renderToSVG(1, {});
    console.log(data);
};
