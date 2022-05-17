import Module from 'verovio/wasm';
import { VerovioToolkit } from 'verovio';
import fs from 'fs';

Module.onRuntimeInitialized = () => {
    const verovioToolkit = new VerovioToolkit(Module);
    console.log(verovioToolkit.getVersion());
    const score = fs.readFileSync('demo.krn').toString();
    verovioToolkit.loadData(score);
    const data = verovioToolkit.renderToSVG(1, {});
    console.log(data);
};
