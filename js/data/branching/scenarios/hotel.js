import { createScenario } from '../scenarioSchema.js?v=7';

// ── Hotel check-in (A2) — the flagship: 4 decision points, 4 endings ────────
export const hotelCheckin = createScenario({
  id: 'hotel-checkin',
  title: 'Registro en el hotel Sunrise',
  titleTr: 'Sunrise Otel’e giriş yapmak',
  environmentId: 'hotel', sceneType: 'hotel-lobby', level: 'A2',
  goal: 'Regístrate en tu habitación y resuelve los pequeños problemas.',
  goalTr: 'Odana giriş yap ve küçük sorunları çöz.',
  npcIds: ['grace', 'daniel'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'grace', emotion: 'friendly',
      text: 'Buenas noches y bienvenido al hotel Sunrise. ¿Tiene una reserva con nosotros?',
      translation: 'İyi akşamlar, Sunrise Otel’e hoş geldiniz. Bizde bir rezervasyonunuz var mı?',
      choices: [
        { id: 'confirm', intentionTr: 'Rezervasyonun olduğunu söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Sí, tengo una reserva a nombre de Alex.',
          translation: 'Evet, Alex adına bir rezervasyonum var.',
          altAccepted: ['Tengo una reserva a nombre de Alex', 'Sí la reserva está a nombre de Alex'],
          next: 'find_reservation', relationshipEffect: 1 },
        { id: 'no_reservation', intentionTr: 'Rezervasyonun olmadığını söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'No, no tengo. ¿Tienen habitaciones libres esta noche?',
          translation: 'Hayır, yok. Bu gece boş odanız var mı?',
          altAccepted: ['No tienen habitaciones libres', 'No tengo reserva hay habitaciones esta noche'],
          next: 'walk_in' },
        { id: 'wrong_hotel', intentionTr: 'Yanlış otelde olabileceğini fark et', tone: 'casual', difficulty: 'medium', xp: 14,
          sentence: 'La verdad, creo que me equivoqué de hotel.',
          translation: 'Aslında sanırım yanlış oteldeyim.',
          altAccepted: ['Creo que me equivoqué de hotel', 'Perdón creo que este no es el hotel'],
          next: 'wrong_hotel_node' }
      ]
    },
    find_reservation: {
      id: 'find_reservation', speakerId: 'grace', emotion: 'thinking',
      text: 'Déjeme ver… ¡Alex, sí! Dos noches en habitación doble. ¿Cómo le gustaría pagar?',
      translation: 'Bakayım… Alex, evet! İki gece, çift kişilik oda. Nasıl ödemek istediğinizi söyler misiniz?',
      choices: [
        { id: 'pay_card', intentionTr: 'Kartla ödeyeceğini söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Me gustaría pagar con tarjeta, por favor.',
          translation: 'Kartla ödemek istiyorum, lütfen.',
          altAccepted: ['Pago con tarjeta', 'Con tarjeta por favor', 'Puedo pagar con tarjeta'],
          next: 'room_ready', relationshipEffect: 1 },
        { id: 'ask_breakfast', intentionTr: 'Kahvaltının dahil olup olmadığını sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Antes de eso, ¿el desayuno está incluido en el precio?',
          translation: 'Ondan önce, kahvaltı fiyata dahil mi?',
          altAccepted: ['El desayuno está incluido', 'El precio incluye el desayuno'],
          next: 'breakfast_info' }
      ]
    },
    breakfast_info: {
      id: 'breakfast_info', speakerId: 'grace', emotion: 'happy',
      text: 'Sí, el desayuno completo está incluido, se sirve de siete a diez en el salón principal. ¿Le hago el registro ahora?',
      translation: 'Evet, tam kahvaltı dahil, ana salonda yedi ile on arası servis ediliyor. Şimdi girişinizi yapayım mı?',
      choices: [
        { id: 'yes_checkin', intentionTr: 'Evet, girişi yap', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Sí, por favor. Pagaré con tarjeta.',
          translation: 'Evet, lütfen. Kartla ödeyeceğim.',
          altAccepted: ['Sí por favor pago con tarjeta', 'Claro con tarjeta por favor'],
          next: 'room_ready', relationshipEffect: 1 },
        { id: 'ask_late', intentionTr: 'Geç çıkış isteyip istemediğini sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Una cosa más, ¿sería posible una salida tardía?',
          translation: 'Bir şey daha — geç çıkış mümkün olur mu?',
          altAccepted: ['Es posible una salida tardía', 'Podría salir más tarde'],
          next: 'late_checkout' }
      ]
    },
    late_checkout: {
      id: 'late_checkout', speakerId: 'grace', emotion: 'friendly',
      text: 'Por supuesto. Puedo ofrecerle salida hasta la una sin cargo extra. Está en la habitación 214 — aquí tiene su llave.',
      translation: 'Tabii ki. Ekstra ücret olmadan saat bire kadar çıkış verebilirim. Oda 214’tesiniz — anahtarınız.',
      next: 'end_excellent'
    },
    room_ready: {
      id: 'room_ready', speakerId: 'grace', emotion: 'happy',
      text: 'Perfecto. Todo listo — habitación 214 en el segundo piso. Aquí tiene su tarjeta llave. ¡Disfrute su estancia!',
      translation: 'Harika. Her şey hazır — ikinci katta oda 214. Anahtar kartınız burada. İyi konaklamalar!',
      next: 'end_success'
    },
    walk_in: {
      id: 'walk_in', speakerId: 'grace', emotion: 'thinking',
      text: 'A ver… nos queda una habitación estándar a noventa euros la noche. ¿La quiere?',
      translation: 'Bir bakayım… gecesi doksan euro olan tek bir standart odamız kaldı. İster misiniz?',
      choices: [
        { id: 'take_room', intentionTr: 'Odayı kabul et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Suena bien. La tomo por una noche.',
          translation: 'Kulağa güzel geliyor. Bir geceliğine alıyorum.',
          altAccepted: ['La tomo por una noche', 'Sí me quedo la habitación esta noche'],
          next: 'room_ready', relationshipEffect: 1 },
        { id: 'too_expensive', intentionTr: 'Çok pahalı olduğunu kibarca söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Es un poco más de lo que pensaba gastar. ¿Hay algo más barato?',
          translation: 'Umduğumdan biraz fazla. Daha ucuz bir şey var mı?',
          altAccepted: ['Tienen algo más barato', 'Hay una habitación más barata'],
          next: 'cheaper' }
      ]
    },
    cheaper: {
      id: 'cheaper', speakerId: 'daniel', emotion: 'friendly',
      text: 'Hola, soy el gerente de turno. No puedo bajar el precio de la habitación, pero puedo incluir el desayuno gratis. ¿Le parece justo?',
      translation: 'Merhaba, ben nöbetçi müdürüm. Oda fiyatını düşüremem ama ücretsiz kahvaltı ekleyebilirim. Olur mu?',
      choices: [
        { id: 'accept_deal', intentionTr: 'Teklifi kabul et', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Muy amable, sí, tomo la habitación con desayuno.',
          translation: 'Çok naziksiniz — evet, odayı kahvaltıyla alıyorum.',
          altAccepted: ['Sí la tomo con desayuno', 'Me parece bien tomo la habitación'],
          next: 'room_ready', relationshipEffect: 2 },
        { id: 'decline', intentionTr: 'Kibarca reddet ve ayrıl', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Gracias, pero creo que buscaré en otro sitio esta noche.',
          translation: 'Teşekkürler ama sanırım bu gece başka bir yere bakacağım.',
          altAccepted: ['Gracias pero miraré en otro lado', 'Se lo agradezco pero probaré otro lugar'],
          next: 'end_neutral' }
      ]
    },
    wrong_hotel_node: {
      id: 'wrong_hotel_node', speakerId: 'grace', emotion: 'surprised',
      text: '¡Oh! ¿Qué hotel busca? Quizás pueda indicarle el camino.',
      translation: 'Aa! Hangi oteli arıyorsunuz? Belki sizi doğru yöne yönlendirebilirim.',
      choices: [
        { id: 'ask_directions', intentionTr: 'Yol tarifi iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Busco el hotel Moonlight. ¿Me puede decir cómo llegar?',
          translation: 'Moonlight Otel’i arıyorum. Oraya nasıl gideceğimi söyler misiniz?',
          altAccepted: ['Cómo llego al hotel Moonlight', 'Me puede indicar el camino al hotel Moonlight'],
          next: 'directions_given', relationshipEffect: 1 },
        { id: 'stay_anyway', intentionTr: 'Aslında burada kalmaya karar ver', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: '¿Sabe qué? Su hotel se ve precioso. ¿Tiene una habitación esta noche?',
          translation: 'Aslına bakarsanız oteliniz çok hoş görünüyor. Bu gece odanız var mı?',
          altAccepted: ['Tiene una habitación esta noche', 'Su hotel se ve bien hay habitación libre'],
          next: 'walk_in' }
      ]
    },
    directions_given: {
      id: 'directions_given', speakerId: 'grace', emotion: 'friendly',
      text: 'Está a solo dos calles, a su izquierda, junto a la farmacia. ¡No tiene pérdida!',
      translation: 'Sadece iki sokak aşağıda, solunuzda, eczanenin yanında. Kaçırmanız imkânsız!',
      next: 'end_helpful'
    }
  },
  endings: {
    end_excellent: { id: 'end_excellent', kind: 'excellent', title: 'Registro perfecto', titleTr: 'Kusursuz giriş',
      text: 'Habitación, desayuno y salida tardía — manejaste cada paso con cortesía y claridad. Grace está encantada de tenerte.',
      translation: 'Oda, kahvaltı ve geç çıkış — her adımı kibar ve net biçimde hallettin. Grace seni ağırlamaktan çok memnun.',
      relationshipEffect: 2, coins: 15 },
    end_success: { id: 'end_success', kind: 'success', title: 'Registrado', titleTr: 'Giriş yapıldı',
      text: 'Ya estás registrado y de camino a la habitación 214. Fluido y amable.',
      translation: 'Girişini yaptın ve 214 numaralı odaya doğru yola çıktın. Sorunsuz ve dostça.',
      relationshipEffect: 1, coins: 10 },
    end_neutral: { id: 'end_neutral', kind: 'neutral', title: 'A buscar otro sitio', titleTr: 'Başka yere bakmaya',
      text: 'Rechazaste la oferta con cortesía. No hay habitación esta noche, pero dejaste una buena impresión — siempre puedes volver.',
      translation: 'Teklifi kibarca geri çevirdin. Bu gece oda yok ama iyi bir izlenim bıraktın — her zaman geri dönebilirsin.',
      coins: 5 },
    end_helpful: { id: 'end_helpful', kind: 'problem-solved', title: 'De vuelta al camino', titleTr: 'Yeniden yolda',
      text: 'Descubriste que estabas en el hotel equivocado y conseguiste indicaciones claras hacia el correcto. ¡Problema resuelto!',
      translation: 'Yanlış otelde olduğunu fark ettin ve doğru otele net bir yol tarifi aldın. Sorun çözüldü!',
      coins: 8 }
  }
});

// ── Hotel room problem (B1) — 3 decision points, 3 endings ──────────────────
export const hotelRoomProblem = createScenario({
  id: 'hotel-room-problem',
  title: 'Un problema con tu habitación',
  titleTr: 'Odanla ilgili bir sorun',
  environmentId: 'hotel', sceneType: 'hotel-lobby', level: 'B1',
  goal: 'Informa de un problema con tu habitación y consigue que lo arreglen.',
  goalTr: 'Odandaki sorunu bildir ve çözdür.',
  npcIds: ['daniel', 'grace'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'daniel', emotion: 'friendly',
      text: 'Buenas noches. Se le ve algo molesto — ¿va todo bien con su habitación?',
      translation: 'İyi akşamlar. Biraz sinirli görünüyorsunuz — odanızla ilgili her şey yolunda mı?',
      choices: [
        { id: 'dirty', intentionTr: 'Odanın temiz olmadığını söyle', tone: 'direct', difficulty: 'medium', xp: 14,
          sentence: 'Pues no. Mi habitación no se ha limpiado bien.',
          translation: 'Aslında hayır. Odam düzgün temizlenmemiş.',
          altAccepted: ['Mi habitación no está limpia', 'La habitación no se limpió bien'],
          next: 'apologize_clean' },
        { id: 'noise', intentionTr: 'Çok gürültülü olduğundan şikâyet et', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'La habitación de al lado es muy ruidosa y no puedo dormir.',
          translation: 'Yan odam çok gürültülü ve uyuyamıyorum.',
          altAccepted: ['La habitación de al lado hace mucho ruido', 'Hay mucho ruido al lado y no puedo dormir'],
          next: 'apologize_noise' },
        { id: 'ac', intentionTr: 'Klimanın çalışmadığını söyle', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'El aire acondicionado de mi habitación no funciona en absoluto.',
          translation: 'Odamdaki klima hiç çalışmıyor.',
          altAccepted: ['El aire acondicionado no funciona', 'Mi aire acondicionado no va'],
          next: 'apologize_ac' }
      ]
    },
    apologize_clean: {
      id: 'apologize_clean', speakerId: 'daniel', emotion: 'apologetic',
      text: 'Lo siento mucho. ¿Prefiere que envíe limpieza ahora mismo, o que lo cambie a una habitación limpia?',
      translation: 'Bunun için çok üzgünüm. Hemen kat görevlisi mi göndereyim, yoksa sizi temiz bir odaya mı taşıyayım?',
      choices: [
        { id: 'move', intentionTr: 'Başka odaya taşınmayı iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Preferiría cambiarme a otra habitación, si es posible.',
          translation: 'Mümkünse başka bir odaya taşınmayı tercih ederim.',
          altAccepted: ['Me puede cambiar a otra habitación', 'Preferiría otra habitación'],
          next: 'resolved_move', relationshipEffect: 1 },
        { id: 'clean_now', intentionTr: 'Hemen temizlenmesini iste', tone: 'direct', difficulty: 'easy', xp: 10,
          sentence: 'Solo envíe a alguien a limpiarla ahora, por favor.',
          translation: 'Lütfen sadece hemen temizlemesi için birini gönderin.',
          altAccepted: ['Envíe a alguien a limpiar ahora', 'Que la limpien ya por favor'],
          next: 'resolved_clean' }
      ]
    },
    apologize_noise: {
      id: 'apologize_noise', speakerId: 'daniel', emotion: 'apologetic',
      text: 'Eso es inaceptable a esta hora. Puedo cambiarlo a una habitación tranquila en la parte de atrás — ¿le ayudaría?',
      translation: 'Bu saatte kabul edilemez. Sizi arkadaki sessiz bir odaya taşıyabilirim — bu yardımcı olur mu?',
      choices: [
        { id: 'yes_move', intentionTr: 'Evet, taşınmayı kabul et', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Sí, una habitación tranquila sería perfecta. Gracias.',
          translation: 'Evet, sessiz bir oda harika olur. Teşekkürler.',
          altAccepted: ['Sí por favor una habitación tranquila sería genial', 'Sería perfecto gracias'],
          next: 'resolved_move', relationshipEffect: 1 },
        { id: 'compensation', intentionTr: 'Bir tür telafi iste', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Se lo agradezco, pero también esperaría alguna compensación por las molestias.',
          translation: 'Bunu takdir ediyorum ama bu zahmet için bir telafi de beklerdim.',
          altAccepted: ['También esperaría una compensación', 'Creo que una compensación sería justa'],
          next: 'offer_compensation' }
      ]
    },
    apologize_ac: {
      id: 'apologize_ac', speakerId: 'daniel', emotion: 'concerned',
      text: 'Le pido disculpas. Nuestro técnico ya se fue por hoy, así que lo más rápido es una habitación nueva. ¿Le parece bien?',
      translation: 'Özür dilerim. Teknisyenimiz bu gece ayrıldı, en hızlı çözüm yeni bir oda. Uygun mu?',
      choices: [
        { id: 'accept_new', intentionTr: 'Yeni odayı kabul et', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Está bien. Una habitación nueva me sirve.',
          translation: 'Sorun değil. Yeni bir oda benim için uygun.',
          altAccepted: ['Una habitación nueva está bien', 'Me sirve'],
          next: 'resolved_move', relationshipEffect: 1 },
        { id: 'insist_tech', intentionTr: 'Yine de teknisyende ısrar et', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'De verdad preferiría quedarme en mi habitación. ¿Podría venir un técnico mañana a primera hora?',
          translation: 'Gerçekten kendi odamda kalmayı tercih ederim. Teknisyen yarın ilk iş gelebilir mi?',
          altAccepted: ['Puede venir un técnico mañana por la mañana', 'Prefiero quedarme y que lo arreglen mañana'],
          next: 'offer_compensation' }
      ]
    },
    offer_compensation: {
      id: 'offer_compensation', speakerId: 'daniel', emotion: 'friendly',
      text: 'Es razonable. Le descuento el veinte por ciento de esta noche y le envío el desayuno a la habitación. ¿Trato hecho?',
      translation: 'Bu makul. Bu geceki ücretten yüzde yirmi indirim yapıp odanıza kahvaltı göndereceğim. Anlaştık mı?',
      next: 'resolved_deal'
    },
    resolved_move: {
      id: 'resolved_move', speakerId: 'daniel', emotion: 'happy',
      text: 'Hecho. Ahora está en la habitación 302 — mucho mejor. Haré que suban sus maletas. Que descanse.',
      translation: 'Tamamdır. Artık 302 numaralı odadasınız — çok daha iyi. Bavullarınızı yukarı getirteceğim. Rahat bir gece geçirin.',
      next: 'end_moved'
    },
    resolved_clean: {
      id: 'resolved_clean', speakerId: 'daniel', emotion: 'friendly',
      text: 'Limpieza va en camino y estará ahí en cinco minutos. Gracias por su paciencia.',
      translation: 'Kat görevlisi yolda ve beş dakikaya orada olacak. Sabrınız için teşekkürler.',
      next: 'end_cleaned'
    },
    resolved_deal: {
      id: 'resolved_deal', speakerId: 'daniel', emotion: 'happy',
      text: 'Excelente. Todo está arreglado. De nuevo, siento las molestias — gracias por ser tan comprensivo.',
      translation: 'Mükemmel. Her şey ayarlandı. Zahmet için tekrar özür dilerim — bu kadar anlayışlı olduğunuz için teşekkürler.',
      next: 'end_deal'
    }
  },
  endings: {
    end_moved: { id: 'end_moved', kind: 'problem-solved', title: 'Mudado y acomodado', titleTr: 'Taşındın ve yerleştin',
      text: 'Explicaste el problema con claridad y conseguiste una habitación mejor. Bien manejado.',
      translation: 'Sorunu net anlattın ve daha iyi bir oda aldın. İyi hallettin.',
      relationshipEffect: 1, coins: 12 },
    end_cleaned: { id: 'end_cleaned', kind: 'success', title: 'Resuelto rápido', titleTr: 'Hızlıca çözüldü',
      text: 'Una petición rápida y directa puso a limpieza en camino. Simple y efectivo.',
      translation: 'Hızlı, doğrudan bir istek kat görevlisini yola çıkardı. Basit ve etkili.',
      coins: 8 },
    end_deal: { id: 'end_deal', kind: 'excellent', title: 'Buen trato negociado', titleTr: 'Adil bir anlaşma',
      text: 'Defendiste lo tuyo con cortesía y negociaste un descuento más desayuno. Eso es español de nivel avanzado.',
      translation: 'Kibarca hakkını aradın ve indirim artı kahvaltı için pazarlık ettin. İşte ileri seviye İspanyolca.',
      relationshipEffect: 2, coins: 18 }
  }
});
