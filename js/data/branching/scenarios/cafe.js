import { createScenario } from '../scenarioSchema.js?v=6';

// ── Café order (A1) ─────────────────────────────────────────────────────────
export const cafeOrder = createScenario({
  id: 'cafe-order',
  title: 'Pedir en la cafetería',
  titleTr: 'Kafede sipariş vermek',
  environmentId: 'cafe', sceneType: 'cafe', level: 'A1',
  goal: 'Pide una bebida como a ti te gusta.',
  goalTr: 'İçeceğini istediğin gibi sipariş et.',
  npcIds: ['mia'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'mia', emotion: 'happy',
      text: '¡Hola! ¿Qué te pongo?',
      translation: 'Merhaba! Ne alırsınız?',
      choices: [
        { id: 'coffee', intentionTr: 'Bir kahve iste', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: '¡Hola! ¿Me pones un café, por favor?',
          translation: 'Merhaba! Bir kahve alabilir miyim, lütfen?',
          altAccepted: ['Un café por favor', 'Quería un café'],
          next: 'size' },
        { id: 'tea', intentionTr: 'Bir çay iste', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: '¿Me das una taza de té, por favor?',
          translation: 'Bir fincan çay alabilir miyim, lütfen?',
          altAccepted: ['Un té por favor', 'Quería un té'],
          next: 'size' },
        { id: 'recommend', intentionTr: 'Ne önerdiğini sor', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: '¿Qué está bueno aquí? ¿Qué me recomiendas?',
          translation: 'Burada ne güzel? Ne önerirsin?',
          altAccepted: ['Qué me recomiendas', 'Qué es lo más popular aquí'],
          next: 'suggest' }
      ]
    },
    suggest: {
      id: 'suggest', speakerId: 'mia', emotion: 'friendly',
      text: 'Nuestro latte de caramelo es el favorito, y el té helado va genial en un día de calor. ¿Cuál te apetece?',
      translation: 'Karamelli latte favorimiz, sıcak günlerde de buzlu çay harika. Hangisi hoşuna gitti?',
      choices: [
        { id: 'latte', intentionTr: 'Latte’yi seç', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'El latte de caramelo suena perfecto. Voy a tomar ese.',
          translation: 'Karamelli latte harika. Onu alayım.',
          altAccepted: ['Me tomo el latte de caramelo', 'El latte de caramelo por favor'],
          next: 'size', relationshipEffect: 1 },
        { id: 'icedtea', intentionTr: 'Buzlu çayı seç', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Voy a probar el té helado, gracias.',
          translation: 'Buzlu çayı deneyeyim, teşekkürler.',
          altAccepted: ['El té helado por favor', 'Me tomo el té helado'],
          next: 'size' }
      ]
    },
    size: {
      id: 'size', speakerId: 'mia', emotion: 'neutral',
      text: '¡Claro! ¿Qué tamaño quieres — pequeño, mediano o grande?',
      translation: 'Tabii! Hangi boy istersiniz — küçük, orta, yoksa büyük?',
      choices: [
        { id: 'medium', intentionTr: 'Orta boy iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Mediano, por favor. Para llevar.',
          translation: 'Orta boy, lütfen. Dışarı alacağım.',
          altAccepted: ['Mediano para llevar por favor', 'Uno mediano para llevar'],
          next: 'end_ordered' },
        { id: 'large_stay', intentionTr: 'Büyük iste ve içeride kal', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'Uno grande, y me lo tomo aquí.',
          translation: 'Büyük boy ve burada içeceğim.',
          altAccepted: ['Grande y me lo tomo aquí', 'Uno grande para tomar aquí'],
          next: 'end_ordered', relationshipEffect: 1 }
      ]
    }
  },
  endings: {
    end_ordered: { id: 'end_ordered', kind: 'success', title: 'Pedido listo', titleTr: 'Sipariş hazır',
      text: 'Pediste tu bebida con claridad, con tamaño y todo. ¡Que aproveche!',
      translation: 'İçeceğini boyuyla birlikte net biçimde sipariş ettin. Afiyet olsun!',
      relationshipEffect: 1, coins: 10 }
  }
});

// ── Café catch-up with a friend (B1) ────────────────────────────────────────
export const cafeMeetup = createScenario({
  id: 'cafe-meetup',
  title: 'Reencuentro con una vieja amiga',
  titleTr: 'Eski bir arkadaşla hasret gidermek',
  environmentId: 'cafe', sceneType: 'cafe', level: 'B1',
  goal: 'Vuelve a conectar con una amiga a la que no ves desde hace años.',
  goalTr: 'Yıllardır görmediğin bir arkadaşınla yeniden bağ kur.',
  npcIds: ['hannah'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'hannah', emotion: 'surprised',
      text: 'Dios mío, ¿de verdad eres tú? ¿Cuánto ha pasado, cinco años?',
      translation: 'Aman tanrım — bu gerçekten sen misin? Ne kadar oldu, beş yıl mı?',
      choices: [
        { id: 'warm', intentionTr: 'Sıcak bir şekilde karşılık ver', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: '¡Hannah! No me lo puedo creer — ¡estás exactamente igual!',
          translation: 'Hannah! İnanamıyorum — tıpatıp aynısın!',
          altAccepted: ['No me lo puedo creer estás igual', 'Hannah qué alegría verte'],
          next: 'whats_new', relationshipEffect: 2 },
        { id: 'surprised', intentionTr: 'Şaşkınlığını dile getir', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: '¡Vaya, qué casualidad! ¿Qué haces aquí?',
          translation: 'Vay, ne tesadüf! Burada ne yapıyorsun?',
          altAccepted: ['Qué casualidad qué haces aquí', 'Qué haces por aquí'],
          next: 'whats_new' }
      ]
    },
    whats_new: {
      id: 'whats_new', speakerId: 'hannah', emotion: 'happy',
      text: '¡Volví el mes pasado! Ahora trabajo en el hospital. Cuéntame — ¿qué has estado haciendo?',
      translation: 'Geçen ay geri taşındım! Şimdi hastanede çalışıyorum. Anlat bakalım — sen neler yapıyordun?',
      choices: [
        { id: 'job', intentionTr: 'İşinden bahset', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: '¡Han cambiado muchas cosas! Monté mi propio negocio hace dos años.',
          translation: 'Çok şey değişti! İki yıl önce kendi işimi kurdum.',
          altAccepted: ['Monté mi propio negocio hace dos años', 'Llevo mi propio negocio ahora'],
          next: 'plans', relationshipEffect: 1 },
        { id: 'travel', intentionTr: 'Seyahatlerinden bahset', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: 'La verdad, he viajado mucho — acabo de volver de Japón.',
          translation: 'Açıkçası çok seyahat ediyordum — daha yeni Japonya’dan döndüm.',
          altAccepted: ['He viajado mucho acabo de volver de Japón', 'Acabo de volver de Japón'],
          next: 'plans' }
      ]
    },
    plans: {
      id: 'plans', speakerId: 'hannah', emotion: 'friendly',
      text: '¡Qué maravilla! Tenemos mucho que contarnos. ¿Tienes tiempo para un café tranquilo o llevas prisa?',
      translation: 'Bu harika! Konuşacak çok şeyimiz var. Doğru dürüst bir kahveye vaktin var mı, yoksa acele mi ediyorsun?',
      choices: [
        { id: 'stay', intentionTr: 'Kal ve sohbet et', tone: 'friendly', difficulty: 'medium', xp: 16,
          sentence: 'Tengo toda la tarde libre. Busquemos una mesa y pongámonos al día con calma.',
          translation: 'Bütün öğleden sonram boş. Bir masa tutup güzelce sohbet edelim.',
          altAccepted: ['Tengo tiempo sentémonos a hablar', 'Busquemos una mesa y hablemos'],
          next: 'end_reunion', relationshipEffect: 2 },
        { id: 'reschedule', intentionTr: 'Şimdi olmaz ama buluşma ayarla', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Me tengo que ir, pero intercambiemos números y quedemos esta semana.',
          translation: 'Şimdi gitmem lazım ama numaralarımızı alalım ve bu hafta doğru dürüst buluşalım.',
          altAccepted: ['Intercambiemos números y quedemos esta semana', 'Me tengo que ir pero quedamos esta semana'],
          next: 'end_plan', relationshipEffect: 1 }
      ]
    }
  },
  endings: {
    end_reunion: { id: 'end_reunion', kind: 'relationship', title: 'Un reencuentro de verdad', titleTr: 'Gerçek bir buluşma',
      text: 'Os sentasteis y hablasteis durante horas. Algunas amistades siguen justo donde se quedaron.',
      translation: 'Oturup saatlerce konuştunuz. Bazı dostluklar kaldığı yerden devam eder.',
      relationshipEffect: 2, coins: 16 },
    end_plan: { id: 'end_plan', kind: 'success', title: 'Un plan para verse', titleTr: 'Buluşma planı',
      text: 'No podías quedarte, pero hicisteis un plan firme para veros otra vez. Resuelto con calidez y cortesía.',
      translation: 'Kalamadın ama tekrar buluşmak için sağlam bir plan yaptın. Sıcak ve kibarca halledildi.',
      coins: 10 }
  }
});
