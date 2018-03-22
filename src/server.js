const translate = require ('./translator');

const text = "quiero trabajar con los mejores";
const targetLang = 'en';

console.log(translate);

translate.translateText = function* (content, targetLang) {
  let translation = yield translate.requestTranslation(content, targetLang, it);
  console.log(translation);
};

const it = translate.translateText(text, targetLang);
it.next();

//ES7 async await alternative
// (async function() {
//   let translation = await translate.requestTranslation(text, targetLang)
//   console.log(translation[0]);
// }());