import React, { useEffect, useState } from 'react';
import Module from 'verovio/wasm/verovio-toolkit-wasm-hum.js';
import { VerovioToolkit } from 'verovio';

function App() {
  const [score, setScore] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      Module().then((VerovioModule) => {
        const verovioToolkit = new VerovioToolkit(VerovioModule);
        console.log(verovioToolkit.getVersion());
        const url = 'https://raw.githubusercontent.com/WolfgangDrescher/lassus-geistliche-psalmen/master/kern/01-beatus-vir.krn';
        fetch(url).then(response => {
          return response.text()
        }).then((score) => {
          verovioToolkit.loadData(score);
          setScore(verovioToolkit.renderToSVG(1, {}));
        });
      });
    });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{__html: score}}></div>
  );
}

export default App;
