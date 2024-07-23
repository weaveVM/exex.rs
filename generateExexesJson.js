const fs = require('fs');
const path = require('path');

const exexesDir = path.join(__dirname, 'exexes');
const outputFilePath = path.join(__dirname, 'public', 'exexes.json');

function getExexes() {
  const exexes = [];
  const exexFiles = fs.readdirSync(exexesDir);

  exexFiles.forEach(file => {
    const exexPath = path.join(exexesDir, file);
    const stats = fs.statSync(exexPath);

    if (stats.isDirectory() && file !== '_template_exex') {
      const dataPath = path.join(exexPath, 'data.json');

      if (fs.existsSync(dataPath)) {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

        const exexData = {
          id: file,
          repolink: `https://github.com/weaveVM/exex.rs/tree/main/exexes/${file}`,
          ...data
        };

        exexes.push(exexData);
      }
    }
  });

  return exexes;
}

function writeExexesToFile(exexes) {
  fs.writeFileSync(outputFilePath, JSON.stringify(exexes, null, 2), 'utf-8');
  console.log(`Exexes data written to ${outputFilePath}`);
}

const exexes = getExexes();
writeExexesToFile(exexes);
