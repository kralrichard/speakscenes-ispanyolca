// ============================================================================
// Word banks — SPANISH. Nouns carry un/una + el/la and gender; adjectives
// agree by gender and carry an `e` flag when they take ESTAR instead of SER
// (states: caliente, frío, limpio, sucio, lleno, vacío).
//
// Noun = { w, ind, def, g, tr, topic }
// Adj  = { m, f, tr, e }
// Verb = { inf, first, trInf, tr1, trGer }
// ============================================================================

const N = (w, ind, def, g, tr, topic) => ({ w, ind, def, g, tr, topic });

export const NOUNS = [
  // food
  N('manzana', 'una', 'la', 'f', 'elma', 'food'),
  N('plátano', 'un', 'el', 'm', 'muz', 'food'),
  N('naranja', 'una', 'la', 'f', 'portakal', 'food'),
  N('huevo', 'un', 'el', 'm', 'yumurta', 'food'),
  N('galleta', 'una', 'la', 'f', 'kurabiye', 'food'),
  N('pastel', 'un', 'el', 'm', 'pasta', 'food'),
  N('sopa', 'una', 'la', 'f', 'çorba', 'food'),
  N('ensalada', 'una', 'la', 'f', 'salata', 'food'),
  N('tomate', 'un', 'el', 'm', 'domates', 'food'),
  N('patata', 'una', 'la', 'f', 'patates', 'food'),
  N('limón', 'un', 'el', 'm', 'limon', 'food'),
  N('queso', 'un', 'el', 'm', 'peynir', 'food'),
  // animals
  N('perro', 'un', 'el', 'm', 'köpek', 'animals'),
  N('gato', 'un', 'el', 'm', 'kedi', 'animals'),
  N('pájaro', 'un', 'el', 'm', 'kuş', 'animals'),
  N('pez', 'un', 'el', 'm', 'balık', 'animals'),
  N('caballo', 'un', 'el', 'm', 'at', 'animals'),
  N('vaca', 'una', 'la', 'f', 'inek', 'animals'),
  N('oveja', 'una', 'la', 'f', 'koyun', 'animals'),
  N('conejo', 'un', 'el', 'm', 'tavşan', 'animals'),
  N('pato', 'un', 'el', 'm', 'ördek', 'animals'),
  N('ratón', 'un', 'el', 'm', 'fare', 'animals'),
  // objects
  N('libro', 'un', 'el', 'm', 'kitap', 'objects'),
  N('lápiz', 'un', 'el', 'm', 'kalem', 'objects'),
  N('mesa', 'una', 'la', 'f', 'masa', 'objects'),
  N('silla', 'una', 'la', 'f', 'sandalye', 'objects'),
  N('cama', 'una', 'la', 'f', 'yatak', 'objects'),
  N('puerta', 'una', 'la', 'f', 'kapı', 'objects'),
  N('ventana', 'una', 'la', 'f', 'pencere', 'objects'),
  N('llave', 'una', 'la', 'f', 'anahtar', 'objects'),
  N('taza', 'una', 'la', 'f', 'fincan', 'objects'),
  N('vaso', 'un', 'el', 'm', 'bardak', 'objects'),
  N('bolso', 'un', 'el', 'm', 'çanta', 'objects'),
  N('reloj', 'un', 'el', 'm', 'saat', 'objects'),
  N('lámpara', 'una', 'la', 'f', 'lamba', 'objects'),
  N('teléfono', 'un', 'el', 'm', 'telefon', 'objects'),
  // places
  N('casa', 'una', 'la', 'f', 'ev', 'places'),
  N('escuela', 'una', 'la', 'f', 'okul', 'places'),
  N('parque', 'un', 'el', 'm', 'park', 'places'),
  N('jardín', 'un', 'el', 'm', 'bahçe', 'places'),
  N('habitación', 'una', 'la', 'f', 'oda', 'places'),
  N('cocina', 'una', 'la', 'f', 'mutfak', 'places'),
  N('ciudad', 'una', 'la', 'f', 'şehir', 'places'),
  N('hospital', 'un', 'el', 'm', 'hastane', 'places'),
  N('estación', 'una', 'la', 'f', 'istasyon', 'places'),
  N('hotel', 'un', 'el', 'm', 'otel', 'places'),
  N('restaurante', 'un', 'el', 'm', 'restoran', 'places'),
  // transport
  N('coche', 'un', 'el', 'm', 'araba', 'transport'),
  N('autobús', 'un', 'el', 'm', 'otobüs', 'transport'),
  N('tren', 'un', 'el', 'm', 'tren', 'transport'),
  N('bicicleta', 'una', 'la', 'f', 'bisiklet', 'transport'),
  N('avión', 'un', 'el', 'm', 'uçak', 'transport'),
  // clothes
  N('sombrero', 'un', 'el', 'm', 'şapka', 'clothes'),
  N('camisa', 'una', 'la', 'f', 'gömlek', 'clothes'),
  N('zapato', 'un', 'el', 'm', 'ayakkabı', 'clothes'),
  N('abrigo', 'un', 'el', 'm', 'palto', 'clothes'),
  N('vestido', 'un', 'el', 'm', 'elbise', 'clothes')
];

export const GOODS = NOUNS.filter(n => ['food', 'objects', 'clothes'].includes(n.topic));
export const PLACES = NOUNS.filter(n => n.topic === 'places');

export const ADJECTIVES = [
  ['grande', 'grande', 'büyük', false], ['pequeño', 'pequeña', 'küçük', false],
  ['nuevo', 'nueva', 'yeni', false], ['viejo', 'vieja', 'eski', false],
  ['bonito', 'bonita', 'güzel', false], ['bueno', 'buena', 'iyi', false],
  ['largo', 'larga', 'uzun', false], ['corto', 'corta', 'kısa', false],
  ['rápido', 'rápida', 'hızlı', false], ['lento', 'lenta', 'yavaş', false],
  ['pesado', 'pesada', 'ağır', false], ['ligero', 'ligera', 'hafif', false],
  ['caro', 'cara', 'pahalı', false], ['barato', 'barata', 'ucuz', false],
  ['caliente', 'caliente', 'sıcak', true], ['frío', 'fría', 'soğuk', true],
  ['limpio', 'limpia', 'temiz', true], ['sucio', 'sucia', 'kirli', true],
  ['lleno', 'llena', 'dolu', true], ['vacío', 'vacía', 'boş', true]
].map(([m, f, tr, e]) => ({ m, f, tr, e }));

export const VERBS = [
  ['nadar', 'nado', 'yüzmek', 'yüzüyorum', 'yüzmeyi'],
  ['correr', 'corro', 'koşmak', 'koşuyorum', 'koşmayı'],
  ['dormir', 'duermo', 'uyumak', 'uyuyorum', 'uyumayı'],
  ['leer', 'leo', 'okumak', 'okuyorum', 'okumayı'],
  ['escribir', 'escribo', 'yazmak', 'yazıyorum', 'yazmayı'],
  ['jugar', 'juego', 'oynamak', 'oynuyorum', 'oynamayı'],
  ['trabajar', 'trabajo', 'çalışmak', 'çalışıyorum', 'çalışmayı'],
  ['aprender', 'aprendo', 'öğrenmek', 'öğreniyorum', 'öğrenmeyi'],
  ['cocinar', 'cocino', 'yemek pişirmek', 'yemek pişiriyorum', 'yemek pişirmeyi'],
  ['cantar', 'canto', 'şarkı söylemek', 'şarkı söylüyorum', 'şarkı söylemeyi'],
  ['bailar', 'bailo', 'dans etmek', 'dans ediyorum', 'dans etmeyi'],
  ['esperar', 'espero', 'beklemek', 'bekliyorum', 'beklemeyi'],
  ['viajar', 'viajo', 'seyahat etmek', 'seyahat ediyorum', 'seyahat etmeyi'],
  ['pintar', 'pinto', 'resim yapmak', 'resim yapıyorum', 'resim yapmayı'],
  ['estudiar', 'estudio', 'ders çalışmak', 'ders çalışıyorum', 'ders çalışmayı'],
  ['descansar', 'descanso', 'dinlenmek', 'dinleniyorum', 'dinlenmeyi']
].map(([inf, first, trInf, tr1, trGer]) => ({ inf, first, trInf, tr1, trGer }));

export const OPINIONS = [
  ['esta decisión fue un error', 'bu karar bir hataydı'],
  ['el precio es demasiado alto', 'fiyat çok fazla yüksek'],
  ['necesitamos un plan más claro', 'daha net bir plana ihtiyacımız var'],
  ['este enfoque no va a funcionar', 'bu yaklaşım işe yaramayacak'],
  ['todo el mundo merece una segunda oportunidad', 'herkes ikinci bir şansı hak eder'],
  ['el proyecto va con retraso', 'proje programın gerisinde'],
  ['los pequeños cambios pueden marcar una gran diferencia', 'küçük değişiklikler büyük fark yaratabilir'],
  ['el plazo no es realista', 'teslim tarihi gerçekçi değil'],
  ['el cambio es incómodo pero necesario', 'değişim rahatsız edici ama gerekli'],
  ['la mejor solución suele ser la más sencilla', 'en iyi çözüm çoğu zaman en basit olanıdır'],
  ['no podemos contentar a todos', 'herkesi memnun edemeyiz'],
  ['la paciencia es una cualidad infravalorada', 'sabır, hafife alınan bir beceridir'],
  ['esta moda no va a durar', 'bu trend sürmeyecek'],
  ['deberíamos escuchar más y hablar menos', 'konuştuğumuzdan çok dinlemeliyiz'],
  ['una buena reputación tarda años en construirse', 'iyi bir itibar yıllar alır'],
  ['la verdad rara vez es sencilla', 'gerçek nadiren basittir'],
  ['el equipo es más fuerte que una sola persona', 'takım, tek bir kişiden daha güçlüdür'],
  ['la primera impresión es difícil de cambiar', 'ilk izlenimleri değiştirmek zordur'],
  ['las cuentas no cuadran', 'rakamlar tutmuyor'],
  ['el tiempo no se puede recuperar', 'zaman geri satın alınamaz']
].map(([c, tr]) => ({ c, tr }));

export const REQUESTS = [
  ['abrir la ventana', 'pencereyi açar mısın'],
  ['hablar más despacio', 'biraz daha yavaş konuşur musun'],
  ['enviarme los detalles', 'bana ayrıntıları gönderir misin'],
  ['ayudarme con esto', 'bu konuda bana yardım eder misin'],
  ['esperarme fuera', 'beni dışarıda bekler misin'],
  ['llamarme más tarde', 'beni sonra arar mısın'],
  ['explicarlo otra vez', 'bunu bir kez daha açıklar mısın'],
  ['echar un vistazo', 'buna bir bakar mısın'],
  ['traerme un vaso de agua', 'bana bir bardak su getirir misin'],
  ['revisar la dirección otra vez', 'adresi bir daha kontrol eder misin'],
  ['sujetar la puerta', 'kapıyı tutar mısın'],
  ['guardarme un sitio', 'bana bir yer ayırır mısın']
].map(([r, tr]) => ({ r, tr }));
