// ============================================================================
// Language configuration — SPANISH (es-ES). The scorer folds diacritics on
// both sides, so accent-free typed answers compare fairly (está == esta).
// ============================================================================

export const LOCALE = 'es-ES';
export const APP_LANG = 'İspanyolca';
// localStorage namespace — MUST be unique per clone (same-origin hosting).
export const APP_KEY = 'ss-es-v2';

export const FUNCTION_WORDS = [
  'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'y', 'o', 'u', 'a', 'al',
  'en', 'de', 'del', 'con', 'por', 'para', 'es', 'soy', 'son', 'era', 'está',
  'estoy', 'están', 'yo', 'tú', 'él', 'ella', 'usted', 'nosotros', 'me', 'mi',
  'te', 'tu', 'se', 'lo', 'le', 'les', 'nos', 'que', 'qué', 'quién', 'aquí',
  'ahí', 'allí', 'sí', 'también', 'ya', 'muy', 'favor', 'si', 'pero'
];

export const NEGATION_WORDS = ['no', 'nunca', 'nada', 'nadie', 'ningún', 'ninguna', 'jamás', 'tampoco'];

export const NUMBER_WORDS = [
  'cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',
  'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'veinte', 'treinta',
  'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa', 'cien', 'mil'
];

export const FILLER_WORDS = ['em', 'ehm', 'eh', 'hmm'];

export const DIGIT_WORDS = {
  '0': 'cero', '1': 'uno', '2': 'dos', '3': 'tres', '4': 'cuatro', '5': 'cinco',
  '6': 'seis', '7': 'siete', '8': 'ocho', '9': 'nueve', '10': 'diez', '11': 'once',
  '12': 'doce', '20': 'veinte', '100': 'cien', '1000': 'mil'
};

export const CONTRACTIONS = [];
export const ASR_EQUIVALENTS = [['ok', 'okay'], ['vale', 'okay']];
