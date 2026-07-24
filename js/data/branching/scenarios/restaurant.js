import { createScenario } from '../scenarioSchema.js?v=7';

// ── Restaurant order (A2) ───────────────────────────────────────────────────
export const restaurantOrder = createScenario({
  id: 'restaurant-order',
  title: 'Pedir la cena',
  titleTr: 'Akşam yemeği sipariş etmek',
  environmentId: 'restaurant', sceneType: 'restaurant', level: 'A2',
  goal: 'Pide una comida y una bebida como tú las quieres.',
  goalTr: 'İstediğin şekilde bir yemek ve içecek sipariş et.',
  npcIds: ['elena'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'elena', emotion: 'friendly',
      text: '¡Buenas noches! Aquí tienen las cartas. ¿Están listos para pedir o quieren unos minutos?',
      translation: 'İyi akşamlar! Menüleriniz burada. Sipariş vermeye hazır mısınız, yoksa birkaç dakika ister misiniz?',
      choices: [
        { id: 'order_now', intentionTr: 'Hemen sipariş ver', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Estoy listo. Voy a tomar el pollo a la parrilla, por favor.',
          translation: 'Hazırım. Izgara tavuk alacağım, lütfen.',
          altAccepted: ['El pollo a la parrilla por favor', 'Voy a pedir el pollo a la parrilla'],
          next: 'sides' },
        { id: 'need_time', intentionTr: 'Biraz zaman iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: '¿Nos das unos minutos más, por favor?',
          translation: 'Birkaç dakika daha alabilir miyiz, lütfen?',
          altAccepted: ['Unos minutos más por favor', 'Podemos tener un poco más de tiempo'],
          next: 'back_later' },
        { id: 'recommend', intentionTr: 'Bir öneri iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: '¿Qué recomiendas esta noche?',
          translation: 'Bu akşam ne önerirsiniz?',
          altAccepted: ['Qué me recomiendas', 'Tienes alguna recomendación'],
          next: 'recommendation' },
        { id: 'allergy', intentionTr: 'Bir yemekte fıstık olup olmadığını sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: '¿La pasta lleva frutos secos? Soy alérgico.',
          translation: 'Makarnada fındık/fıstık var mı? Alerjim var.',
          altAccepted: ['Hay frutos secos en la pasta', 'La pasta tiene frutos secos soy alérgico'],
          next: 'allergy_answer' }
      ]
    },
    recommendation: {
      id: 'recommendation', speakerId: 'elena', emotion: 'happy',
      text: 'Nuestra pasta con mariscos es la favorita esta noche, y el cordero también está excelente. ¿Te traigo uno de los dos?',
      translation: 'Bu akşam deniz mahsullü makarnamız favori, kuzu da mükemmel. Bunlardan birini getireyim mi?',
      choices: [
        { id: 'take_pasta', intentionTr: 'Makarnayı seç', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'La pasta con mariscos suena genial. Voy a tomar esa.',
          translation: 'Deniz mahsullü makarna kulağa harika geliyor. Onu alacağım.',
          altAccepted: ['Me tomo la pasta con mariscos', 'La pasta suena bien me la quedo'],
          next: 'sides', relationshipEffect: 1 },
        { id: 'take_lamb', intentionTr: 'Kuzuyu seç', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Voy a probar el cordero, por favor.',
          translation: 'Kuzuyu deneyeceğim, lütfen.',
          altAccepted: ['Me tomo el cordero', 'El cordero por favor'],
          next: 'sides' }
      ]
    },
    allergy_answer: {
      id: 'allergy_answer', speakerId: 'elena', emotion: 'concerned',
      text: 'Gracias por decírmelo. La pasta no lleva frutos secos, pero lo confirmo con la cocina para estar seguros. ¿La quieres?',
      translation: 'Söylediğiniz için teşekkürler. Makarnada fındık/fıstık yok ama emin olmak için mutfağa tekrar sorayım. İster misiniz?',
      choices: [
        { id: 'yes_pasta', intentionTr: 'Evet, makarnayı iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Sí, por favor, si la cocina confirma que es seguro.',
          translation: 'Evet, lütfen, mutfak güvenli olduğunu onaylarsa.',
          altAccepted: ['Sí si es seguro', 'Por favor si la cocina lo confirma'],
          next: 'sides', relationshipEffect: 1 },
        { id: 'something_else', intentionTr: 'Güvenli başka bir şey iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Para estar seguro, ¿me pones el pollo a la parrilla mejor?',
          translation: 'Güvenli olmak için, onun yerine ızgara tavuk alabilir miyim?',
          altAccepted: ['Mejor el pollo a la parrilla para estar seguro', 'Me pones el pollo mejor'],
          next: 'sides' }
      ]
    },
    sides: {
      id: 'sides', speakerId: 'elena', emotion: 'friendly',
      text: 'Buena elección. ¿Quieres algo de beber con eso?',
      translation: 'Harika seçim. Yanında içecek bir şey ister misiniz?',
      choices: [
        { id: 'water', intentionTr: 'Su iste', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Solo una botella de agua sin gas, gracias.',
          translation: 'Sadece bir şişe sade su, teşekkürler.',
          altAccepted: ['Una botella de agua por favor', 'Solo agua sin gas gracias'],
          next: 'end_ordered' },
        { id: 'wine', intentionTr: 'Şarap önerisi iste', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: '¿Me sugieres una copa de vino que vaya bien con esto?',
          translation: 'Yanına uygun bir kadeh şarap önerebilir misiniz?',
          altAccepted: ['Qué vino va bien con esto', 'Me recomiendas un vino'],
          next: 'end_ordered', relationshipEffect: 1 }
      ]
    },
    back_later: {
      id: 'back_later', speakerId: 'elena', emotion: 'friendly',
      text: 'Claro, con calma. Ahora vuelvo. (Un minuto después) ¿Listos ya?',
      translation: 'Tabii, acele etmeyin. Hemen dönerim. (Bir dakika sonra) Şimdi hazır mısınız?',
      next: 'recommendation'
    }
  },
  endings: {
    end_ordered: { id: 'end_ordered', kind: 'success', title: 'Pedido hecho', titleTr: 'Sipariş verildi',
      text: 'Pediste tu comida y tu bebida con claridad y cortesía. ¡Que disfrutes la cena!',
      translation: 'Yemeğini ve içeceğini net ve kibar biçimde sipariş ettin. Afiyet olsun!',
      relationshipEffect: 1, coins: 10 }
  }
});

// ── Wrong order / complaint (B1) ────────────────────────────────────────────
export const wrongOrder = createScenario({
  id: 'wrong-order',
  title: 'Esto no es lo que pedí',
  titleTr: 'Bu sipariş ettiğim şey değil',
  environmentId: 'restaurant', sceneType: 'restaurant', level: 'B1',
  goal: 'Corrige un pedido equivocado con cortesía y sin dramas.',
  goalTr: 'Yanlış siparişi kibarca, sorun çıkarmadan düzelt.',
  npcIds: ['elena', 'marco'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'elena', emotion: 'happy',
      text: 'Aquí tienes — una hamburguesa de ternera. ¡Que aproveche!',
      translation: 'Buyurun — bir dana burger. Afiyet olsun!',
      choices: [
        { id: 'polite_correct', intentionTr: 'Kibarca yanlış olduğunu söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Perdona, pero creo que hay un error, yo pedí la hamburguesa vegetariana.',
          translation: 'Pardon ama sanırım bir hata var — sebzeli burger sipariş etmiştim.',
          altAccepted: ['Yo pedí la hamburguesa vegetariana no esta', 'Creo que esto está mal pedí la vegetariana'],
          next: 'apology' },
        { id: 'direct_correct', intentionTr: 'Doğrudan yanlış olduğunu söyle', tone: 'direct', difficulty: 'medium', xp: 14,
          sentence: 'Esto no es lo que pedí. Yo pedí la hamburguesa vegetariana.',
          translation: 'Bu sipariş ettiğim şey değil. Sebzeli burger istemiştim.',
          altAccepted: ['Este pedido está mal yo quería la vegetariana', 'Yo no pedí esto pedí la vegetariana'],
          next: 'apology' }
      ]
    },
    apology: {
      id: 'apology', speakerId: 'elena', emotion: 'apologetic',
      text: '¡Ay no, lo siento muchísimo! Es culpa mía. Te traigo la vegetariana ahora mismo. ¿Te traigo algo mientras esperas?',
      translation: 'Ah hayır, çok özür dilerim! Benim hatam. Sebzeli burgeri hemen getireceğim. Beklerken size bir şey getirebilir miyim?',
      choices: [
        { id: 'no_worries', intentionTr: 'Sorun olmadığını söyle', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'No pasa nada, son cosas que ocurren. Solo un poco de agua, gracias.',
          translation: 'Sorun değil, olur böyle şeyler. Sadece biraz su, teşekkürler.',
          altAccepted: ['Está bien solo agua gracias', 'No hay problema un agua estaría bien'],
          next: 'end_gracious', relationshipEffect: 2 },
        { id: 'ask_speed', intentionTr: 'Acele olduğunu söyle', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'No pasa nada, pero ¿podría ser rápido? Tengo un poco de prisa.',
          translation: 'Sorun değil ama çabuk olabilir mi? Biraz acelem var.',
          altAccepted: ['Podrías darte prisa tengo prisa', 'Puede ser rápido tengo prisa'],
          next: 'manager' }
      ]
    },
    manager: {
      id: 'manager', speakerId: 'marco', emotion: 'apologetic',
      text: 'Soy el gerente — me contaron de la confusión. Tu pedido correcto viene con prioridad y va por cuenta de la casa. De nuevo, mis disculpas.',
      translation: 'Ben müdürüm — bir karışıklık olduğunu duydum. Doğru siparişiniz hızlandırılıyor ve ikramımız. Tekrar özür dilerim.',
      choices: [
        { id: 'thank_manager', intentionTr: 'Teşekkür et ve nazik ol', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Es muy amable de tu parte. Gracias por resolverlo tan rápido.',
          translation: 'Çok naziksiniz. Bu kadar hızlı çözdüğünüz için teşekkürler.',
          altAccepted: ['Gracias por resolverlo tan rápido', 'Muy amable gracias por arreglarlo rápido'],
          next: 'end_comped', relationshipEffect: 2 },
        { id: 'decline_free', intentionTr: 'Ücretsiz olmasına gerek yok de', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: 'Gracias, pero de verdad no hace falta. Pago encantado.',
          translation: 'Teşekkürler ama gerçekten gerek yok. Ödemekten memnuniyet duyarım.',
          altAccepted: ['No hace falta pago encantado', 'No es necesario yo lo pago'],
          next: 'end_generous', relationshipEffect: 2 }
      ]
    }
  },
  endings: {
    end_gracious: { id: 'end_gracious', kind: 'relationship', title: 'Resuelto con elegancia', titleTr: 'Nazikçe halledildi',
      text: 'Corregiste el pedido con amabilidad y tranquilizaste a Elena. Un momento pequeño, manejado como un nativo.',
      translation: 'Siparişi nazikçe düzelttin ve Elena’yı rahatlattın. Küçük bir an, ana dili gibi halledildi.',
      relationshipEffect: 1, coins: 12 },
    end_comped: { id: 'end_comped', kind: 'problem-solved', title: 'Comida gratis, sin drama', titleTr: 'Ücretsiz yemek, sorunsuz',
      text: 'Dijiste con claridad que tenías prisa, te mantuviste cortés y el gerente invitó la comida. Bien negociado.',
      translation: 'Acelen olduğunu net söyledin, kibar kaldın ve müdür yemeğini ikram etti. İyi bir pazarlık.',
      relationshipEffect: 1, coins: 16 },
    end_generous: { id: 'end_generous', kind: 'relationship', title: 'Un cliente generoso', titleTr: 'Cömert bir misafir',
      text: 'Rechazaste la comida gratis con elegancia. El gerente insistió igualmente — y ahora todo el restaurante te adora.',
      translation: 'Ücretsiz yemeği nezaketle geri çevirdin. Müdür yine de ısrar etti — ve tüm restoranı kendine dost ettin.',
      relationshipEffect: 2, coins: 14 }
  }
});
