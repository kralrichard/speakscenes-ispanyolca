import { createScenario } from '../scenarioSchema.js?v=7';

// ── Airport check-in (A2) ───────────────────────────────────────────────────
export const airportCheckin = createScenario({
  id: 'airport-checkin',
  title: 'Facturación para tu vuelo',
  titleTr: 'Uçuşun için check-in yapmak',
  environmentId: 'airport', sceneType: 'airport', level: 'A2',
  goal: 'Factura, resuelve lo de tu maleta y consigue tu tarjeta de embarque.',
  goalTr: 'Check-in yap, bavulunu hallet ve biniş kartını al.',
  npcIds: ['priya'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'priya', emotion: 'friendly',
      text: '¡Buenos días! ¿Me muestra su pasaporte y su reserva, por favor?',
      translation: 'Günaydın! Pasaportunuzu ve rezervasyonunuzu görebilir miyim, lütfen?',
      choices: [
        { id: 'give_docs', intentionTr: 'Belgeleri ver', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Aquí tiene, mi pasaporte y la reserva en el teléfono.',
          translation: 'Buyurun — pasaportum ve telefondaki rezervasyonum.',
          altAccepted: ['Aquí está mi pasaporte y la reserva', 'Tenga pasaporte y reserva'],
          next: 'bags', relationshipEffect: 1 },
        { id: 'no_print', intentionTr: 'Dijital biletin geçerli olup olmadığını sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Solo tengo la reserva digital. ¿Está bien así?',
          translation: 'Sadece dijital rezervasyonum var. Uygun mu?',
          altAccepted: ['Vale una reserva digital', 'Solo la tengo en el teléfono sirve'],
          next: 'digital_ok' }
      ]
    },
    digital_ok: {
      id: 'digital_ok', speakerId: 'priya', emotion: 'friendly',
      text: 'Una reserva digital está perfectamente bien. Gracias — ahora, ¿va a facturar alguna maleta hoy?',
      translation: 'Dijital rezervasyon gayet uygun. Teşekkürler — peki bugün bavul verecek misiniz?',
      next: 'bags'
    },
    bags: {
      id: 'bags', speakerId: 'priya', emotion: 'neutral',
      text: '¿Factura alguna maleta, o solo lleva el equipaje de mano hoy?',
      translation: 'Bavul verecek misiniz, yoksa bugün sadece bir el bagajı mı var?',
      choices: [
        { id: 'one_bag', intentionTr: 'Bir bavul vereceğini söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Tengo una maleta para facturar, por favor.',
          translation: 'Check-in için bir valizim var, lütfen.',
          altAccepted: ['Tengo una maleta que facturar', 'Solo una maleta para facturar'],
          next: 'overweight' },
        { id: 'carry_only', intentionTr: 'Sadece el bagajı olduğunu söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'No, solo este equipaje de mano.',
          translation: 'Hayır, sadece bu el bagajı var.',
          altAccepted: ['Solo equipaje de mano', 'No solo esta mochila de mano'],
          next: 'seat' },
        { id: 'ask_gate', intentionTr: 'Kapının nerede olduğunu sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Solo equipaje de mano. Por cierto, ¿me puede decir qué puerta me toca?',
          translation: 'Sadece el bagajı. Bu arada hangi kapıya gitmem gerektiğini söyler misiniz?',
          altAccepted: ['Qué puerta me toca', 'Me puede decir mi puerta de embarque'],
          next: 'gate_info' }
      ]
    },
    overweight: {
      id: 'overweight', speakerId: 'priya', emotion: 'concerned',
      text: 'Vamos a pesarla… ah, pasa el límite por dos kilos. Hay una pequeña tarifa por exceso, o puede pasar algunas cosas a su equipaje de mano.',
      translation: 'Tartalım… ah, limitin iki kilo üzerinde. Küçük bir fazlalık ücreti var ya da birkaç eşyayı el bagajına alabilirsiniz.',
      choices: [
        { id: 'pay_fee', intentionTr: 'Ücreti ödemeyi kabul et', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'No pasa nada, pago la tarifa por exceso.',
          translation: 'Sorun değil, fazlalık ücretini öderim.',
          altAccepted: ['Pago la tarifa', 'Está bien pago el extra'],
          next: 'seat' },
        { id: 'move_items', intentionTr: 'Eşyaları taşımayı tercih et', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'Mejor paso algunas cosas a mi equipaje de mano.',
          translation: 'Bunun yerine birkaç şeyi el bagajıma alayım.',
          altAccepted: ['Paso algunas cosas al equipaje de mano', 'Mejor muevo unas cosas'],
          next: 'seat', relationshipEffect: 1 }
      ]
    },
    seat: {
      id: 'seat', speakerId: 'priya', emotion: 'friendly',
      text: 'Todo listo. ¿Prefiere asiento de ventanilla o de pasillo?',
      translation: 'Her şey hazır. Cam kenarı mı yoksa koridor tarafı mı istersiniz?',
      choices: [
        { id: 'window', intentionTr: 'Cam kenarı iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Ventanilla, por favor. Me encantan las vistas.',
          translation: 'Cam kenarı, lütfen. Manzarayı severim.',
          altAccepted: ['Ventanilla por favor', 'Quiero asiento de ventanilla'],
          next: 'done' },
        { id: 'aisle', intentionTr: 'Koridor tarafı iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Mejor un asiento de pasillo, gracias.',
          translation: 'Koridor tarafı daha iyi olur, teşekkürler.',
          altAccepted: ['Pasillo por favor', 'Prefiero pasillo'],
          next: 'done' }
      ]
    },
    gate_info: {
      id: 'gate_info', speakerId: 'priya', emotion: 'helpful',
      text: 'Claro — embarca por la puerta B12. Son diez minutos a pie, así que deje algo de tiempo. Ahora, ¿ventanilla o pasillo?',
      translation: 'Tabii — B12 kapısından bineceksiniz. On dakikalık yürüyüş, biraz zaman bırakın. Şimdi, cam kenarı mı koridor mu?',
      next: 'seat'
    },
    done: {
      id: 'done', speakerId: 'priya', emotion: 'happy',
      text: 'Aquí tiene su tarjeta de embarque. Puerta B12, embarque a las 10:40. ¡Buen vuelo!',
      translation: 'Biniş kartınız burada. B12 kapısı, 10:40’ta biniş. İyi uçuşlar!',
      next: 'end_success'
    }
  },
  endings: {
    end_success: { id: 'end_success', kind: 'success', title: 'Facturado y listo', titleTr: 'Check-in tamam, hazırsın',
      text: 'Pasaporte, maleta y asiento — todo resuelto con claridad. Tarjeta de embarque en mano.',
      translation: 'Pasaport, bavul ve koltuk — hepsi net biçimde halledildi. Biniş kartı elinde.',
      relationshipEffect: 1, coins: 10 }
  }
});

// ── Missing your flight (B1) ────────────────────────────────────────────────
export const missingFlight = createScenario({
  id: 'missing-flight',
  title: 'Estás a punto de perder tu vuelo',
  titleTr: 'Uçuşunu kaçırmak üzeresin',
  environmentId: 'airport', sceneType: 'airport', level: 'B1',
  goal: 'Explica la situación con calma y encuentra la mejor opción.',
  goalTr: 'Durumu sakince anlat ve en iyi seçeneği bul.',
  npcIds: ['omar'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'omar', emotion: 'concerned',
      text: 'Lo siento, la puerta del vuelo 208 acaba de cerrar. ¿Qué puedo hacer por usted?',
      translation: 'Üzgünüm, 208 sefer sayılı uçuşun kapısı az önce kapandı. Sizin için ne yapabilirim?',
      choices: [
        { id: 'explain', intentionTr: 'Sakince ne olduğunu anlat', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Mi vuelo de conexión se retrasó, así que no pude llegar a tiempo.',
          translation: 'Aktarma uçuşum rötar yaptı, bu yüzden zamanında gelemedim.',
          altAccepted: ['Mi conexión se retrasó', 'Llegué tarde porque mi otro vuelo se retrasó'],
          next: 'next_flight' },
        { id: 'panic', intentionTr: 'Panikle bir sonraki uçağa binmek istediğini söyle', tone: 'direct', difficulty: 'medium', xp: 14,
          sentence: 'Por favor, necesito de verdad subir al próximo vuelo a Roma.',
          translation: 'Lütfen, Roma’ya bir sonraki uçağa gerçekten binmem gerekiyor.',
          altAccepted: ['Necesito el próximo vuelo a Roma', 'Puede ponerme en el próximo vuelo a Roma'],
          next: 'next_flight' }
      ]
    },
    next_flight: {
      id: 'next_flight', speakerId: 'omar', emotion: 'thinking',
      text: 'Déjeme ver… Hay otro vuelo en tres horas, pero va casi lleno. O un vuelo por la tarde con asientos libres. ¿Cuál prefiere?',
      translation: 'Bakayım… Üç saat sonra başka bir uçuş var ama neredeyse dolu. Ya da boş koltukları olan bir akşam uçuşu. Hangisini tercih edersiniz?',
      choices: [
        { id: 'sooner', intentionTr: 'Erken uçuşu iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Preferiría el más pronto, aunque tenga que esperar en la puerta.',
          translation: 'Kapıda beklemek zorunda kalsam bile erken olanı tercih ederim.',
          altAccepted: ['Prefiero el vuelo más temprano', 'El más pronto por favor'],
          next: 'fee_question' },
        { id: 'evening', intentionTr: 'Rahat olan akşam uçuşunu seç', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'El vuelo de la tarde está bien. Prefiero un asiento garantizado.',
          translation: 'Akşam uçuşu uygun. Garantili bir koltuğu tercih ederim.',
          altAccepted: ['Tomo el vuelo de la tarde', 'El de la tarde está bien'],
          next: 'rebooked_free' }
      ]
    },
    fee_question: {
      id: 'fee_question', speakerId: 'omar', emotion: 'neutral',
      text: 'Como el retraso fue culpa de la aerolínea, no hay cargo por el cambio. Pero en ese vuelo solo queda un asiento del medio. ¿Lo quiere igual?',
      translation: 'Rötar havayolunun hatası olduğundan yeniden rezervasyon ücreti yok. Ama o uçuşta sadece orta koltuk kaldı. Yine de ister misiniz?',
      choices: [
        { id: 'take_middle', intentionTr: 'Orta koltuğu kabul et', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Un asiento del medio está bien, solo quiero llegar.',
          translation: 'Orta koltuk uygun — sadece oraya varmak istiyorum.',
          altAccepted: ['El asiento del medio está bien', 'Tomo el del medio'],
          next: 'rebooked_sooner' },
        { id: 'ask_lounge', intentionTr: 'Bekleme için bir şey iste', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Lo tomo. Dado el retraso, ¿podría darme un pase a la sala VIP mientras espero?',
          translation: 'Alıyorum. Rötar göz önüne alınırsa, beklerken bir lounge kartı alabilir miyim?',
          altAccepted: ['Podría darme un pase a la sala VIP', 'Puedo tener acceso a la sala mientras espero'],
          next: 'lounge_granted' }
      ]
    },
    rebooked_sooner: {
      id: 'rebooked_sooner', speakerId: 'omar', emotion: 'friendly',
      text: 'Hecho — está confirmado en el vuelo de las tres, puerta C4. De nuevo, disculpe el retraso.',
      translation: 'Tamam — saat üç uçuşuna onaylandınız, kapı C4. Rötar için tekrar özür dilerim.',
      next: 'end_rebooked'
    },
    lounge_granted: {
      id: 'lounge_granted', speakerId: 'omar', emotion: 'happy',
      text: 'Es justo. Aquí tiene un pase a la sala VIP y su nueva tarjeta de embarque. Relájese hasta las tres — se lo ha ganado.',
      translation: 'Bu adil. İşte bir lounge kartı ve yeni biniş kartınız. Saat üçe kadar dinlenin — hak ettiniz.',
      next: 'end_excellent'
    },
    rebooked_free: {
      id: 'rebooked_free', speakerId: 'omar', emotion: 'friendly',
      text: 'Está en el vuelo de la tarde, ventanilla, sin cargo. Una elección tranquila — gracias por su paciencia.',
      translation: 'Akşam uçuşundasınız, cam kenarı, ücretsiz. Sakin bir tercih — sabrınız için teşekkürler.',
      next: 'end_calm'
    }
  },
  endings: {
    end_rebooked: { id: 'end_rebooked', kind: 'problem-solved', title: 'De vuelta en un vuelo', titleTr: 'Yeniden uçuşta',
      text: 'Explicaste el retraso con calma y conseguiste el siguiente vuelo. Crisis manejada.',
      translation: 'Rötarı sakince anlattın ve hemen bir sonraki uçağa bindin. Kriz yönetildi.',
      relationshipEffect: 1, coins: 12 },
    end_excellent: { id: 'end_excellent', kind: 'excellent', title: 'Recolocado con extra', titleTr: 'Ekstra ile yeniden rezervasyon',
      text: 'Te mantuviste cortés, conocías tus derechos y hasta conseguiste acceso a la sala VIP. Excelente resolución de problemas en español.',
      translation: 'Kibar kaldın, haklarını bildin ve hatta lounge erişimi aldın. İspanyolcada mükemmel sorun çözme.',
      relationshipEffect: 2, coins: 18 },
    end_calm: { id: 'end_calm', kind: 'success', title: 'Un cambio tranquilo', titleTr: 'Rahat bir yeniden rezervasyon',
      text: 'Elegiste la certeza sobre la velocidad y conseguiste ventanilla garantizada. Sensato y sin estrés.',
      translation: 'Hızdan çok kesinliği seçtin ve garantili bir cam kenarı koltuk aldın. Mantıklı ve stressiz.',
      coins: 10 }
  }
});
