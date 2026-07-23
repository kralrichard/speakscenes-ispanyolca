import { createScenario } from '../scenarioSchema.js?v=6';

// ── Home: a morning at home (A1) ────────────────────────────────────────────
export const homeMorning = createScenario({
  id: 'home-morning',
  title: 'Una mañana en casa',
  titleTr: 'Evde bir sabah',
  environmentId: 'home', sceneType: 'home', level: 'A1',
  goal: 'Charla con tu hermana durante el desayuno.',
  goalTr: 'Kahvaltıda kız kardeşinle sohbet et.',
  npcIds: ['emma'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'emma', emotion: 'happy',
      text: '¡Buenos días! Te has levantado temprano. ¿Dormiste bien?',
      translation: 'Günaydın! Erken kalkmışsın. İyi uyudun mu?',
      choices: [
        { id: 'slept_well', intentionTr: 'İyi uyuduğunu söyle', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: '¡Buenos días! Sí, dormí muy bien, gracias.',
          translation: 'Günaydın! Evet, çok iyi uyudum, teşekkürler.',
          altAccepted: ['Sí dormí bien gracias', 'Buenos días dormí genial'],
          next: 'breakfast' },
        { id: 'tired', intentionTr: 'Hâlâ yorgun olduğunu söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Buenos días. La verdad, no — todavía estoy un poco cansado.',
          translation: 'Günaydın. Pek sayılmaz — hâlâ biraz yorgunum.',
          altAccepted: ['La verdad no todavía estoy cansado', 'Todavía estoy un poco cansado'],
          next: 'breakfast' }
      ]
    },
    breakfast: {
      id: 'breakfast', speakerId: 'emma', emotion: 'friendly',
      text: 'Estoy haciendo huevos. ¿Quieres, o solo café?',
      translation: 'Yumurta yapıyorum. Sen de ister misin, yoksa sadece kahve mi?',
      choices: [
        { id: 'eggs', intentionTr: 'Yumurta iste', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: '¡Los huevos suenan genial, sí por favor!',
          translation: 'Yumurta harika olur, evet lütfen!',
          altAccepted: ['Sí por favor huevos', 'Me encantarían unos huevos'],
          next: 'plans' },
        { id: 'just_coffee', intentionTr: 'Sadece kahve iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Solo café para mí, gracias.',
          translation: 'Bana sadece kahve, teşekkürler.',
          altAccepted: ['Solo café por favor', 'Solamente café gracias'],
          next: 'plans' }
      ]
    },
    plans: {
      id: 'plans', speakerId: 'emma', emotion: 'curious',
      text: '¿Y qué planes tienes hoy? ¿Algo divertido?',
      translation: 'Peki bugün planların ne? Eğlenceli bir şey var mı?',
      choices: [
        { id: 'busy', intentionTr: 'Meşgul olduğunu söyle', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'Estoy bastante ocupado — tengo trabajo y luego el gimnasio.',
          translation: 'Oldukça meşgulüm — işim var, sonra da spor salonu.',
          altAccepted: ['Tengo trabajo y luego el gimnasio', 'Día ocupado trabajo y luego gimnasio'],
          next: 'end_day' },
        { id: 'invite', intentionTr: 'Kız kardeşini bir şeye davet et', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: '¡No mucho! ¿Quieres ir al mercado juntos más tarde?',
          translation: 'Pek bir şey yok! Sonra birlikte pazara gitmek ister misin?',
          altAccepted: ['Quieres ir al mercado juntos', 'Vamos juntos al mercado más tarde'],
          next: 'end_together', relationshipEffect: 2 }
      ]
    }
  },
  endings: {
    end_day: { id: 'end_day', kind: 'success', title: 'A por un día ocupado', titleTr: 'Yoğun bir güne',
      text: 'Una charla matutina agradable y natural. Le explicaste tu día a tu hermana con claridad.',
      translation: 'Hoş, doğal bir sabah sohbeti. Gününü kız kardeşine net biçimde anlattın.',
      coins: 8 },
    end_together: { id: 'end_together', kind: 'relationship', title: 'Planes juntos', titleTr: 'Birlikte plan',
      text: 'Invitaste a tu hermana y armaron un plan. Estas pequeñas charlas son español real de todos los días.',
      translation: 'Kız kardeşini dışarı davet edip plan yaptın. Bunun gibi küçük sohbetler gerçek, günlük İspanyolcadır.',
      relationshipEffect: 1, coins: 12 }
  }
});
