import { createScenario } from '../scenarioSchema.js?v=7';

// ── Meeting a new friend (A1) ───────────────────────────────────────────────
export const meetingFriend = createScenario({
  id: 'meeting-friend',
  title: 'Conocer a un nuevo compañero',
  titleTr: 'Yeni bir sınıf arkadaşıyla tanışmak',
  environmentId: 'street', sceneType: 'school', level: 'A1',
  goal: 'Preséntate y haz un nuevo amigo.',
  goalTr: 'Kendini tanıt ve yeni bir arkadaş edin.',
  npcIds: ['leo'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'leo', emotion: 'friendly',
      text: '¡Hola! Creo que no nos conocemos. Soy Leo. ¿Eres nuevo aquí?',
      translation: 'Selam! Sanırım tanışmadık. Ben Leo. Buraya yeni mi geldin?',
      choices: [
        { id: 'introduce', intentionTr: 'Kendini tanıt', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: '¡Hola Leo! Soy Sam. Sí, es mi primera semana.',
          translation: 'Selam Leo! Ben Sam. Evet, ilk haftam.',
          altAccepted: ['Hola soy Sam sí es mi primera semana', 'Hola Leo me llamo Sam soy nuevo'],
          next: 'where_from', relationshipEffect: 1 },
        { id: 'shy', intentionTr: 'Utangaç ama nazik ol', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Hola. Sí, soy nuevo. Mucho gusto.',
          translation: 'Merhaba. Evet, yeniyim. Tanıştığıma memnun oldum.',
          altAccepted: ['Hola sí soy nuevo mucho gusto', 'Hola soy nuevo aquí encantado'],
          next: 'where_from' }
      ]
    },
    where_from: {
      id: 'where_from', speakerId: 'leo', emotion: 'curious',
      text: '¡Mucho gusto, Sam! ¿De dónde eres?',
      translation: 'Tanıştığıma memnun oldum, Sam! Nerelisin?',
      choices: [
        { id: 'from_turkey', intentionTr: 'Nereli olduğunu söyle', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Soy de Turquía. Me mudé aquí el mes pasado.',
          translation: 'Türkiye’denim. Geçen ay buraya taşındım.',
          altAccepted: ['Soy de Turquía me mudé el mes pasado', 'De Turquía llegué el mes pasado'],
          next: 'hobbies' },
        { id: 'ask_back', intentionTr: 'Sen nerelisin diye sor', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Soy de Turquía. ¿Y tú, eres de aquí?',
          translation: 'Türkiye’denim. Ya sen — buralı mısın?',
          altAccepted: ['Soy de Turquía y tú', 'De Turquía de dónde eres tú'],
          next: 'hobbies', relationshipEffect: 1 }
      ]
    },
    hobbies: {
      id: 'hobbies', speakerId: 'leo', emotion: 'happy',
      text: '¡Genial! Algunos jugamos al fútbol los viernes después de clase. ¿Quieres venir esta semana?',
      translation: 'Harika! Birkaçımız cuma günleri dersten sonra futbol oynuyoruz. Bu hafta bize katılmak ister misin?',
      choices: [
        { id: 'accept', intentionTr: 'Daveti kabul et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: '¡Suena divertido! Me encantaría ir.',
          translation: 'Kulağa eğlenceli geliyor! Size katılmayı çok isterim.',
          altAccepted: ['Me encantaría ir', 'Suena genial me apunto'],
          next: 'end_friends', relationshipEffect: 2 },
        { id: 'decline_polite', intentionTr: 'Kibarca reddet ama başka zaman de', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Este viernes no puedo, ¿pero quizás la próxima semana?',
          translation: 'Bu cuma olmaz ama belki gelecek hafta?',
          altAccepted: ['Este viernes no pero la próxima semana quizás', 'El viernes estoy ocupado y la próxima semana'],
          next: 'end_maybe', relationshipEffect: 1 },
        { id: 'ask_details', intentionTr: 'Saatini ve yerini sor', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: '¡Quizás! ¿A qué hora empieza y dónde juegan?',
          translation: 'Belki! Kaçta başlıyor ve nerede oynuyorsunuz?',
          altAccepted: ['A qué hora y dónde juegan', 'Cuándo empieza y dónde'],
          next: 'details' }
      ]
    },
    details: {
      id: 'details', speakerId: 'leo', emotion: 'friendly',
      text: 'Empezamos a las cuatro, en el parque detrás de la escuela. ¡Trae zapatillas y vente!',
      translation: 'Saat dörtte, okulun arkasındaki parkta başlıyoruz. Spor ayakkabı getir ve gel!',
      choices: [
        { id: 'ill_come', intentionTr: 'Geleceğini söyle', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Perfecto, estaré ahí a las cuatro. ¡Gracias por invitarme!',
          translation: 'Mükemmel, dörtte orada olacağım. Davet ettiğin için teşekkürler!',
          altAccepted: ['Genial estaré a las cuatro', 'Voy a las cuatro gracias por la invitación'],
          next: 'end_friends', relationshipEffect: 2 },
        { id: 'ask_bring', intentionTr: 'Başka bir şey getirmen gerekip gerekmediğini sor', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: '¡Genial! ¿Llevo algo más aparte de las zapatillas?',
          translation: 'Harika! Spor ayakkabı dışında başka bir şey getirmeli miyim?',
          altAccepted: ['Llevo algo más', 'Necesito algo más aparte de zapatillas'],
          next: 'end_friends', relationshipEffect: 2 }
      ]
    }
  },
  endings: {
    end_friends: { id: 'end_friends', kind: 'relationship', title: 'Un nuevo amigo', titleTr: 'Yeni bir arkadaş',
      text: 'Te presentaste con calidez e hiciste planes con Leo. ¡Así empiezan las amistades!',
      translation: 'Kendini içtenlikle tanıttın ve Leo ile plan yaptın. Arkadaşlıklar böyle başlar!',
      relationshipEffect: 1, coins: 12 },
    end_maybe: { id: 'end_maybe', kind: 'success', title: 'Un buen comienzo', titleTr: 'İyi bir başlangıç',
      text: 'Esta vez no pudiste, pero dejaste la puerta abierta con cortesía. Leo volverá a preguntar.',
      translation: 'Bu sefer gelemedin ama kapıyı kibarca açık bıraktın. Leo tekrar soracak.',
      coins: 8 }
  }
});

// ── Asking for directions (A2) ──────────────────────────────────────────────
export const askingDirections = createScenario({
  id: 'asking-directions',
  title: 'Encontrar el camino',
  titleTr: 'Yolunu bulmak',
  environmentId: 'street', sceneType: 'street', level: 'A2',
  goal: 'Pide indicaciones a una desconocida y entiende la respuesta.',
  goalTr: 'Bir yabancıdan yol tarifi iste ve cevabı anla.',
  npcIds: ['sophie'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'sophie', emotion: 'friendly',
      text: 'Pareces un poco perdido — ¿te ayudo a encontrar algo?',
      translation: 'Biraz kaybolmuş görünüyorsun — bir şey bulmana yardım edebilir miyim?',
      choices: [
        { id: 'ask_station', intentionTr: 'İstasyonun yerini sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Sí, por favor. ¿Me puedes decir cómo llegar a la estación de tren?',
          translation: 'Evet, lütfen. Tren istasyonuna nasıl gideceğimi söyler misiniz?',
          altAccepted: ['Cómo llego a la estación de tren', 'Me puedes indicar el camino a la estación'],
          next: 'station_dir', relationshipEffect: 1 },
        { id: 'ask_pharmacy', intentionTr: 'En yakın eczaneyi sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: '¿Me podrías decir dónde está la farmacia más cercana?',
          translation: 'En yakın eczanenin nerede olduğunu söyleyebilir misiniz?',
          altAccepted: ['Dónde está la farmacia más cercana', 'Sabes dónde queda la farmacia más cercana'],
          next: 'pharmacy_dir', relationshipEffect: 1 }
      ]
    },
    station_dir: {
      id: 'station_dir', speakerId: 'sophie', emotion: 'helpful',
      text: '¡Claro! Sigue recto por esta calle, toma la segunda a la izquierda, y está justo enfrente. Unos cinco minutos.',
      translation: 'Tabii! Bu caddeden düz git, ikinci soldan dön, tam karşında. Yaklaşık beş dakika.',
      choices: [
        { id: 'confirm_understood', intentionTr: 'Anladığını tekrar ederek doğrula', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Entonces, recto y la segunda a la izquierda. ¿Está lejos a pie?',
          translation: 'Yani, düz git ve ikinci soldan dön. Yürüyerek uzak mı?',
          altAccepted: ['Recto y segunda a la izquierda está lejos a pie', 'Entonces segunda a la izquierda queda lejos'],
          next: 'walkable', relationshipEffect: 1 },
        { id: 'thanks_go', intentionTr: 'Teşekkür et ve git', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Entendido, ¡muchas gracias por tu ayuda!',
          translation: 'Anladım, yardımın için çok teşekkürler!',
          altAccepted: ['Muchas gracias por la ayuda', 'Entendido muchísimas gracias'],
          next: 'end_found' }
      ]
    },
    pharmacy_dir: {
      id: 'pharmacy_dir', speakerId: 'sophie', emotion: 'helpful',
      text: 'Hay una a la vuelta de la esquina, junto a la panadería. Gira a la derecha en el semáforo y la verás.',
      translation: 'Hemen köşede, fırının yanında bir tane var. Trafik ışıklarında sağa dön, göreceksin.',
      choices: [
        { id: 'thank_pharmacy', intentionTr: 'Teşekkür et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'A la derecha en el semáforo, junto a la panadería. ¡Gracias!',
          translation: 'Işıklarda sağa, fırının yanında. Teşekkürler!',
          altAccepted: ['Derecha en el semáforo junto a la panadería gracias', 'Giro a la derecha en el semáforo entendido gracias'],
          next: 'end_found', relationshipEffect: 1 },
        { id: 'ask_open', intentionTr: 'Şu an açık mı diye sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: '¡Gracias! ¿Sabes si está abierta a esta hora?',
          translation: 'Teşekkürler! Bu saatte açık mı, biliyor musunuz?',
          altAccepted: ['Está abierta a esta hora', 'Sabes si está abierta ahora'],
          next: 'end_found', relationshipEffect: 1 }
      ]
    },
    walkable: {
      id: 'walkable', speakerId: 'sophie', emotion: 'happy',
      text: 'Nada lejos — cinco minutos, todo llano. Vas a llegar sin problema. ¡Buen viaje!',
      translation: 'Hiç uzak değil — beş dakika, yol boyunca düz. Sorun olmaz. İyi yolculuklar!',
      next: 'end_confirmed'
    }
  },
  endings: {
    end_found: { id: 'end_found', kind: 'success', title: 'En camino', titleTr: 'Yolunda',
      text: 'Preguntaste con claridad y le diste las gracias a Sophie. Sabes exactamente adónde ir.',
      translation: 'Net biçimde sordun ve Sophie’ye teşekkür ettin. Nereye gideceğini tam olarak biliyorsun.',
      coins: 10 },
    end_confirmed: { id: 'end_confirmed', kind: 'excellent', title: 'Confirmado y seguro', titleTr: 'Doğrulandı ve emin',
      text: 'Repetiste las indicaciones para comprobar que entendiste y preguntaste algo más. La marca de un hablante seguro.',
      translation: 'Anladığını kontrol etmek için tarifi tekrarladın ve bir soru daha sordun. Bu, kendinden emin bir konuşmacının işareti.',
      relationshipEffect: 1, coins: 14 }
  }
});
