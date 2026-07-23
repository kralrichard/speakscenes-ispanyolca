import { createScenario } from '../scenarioSchema.js?v=6';

// ── Bank: reporting a lost card (B1) ────────────────────────────────────────
export const bankLostCard = createScenario({
  id: 'bank-lost-card',
  title: 'Reportar una tarjeta perdida',
  titleTr: 'Kayıp kartı bildirmek',
  environmentId: 'bank', sceneType: 'bank-office', level: 'B1',
  goal: 'Reporta tu tarjeta perdida y consigue una nueva.',
  goalTr: 'Kayıp kartını bildir ve yenisini al.',
  npcIds: ['david'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'david', emotion: 'friendly',
      text: 'Buenos días. ¿En qué puedo ayudarle hoy?',
      translation: 'Günaydın. Bugün nasıl yardımcı olabilirim?',
      choices: [
        { id: 'lost', intentionTr: 'Kartını kaybettiğini söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Buenos días. Creo que he perdido mi tarjeta del banco.',
          translation: 'Günaydın. Sanırım banka kartımı kaybettim.',
          altAccepted: ['He perdido mi tarjeta del banco', 'Creo que perdí mi tarjeta'],
          next: 'when_lost' },
        { id: 'stolen', intentionTr: 'Kartının çalınmış olabileceğini söyle', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'Necesito bloquear mi tarjeta — creo que me la pueden haber robado.',
          translation: 'Kartımı bloke ettirmem gerekiyor — sanırım çalınmış olabilir.',
          altAccepted: ['Creo que me robaron la tarjeta bloquéela por favor', 'Puede que me hayan robado la tarjeta'],
          next: 'block_now' }
      ]
    },
    when_lost: {
      id: 'when_lost', speakerId: 'david', emotion: 'concerned',
      text: 'Lamento oírlo. ¿Cuándo la usó por última vez? La bloqueo ahora mismo.',
      translation: 'Bunu duyduğuma üzüldüm. En son ne zaman kullandınız? Hemen bloke edeceğim.',
      choices: [
        { id: 'yesterday', intentionTr: 'Dün kullandığını söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'La usé ayer en un restaurante y no la he visto desde entonces.',
          translation: 'Dün bir restoranda kullandım ve o zamandan beri görmedim.',
          altAccepted: ['La última vez ayer en un restaurante', 'Ayer en un restaurante y no la vi más'],
          next: 'new_card' },
        { id: 'not_sure', intentionTr: 'Emin olmadığını söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'La verdad, no estoy seguro. Quizás hace dos días.',
          translation: 'Açıkçası emin değilim. Belki iki gün önce.',
          altAccepted: ['No estoy seguro quizás hace dos días', 'Sinceramente no lo sé hace un par de días'],
          next: 'new_card' }
      ]
    },
    block_now: {
      id: 'block_now', speakerId: 'david', emotion: 'concerned',
      text: 'Entendido — la bloqueo en este segundo. Listo. ¿Ha notado algún pago que no reconozca?',
      translation: 'Anlaşıldı — şu an bloke ediyorum. Tamam. Tanımadığınız bir ödeme fark ettiniz mi?',
      choices: [
        { id: 'yes_strange', intentionTr: 'Tanımadığın bir ödeme olduğunu söyle', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'Sí, de hecho — hay un pago que definitivamente yo no hice.',
          translation: 'Evet, aslında — kesinlikle benim yapmadığım bir ödeme var.',
          altAccepted: ['Hay un pago que no hice', 'Sí veo un cargo que no es mío'],
          next: 'dispute', relationshipEffect: 1 },
        { id: 'no_strange', intentionTr: 'Tuhaf bir şey yok de', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'No, nada raro hasta ahora.',
          translation: 'Hayır, şimdiye kadar tuhaf bir şey yok.',
          altAccepted: ['No nada extraño todavía', 'Nada inusual hasta ahora'],
          next: 'new_card' }
      ]
    },
    dispute: {
      id: 'dispute', speakerId: 'david', emotion: 'friendly',
      text: 'Gracias por avisar. Abriré una disputa y usted no será responsable de ese cargo. Ahora, pidamos su tarjeta nueva.',
      translation: 'Bildirdiğiniz için teşekkürler. Bir itiraz başlatacağım ve bundan sorumlu olmayacaksınız. Şimdi yeni kartınızı sipariş edelim.',
      next: 'new_card'
    },
    new_card: {
      id: 'new_card', speakerId: 'david', emotion: 'helpful',
      text: 'Puedo enviar una tarjeta nueva a su dirección en tres a cinco días, o puede recogerla aquí mañana. ¿Qué le viene mejor?',
      translation: 'Yeni kartı üç-beş günde adresinize gönderebilirim ya da yarın buradan alabilirsiniz. Hangisi uygun?',
      choices: [
        { id: 'post', intentionTr: 'Posta ile gönderilmesini iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Envíela a mi dirección, por favor. Está bien así.',
          translation: 'Lütfen adresime gönderin. Uygun.',
          altAccepted: ['Envíela a mi dirección por favor', 'Por correo está bien'],
          next: 'end_sorted' },
        { id: 'collect', intentionTr: 'Yarın gelip almayı tercih et', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Preferiría recogerla mañana, si es posible.',
          translation: 'Mümkünse yarın gelip almayı tercih ederim.',
          altAccepted: ['La recojo mañana', 'Puedo pasar a por ella mañana'],
          next: 'end_sorted', relationshipEffect: 1 }
      ]
    }
  },
  endings: {
    end_sorted: { id: 'end_sorted', kind: 'problem-solved', title: 'Tarjeta resuelta', titleTr: 'Kart halledildi',
      text: 'Reportaste la tarjeta perdida con calma, la bloqueaste y organizaste el reemplazo. Exactamente los pasos correctos.',
      translation: 'Kayıp kartı sakince bildirdin, bloke ettirdin ve yenisini ayarladın. Tam da doğru adımlar.',
      relationshipEffect: 1, coins: 14 }
  }
});

// ── Police station: reporting a lost phone (B1) ─────────────────────────────
export const policeLostPhone = createScenario({
  id: 'police-lost-phone',
  title: 'Denunciar un teléfono perdido',
  titleTr: 'Kayıp telefonu bildirmek',
  environmentId: 'police', sceneType: 'formal-office', level: 'B1',
  goal: 'Presenta una denuncia por tu teléfono perdido y da los detalles.',
  goalTr: 'Kayıp telefonun için tutanak tut ve ayrıntıları ver.',
  npcIds: ['grant'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'grant', emotion: 'friendly',
      text: 'Buenas tardes. ¿Qué puedo hacer por usted?',
      translation: 'İyi günler. Sizin için ne yapabilirim?',
      choices: [
        { id: 'report_lost', intentionTr: 'Telefonunu kaybettiğini bildir', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Hola. Quisiera denunciar la pérdida de un teléfono, por favor.',
          translation: 'Merhaba. Kayıp bir telefon bildirmek istiyorum, lütfen.',
          altAccepted: ['Quiero denunciar un teléfono perdido', 'Quisiera reportar mi teléfono como perdido'],
          next: 'where' },
        { id: 'maybe_stolen', intentionTr: 'Çalınmış olabileceğini bildir', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'Creo que me robaron el teléfono en el autobús esta mañana.',
          translation: 'Sanırım telefonum bu sabah otobüste çalındı.',
          altAccepted: ['Me robaron el teléfono en el autobús esta mañana', 'Creo que me quitaron el teléfono en el autobús'],
          next: 'where' }
      ]
    },
    where: {
      id: 'where', speakerId: 'grant', emotion: 'neutral',
      text: 'Muy bien, tomemos los datos. ¿Dónde y cuándo lo tuvo por última vez?',
      translation: 'Peki, ayrıntıları alalım. En son nerede ve ne zaman elinizdeydi?',
      choices: [
        { id: 'give_details', intentionTr: 'Ayrıntılı yer ve zaman ver', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'En el autobús número 12, esta mañana sobre las ocho. Es un teléfono negro con funda azul.',
          translation: '12 numaralı otobüste, bu sabah sekiz sularında. Mavi kılıfta siyah bir telefon.',
          altAccepted: ['En el autobús 12 sobre las ocho teléfono negro funda azul', 'Sobre las ocho en el 12 un teléfono negro con funda azul'],
          next: 'contact', relationshipEffect: 1 },
        { id: 'vague_details', intentionTr: 'Kısaca, emin olmadan söyle', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'En algún lugar del centro esta mañana. No estoy seguro de dónde exactamente.',
          translation: 'Bu sabah şehir merkezinde bir yerde. Tam olarak nerede emin değilim.',
          altAccepted: ['En el centro esta mañana no sé exactamente', 'Por el centro esta mañana'],
          next: 'contact' }
      ]
    },
    contact: {
      id: 'contact', speakerId: 'grant', emotion: 'helpful',
      text: 'Anotado. Registraré la denuncia y le daré un número de referencia. ¿Cómo quiere que lo contactemos si aparece?',
      translation: 'Aldım. Tutanağı tutup size bir referans numarası vereceğim. Bulunursa sizinle nasıl iletişim kuralım?',
      choices: [
        { id: 'by_email', intentionTr: 'E-posta ile iletişim iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Por correo electrónico sería lo mejor, gracias.',
          translation: 'E-posta ile olması en iyisi, teşekkürler.',
          altAccepted: ['El correo es lo mejor gracias', 'Por email por favor'],
          next: 'end_filed' },
        { id: 'ask_insurance', intentionTr: 'Sigorta için ne gerektiğini sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Por correo, por favor. Además, ¿me darán un documento para mi seguro?',
          translation: 'E-posta ile, lütfen. Ayrıca, sigortam için bir belge alacak mıyım?',
          altAccepted: ['Me darán un documento para el seguro', 'Hay papeles para mi seguro'],
          next: 'insurance', relationshipEffect: 1 }
      ]
    },
    insurance: {
      id: 'insurance', speakerId: 'grant', emotion: 'friendly',
      text: 'Sí — el número de referencia y esta denuncia son justo lo que pedirá su aseguradora. Aquí tiene. Suerte.',
      translation: 'Evet — referans numarası ve bu tutanak, sigortacınızın tam olarak isteyeceği şey. Buyurun. Bol şans.',
      next: 'end_insurance'
    }
  },
  endings: {
    end_filed: { id: 'end_filed', kind: 'problem-solved', title: 'Denuncia presentada', titleTr: 'Tutanak tutuldu',
      text: 'Denunciaste el teléfono con claridad y todos los detalles. No podías hacer más.',
      translation: 'Telefonu tüm ayrıntılarıyla net biçimde bildirdin. Yapabileceğin başka bir şey yoktu.',
      coins: 10 },
    end_insurance: { id: 'end_insurance', kind: 'excellent', title: 'Listo para el seguro', titleTr: 'Sigortaya hazır',
      text: 'Pensaste con anticipación y pediste el documento para el seguro. Esa pregunta puede ahorrarte mucho dinero.',
      translation: 'İleriyi düşündün ve sigorta belgesini istedin. Bu soru sana çok para kazandırabilir.',
      coins: 14 }
  }
});
