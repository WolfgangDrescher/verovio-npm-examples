<script setup>
import { ref } from 'vue';
import Module from 'verovio/wasm/verovio-toolkit-wasm-hum';
import { VerovioToolkit } from 'verovio';

const data = ref();

Module().then((VerovioModule) => {
  const verovioToolkit = new VerovioToolkit(VerovioModule);
  console.log(verovioToolkit.getVersion());
  const url = 'https://raw.githubusercontent.com/WolfgangDrescher/lassus-geistliche-psalmen/master/kern/01-beatus-vir.krn';
  fetch(url).then(response => {
    return response.text()
  }).then((score) => {
    verovioToolkit.loadData(score);
    data.value = verovioToolkit.renderToSVG(1, {});
  });
});
</script>

<template>
  Display verovio score
  <div v-html="data"></div>
</template>
