import React, { useEffect, useState } from 'react';
import Module from 'verovio/wasm';
import { VerovioToolkit } from 'verovio';

function App() {
  const [score, setScore] = useState(null);

  useEffect(() => {
    Module.onRuntimeInitialized = () => {
        const verovioToolkit = new VerovioToolkit(Module);
        console.log(verovioToolkit.getVersion());
        const url = '/demo.mei';
        fetch(url).then(response => {
            return response.text()
        }).then((score) => {
            verovioToolkit.loadData(score);
            setScore(verovioToolkit.renderToSVG(1, {}));
        });
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{__html: score}}></div>
  );
}

export default App;
