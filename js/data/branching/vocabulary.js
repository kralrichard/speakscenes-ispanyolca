// Tappable-word glossary + grammar notes for Story Mode. Keyed by the
// lowercase word so the conversation screen can look up any word the learner
// taps in an NPC line or their own sentence. Not exhaustive — it covers the
// content/travel words that actually appear in the scenarios. Words not found
// here fall back to a "no entry yet" popup rather than breaking.

// StoryWord = { word, tr, type, definition (TR), example, exampleTr, related? }
const WORDS = [
  { word: 'reserva', tr: 'rezervasyon', type: 'isim (la)',
    definition: 'Bir oda, masa ya da koltuğun sizin için ayrılması.',
    example: 'Tengo una reserva para dos noches.', exampleTr: 'İki geceliğine rezervasyonum var.', related: ['reservar'] },
  { word: 'desayuno', tr: 'kahvaltı', type: 'isim (el)',
    definition: 'Sabah yenen ilk öğün.',
    example: '¿El desayuno está incluido?', exampleTr: 'Kahvaltı dahil mi?' },
  { word: 'incluido', tr: 'dahil', type: 'sıfat',
    definition: 'Fiyatın içinde olan.',
    example: 'El desayuno está incluido en el precio.', exampleTr: 'Kahvaltı fiyata dahil.' },
  { word: 'llave', tr: 'anahtar', type: 'isim (la)',
    definition: 'Kapıyı açmaya yarayan nesne.',
    example: 'Aquí tiene su llave.', exampleTr: 'İşte anahtarınız.' },
  { word: 'embarque', tr: 'biniş', type: 'isim (el)',
    definition: 'Uçağa, gemiye ya da trene binme.',
    example: 'Aquí está mi tarjeta de embarque.', exampleTr: 'İşte biniş kartım.', related: ['puerta', 'vuelo'] },
  { word: 'puerta', tr: 'kapı (uçuş)', type: 'isim (la)',
    definition: 'Havalimanında uçağa bindiğiniz yer.',
    example: 'Embarca por la puerta B12.', exampleTr: 'B12 kapısından bineceksiniz.' },
  { word: 'retraso', tr: 'rötar / gecikme', type: 'isim (el)',
    definition: 'Geç kalma durumu.',
    example: 'Mi vuelo de conexión tuvo un retraso.', exampleTr: 'Aktarma uçuşum rötar yaptı.', related: ['retrasado'] },
  { word: 'equipaje', tr: 'bagaj', type: 'isim (el)',
    definition: 'Yolculukta taşınan çantalar ve valizler.',
    example: '¿Va a facturar equipaje?', exampleTr: 'Bavul verecek misiniz?', related: ['maleta'] },
  { word: 'receta', tr: 'reçete', type: 'isim (la)',
    definition: 'Doktorun yazdığı ilaç belgesi.',
    example: 'Quisiera preparar esta receta.', exampleTr: 'Bu reçeteyi doldurtmak istiyorum.' },
  { word: 'sueño', tr: 'uyku', type: 'isim (el)',
    definition: 'Uyuma ihtiyacı.',
    example: '¿Este medicamento da sueño?', exampleTr: 'Bu ilaç uyku yapar mı?' },
  { word: 'alérgico', tr: 'alerjik', type: 'sıfat',
    definition: 'Vücudun bir şeye kötü tepki vermesi.',
    example: 'Soy alérgico a los frutos secos.', exampleTr: 'Fındık/fıstığa alerjim var.' },
  { word: 'recomendar', tr: 'önermek / tavsiye etmek', type: 'fiil',
    definition: 'Bir şeyin iyi olduğunu söylemek.',
    example: '¿Qué me recomienda?', exampleTr: 'Ne önerirsiniz?' },
  { word: 'compensación', tr: 'tazminat / telafi', type: 'isim (la)',
    definition: 'Bir zahmet ya da kayıp için verilen karşılık.',
    example: 'Esperaría alguna compensación.', exampleTr: 'Bir telafi beklerdim.' },
  { word: 'malentendido', tr: 'yanlış anlaşılma', type: 'isim (el)',
    definition: 'Bir şeyi yanlış anlama durumu.',
    example: 'Creo que hubo un malentendido.', exampleTr: 'Sanırım bir yanlış anlaşılma oldu.' },
  { word: 'delegar', tr: 'yetki devretmek', type: 'fiil',
    definition: 'Bir işi başkasına vermek.',
    example: 'Estoy aprendiendo a delegar más.', exampleTr: 'Daha fazla yetki devretmeyi öğreniyorum.' },
  { word: 'responsabilidad', tr: 'sorumluluk', type: 'isim (la)',
    definition: 'Üstlenilmesi gereken görev.',
    example: 'Quiero asumir más responsabilidad.', exampleTr: 'Daha fazla sorumluluk almak istiyorum.' },
  { word: 'disculparse', tr: 'özür dilemek', type: 'fiil',
    definition: 'Üzgün olduğunu söylemek.',
    example: 'Me disculpo por las molestias.', exampleTr: 'Zahmet için özür dilerim.' },
  { word: 'indicaciones', tr: 'yol tarifi', type: 'isim (çoğul)',
    definition: 'Bir yere nasıl gidileceğini anlatan bilgiler.',
    example: '¿Me puede dar indicaciones para llegar a la estación?', exampleTr: 'Bana istasyona yol tarifi verir misiniz?' },
  { word: 'farmacia', tr: 'eczane', type: 'isim (la)',
    definition: 'İlaç satılan yer.',
    example: '¿Dónde está la farmacia más cercana?', exampleTr: 'En yakın eczane nerede?' },
  { word: 'reembolso', tr: 'para iadesi', type: 'isim (el)',
    definition: 'İade edilen ürün için geri verilen para.',
    example: 'Quisiera un reembolso, por favor.', exampleTr: 'Para iadesi istiyorum, lütfen.', related: ['cambiar', 'devolver'] },
  { word: 'cambiar', tr: 'değiştirmek', type: 'fiil',
    definition: 'Bir şeyi başka bir şeyle takas etmek.',
    example: '¿Puedo cambiarlo por una talla más grande?', exampleTr: 'Daha büyük bedenle değiştirebilir miyim?' },
  { word: 'recibo', tr: 'fiş / makbuz', type: 'isim (el)',
    definition: 'Ne ödediğinizi gösteren kağıt.',
    example: '¿Tiene el recibo?', exampleTr: 'Fişiniz var mı?', related: ['ticket'] },
  { word: 'andén', tr: 'peron', type: 'isim (el)',
    definition: 'Trenin kalktığı platform.',
    example: 'El tren sale del andén tres.', exampleTr: 'Tren üçüncü perondan kalkıyor.' },
  { word: 'billete', tr: 'bilet', type: 'isim (el)',
    definition: 'Yolculuk için ödeme belgesi.',
    example: 'Un billete a Londres, por favor.', exampleTr: 'Londra’ya bir bilet, lütfen.' },
  { word: 'bloquear', tr: 'bloke etmek', type: 'fiil',
    definition: 'Bir kartı kullanılamaz hale getirmek.',
    example: '¿Podría bloquear mi tarjeta?', exampleTr: 'Kartımı bloke edebilir misiniz?' },
  { word: 'denuncia', tr: 'tutanak / ihbar', type: 'isim (la)',
    definition: 'Polise yapılan resmi bildirim.',
    example: 'Quisiera presentar una denuncia.', exampleTr: 'Tutanak tutturmak istiyorum.' },
  { word: 'seguro', tr: 'sigorta / güvenli', type: 'isim (el) / sıfat',
    definition: 'Kayıplara karşı koruma sağlayan hizmet; ayrıca “güvenli” anlamına gelir.',
    example: 'Necesito este documento para mi seguro.', exampleTr: 'Bu belgeye sigortam için ihtiyacım var.' },
  { word: 'conexión', tr: 'aktarma / bağlantı', type: 'isim (la)',
    definition: 'Bir uçaktan/trenden diğerine geçiş.',
    example: 'Mi vuelo de conexión se retrasó.', exampleTr: 'Aktarma uçuşum rötar yaptı.' }
];

export const STORY_VOCAB = Object.fromEntries(WORDS.map(w => [w.word.toLowerCase(), w]));

/** Look up a tapped word (strips punctuation, lowercases). Returns the entry
 *  or a minimal fallback object so the popup always has something to show. */
export function lookupWord(raw) {
  const key = String(raw).toLowerCase().replace(/[^\p{L}'’-]/gu, '');
  if (STORY_VOCAB[key]) return STORY_VOCAB[key];
  // try singular-ish fallbacks (drop trailing letters — covers common plurals)
  for (const cut of [1, 2]) {
    const base = key.slice(0, -cut);
    if (base && STORY_VOCAB[base]) return STORY_VOCAB[base];
  }
  return { word: key, tr: null, type: null, ipa: null, definition: null, example: null };
}

// Per-choice grammar notes, keyed by "scenarioId::choiceId". Only the trickier
// sentences get an explanation; the UI shows a generic "tap words to learn"
// hint when there's no specific note. Kept small on purpose — extendable.
export const GRAMMAR_NOTES = {
  'asking-directions::ask_pharmacy': {
    title: 'Kibar soru: podría',
    points: [
      '“¿Me podrías decir…?” kibar bir rica kalıbıdır (koşul kipi).',
      'İç cümle: “…dónde está la farmacia más cercana”.',
      '“más cercana” = en yakın (üstünlük derecesi).'
    ]
  },
  'hotel-checkin::confirm': {
    title: 'tener + una reserva',
    points: [
      '“Tengo una reserva” — şu anki bir durum için şimdiki zaman.',
      '“a nombre de Alex” rezervasyonun kimin adına olduğunu söyler.'
    ]
  },
  'missing-flight::explain': {
    title: 'Geçmiş zamanla neden anlatmak',
    points: [
      '“se retrasó” — uçuş gecikti (pretérito).',
      '“así que no pude…” gecikmenin sonucunu gösterir.'
    ]
  },
  'job-interview::honest_weakness': {
    title: 'imperfecto + aprender a',
    points: [
      '“asumía demasiado” = değişmiş eski bir alışkanlık (imperfecto).',
      '“estoy aprendiendo a delegar” gelişimi gösterir — güçlü bir mülakat hamlesi.'
    ]
  }
};
