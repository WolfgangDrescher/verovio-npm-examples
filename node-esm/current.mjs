import verovio from '../verovio.js';
import fs from 'node:fs';

verovio.module.onRuntimeInitialized = () => {
    const verovioToolkit = new verovio.toolkit();
    console.log(verovioToolkit.getVersion());
    const score = fs.readFileSync('demo.mei').toString();
    verovioToolkit.loadData(score);
    const data = verovioToolkit.renderToSVG(1, {});
    console.log(data);
};
