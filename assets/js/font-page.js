const JAVANESE = {
  hero: "ꦲꦤꦕꦫꦏ",
  tester: "ꦲꦏ꧀ꦱꦫ ꦗꦮ ꦲꦶꦏꦸ ꦱꦶꦱ꧀ꦠꦺꦩ꧀ ꦠꦸꦭꦶꦱ꧀",
  display: "ꦲꦏ꧀ꦱꦫ ꦗꦮ",
  headline: "ꦧꦸꦢꦪ ꦭꦤ꧀ ꦧꦱ",
  text: `ꦲꦏ꧀ꦱꦫ ꦗꦮ ꦲꦶꦏꦶ ꦢꦶꦒꦸꦤꦏꦏꦺ ꦏꦁꦒꦺ ꦤꦸꦭꦶꦱ꧀ ꦧꦼꦧꦿꦪꦤ꧀ ꦭꦤ꧀ ꦕꦫꦶꦠ ꦱꦏ ꦗꦩꦤ꧀ ꦏꦸꦤ꧉ ꦥꦫ ꦲꦸꦭꦩ ꦭꦤ꧀ ꦥꦸꦗꦁꦒ ꦤꦸꦭꦶꦱ꧀ ꦏꦮꦿꦸꦃ ꦲꦶꦁ ꦭꦺꦩ꧀ꦧꦂ ꦏꦁ ꦢꦶꦱꦶꦩ꧀ꦥꦼꦤ꧀ ꦲꦤ ꦲꦶꦁ ꦥꦸꦱ꧀ꦠꦏ꧉

ꦲꦶꦁ ꦗꦩꦤ꧀ ꦱꦲꦶꦏꦶ ꦲꦏ꧀ꦱꦫ ꦗꦮ ꦩꦱꦶꦃ ꦧꦶꦱ ꦏꦠꦺꦩꦺꦴꦏꦏꦺ ꦲꦶꦁ ꦩꦕꦺꦩ꧀ ꦩꦕꦺꦩ꧀ ꦥꦥꦤ꧀꧈ ꦱꦏ ꦥꦸꦱ꧀ꦠꦏ ꦔꦤ꧀ꦠꦶ ꦠꦸꦭꦶꦱꦤ꧀ ꦢꦶꦒꦶꦠꦭ꧀꧉ ꦠꦲꦸꦤ꧀ ꧇꧒꧐꧒꧖꧇ ꦢꦢꦶ ꦠꦤ꧀ꦝ ꦲꦶꦁ ꦠꦸꦭꦶꦱꦤ꧀ ꦲꦶꦏꦶ꧉`
};

const fonts = {
  "aksa-jawa": {
    name: "Aksajawa",
    style: "Regular",
    family: '"Aksa Jawa", sans-serif',
    description: "ABM Aksa Jawa adalah prototype typeface untuk sistem tulisan Jawa. Halaman ini menampilkan specimen, character set dan perilaku font saat dirender langsung oleh browser."
  },
  "katharsist": {
    name: "Katharsist",
    style: "Regular",
    family: '"Katharsist", serif',
    description: "Katharsist adalah salah satu prototype typeface dalam koleksi Aksarakatnya. Halaman ini menampilkan specimen dan character set dengan sistem yang sama."
  },
  "kinanthi": {
    name: "Kinanthi",
    style: "Regular",
    family: '"Kinanthi", serif',
    description: "Kinanthi adalah salah satu prototype typeface dalam koleksi Aksarakatnya. Halaman ini menampilkan specimen dan character set dengan sistem yang sama."
  },
  "kucrit": {
    name: "Kucrit",
    style: "Italic",
    family: '"Kucrit", serif',
    description: "Kucrit adalah salah satu prototype typeface dalam koleksi Aksarakatnya. Halaman ini menampilkan specimen dan character set dengan sistem yang sama."
  },
  "mrajakrasa": {
    name: "Mrajakrasa",
    style: "Regular",
    family: '"Mrajakrasa", serif',
    description: "Mrajakrasa adalah salah satu prototype typeface dalam koleksi Aksarakatnya. Halaman ini menampilkan specimen dan character set dengan sistem yang sama."
  },
  "padmaolya": {
    name: "Padmaolya",
    style: "Regular",
    family: '"Padmaolya", serif',
    description: "Padmaolya adalah salah satu prototype typeface dalam koleksi Aksarakatnya. Halaman ini menampilkan specimen dan character set dengan sistem yang sama."
  },
  "roncenbranata": {
    name: "Roncenbranata",
    style: "Regular",
    family: '"Roncenbranata", serif',
    description: "Roncenbranata adalah salah satu prototype typeface dalam koleksi Aksarakatnya. Halaman ini menampilkan specimen dan character set dengan sistem yang sama."
  },
  "swarna": {
    name: "Swarna",
    style: "Italic",
    family: '"Swarna", serif',
    description: "Swarna adalah salah satu prototype typeface dalam koleksi Aksarakatnya. Halaman ini menampilkan specimen dan character set dengan sistem yang sama."
  }
};

/*
  91 assigned characters in the Unicode Javanese block.
  Grouping here is for presentation clarity.
*/
const glyphCategories = [
  {
    title: "Aksara Nglegena",
    note: "20 letters",
    glyphs: [
      ["ꦲ","ha","U+A9B2","JAVANESE LETTER HA"],
      ["ꦤ","na","U+A9A4","JAVANESE LETTER NA"],
      ["ꦕ","ca","U+A995","JAVANESE LETTER CA"],
      ["ꦫ","ra","U+A9AB","JAVANESE LETTER RA"],
      ["ꦏ","ka","U+A98F","JAVANESE LETTER KA"],
      ["ꦢ","da","U+A9A2","JAVANESE LETTER DA"],
      ["ꦠ","ta","U+A9A0","JAVANESE LETTER TA"],
      ["ꦱ","sa","U+A9B1","JAVANESE LETTER SA"],
      ["ꦮ","wa","U+A9AE","JAVANESE LETTER WA"],
      ["ꦭ","la","U+A9AD","JAVANESE LETTER LA"],
      ["ꦥ","pa","U+A9A5","JAVANESE LETTER PA"],
      ["ꦝ","dha","U+A99D","JAVANESE LETTER DDA"],
      ["ꦗ","ja","U+A997","JAVANESE LETTER JA"],
      ["ꦪ","ya","U+A9AA","JAVANESE LETTER YA"],
      ["ꦚ","nya","U+A99A","JAVANESE LETTER NYA"],
      ["ꦩ","ma","U+A9A9","JAVANESE LETTER MA"],
      ["ꦒ","ga","U+A992","JAVANESE LETTER GA"],
      ["ꦧ","ba","U+A9A7","JAVANESE LETTER BA"],
      ["ꦛ","tha","U+A99B","JAVANESE LETTER TTA"],
      ["ꦔ","nga","U+A994","JAVANESE LETTER NGA"]
    ]
  },

  {
    title: "Aksara Swara",
    note: "independent vowels",
    glyphs: [
      ["ꦄ","A","U+A984","JAVANESE LETTER A"],
      ["ꦆ","I","U+A986","JAVANESE LETTER I"],
      ["ꦈ","U","U+A988","JAVANESE LETTER U"],
      ["ꦌ","E","U+A98C","JAVANESE LETTER E"],
      ["ꦎ","O","U+A98E","JAVANESE LETTER O"]
    ]
  },

  {
    title: "Swara & Syllabic Extensions",
    note: "historical / extended forms",
    glyphs: [
      ["ꦅ","I Kawi","U+A985","JAVANESE LETTER I KAWI"],
      ["ꦇ","II","U+A987","JAVANESE LETTER II"],
      ["ꦉ","pa cerek","U+A989","JAVANESE LETTER PA CEREK"],
      ["ꦊ","nga lelet","U+A98A","JAVANESE LETTER NGA LELET"],
      ["ꦋ","nga lelet raswadi","U+A98B","JAVANESE LETTER NGA LELET RASWADI"],
      ["ꦍ","AI","U+A98D","JAVANESE LETTER AI"]
    ]
  },

  {
    title: "Murda & Extended Consonants",
    note: "encoded consonant variants",
    glyphs: [
      ["ꦐ","ka sasak","U+A990","JAVANESE LETTER KA SASAK"],
      ["ꦑ","ka murda","U+A991","JAVANESE LETTER KA MURDA"],
      ["ꦓ","ga murda","U+A993","JAVANESE LETTER GA MURDA"],
      ["ꦖ","ca murda","U+A996","JAVANESE LETTER CA MURDA"],
      ["ꦘ","nya murda","U+A998","JAVANESE LETTER NYA MURDA"],
      ["ꦙ","ja mahaprana","U+A999","JAVANESE LETTER JA MAHAPRANA"],
      ["ꦜ","tta mahaprana","U+A99C","JAVANESE LETTER TTA MAHAPRANA"],
      ["ꦞ","dda mahaprana","U+A99E","JAVANESE LETTER DDA MAHAPRANA"],
      ["ꦟ","na murda","U+A99F","JAVANESE LETTER NA MURDA"],
      ["ꦡ","ta murda","U+A9A1","JAVANESE LETTER TA MURDA"],
      ["ꦣ","da mahaprana","U+A9A3","JAVANESE LETTER DA MAHAPRANA"],
      ["ꦦ","pa murda","U+A9A6","JAVANESE LETTER PA MURDA"],
      ["ꦨ","ba murda","U+A9A8","JAVANESE LETTER BA MURDA"],
      ["ꦬ","ra agung","U+A9AC","JAVANESE LETTER RA AGUNG"],
      ["ꦯ","sa murda","U+A9AF","JAVANESE LETTER SA MURDA"],
      ["ꦰ","sa mahaprana","U+A9B0","JAVANESE LETTER SA MAHAPRANA"]
    ]
  },

  {
    title: "Signs",
    note: "final and modifying signs",
    glyphs: [
      ["◌ꦀ","panyangga","U+A980","JAVANESE SIGN PANYANGGA"],
      ["◌ꦁ","cecak","U+A981","JAVANESE SIGN CECAK"],
      ["◌ꦂ","layar","U+A982","JAVANESE SIGN LAYAR"],
      ["◌ꦃ","wignyan","U+A983","JAVANESE SIGN WIGNYAN"],
      ["◌꦳","cecak telu","U+A9B3","JAVANESE SIGN CECAK TELU"]
    ]
  },

  {
    title: "Sandangan Swara",
    note: "vowel signs",
    glyphs: [
      ["◌ꦴ","tarung","U+A9B4","JAVANESE VOWEL SIGN TARUNG"],
      ["◌ꦵ","tolong","U+A9B5","JAVANESE VOWEL SIGN TOLONG"],
      ["◌ꦶ","wulu","U+A9B6","JAVANESE VOWEL SIGN WULU"],
      ["◌ꦷ","wulu melik","U+A9B7","JAVANESE VOWEL SIGN WULU MELIK"],
      ["◌ꦸ","suku","U+A9B8","JAVANESE VOWEL SIGN SUKU"],
      ["◌ꦹ","suku mendut","U+A9B9","JAVANESE VOWEL SIGN SUKU MENDUT"],
      ["◌ꦺ","taling","U+A9BA","JAVANESE VOWEL SIGN TALING"],
      ["◌ꦻ","dirga mure","U+A9BB","JAVANESE VOWEL SIGN DIRGA MURE"],
      ["◌ꦼ","pepet","U+A9BC","JAVANESE VOWEL SIGN PEPET"]
    ]
  },

  {
    title: "Sandangan Wyanjana",
    note: "consonant signs & pangkon",
    glyphs: [
      ["◌ꦽ","keret","U+A9BD","JAVANESE CONSONANT SIGN KERET"],
      ["◌ꦾ","pengkal","U+A9BE","JAVANESE CONSONANT SIGN PENGKAL"],
      ["◌ꦿ","cakra","U+A9BF","JAVANESE CONSONANT SIGN CAKRA"],
      ["◌꧀","pangkon","U+A9C0","JAVANESE PANGKON"]
    ]
  },

  {
    title: "Pada & Punctuation",
    note: "punctuation and decorative signs",
    glyphs: [
      ["꧁","left rerenggan","U+A9C1","JAVANESE LEFT RERENGGAN"],
      ["꧂","right rerenggan","U+A9C2","JAVANESE RIGHT RERENGGAN"],
      ["꧃","pada andap","U+A9C3","JAVANESE PADA ANDAP"],
      ["꧄","pada madya","U+A9C4","JAVANESE PADA MADYA"],
      ["꧅","pada luhur","U+A9C5","JAVANESE PADA LUHUR"],
      ["꧆","pada windu","U+A9C6","JAVANESE PADA WINDU"],
      ["꧇","pada pangkat","U+A9C7","JAVANESE PADA PANGKAT"],
      ["꧈","pada lingsa","U+A9C8","JAVANESE PADA LINGSA"],
      ["꧉","pada lungsi","U+A9C9","JAVANESE PADA LUNGSI"],
      ["꧊","pada adeg","U+A9CA","JAVANESE PADA ADEG"],
      ["꧋","pada adeg adeg","U+A9CB","JAVANESE PADA ADEG ADEG"],
      ["꧌","pada piseleh","U+A9CC","JAVANESE PADA PISELEH"],
      ["꧍","turned piseleh","U+A9CD","JAVANESE TURNED PADA PISELEH"],
      ["ꧏ","pangrangkep","U+A9CF","JAVANESE PANGRANGKEP"],
      ["꧞","tirta tumetes","U+A9DE","JAVANESE PADA TIRTA TUMETES"],
      ["꧟","isen-isen","U+A9DF","JAVANESE PADA ISEN-ISEN"]
    ]
  },

  {
    title: "Angka Jawa",
    note: "0–9",
    glyphs: [
      ["꧐","0","U+A9D0","JAVANESE DIGIT ZERO"],
      ["꧑","1","U+A9D1","JAVANESE DIGIT ONE"],
      ["꧒","2","U+A9D2","JAVANESE DIGIT TWO"],
      ["꧓","3","U+A9D3","JAVANESE DIGIT THREE"],
      ["꧔","4","U+A9D4","JAVANESE DIGIT FOUR"],
      ["꧕","5","U+A9D5","JAVANESE DIGIT FIVE"],
      ["꧖","6","U+A9D6","JAVANESE DIGIT SIX"],
      ["꧗","7","U+A9D7","JAVANESE DIGIT SEVEN"],
      ["꧘","8","U+A9D8","JAVANESE DIGIT EIGHT"],
      ["꧙","9","U+A9D9","JAVANESE DIGIT NINE"]
    ]
  }
];

/* ---------------------------------------------------------
   FONT PAGE DATA
   --------------------------------------------------------- */

const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "aksa-jawa";
const font = fonts[id] || fonts["aksa-jawa"];

document.title = `Aksarakatnya — ${font.name}`;

document.querySelectorAll(".detail-font").forEach((node) => {
  node.style.fontFamily = font.family;
});

document.getElementById("detailNameSmall").textContent = font.name;
document.getElementById("detailStyle").textContent = font.style;
document.getElementById("detailName").textContent = font.name;
document.getElementById("detailHeroSample").textContent = JAVANESE.hero;
document.getElementById("testerText").textContent = JAVANESE.tester;
document.getElementById("specimenDisplay").textContent = JAVANESE.display;
document.getElementById("specimenHeadline").textContent = JAVANESE.headline;
document.getElementById("specimenText").textContent = JAVANESE.text;
document.getElementById("detailInfoName").textContent = font.name;
document.getElementById("detailDescription").textContent = font.description;
document.getElementById("tableName").textContent = font.name;
document.getElementById("tableStyle").textContent = font.style;

/* ---------------------------------------------------------
   TYPE TESTER + LATIN → JAVANESE TRANSLITERATION
   This is a lightweight offline transliterator for the prototype.
   It prioritizes common typing patterns, not full philological rules.
   --------------------------------------------------------- */

const testerText = document.getElementById("testerText");
const sizeSlider = document.getElementById("sizeSlider");
const lineSlider = document.getElementById("lineSlider");
const sizeValue = document.getElementById("sizeValue");
const lineValue = document.getElementById("lineValue");
const latinInput = document.getElementById("latinInput");
const resetTester = document.getElementById("resetTester");

const PANGKON = "꧀";
const CAKRA = "ꦿ";
const PENGKAL = "ꦾ";
const CECAK = "ꦁ";
const LAYAR = "ꦂ";
const WIGNYAN = "ꦃ";
const CECAK_TELU = "꦳";

const consonants = {
  "ng": "ꦔ",
  "ny": "ꦚ",
  "th": "ꦛ",
  "dh": "ꦝ",
  "kh": "ꦏ" + CECAK_TELU,
  "gh": "ꦒ" + CECAK_TELU,
  "h": "ꦲ",
  "n": "ꦤ",
  "c": "ꦕ",
  "r": "ꦫ",
  "k": "ꦏ",
  "d": "ꦢ",
  "t": "ꦠ",
  "s": "ꦱ",
  "w": "ꦮ",
  "l": "ꦭ",
  "p": "ꦥ",
  "j": "ꦗ",
  "y": "ꦪ",
  "m": "ꦩ",
  "g": "ꦒ",
  "b": "ꦧ",
  "f": "ꦥ" + CECAK_TELU,
  "v": "ꦮ" + CECAK_TELU,
  "z": "ꦗ" + CECAK_TELU,
  "q": "ꦏ"
};

const vowelSigns = {
  "a": "",
  "i": "ꦶ",
  "u": "ꦸ",
  "e": "ꦺ",
  "é": "ꦺ",
  "è": "ꦺ",
  "o": "ꦺꦴ",
  "ê": "ꦼ",
  "ě": "ꦼ"
};

const javaneseDigits = {
  "0": "꧐", "1": "꧑", "2": "꧒", "3": "꧓", "4": "꧔",
  "5": "꧕", "6": "꧖", "7": "꧗", "8": "꧘", "9": "꧙"
};

function isVowel(token) {
  return Object.prototype.hasOwnProperty.call(vowelSigns, token);
}

function tokenizeLatinWord(word) {
  const normalized = word
    .toLowerCase()
    .replace(/x/g, "ks");

  const tokens = [];
  let i = 0;

  while (i < normalized.length) {
    const two = normalized.slice(i, i + 2);

    if (["ng", "ny", "th", "dh", "kh", "gh"].includes(two)) {
      tokens.push(two);
      i += 2;
      continue;
    }

    const one = normalized[i];

    if (isVowel(one) || consonants[one]) {
      tokens.push(one);
    } else {
      tokens.push(one);
    }

    i += 1;
  }

  return tokens;
}

function initialVowel(vowel) {
  // For a lightweight tester, vowel-initial words use HA + vowel sign.
  // This makes inputs such as "aksara" produce ꦲꦏ꧀ꦱꦫ.
  return "ꦲ" + (vowelSigns[vowel] || "");
}

function finalConsonant(token) {
  if (token === "ng") return CECAK;
  if (token === "r") return LAYAR;
  if (token === "h") return WIGNYAN;
  return (consonants[token] || token) + PANGKON;
}

function transliterateWord(word) {
  const tokens = tokenizeLatinWord(word);
  let output = "";
  let i = 0;

  while (i < tokens.length) {
    const token = tokens[i];

    if (isVowel(token)) {
      output += initialVowel(token);
      i += 1;
      continue;
    }

    const base = consonants[token];

    if (!base) {
      output += token;
      i += 1;
      continue;
    }

    const next = tokens[i + 1];
    const afterNext = tokens[i + 2];

    // Normal consonant + vowel syllable: ka, ki, ku, ke, ko, kê
    if (isVowel(next)) {
      output += base + vowelSigns[next];
      i += 2;
      continue;
    }

    // Common consonant clusters with r/y: kra, kri, dya, etc.
    if ((next === "r" || next === "y") && isVowel(afterNext)) {
      output += base;
      output += next === "r" ? CAKRA : PENGKAL;
      output += vowelSigns[afterNext];
      i += 3;
      continue;
    }

    // Final / syllable-closing ng, r and h have dedicated Javanese signs.
    if (token === "ng" || token === "r" || token === "h") {
      output += finalConsonant(token);
      i += 1;
      continue;
    }

    // No following vowel: close the consonant with pangkon.
    // The font's OpenType shaping can turn sequences into pasangan forms.
    output += base + PANGKON;
    i += 1;
  }

  return output;
}

function transliterateLatinToJavanese(text) {
  if (!text) return "";

  // Preserve whitespace and punctuation. Convert 0-9 to Javanese digits.
  const parts = text.match(/[A-Za-zÀ-ÿ]+|[0-9]+|\s+|[^A-Za-zÀ-ÿ0-9\s]+/g) || [];

  return parts.map((part) => {
    if (/^[A-Za-zÀ-ÿ]+$/.test(part)) {
      return transliterateWord(part);
    }

    if (/^[0-9]+$/.test(part)) {
      return [...part].map((digit) => javaneseDigits[digit] || digit).join("");
    }

    return part;
  }).join("");
}

sizeSlider.addEventListener("input", () => {
  testerText.style.fontSize = `${sizeSlider.value}px`;
  sizeValue.textContent = `${sizeSlider.value} px`;
});

lineSlider.addEventListener("input", () => {
  const value = Number(lineSlider.value) / 100;
  testerText.style.lineHeight = String(value);
  lineValue.textContent = value.toFixed(2);
});

latinInput.addEventListener("input", () => {
  testerText.textContent = transliterateLatinToJavanese(latinInput.value);
});

// If the user edits the large Javanese tester directly, clear the Latin field
// so the two inputs do not appear to be synchronized when they are not.
testerText.addEventListener("input", () => {
  if (latinInput.value) {
    latinInput.value = "";
  }
});

resetTester.addEventListener("click", () => {
  latinInput.value = "";
  testerText.textContent = JAVANESE.tester;
  sizeSlider.value = "110";
  lineSlider.value = "120";
  testerText.style.fontSize = "110px";
  testerText.style.lineHeight = "1.2";
  sizeValue.textContent = "110 px";
  lineValue.textContent = "1.20";
});

/* ---------------------------------------------------------
   FULL GLYPH VIEWER
   Continuous 15-column layout
   --------------------------------------------------------- */

const glyphCategoriesContainer = document.getElementById("glyphCategories");
const glyphInspector = document.getElementById("glyphInspector");

const DESKTOP_COLUMNS = 15;

function createGlyphCell(glyphData) {
  const [preview, label, code, unicodeName] = glyphData;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "glyph-cell";
  button.setAttribute("aria-label", `${label}, ${code}, ${unicodeName}`);

  const previewNode = document.createElement("span");
  previewNode.className = "glyph-preview detail-font";
  previewNode.style.fontFamily = font.family;
  previewNode.textContent = preview;

  const nameNode = document.createElement("span");
  nameNode.className = "glyph-name";
  nameNode.textContent = label;

  button.append(previewNode, nameNode);

  button.addEventListener("click", () => {
    document.querySelectorAll(".glyph-cell.is-selected").forEach((cell) => {
      cell.classList.remove("is-selected");
    });

    button.classList.add("is-selected");

    glyphInspector.innerHTML =
      `<strong>${label}</strong> &nbsp; ${code}<br>${unicodeName}`;
  });

  return button;
}

function createCategoryCell(category) {
  const cell = document.createElement("div");
  cell.className = "glyph-category-cell";

  const title = document.createElement("strong");
  title.textContent = category.title;

  const note = document.createElement("span");
  note.textContent = category.note;

  cell.append(title, note);
  return cell;
}

function createEmptyCell() {
  const cell = document.createElement("div");
  cell.className = "glyph-empty-cell";
  cell.setAttribute("aria-hidden", "true");
  return cell;
}

/*
  Everything goes into ONE grid:
  [category label] [glyph] [glyph] ... [next category label] [glyph] ...

  No category starts a new row by force. This keeps every desktop row
  exactly 15 cells wide. Blank cells are added only at the very end.
*/
const continuousGrid = document.createElement("div");
continuousGrid.className = "glyph-grid-continuous";

let totalCells = 0;

glyphCategories.forEach((category) => {
  continuousGrid.appendChild(createCategoryCell(category));
  totalCells += 1;

  category.glyphs.forEach((glyphData) => {
    continuousGrid.appendChild(createGlyphCell(glyphData));
    totalCells += 1;
  });
});

/* Complete the last desktop row visually */
const remainder = totalCells % DESKTOP_COLUMNS;
if (remainder !== 0) {
  const cellsNeeded = DESKTOP_COLUMNS - remainder;

  for (let i = 0; i < cellsNeeded; i += 1) {
    continuousGrid.appendChild(createEmptyCell());
  }
}

glyphCategoriesContainer.appendChild(continuousGrid);
