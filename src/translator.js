"use strict";

const Translate = require('@google-cloud/translate');

const TranslateService = {};
const translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.requestTranslation = function (content, targetLang, iterator){
  translate
      .translate( content, targetLang )
      .then(results => {
        iterator.next(results[0]);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
}

//ES7 async await alternative
// TranslateService.requestTranslation = async function(content, targetLang){
//   return translate.translate( content, targetLang )
// }


module.exports = TranslateService;
