const createVerovioModule = require('verovio/wasm');
const { VerovioToolkit } = require('verovio/next');
const fs = require('node:fs');

createVerovioModule().then(VerovioModule => {
    const verovioToolkit = new VerovioToolkit(VerovioModule);
    console.log(verovioToolkit.getVersion());
    const score = fs.readFileSync('demo.mei').toString();
    verovioToolkit.loadData(score);
    const data = verovioToolkit.renderToSVG(1, {});
    console.log(data);
});
