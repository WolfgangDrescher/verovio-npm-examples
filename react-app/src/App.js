import React, { useEffect, useState } from 'react';
import verovio from 'verovio';
// const verovio = require('verovio');

const mei = 'https://raw.githubusercontent.com/music-encoding/sample-encodings/main/MEI_4.0/Music/Encoding_alternatives/Mozart_Veilchen/Das_Veilchen_layout.mei';
const humdrum = 'https://raw.githubusercontent.com/WolfgangDrescher/lassus-geistliche-psalmen/master/kern/01-beatus-vir.krn';

function App() {
  const [score, setScore] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      verovio.module.onRuntimeInitialized = () => {
        const verovioToolkit = new verovio.toolkit();
        console.log(verovioToolkit.getVersion());
        fetch(mei).then(response => {
          return response.text()
        }).then((score) => {
          verovioToolkit.loadData(score);
          setScore(verovioToolkit.renderToSVG(1, {}));
        });
      };
    });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{__html: score}}></div>
  );
}

export default App;
