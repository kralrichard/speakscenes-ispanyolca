// ============================================================================
// Word banks — SPANISH. Nouns carry un/una + el/la and gender; adjectives
// agree by gender and carry an `e` flag when they take ESTAR instead of SER.
//
// Noun = { w, ind, def, g, tr, topic }
// Adj  = { m, f, tr, e }
// Verb = { inf, first, pret, trInf, tr1, trGer, trPast, trFut }
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
export const OWNABLE = NOUNS.filter(n => ['food', 'objects', 'clothes', 'animals', 'transport'].includes(n.topic));

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
  ['nadar', 'nado', 'nadé', 'yüzmek', 'yüzüyorum', 'yüzmeyi', 'yüzdüm', 'yüzeceğim'],
  ['correr', 'corro', 'corrí', 'koşmak', 'koşuyorum', 'koşmayı', 'koştum', 'koşacağım'],
  ['dormir', 'duermo', 'dormí', 'uyumak', 'uyuyorum', 'uyumayı', 'uyudum', 'uyuyacağım'],
  ['leer', 'leo', 'leí', 'okumak', 'okuyorum', 'okumayı', 'okudum', 'okuyacağım'],
  ['escribir', 'escribo', 'escribí', 'yazmak', 'yazıyorum', 'yazmayı', 'yazdım', 'yazacağım'],
  ['jugar', 'juego', 'jugué', 'oynamak', 'oynuyorum', 'oynamayı', 'oynadım', 'oynayacağım'],
  ['trabajar', 'trabajo', 'trabajé', 'çalışmak', 'çalışıyorum', 'çalışmayı', 'çalıştım', 'çalışacağım'],
  ['aprender', 'aprendo', 'aprendí', 'öğrenmek', 'öğreniyorum', 'öğrenmeyi', 'öğrendim', 'öğreneceğim'],
  ['cocinar', 'cocino', 'cociné', 'yemek pişirmek', 'yemek pişiriyorum', 'yemek pişirmeyi', 'yemek pişirdim', 'yemek pişireceğim'],
  ['cantar', 'canto', 'canté', 'şarkı söylemek', 'şarkı söylüyorum', 'şarkı söylemeyi', 'şarkı söyledim', 'şarkı söyleyeceğim'],
  ['bailar', 'bailo', 'bailé', 'dans etmek', 'dans ediyorum', 'dans etmeyi', 'dans ettim', 'dans edeceğim'],
  ['esperar', 'espero', 'esperé', 'beklemek', 'bekliyorum', 'beklemeyi', 'bekledim', 'bekleyeceğim'],
  ['viajar', 'viajo', 'viajé', 'seyahat etmek', 'seyahat ediyorum', 'seyahat etmeyi', 'seyahat ettim', 'seyahat edeceğim'],
  ['pintar', 'pinto', 'pinté', 'resim yapmak', 'resim yapıyorum', 'resim yapmayı', 'resim yaptım', 'resim yapacağım'],
  ['estudiar', 'estudio', 'estudié', 'ders çalışmak', 'ders çalışıyorum', 'ders çalışmayı', 'ders çalıştım', 'ders çalışacağım'],
  ['descansar', 'descanso', 'descansé', 'dinlenmek', 'dinleniyorum', 'dinlenmeyi', 'dinlendim', 'dinleneceğim']
].map(([inf, first, pret, trInf, tr1, trGer, trPast, trFut]) =>
  ({ inf, first, pret, trInf, tr1, trGer, trPast, trFut }));

// "I have been ...ing for ..." — Spanish "llevo + duration + gerund".
export const ACTIVITIES = [
  ['esperando', 'bekliyorum'],
  ['estudiando español', 'İspanyolca çalışıyorum'],
  ['trabajando en este informe', 'bu rapor üzerinde çalışıyorum'],
  ['buscando mis llaves', 'anahtarlarımı arıyorum'],
  ['ahorrando para un viaje', 'bir gezi için para biriktiriyorum'],
  ['limpiando la casa', 'evi temizliyorum'],
  ['organizando la boda', 'düğünü planlıyorum'],
  ['leyendo este libro', 'bu kitabı okuyorum'],
  ['entrenando en el gimnasio', 'spor salonunda antrenman yapıyorum'],
  ['buscando un trabajo nuevo', 'yeni bir iş arıyorum'],
  ['escribiendo mi tesis', 'tezimi yazıyorum'],
  ['aprendiendo a cocinar', 'yemek yapmayı öğreniyorum']
].map(([t, tr]) => ({ t, tr }));

export const DURATIONS = [
  ['diez minutos', 'on dakikadır'],
  ['media hora', 'yarım saattir'],
  ['dos horas', 'iki saattir'],
  ['toda la mañana', 'bütün sabahtır'],
  ['tres días', 'üç gündür'],
  ['una semana', 'bir haftadır'],
  ['un mes', 'bir aydır'],
  ['mucho tiempo', 'uzun zamandır']
].map(([t, tr]) => ({ t, tr }));

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

// Hand-written, real everyday sentences — injected into the stream as-is.
export const DAILY = [
  // A1
  ['A1', 'Hola, ¿qué tal?', 'Merhaba, nasılsın?'],
  ['A1', 'Estoy bien, gracias.', 'İyiyim, teşekkürler.'],
  ['A1', '¿Cómo te llamas?', 'Adın ne?'],
  ['A1', 'Me llamo Anna.', 'Benim adım Anna.'],
  ['A1', '¡Encantado!', 'Memnun oldum!'],
  ['A1', '¡Buenos días!', 'Günaydın!'],
  ['A1', '¡Buenas noches!', 'İyi geceler!'],
  ['A1', '¡Hasta mañana!', 'Yarın görüşürüz!'],
  ['A1', 'Tengo hambre.', 'Acıktım.'],
  ['A1', 'Tengo sed.', 'Susadım.'],
  ['A1', 'Estoy cansado.', 'Yorgunum.'],
  ['A1', 'Hoy hace muy buen tiempo.', 'Bugün hava çok güzel.'],
  ['A1', 'Está lloviendo.', 'Yağmur yağıyor.'],
  ['A1', '¿Cuántos años tienes?', 'Kaç yaşındasın?'],
  ['A1', 'Tengo diez años.', 'On yaşındayım.'],
  ['A1', '¿De dónde eres?', 'Nerelisin?'],
  ['A1', 'Soy de Turquía.', 'Türkiye’denim.'],
  ['A1', 'Esta es mi familia.', 'Bu benim ailem.'],
  ['A1', 'Te quiero.', 'Seni seviyorum.'],
  ['A1', '¡Adiós!', 'Hoşça kal!'],
  // A2
  ['A2', 'No entiendo.', 'Anlamıyorum.'],
  ['A2', '¿Puede repetir?', 'Tekrar eder misiniz?'],
  ['A2', '¿Puede hablar más despacio?', 'Daha yavaş konuşur musunuz?'],
  ['A2', '¿Puede ayudarme?', 'Bana yardım eder misiniz?'],
  ['A2', '¿Dónde está el baño?', 'Tuvalet nerede?'],
  ['A2', '¿Qué hora es?', 'Saat kaç?'],
  ['A2', '¿Qué día es hoy?', 'Bugün günlerden ne?'],
  ['A2', '¿Cuándo llega el próximo autobús?', 'Bir sonraki otobüs ne zaman?'],
  ['A2', '¿Dónde puedo comprar un billete?', 'Bilet nereden alabilirim?'],
  ['A2', 'La cuenta, por favor.', 'Hesap, lütfen.'],
  ['A2', '¡Buen provecho!', 'Afiyet olsun!'],
  ['A2', 'Perdón, llego tarde.', 'Özür dilerim, geç kaldım.'],
  ['A2', 'No pasa nada.', 'Sorun değil.'],
  ['A2', '¡Qué buena idea!', 'Ne güzel bir fikir!'],
  ['A2', 'Hablo un poco de español.', 'Biraz İspanyolca konuşuyorum.'],
  ['A2', 'Me he perdido.', 'Kayboldum.'],
  ['A2', '¿Puedo sentarme aquí?', 'Buraya oturabilir miyim?'],
  ['A2', '¿Puedo hacer una foto?', 'Fotoğraf çekebilir miyim?'],
  ['A2', '¡Es demasiado caro!', 'Bu çok pahalı!'],
  ['A2', '¿Hay algún descuento?', 'İndirim var mı?'],
  // B1
  ['B1', 'Anoche me acosté muy tarde.', 'Dün gece çok geç yattım.'],
  ['B1', 'Mañana tengo que levantarme temprano.', 'Yarın erken kalkmam lazım.'],
  ['B1', '¿Tienes planes para el fin de semana?', 'Hafta sonu için planın var mı?'],
  ['B1', 'Hace mucho que no nos vemos.', 'Uzun zamandır görüşemedik.'],
  ['B1', 'Vivo en esta ciudad desde hace dos años.', 'İki yıldır bu şehirde yaşıyorum.'],
  ['B1', 'Estoy buscando un trabajo nuevo.', 'Şu sıralar yeni bir iş arıyorum.'],
  ['B1', 'Acabo de empezar a hacer deporte.', 'Spora yeni başladım.'],
  ['B1', 'Te recomiendo mucho este libro.', 'Bu kitabı gerçekten tavsiye ederim.'],
  ['B1', 'Ojalá tuviera más tiempo.', 'Keşke daha fazla zamanım olsa.'],
  ['B1', 'Prometo que no volverá a pasar.', 'Söz veriyorum, bir daha olmayacak.'],
  ['B1', '¿Has cambiado de opinión?', 'Fikrini değiştirdin mi?'],
  ['B1', '¿De verdad merece la pena?', 'Buna gerçekten değer mi?'],
  // B2
  ['B2', 'Sinceramente, no estoy seguro.', 'Açıkçası pek emin değilim.'],
  ['B2', 'Estoy totalmente de acuerdo contigo.', 'Bu konuda sana tamamen katılıyorum.'],
  ['B2', 'Si lo he entendido bien, la reunión de mañana está cancelada.', 'Yanlış anlamadıysam yarınki toplantı iptal.'],
  ['B2', 'Entiendo lo que quieres decir, pero yo lo veo de otra manera.', 'Ne demek istediğini anlıyorum ama farklı düşünüyorum.'],
  ['B2', 'Intenta verlo desde esta perspectiva.', 'Bir de şu açıdan bak.'],
  ['B2', 'Haré todo lo posible.', 'Elimden geleni yapacağım.'],
  ['B2', 'Pase lo que pase, valió la pena intentarlo.', 'Sonuç ne olursa olsun denemeye değerdi.'],
  ['B2', 'Dame un poco de tiempo para pensarlo.', 'Düşünmek için bana biraz zaman ver.']
].map(([level, t, tr]) => ({ level, t, tr }));
