import { createScenario } from '../scenarioSchema.js?v=6';

// ── Train station: buying a ticket (A2) ─────────────────────────────────────
export const trainTicket = createScenario({
  id: 'train-ticket',
  title: 'Comprar un billete de tren',
  titleTr: 'Tren bileti almak',
  environmentId: 'train', sceneType: 'transit', level: 'A2',
  goal: 'Compra el billete correcto para tu destino.',
  goalTr: 'Gideceğin yere doğru bileti al.',
  npcIds: ['nina'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'nina', emotion: 'neutral',
      text: '¡Siguiente, por favor! ¿Adónde viaja hoy?',
      translation: 'Sıradaki, lütfen! Bugün nereye seyahat ediyorsunuz?',
      choices: [
        { id: 'to_london', intentionTr: 'Londra’ya bilet iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Hola, quería un billete a Londres, por favor.',
          translation: 'Merhaba, Londra’ya bir bilet istiyorum, lütfen.',
          altAccepted: ['Un billete a Londres por favor', 'Me da un billete a Londres'],
          next: 'return_or_single' },
        { id: 'ask_next', intentionTr: 'Bir sonraki treni sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: '¿Cuándo sale el próximo tren a Londres?',
          translation: 'Londra’ya bir sonraki tren ne zaman?',
          altAccepted: ['A qué hora es el próximo tren a Londres', 'Cuándo es el próximo tren a Londres'],
          next: 'next_train' }
      ]
    },
    next_train: {
      id: 'next_train', speakerId: 'nina', emotion: 'helpful',
      text: 'El próximo sale a las 2:15 del andén tres. ¿Quiere un billete para ese?',
      translation: 'Bir sonraki 2:15’te üç numaralı perondan kalkıyor. Ona bilet ister misiniz?',
      choices: [
        { id: 'yes_ticket', intentionTr: 'Evet, o bilete al', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Sí, por favor, un billete para el de las 2:15.',
          translation: 'Evet lütfen, 2:15 için bir bilet.',
          altAccepted: ['Sí uno para el de las dos y cuarto', 'Un billete para ese tren por favor'],
          next: 'return_or_single' },
        { id: 'confirm_platform', intentionTr: 'Perdonu teyit ederek bilet al', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Sí, un billete por favor. ¿Andén tres, dijo?',
          translation: 'Evet, bir bilet lütfen. Peron üç, demiştiniz değil mi?',
          altAccepted: ['Un billete andén tres verdad', 'Sí era el andén tres'],
          next: 'return_or_single' }
      ]
    },
    return_or_single: {
      id: 'return_or_single', speakerId: 'nina', emotion: 'neutral',
      text: '¿Solo ida o ida y vuelta?',
      translation: 'Tek yön mü gidiş-dönüş mü?',
      choices: [
        { id: 'return', intentionTr: 'Gidiş-dönüş iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Ida y vuelta, por favor. Vuelvo esta noche.',
          translation: 'Gidiş-dönüş, lütfen. Bu gece dönüyorum.',
          altAccepted: ['Ida y vuelta por favor', 'Ida y vuelta regreso esta noche'],
          next: 'end_ticket' },
        { id: 'single', intentionTr: 'Tek yön iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Solo ida, gracias.',
          translation: 'Sadece tek yön, teşekkürler.',
          altAccepted: ['Solo ida por favor', 'Un billete de ida gracias'],
          next: 'end_ticket' },
        { id: 'ask_discount', intentionTr: 'İndirim olup olmadığını sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Ida y vuelta — ¿y hay algún descuento de estudiante?',
          translation: 'Gidiş-dönüş — ve öğrenci indirimi var mı?',
          altAccepted: ['Ida y vuelta y hay descuento de estudiante', 'Tienen descuento para estudiantes'],
          next: 'discount' }
      ]
    },
    discount: {
      id: 'discount', speakerId: 'nina', emotion: 'friendly',
      text: 'Pues sí — con un carnet de estudiante válido es un veinte por ciento de descuento. ¿Tiene uno?',
      translation: 'Aslında var — geçerli öğrenci kartıyla yüzde yirmi indirim. Kartınız var mı?',
      next: 'end_discount'
    }
  },
  endings: {
    end_ticket: { id: 'end_ticket', kind: 'success', title: 'Billete en mano', titleTr: 'Bilet elde',
      text: 'Compraste el billete correcto y sabes tu andén. ¡Todos a bordo!',
      translation: 'Doğru bileti aldın ve peronunu biliyorsun. Herkes trene!',
      coins: 10 },
    end_discount: { id: 'end_discount', kind: 'excellent', title: 'Billete más barato', titleTr: 'Daha ucuz bilet',
      text: 'Se te ocurrió preguntar por el descuento y ahorraste dinero. ¡Viajar con cabeza!',
      translation: 'İndirim sormayı akıl ettin ve para biriktirdin. Akıllı yolculuk!',
      coins: 14 }
  }
});

// ── Taxi ride (A2) ──────────────────────────────────────────────────────────
export const taxiRide = createScenario({
  id: 'taxi-ride',
  title: 'Tomar un taxi',
  titleTr: 'Taksiye binmek',
  environmentId: 'taxi', sceneType: 'taxi', level: 'A2',
  goal: 'Dile al conductor adónde ir y maneja el trayecto.',
  goalTr: 'Sürücüye nereye gideceğini söyle ve yolculuğu yönet.',
  npcIds: ['victor'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'victor', emotion: 'friendly',
      text: '¡Buenas noches! Suba. ¿Adónde lo llevo?',
      translation: 'İyi akşamlar! Atla. Sizi nereye götüreyim?',
      choices: [
        { id: 'airport', intentionTr: 'Havalimanına git de', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Al aeropuerto, por favor. Terminal dos.',
          translation: 'Havalimanına, lütfen. İkinci terminal.',
          altAccepted: ['El aeropuerto por favor terminal dos', 'Aeropuerto terminal dos'],
          next: 'hurry' },
        { id: 'hotel_addr', intentionTr: 'Otel adresini ver', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: '¿Me puede llevar al hotel Sunrise, en la calle King?',
          translation: 'Beni King Caddesi’ndeki Sunrise Otel’e götürür müsünüz?',
          altAccepted: ['Al hotel Sunrise en la calle King por favor', 'Al hotel Sunrise calle King'],
          next: 'smalltalk' }
      ]
    },
    hurry: {
      id: 'hurry', speakerId: 'victor', emotion: 'neutral',
      text: 'Sin problema. Hay bastante tráfico esta noche — ¿tiene prisa, o tomo la ruta bonita?',
      translation: 'Sorun değil. Bu gece trafik biraz yoğun — aceleniz var mı, yoksa manzaralı yoldan mı gideyim?',
      choices: [
        { id: 'fast', intentionTr: 'Acelen olduğunu söyle', tone: 'direct', difficulty: 'medium', xp: 14,
          sentence: 'Tengo prisa — por el camino más rápido, por favor.',
          translation: 'Acelem var — en hızlı yol, lütfen.',
          altAccepted: ['El camino más rápido por favor tengo prisa', 'La ruta más rápida llevo prisa'],
          next: 'end_arrived' },
        { id: 'relax', intentionTr: 'Acelen olmadığını söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Sin prisa. Por donde le sea más fácil.',
          translation: 'Hiç acelem yok. Sizin için hangisi kolaysa.',
          altAccepted: ['Sin prisa por donde sea más fácil', 'Tranquilo cualquiera de las dos'],
          next: 'smalltalk', relationshipEffect: 1 }
      ]
    },
    smalltalk: {
      id: 'smalltalk', speakerId: 'victor', emotion: 'happy',
      text: 'Y bueno, ¿está de visita en la ciudad o vive aquí?',
      translation: 'Peki, şehri mi ziyaret ediyorsunuz yoksa burada mı yaşıyorsunuz?',
      choices: [
        { id: 'tourist', intentionTr: 'Turist olduğunu söyle', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Solo estoy de visita unos días. ¡Es una ciudad preciosa!',
          translation: 'Sadece birkaç günlüğüne ziyaretteyim. Güzel bir şehir!',
          altAccepted: ['Estoy de visita unos días', 'De visita unos días es preciosa'],
          next: 'recommend' },
        { id: 'quiet', intentionTr: 'Kibarca sessiz kalmayı tercih et', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'De visita. Pero ha sido un día largo — ¿le importa si descanso un poco?',
          translation: 'Sadece ziyaret. Ama uzun bir gündü — dinlensem sorun olur mu?',
          altAccepted: ['Le importa si descanso día largo', 'Fue un día largo puedo cerrar los ojos'],
          next: 'end_arrived', relationshipEffect: 1 }
      ]
    },
    recommend: {
      id: 'recommend', speakerId: 'victor', emotion: 'friendly',
      text: 'Entonces tiene que ver el mercado viejo y el puerto al atardecer. Ya llegamos — son doce euros.',
      translation: 'O zaman eski çarşıyı ve gün batımında limanı mutlaka görmelisiniz. Geldik — on iki euro.',
      next: 'end_tips'
    }
  },
  endings: {
    end_arrived: { id: 'end_arrived', kind: 'success', title: 'Llegaste bien', titleTr: 'Güvenle vardın',
      text: 'Le dijiste al conductor adónde ir y llegaste sin problemas. Un viaje fácil.',
      translation: 'Sürücüye nereye gideceğini söyledin ve sorunsuz vardın. Kolay bir yolculuk.',
      coins: 10 },
    end_tips: { id: 'end_tips', kind: 'relationship', title: 'Consejos locales y un amigo', titleTr: 'Yerel ipuçları ve bir dost',
      text: 'Charlaste con el conductor y conseguiste buenos consejos locales. ¡Un poco de conversación llega lejos en español!',
      translation: 'Sürücüyle sohbet ettin ve harika yerel ipuçları aldın. İspanyolcada biraz sohbet çok işe yarar!',
      relationshipEffect: 1, coins: 12 }
  }
});
