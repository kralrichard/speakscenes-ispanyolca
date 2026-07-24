import { createScenario } from '../scenarioSchema.js?v=7';

// Extra scenarios that add depth to existing environments (hotel, airport,
// restaurant) so each place has more than one thing to do.

// ── Hotel: asking for amenities (A1) ────────────────────────────────────────
export const hotelAmenities = createScenario({
  id: 'hotel-amenities',
  title: 'Wi-Fi, toallas y desayuno',
  titleTr: 'Wi-Fi, havlu ve kahvaltı',
  environmentId: 'hotel', sceneType: 'hotel-lobby', level: 'A1',
  goal: 'Pide en recepción las pequeñas cosas que necesitas.',
  goalTr: 'Resepsiyondan ihtiyacın olan küçük şeyleri iste.',
  npcIds: ['grace'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'grace', emotion: 'friendly',
      text: '¡Hola de nuevo! ¿Va todo bien con su habitación?',
      translation: 'Tekrar merhaba! Odanızla ilgili her şey yolunda mı?',
      choices: [
        { id: 'wifi', intentionTr: 'Wi-Fi şifresini sor', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Sí, gracias. ¿Me da la contraseña del Wi-Fi?',
          translation: 'Evet, teşekkürler. Wi-Fi şifresini alabilir miyim?',
          altAccepted: ['Cuál es la contraseña del wifi', 'Me puede dar la clave del wifi'],
          next: 'anything_else' },
        { id: 'towels', intentionTr: 'Fazladan havlu iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: '¿Me pueden dar unas toallas extra, por favor?',
          translation: 'Biraz fazladan havlu alabilir miyim, lütfen?',
          altAccepted: ['Me dan toallas extra', 'Unas toallas más por favor'],
          next: 'anything_else' },
        { id: 'breakfast_time', intentionTr: 'Kahvaltı saatini sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: '¿A qué hora se sirve el desayuno por la mañana?',
          translation: 'Sabah kahvaltı saat kaçta veriliyor?',
          altAccepted: ['Cuándo sirven el desayuno', 'A qué hora empieza el desayuno'],
          next: 'anything_else' }
      ]
    },
    anything_else: {
      id: 'anything_else', speakerId: 'grace', emotion: 'happy',
      text: 'Claro, lo arreglo ahora mismo. ¿Necesita algo más?',
      translation: 'Tabii, hemen hallederim. Başka bir ihtiyacınız var mı?',
      choices: [
        { id: 'no_thanks', intentionTr: 'Hayır, teşekkür et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'No, eso es todo. ¡Muchas gracias!',
          translation: 'Hayır, hepsi bu. Çok teşekkürler!',
          altAccepted: ['Eso es todo gracias', 'No gracias eso es todo'],
          next: 'end_helped', relationshipEffect: 1 },
        { id: 'ask_taxi', intentionTr: 'Taksi çağırmalarını iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'De hecho, sí, ¿me podría pedir un taxi para las ocho?',
          translation: 'Aslında, saat sekiz için bana bir taksi çağırır mısınız?',
          altAccepted: ['Me puede pedir un taxi para las ocho', 'Puede reservarme un taxi a las ocho'],
          next: 'end_helped', relationshipEffect: 1 }
      ]
    }
  },
  endings: {
    end_helped: { id: 'end_helped', kind: 'success', title: 'Todo arreglado', titleTr: 'Her şey ayarlandı',
      text: 'Pediste lo que necesitabas con cortesía y claridad. Recepción está encantada de ayudar.',
      translation: 'İhtiyacını kibar ve net biçimde istedin. Resepsiyon yardımcı olmaktan memnun.',
      relationshipEffect: 1, coins: 10 }
  }
});

// ── Airport: passport control (B1) ──────────────────────────────────────────
export const passportControl = createScenario({
  id: 'passport-control',
  title: 'Control de pasaportes',
  titleTr: 'Pasaport kontrolü',
  environmentId: 'airport', sceneType: 'airport', level: 'B1',
  goal: 'Responde a las preguntas del agente con claridad y calma.',
  goalTr: 'Memurun sorularını net ve sakin yanıtla.',
  npcIds: ['omar'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'omar', emotion: 'formal',
      text: 'Pasaporte, por favor. ¿Cuál es el motivo de su visita?',
      translation: 'Pasaport, lütfen. Ziyaretinizin amacı nedir?',
      choices: [
        { id: 'tourism', intentionTr: 'Turizm için geldiğini söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Estoy aquí de vacaciones por dos semanas.',
          translation: 'İki haftalığına tatil için buradayım.',
          altAccepted: ['Vengo de vacaciones dos semanas', 'De vacaciones por dos semanas'],
          next: 'where_staying' },
        { id: 'business', intentionTr: 'İş için geldiğini söyle', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Vengo por negocios, una conferencia de tres días.',
          translation: 'İş için buradayım — üç günlük bir konferans.',
          altAccepted: ['Vengo a una conferencia de negocios', 'Por negocios una conferencia de tres días'],
          next: 'where_staying' }
      ]
    },
    where_staying: {
      id: 'where_staying', speakerId: 'omar', emotion: 'neutral',
      text: '¿Y dónde se va a alojar?',
      translation: 'Peki nerede kalacaksınız?',
      choices: [
        { id: 'hotel', intentionTr: 'Otelde kalacağını söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'En el hotel Sunrise, en el centro de la ciudad.',
          translation: 'Şehir merkezindeki Sunrise Otel’de.',
          altAccepted: ['En el hotel Sunrise del centro', 'Hotel Sunrise en el centro'],
          next: 'end_through' },
        { id: 'friend', intentionTr: 'Bir arkadaşında kalacağını söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Me quedaré con un amigo que vive aquí.',
          translation: 'Burada yaşayan bir arkadaşımda kalacağım.',
          altAccepted: ['Con un amigo que vive aquí', 'Me quedo en casa de un amigo'],
          next: 'end_through' }
      ]
    }
  },
  endings: {
    end_through: { id: 'end_through', kind: 'success', title: 'Bienvenido al país', titleTr: 'Ülkeye hoş geldin',
      text: 'Respondiste con claridad y calma, y ya pasaste. El control de pasaportes es fácil si lo mantienes simple.',
      translation: 'Net ve sakin yanıt verdin ve geçtin. Basit tutunca pasaport kontrolü kolaydır.',
      coins: 12 }
  }
});

// ── Restaurant: asking for the bill (A2) ────────────────────────────────────
export const restaurantBill = createScenario({
  id: 'restaurant-bill',
  title: 'Pedir la cuenta',
  titleTr: 'Hesabı istemek',
  environmentId: 'restaurant', sceneType: 'restaurant', level: 'A2',
  goal: 'Termina tu comida y paga como tú quieras.',
  goalTr: 'Yemeğini bitir ve istediğin şekilde öde.',
  npcIds: ['elena'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'elena', emotion: 'friendly',
      text: '¿Qué tal estuvo todo? ¿Les traigo algo más?',
      translation: 'Her şey nasıldı? Başka bir şey getirebilir miyim?',
      choices: [
        { id: 'bill', intentionTr: 'Hesabı iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Estuvo delicioso, gracias. ¿Nos trae la cuenta, por favor?',
          translation: 'Çok güzeldi, teşekkürler. Hesabı alabilir miyiz, lütfen?',
          altAccepted: ['Nos trae la cuenta por favor', 'La cuenta por favor'],
          next: 'pay_how' },
        { id: 'dessert', intentionTr: 'Tatlı menüsünü sor', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: '¡Todo estuvo genial! ¿Puedo ver la carta de postres?',
          translation: 'Her şey harikaydı! Tatlı menüsünü görebilir miyim?',
          altAccepted: ['Puedo ver la carta de postres', 'Tienen carta de postres'],
          next: 'dessert_node' }
      ]
    },
    dessert_node: {
      id: 'dessert_node', speakerId: 'elena', emotion: 'happy',
      text: '¡Claro! La tarta de chocolate es increíble. ¿Le traigo una?',
      translation: 'Tabii! Çikolatalı kek muhteşem. Bir tane getireyim mi?',
      choices: [
        { id: 'yes_cake', intentionTr: 'Keki iste', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: '¡Sí, la tarta de chocolate suena perfecta!',
          translation: 'Evet, çikolatalı kek harika olur!',
          altAccepted: ['Sí la tarta de chocolate por favor', 'Me tomo la tarta de chocolate'],
          next: 'pay_how', relationshipEffect: 1 },
        { id: 'just_bill', intentionTr: 'Yok, sadece hesabı iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Quizás la próxima vez, solo la cuenta, por favor.',
          translation: 'Belki bir dahaki sefere — sadece hesap, lütfen.',
          altAccepted: ['Solo la cuenta por favor', 'No gracias solo la cuenta'],
          next: 'pay_how' }
      ]
    },
    pay_how: {
      id: 'pay_how', speakerId: 'elena', emotion: 'neutral',
      text: 'Aquí tiene. ¿Va a pagar con tarjeta o en efectivo?',
      translation: 'Buyurun. Kartla mı yoksa nakit mi ödeyeceksiniz?',
      choices: [
        { id: 'card', intentionTr: 'Kartla öde', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Con tarjeta, por favor. ¿Y me da un recibo?',
          translation: 'Kartla, lütfen. Bir de fiş alabilir miyim?',
          altAccepted: ['Con tarjeta y un recibo por favor', 'Tarjeta por favor con recibo'],
          next: 'end_paid' },
        { id: 'cash_tip', intentionTr: 'Nakit öde ve bahşiş bırak', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'En efectivo, por favor. Quédese con el cambio, el servicio fue genial.',
          translation: 'Nakit, lütfen. Üstü kalsın — hizmet harikaydı.',
          altAccepted: ['En efectivo quédese el cambio', 'Pago en efectivo quédese con el cambio'],
          next: 'end_paid', relationshipEffect: 2 }
      ]
    }
  },
  endings: {
    end_paid: { id: 'end_paid', kind: 'success', title: 'Pagado y listo', titleTr: 'Ödendi, bitti',
      text: 'Terminaste tu comida y pagaste sin problema. ¡Una experiencia completa de restaurante en español!',
      translation: 'Yemeğini bitirdin ve sorunsuz ödedin. İspanyolca ile eksiksiz bir restoran deneyimi!',
      relationshipEffect: 1, coins: 10 }
  }
});
