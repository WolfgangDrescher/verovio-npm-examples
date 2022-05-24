import React, { useEffect, useState } from 'react';
import createVerovioModule from 'verovio/wasm';
import { VerovioToolkit } from 'verovio/next';

function App() {
  const [score, setScore] = useState(null);

  useEffect(() => {
    createVerovioModule().then(VerovioModule => {
        const verovioToolkit = new VerovioToolkit(VerovioModule);
        console.log(verovioToolkit.getVersion());
        const url = '/demo.mei';
        fetch(url).then(response => {
            return response.text()
        }).then((score) => {
            verovioToolkit.loadData(score);
            setScore(verovioToolkit.renderToSVG(1, {}));
        });
    });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{__html: score}}></div>
  );
}

export default App;
