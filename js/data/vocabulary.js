// A0/A1 word catalog. Powers the Object Hunt and Memory Match mini-games and
// Word Builder's target words. Every entry is real content (Spanish word +
// Turkish meaning + example), not a placeholder -- these are the words an
// A0/A1 learner meets first: people, food, animals, actions, greetings,
// colors, numbers, everyday objects.
//
// VocabWord = {
//   id, word, translation_tr, emoji, level: 'A0'|'A1',
//   category, exampleSentence, exampleSentence_tr
// }

export const VOCABULARY = [
  // ---- people ----
  { id: 'mom', word: 'mamá', translation_tr: 'anne', emoji: '👩', level: 'A0', category: 'people', exampleSentence: 'Quiero a mi mamá.', exampleSentence_tr: 'Annemi seviyorum.' },
  { id: 'dad', word: 'papá', translation_tr: 'baba', emoji: '👨', level: 'A0', category: 'people', exampleSentence: 'Mi papá es alto.', exampleSentence_tr: 'Babam uzun boylu.' },
  { id: 'baby', word: 'bebé', translation_tr: 'bebek', emoji: '👶', level: 'A0', category: 'people', exampleSentence: 'El bebé está durmiendo.', exampleSentence_tr: 'Bebek uyuyor.' },
  { id: 'friend', word: 'amigo', translation_tr: 'arkadaş', emoji: '🧑‍🤝‍🧑', level: 'A1', category: 'people', exampleSentence: 'Es mi mejor amigo.', exampleSentence_tr: 'O benim en iyi arkadaşım.' },
  { id: 'boy', word: 'niño', translation_tr: 'erkek çocuk', emoji: '👦', level: 'A0', category: 'people', exampleSentence: 'El niño está jugando.', exampleSentence_tr: 'Erkek çocuk oynuyor.' },
  { id: 'girl', word: 'niña', translation_tr: 'kız çocuk', emoji: '👧', level: 'A0', category: 'people', exampleSentence: 'La niña está contenta.', exampleSentence_tr: 'Kız çocuk mutlu.' },
  { id: 'teacher', word: 'profesor', translation_tr: 'öğretmen', emoji: '🧑‍🏫', level: 'A1', category: 'people', exampleSentence: 'Mi profesor es amable.', exampleSentence_tr: 'Öğretmenim naziktir.' },

  // ---- food & drink ----
  { id: 'water', word: 'agua', translation_tr: 'su', emoji: '💧', level: 'A0', category: 'food', exampleSentence: 'Quiero agua.', exampleSentence_tr: 'Su istiyorum.' },
  { id: 'milk', word: 'leche', translation_tr: 'süt', emoji: '🥛', level: 'A0', category: 'food', exampleSentence: 'El bebé bebe leche.', exampleSentence_tr: 'Bebek süt içiyor.' },
  { id: 'apple', word: 'manzana', translation_tr: 'elma', emoji: '🍎', level: 'A0', category: 'food', exampleSentence: 'Como una manzana.', exampleSentence_tr: 'Bir elma yiyorum.' },
  { id: 'banana', word: 'plátano', translation_tr: 'muz', emoji: '🍌', level: 'A0', category: 'food', exampleSentence: 'Al mono le gustan los plátanos.', exampleSentence_tr: 'Maymun muz sever.' },
  { id: 'bread', word: 'pan', translation_tr: 'ekmek', emoji: '🍞', level: 'A1', category: 'food', exampleSentence: 'Comemos pan todos los días.', exampleSentence_tr: 'Her gün ekmek yeriz.' },
  { id: 'egg', word: 'huevo', translation_tr: 'yumurta', emoji: '🥚', level: 'A1', category: 'food', exampleSentence: 'Comí un huevo en el desayuno.', exampleSentence_tr: 'Kahvaltıda yumurta yedim.' },
  { id: 'cheese', word: 'queso', translation_tr: 'peynir', emoji: '🧀', level: 'A1', category: 'food', exampleSentence: 'A ella le gusta el queso.', exampleSentence_tr: 'O peyniri sever.' },
  { id: 'cookie', word: 'galleta', translation_tr: 'kurabiye', emoji: '🍪', level: 'A0', category: 'food', exampleSentence: '¿Me das una galleta?', exampleSentence_tr: 'Bir kurabiye alabilir miyim?' },
  { id: 'juice', word: 'zumo', translation_tr: 'meyve suyu', emoji: '🧃', level: 'A1', category: 'food', exampleSentence: 'Bebo zumo de naranja.', exampleSentence_tr: 'Portakal suyu içerim.' },

  // ---- animals ----
  { id: 'cat', word: 'gato', translation_tr: 'kedi', emoji: '🐱', level: 'A0', category: 'animals', exampleSentence: 'El gato está durmiendo.', exampleSentence_tr: 'Kedi uyuyor.' },
  { id: 'dog', word: 'perro', translation_tr: 'köpek', emoji: '🐶', level: 'A0', category: 'animals', exampleSentence: 'El perro está corriendo.', exampleSentence_tr: 'Köpek koşuyor.' },
  { id: 'bird', word: 'pájaro', translation_tr: 'kuş', emoji: '🐦', level: 'A0', category: 'animals', exampleSentence: 'El pájaro puede volar.', exampleSentence_tr: 'Kuş uçabilir.' },
  { id: 'fish', word: 'pez', translation_tr: 'balık', emoji: '🐟', level: 'A0', category: 'animals', exampleSentence: 'El pez nada en el agua.', exampleSentence_tr: 'Balık suda yüzer.' },
  { id: 'horse', word: 'caballo', translation_tr: 'at', emoji: '🐴', level: 'A1', category: 'animals', exampleSentence: 'El caballo corre rápido.', exampleSentence_tr: 'At hızlı koşar.' },
  { id: 'rabbit', word: 'conejo', translation_tr: 'tavşan', emoji: '🐰', level: 'A1', category: 'animals', exampleSentence: 'El conejo es pequeño.', exampleSentence_tr: 'Tavşan küçüktür.' },

  // ---- actions ----
  { id: 'eat', word: 'comer', translation_tr: 'yemek', emoji: '🍽️', level: 'A0', category: 'actions', exampleSentence: 'Desayuno a las ocho.', exampleSentence_tr: 'Sekizde kahvaltı yaparım.' },
  { id: 'drink', word: 'beber', translation_tr: 'içmek', emoji: '🥤', level: 'A0', category: 'actions', exampleSentence: 'Bebo agua todos los días.', exampleSentence_tr: 'Her gün su içerim.' },
  { id: 'sleep', word: 'dormir', translation_tr: 'uyumak', emoji: '😴', level: 'A0', category: 'actions', exampleSentence: 'Al bebé le gusta dormir.', exampleSentence_tr: 'Bebek uyumayı sever.' },
  { id: 'play', word: 'jugar', translation_tr: 'oynamak', emoji: '🧸', level: 'A0', category: 'actions', exampleSentence: 'Los niños juegan en el parque.', exampleSentence_tr: 'Çocuklar parkta oynar.' },
  { id: 'walk', word: 'caminar', translation_tr: 'yürümek', emoji: '🚶', level: 'A1', category: 'actions', exampleSentence: 'Caminamos a la escuela.', exampleSentence_tr: 'Okula yürüyerek gideriz.' },
  { id: 'run', word: 'correr', translation_tr: 'koşmak', emoji: '🏃', level: 'A1', category: 'actions', exampleSentence: 'Él puede correr muy rápido.', exampleSentence_tr: 'O çok hızlı koşabilir.' },
  { id: 'read', word: 'leer', translation_tr: 'okumak', emoji: '📖', level: 'A1', category: 'actions', exampleSentence: 'Leo un libro cada noche.', exampleSentence_tr: 'Her gece bir kitap okurum.' },
  { id: 'sing', word: 'cantar', translation_tr: 'şarkı söylemek', emoji: '🎵', level: 'A1', category: 'actions', exampleSentence: 'A ella le gusta cantar.', exampleSentence_tr: 'O şarkı söylemeyi sever.' },

  // ---- greetings & small words ----
  { id: 'hello', word: 'hola', translation_tr: 'merhaba', emoji: '👋', level: 'A0', category: 'greetings', exampleSentence: '¡Hola! Mucho gusto.', exampleSentence_tr: 'Merhaba! Tanıştığımıza memnun oldum.' },
  { id: 'bye', word: 'adiós', translation_tr: 'hoşça kal', emoji: '👋', level: 'A0', category: 'greetings', exampleSentence: '¡Adiós! Hasta pronto.', exampleSentence_tr: 'Hoşça kal! Yakında görüşürüz.' },
  { id: 'yes', word: 'sí', translation_tr: 'evet', emoji: '✅', level: 'A0', category: 'greetings', exampleSentence: 'Sí, con gusto.', exampleSentence_tr: 'Evet, memnuniyetle.' },
  { id: 'no', word: 'no', translation_tr: 'hayır', emoji: '❌', level: 'A0', category: 'greetings', exampleSentence: 'No, gracias.', exampleSentence_tr: 'Hayır, teşekkür ederim.' },
  { id: 'please', word: 'por favor', translation_tr: 'lütfen', emoji: '🙏', level: 'A1', category: 'greetings', exampleSentence: 'Agua, por favor.', exampleSentence_tr: 'Su, lütfen.' },
  { id: 'thankyou', word: 'gracias', translation_tr: 'teşekkür ederim', emoji: '🙏', level: 'A1', category: 'greetings', exampleSentence: 'Muchas gracias.', exampleSentence_tr: 'Çok teşekkür ederim.' },
  { id: 'sorry', word: 'perdón', translation_tr: 'özür dilerim', emoji: '😔', level: 'A1', category: 'greetings', exampleSentence: 'Perdón, llego tarde.', exampleSentence_tr: 'Özür dilerim, geç kaldım.' },

  // ---- colors ----
  { id: 'red', word: 'rojo', translation_tr: 'kırmızı', emoji: '🔴', level: 'A0', category: 'colors', exampleSentence: 'La manzana es roja.', exampleSentence_tr: 'Elma kırmızı.' },
  { id: 'blue', word: 'azul', translation_tr: 'mavi', emoji: '🔵', level: 'A0', category: 'colors', exampleSentence: 'El cielo es azul.', exampleSentence_tr: 'Gökyüzü mavi.' },
  { id: 'green', word: 'verde', translation_tr: 'yeşil', emoji: '🟢', level: 'A0', category: 'colors', exampleSentence: 'La hierba es verde.', exampleSentence_tr: 'Çim yeşil.' },
  { id: 'yellow', word: 'amarillo', translation_tr: 'sarı', emoji: '🟡', level: 'A0', category: 'colors', exampleSentence: 'El plátano es amarillo.', exampleSentence_tr: 'Muz sarı.' },

  // ---- numbers ----
  { id: 'one', word: 'uno', translation_tr: 'bir', emoji: '1️⃣', level: 'A0', category: 'numbers', exampleSentence: 'Tengo un hermano.', exampleSentence_tr: 'Bir erkek kardeşim var.' },
  { id: 'two', word: 'dos', translation_tr: 'iki', emoji: '2️⃣', level: 'A0', category: 'numbers', exampleSentence: 'Tengo dos gatos.', exampleSentence_tr: 'İki kedim var.' },
  { id: 'three', word: 'tres', translation_tr: 'üç', emoji: '3️⃣', level: 'A0', category: 'numbers', exampleSentence: 'Hay tres libros en la mesa.', exampleSentence_tr: 'Masada üç kitap var.' },

  // ---- objects ----
  { id: 'ball', word: 'pelota', translation_tr: 'top', emoji: '⚽', level: 'A0', category: 'objects', exampleSentence: 'El niño juega con una pelota.', exampleSentence_tr: 'Çocuk topla oynuyor.' },
  { id: 'book', word: 'libro', translation_tr: 'kitap', emoji: '📕', level: 'A0', category: 'objects', exampleSentence: 'Leo un libro.', exampleSentence_tr: 'Bir kitap okurum.' },
  { id: 'car', word: 'coche', translation_tr: 'araba', emoji: '🚗', level: 'A0', category: 'objects', exampleSentence: 'El coche es rápido.', exampleSentence_tr: 'Araba hızlı.' },
  { id: 'house', word: 'casa', translation_tr: 'ev', emoji: '🏠', level: 'A0', category: 'objects', exampleSentence: 'Esta es mi casa.', exampleSentence_tr: 'Bu benim evim.' },
  { id: 'bed', word: 'cama', translation_tr: 'yatak', emoji: '🛏️', level: 'A0', category: 'objects', exampleSentence: 'Duermo en mi cama.', exampleSentence_tr: 'Yatağımda uyurum.' },
  { id: 'chair', word: 'silla', translation_tr: 'sandalye', emoji: '🪑', level: 'A1', category: 'objects', exampleSentence: 'Siéntate en la silla, por favor.', exampleSentence_tr: 'Lütfen sandalyeye otur.' },
  { id: 'phone', word: 'teléfono', translation_tr: 'telefon', emoji: '📱', level: 'A1', category: 'objects', exampleSentence: 'Mi teléfono es nuevo.', exampleSentence_tr: 'Telefonum yeni.' },
  { id: 'bag', word: 'bolso', translation_tr: 'çanta', emoji: '🎒', level: 'A1', category: 'objects', exampleSentence: 'Ella tiene un bolso rojo.', exampleSentence_tr: 'Onun kırmızı bir çantası var.' },
  { id: 'umbrella', word: 'paraguas', translation_tr: 'şemsiye', emoji: '☂️', level: 'A1', category: 'objects', exampleSentence: 'Lleva tu paraguas, está lloviendo.', exampleSentence_tr: 'Şemsiyeni al, yağmur yağıyor.' },
  { id: 'key', word: 'llave', translation_tr: 'anahtar', emoji: '🔑', level: 'A1', category: 'objects', exampleSentence: '¿Dónde está mi llave?', exampleSentence_tr: 'Anahtarım nerede?' },

  // ---- feelings ----
  { id: 'happy', word: 'feliz', translation_tr: 'mutlu', emoji: '😊', level: 'A1', category: 'feelings', exampleSentence: 'Hoy estoy feliz.', exampleSentence_tr: 'Bugün mutluyum.' },
  { id: 'sad', word: 'triste', translation_tr: 'üzgün', emoji: '😢', level: 'A1', category: 'feelings', exampleSentence: 'Ella parece triste.', exampleSentence_tr: 'Üzgün görünüyor.' },
  { id: 'tired', word: 'cansado', translation_tr: 'yorgun', emoji: '😪', level: 'A1', category: 'feelings', exampleSentence: 'Estoy cansado después de la escuela.', exampleSentence_tr: 'Okuldan sonra yorgunum.' },
  { id: 'hungry', word: 'hambre', translation_tr: 'aç(lık)', emoji: '🍽️', level: 'A1', category: 'feelings', exampleSentence: 'Tengo hambre, vamos a comer.', exampleSentence_tr: 'Açım, hadi yiyelim.' }
];

export function getVocabById(id) {
  return VOCABULARY.find(v => v.id === id);
}

export function getVocabByLevel(level) {
  return VOCABULARY.filter(v => v.level === level);
}

export function getVocabByCategory(category) {
  return VOCABULARY.filter(v => v.category === category);
}
