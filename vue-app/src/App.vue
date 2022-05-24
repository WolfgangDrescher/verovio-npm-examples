<script setup>
import { ref } from 'vue';
import createVerovioModule from 'verovio/wasm';
import { VerovioToolkit } from 'verovio/next';

const data = ref();

createVerovioModule().then(VerovioModule => {
  const verovioToolkit = new VerovioToolkit(VerovioModule);
  console.log(verovioToolkit.getVersion());
  const url = '/demo.mei';
  fetch(url).then(response => {
    return response.text()
  }).then((score) => {
    verovioToolkit.loadData(score);
    data.value = verovioToolkit.renderToSVG(1, {});
  });
});
</script>

<template>
  <div v-html="data"></div>
</template>
