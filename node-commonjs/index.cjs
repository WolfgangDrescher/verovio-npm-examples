const Module = require('verovio/wasm/verovio-toolkit-wasm-hum.js');
const { VerovioToolkit } = require('verovio');
const fs = require('fs');

Module().then((VerovioModule) => {
    const verovioToolkit = new VerovioToolkit(VerovioModule);
    console.log(verovioToolkit.getVersion());
    const score = fs.readFileSync('demo.krn');
    verovioToolkit.loadData(score);
    const data = verovioToolkit.renderToSVG(1, {});
    console.log(data);
});
