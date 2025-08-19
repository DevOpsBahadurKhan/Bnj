self.addEventListener("message", function (e) {
  const total = e.data.total;
  const batchSize = 10000;
  let i = 0;

  function generateBatch() {
    const colors = [];
    for (let j = 0; j < batchSize && i < total; j++, i++) {
      const hex = Math.floor(Math.random() * 0xffffff).toString(16);
      colors.push("#" + hex.padStart(6, "0"));
    }
    self.postMessage({ colors, done: i >= total });
    if (i < total) setTimeout(generateBatch, 0);
  }

  generateBatch();
});
