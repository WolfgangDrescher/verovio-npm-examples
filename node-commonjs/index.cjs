const Module = require('verovio/wasm');
const { VerovioToolkit } = require('verovio/next');
const fs = require('node:fs');

Module.onRuntimeInitialized = () => {
    const verovioToolkit = new VerovioToolkit(Module);
    console.log(verovioToolkit.getVersion());
    const score = fs.readFileSync('demo.mei').toString();
    verovioToolkit.loadData(score);
    const data = verovioToolkit.renderToSVG(1, {});
    console.log(data);
};
