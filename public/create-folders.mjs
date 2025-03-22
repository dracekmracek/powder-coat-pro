// Skript pro vytvoření všech potřebných adresářů pro obrázky

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Získání aktuálního adresáře v ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definice adresářů, které chceme vytvořit
const directories = [
  'images',
  'images/technology',
  'images/process',
  'images/surfaces',
  'images/facility',
  'images/quality'
];

// Funkce pro vytvoření adresáře, pokud ještě neexistuje
function createDirectoryIfNotExists(dirPath) {
  // Použijeme absolutní cestu
  const absolutePath = path.resolve(__dirname, dirPath);
  
  try {
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath, { recursive: true });
      console.log(`✅ Vytvořen adresář: ${dirPath}`);
    } else {
      console.log(`ℹ️ Adresář již existuje: ${dirPath}`);
    }
  } catch (error) {
    console.error(`❌ Chyba při vytváření adresáře ${dirPath}:`, error);
  }
}

// Vytvoření adresářů
console.log('🚀 Vytvářím adresáře pro obrázky...');
directories.forEach(dir => {
  createDirectoryIfNotExists(dir);
});

console.log('✅ Hotovo! Všechny adresáře byly vytvořeny.');
console.log('\nStruktura adresářů:');
console.log('----------------');
console.log('public/');
console.log('  └── images/');
console.log('      ├── technology/');
console.log('      ├── process/');
console.log('      ├── surfaces/');
console.log('      ├── facility/');
console.log('      └── quality/');
console.log('----------------');
console.log('\nNyní můžete obrázky vložit do příslušných adresářů.'); 