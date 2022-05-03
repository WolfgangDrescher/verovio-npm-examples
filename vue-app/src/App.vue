<script setup>
import { ref } from 'vue';
import verovio from 'verovio';

const data = ref();

const mei = 'https://raw.githubusercontent.com/music-encoding/sample-encodings/main/MEI_4.0/Music/Encoding_alternatives/Mozart_Veilchen/Das_Veilchen_layout.mei';
const humdrum = 'https://raw.githubusercontent.com/WolfgangDrescher/lassus-geistliche-psalmen/master/kern/01-beatus-vir.krn';

verovio.module.onRuntimeInitialized = () => {
  const verovioToolkit = new verovio.toolkit();
  console.log(verovioToolkit.getVersion());
  fetch(mei).then(response => {
    return response.text()
  }).then((score) => {
    verovioToolkit.loadData(score);
    data.value = verovioToolkit.renderToSVG(1, {});
  });
};
</script>

<template>
  Display verovio score
  <div v-html="data"></div>
</template>
