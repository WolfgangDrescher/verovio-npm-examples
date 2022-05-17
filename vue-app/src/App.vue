<script setup>
import { ref } from 'vue';
import Module from 'verovio/wasm';
import { VerovioToolkit } from 'verovio';

const data = ref();

Module.onRuntimeInitialized = () => {
  const verovioToolkit = new VerovioToolkit(Module);
  console.log(verovioToolkit.getVersion());
  const url = '/demo.mei';
  fetch(url).then(response => {
    return response.text()
  }).then((score) => {
    verovioToolkit.loadData(score);
    data.value = verovioToolkit.renderToSVG(1, {});
  });
};
</script>

<template>
  <div v-html="data"></div>
</template>
