// libertopl.js

class Libertopl {
  constructor(defaultLanguage = 'en') {
    this.defaultLanguage = defaultLanguage;
    this.translations = {};
  }

  setTranslations(language, translations) {
    this.translations[language] = translations;
  }

  translate(key, language = this.defaultLanguage) {
    if (!this.translations[language]) {
      console.warn(`Translations for language '${language}' not found.`);
      return key; // Return the key as fallback if translations for the specified language are not found
    }

    const translation = this.translations[language][key];
    if (!translation) {
      console.warn(`Translation for key '${key}' not found in '${language}' language.`);
      return key; // Return the key as fallback if translation for the specified key is not found
    }

    return translation;
  }
}

module.exports = Libertopl;
