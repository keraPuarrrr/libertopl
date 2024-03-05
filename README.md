# libertopl

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/keraPuarrrr/libertopl/blob/main/LICENSE)

A localization helper library for JavaScript.

## Installation

```bash
npm install libertopl
```

## Usage

```javascript
const Libertopl = require('libertopl');

// Create a new instance of Libertopl
const lib = new Libertopl();

// Set translations for a specific language
lib.setTranslations('en', {
  'hello': 'Hello',
  'goodbye': 'Goodbye'
});

// Translate a key
console.log(lib.translate('hello')); // Output: Hello
```

## API

### Libertopl([defaultLanguage])

Creates a new instance of Libertopl.

- `defaultLanguage` (optional): The default language to use for translation (default is 'en').

#### .setTranslations(language, translations)

Sets translations for a specific language.

- `language`: The language code.
- `translations`: An object containing key-value pairs of translations.

#### .translate(key, [language])

Translates a key to the specified language. If the language is not provided, it defaults to the default language set during initialization.

- `key`: The key to translate.
- `language` (optional): The language code to translate the key into.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/keraPuarrrr/libertopl/blob/main/LICENSE) file for details.
