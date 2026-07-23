import { createScenario } from '../scenarioSchema.js?v=6';

// ── Supermarket: finding items (A2) ─────────────────────────────────────────
export const supermarketHelp = createScenario({
  id: 'supermarket-help',
  title: 'Encontrar lo que necesitas',
  titleTr: 'Aradığını bulmak',
  environmentId: 'supermarket', sceneType: 'retail', level: 'A2',
  goal: 'Pide a un empleado que te ayude a encontrar productos.',
  goalTr: 'Ürünleri bulmak için görevliden yardım iste.',
  npcIds: ['tom'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'tom', emotion: 'friendly',
      text: 'Hola, ¿está encontrando todo bien?',
      translation: 'Merhaba, her şeyi bulabiliyor musunuz?',
      choices: [
        { id: 'ask_milk', intentionTr: 'Sütün nerede olduğunu sor', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Pues no. ¿Me puede decir dónde está la leche?',
          translation: 'Aslında hayır. Sütün nerede olduğunu söyler misiniz?',
          altAccepted: ['Dónde está la leche', 'Me puede decir dónde queda la leche'],
          next: 'milk_dir' },
        { id: 'ask_glutenfree', intentionTr: 'Glutensiz ürün olup olmadığını sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: '¿Tienen pan sin gluten? No lo encuentro.',
          translation: 'Glutensiz ekmeğiniz var mı? Bulamıyorum.',
          altAccepted: ['Venden pan sin gluten', 'Dónde está el pan sin gluten'],
          next: 'gf_dir' }
      ]
    },
    milk_dir: {
      id: 'milk_dir', speakerId: 'tom', emotion: 'helpful',
      text: 'Claro — está en el pasillo cuatro, al fondo, en las neveras. ¿Algo más?',
      translation: 'Tabii — dördüncü koridorda, arkada, buzdolaplarında. Başka bir şey?',
      choices: [
        { id: 'also_eggs', intentionTr: 'Yumurta da sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Sí, ¿dónde puedo encontrar también los huevos?',
          translation: 'Evet, yumurtaları da nerede bulabilirim?',
          altAccepted: ['Dónde están los huevos', 'Dónde encuentro los huevos también'],
          next: 'eggs_dir', relationshipEffect: 1 },
        { id: 'thanks', intentionTr: 'Teşekkür et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: 'Eso es todo, ¡gracias por su ayuda!',
          translation: 'Hepsi bu, yardımın için teşekkürler!',
          altAccepted: ['Eso es todo gracias', 'Gracias eso es todo'],
          next: 'end_found' }
      ]
    },
    gf_dir: {
      id: 'gf_dir', speakerId: 'tom', emotion: 'friendly',
      text: '¡Sí! Está en la sección de alimentación saludable, pasillo siete. Hay buena variedad ahí.',
      translation: 'Var! Sağlıklı gıda bölümünde, yedinci koridorda. Orada güzel bir seçenek var.',
      choices: [
        { id: 'thank_gf', intentionTr: 'Teşekkür et', tone: 'friendly', difficulty: 'easy', xp: 10,
          sentence: '¡Perfecto, muchas gracias!',
          translation: 'Mükemmel, çok teşekkürler!',
          altAccepted: ['Muchas gracias', 'Genial gracias'],
          next: 'end_found', relationshipEffect: 1 },
        { id: 'ask_more', intentionTr: 'Başka glutensiz ürün var mı sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Genial. ¿También tienen pasta sin gluten en esa sección?',
          translation: 'Harika. O bölümde glutensiz makarna da var mı?',
          altAccepted: ['Hay pasta sin gluten ahí también', 'También tienen pasta sin gluten'],
          next: 'eggs_dir' }
      ]
    },
    eggs_dir: {
      id: 'eggs_dir', speakerId: 'tom', emotion: 'happy',
      text: 'Justo al lado de la leche, mismo pasillo. Ya lo tiene todo — ¡que tenga buen día!',
      translation: 'Tam sütün yanında, aynı koridorda. Hepsi tamam — iyi günler!',
      next: 'end_found'
    }
  },
  endings: {
    end_found: { id: 'end_found', kind: 'success', title: 'Todo encontrado', titleTr: 'Her şey bulundu',
      text: 'Pediste ayuda con claridad y encontraste lo que necesitabas. Simple y amable.',
      translation: 'Net biçimde yardım istedin ve aradığını buldun. Basit ve dostça.',
      coins: 10 }
  }
});

// ── Clothing store: returning an item (B1) ──────────────────────────────────
export const clothingReturn = createScenario({
  id: 'clothing-return',
  title: 'Devolver una chaqueta',
  titleTr: 'Bir ceketi iade etmek',
  environmentId: 'clothing', sceneType: 'retail', level: 'B1',
  goal: 'Devuelve algo que no te queda y consigue un reembolso o un cambio.',
  goalTr: 'Olmayan bir ürünü iade et, para iadesi ya da değişim ayarla.',
  npcIds: ['zoe'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'zoe', emotion: 'friendly',
      text: '¡Hola! ¿En qué puedo ayudarle hoy?',
      translation: 'Merhaba! Bugün nasıl yardımcı olabilirim?',
      choices: [
        { id: 'return_size', intentionTr: 'Beden olmadığı için iade etmek istediğini söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Hola, quería devolver esta chaqueta. No me queda bien.',
          translation: 'Merhaba, bu ceketi iade etmek istiyorum. Bana olmadı.',
          altAccepted: ['Quiero devolver esta chaqueta no me queda', 'Quería devolver esto es la talla equivocada'],
          next: 'receipt' },
        { id: 'return_faulty', intentionTr: 'Kusurlu olduğu için iade etmek istediğini söyle', tone: 'direct', difficulty: 'hard', xp: 18,
          sentence: 'Necesito devolver esta chaqueta — la cremallera está rota.',
          translation: 'Bu ceketi iade etmem gerekiyor — fermuarı bozuk.',
          altAccepted: ['La cremallera está rota quiero devolverla', 'Esta chaqueta tiene la cremallera rota'],
          next: 'faulty' }
      ]
    },
    receipt: {
      id: 'receipt', speakerId: 'zoe', emotion: 'neutral',
      text: 'Ningún problema. ¿Tiene el ticket con usted?',
      translation: 'Hiç sorun değil. Fişiniz yanınızda mı?',
      choices: [
        { id: 'yes_receipt', intentionTr: 'Fişin olduğunu söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Sí, aquí está. La compré el lunes.',
          translation: 'Evet, buyurun. Pazartesi almıştım.',
          altAccepted: ['Aquí está el ticket la compré el lunes', 'Sí lo tengo aquí'],
          next: 'refund_or_exchange' },
        { id: 'no_receipt', intentionTr: 'Fişin olmadığını söyle', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Me temo que perdí el ticket, pero pagué con tarjeta.',
          translation: 'Korkarım fişi kaybettim ama kartla ödemiştim.',
          altAccepted: ['Perdí el ticket pero pagué con tarjeta', 'Sin ticket pero tengo el pago con tarjeta'],
          next: 'card_lookup' }
      ]
    },
    faulty: {
      id: 'faulty', speakerId: 'zoe', emotion: 'apologetic',
      text: '¡Ay, lo siento! Un artículo defectuoso — tiene derecho al reembolso completo. ¿El ticket o la tarjeta con la que pagó?',
      translation: 'Ah, çok üzgünüm! Kusurlu ürün — tam para iadesine hakkınız var. Fiş mi yoksa ödediğiniz kart mı var?',
      choices: [
        { id: 'card_faulty', intentionTr: 'Kartla ödediğini söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Pagué con tarjeta — aquí está.',
          translation: 'Kartla ödemiştim — işte burada.',
          altAccepted: ['Con tarjeta aquí está', 'Pagué con tarjeta tenga'],
          next: 'refund_done', relationshipEffect: 1 },
        { id: 'receipt_faulty', intentionTr: 'Fişin olduğunu söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Tengo el ticket aquí mismo.',
          translation: 'Fiş tam burada.',
          altAccepted: ['Aquí está el ticket', 'Tengo el ticket conmigo'],
          next: 'refund_done' }
      ]
    },
    card_lookup: {
      id: 'card_lookup', speakerId: 'zoe', emotion: 'friendly',
      text: 'Está bien — puedo buscar la compra con su tarjeta. ¿Prefiere un reembolso o un cambio?',
      translation: 'Sorun değil — alışverişi kartınızla bulabilirim. Para iadesi mi yoksa değişim mi istersiniz?',
      next: 'refund_or_exchange'
    },
    refund_or_exchange: {
      id: 'refund_or_exchange', speakerId: 'zoe', emotion: 'friendly',
      text: 'Perfecto. Entonces, ¿prefiere el reembolso o cambiarla por otra talla?',
      translation: 'Harika. Peki, para iadesi mi tercih edersiniz yoksa farklı bir bedenle değişim mi?',
      choices: [
        { id: 'exchange', intentionTr: 'Farklı bedenle değiştir', tone: 'friendly', difficulty: 'medium', xp: 14,
          sentence: 'Quisiera cambiarla por una talla más grande, por favor.',
          translation: 'Daha büyük bir bedenle değiştirmek istiyorum, lütfen.',
          altAccepted: ['Puedo cambiarla por una talla más grande', 'Quiero una talla más grande'],
          next: 'end_exchange', relationshipEffect: 1 },
        { id: 'refund', intentionTr: 'Para iadesi iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Mejor el reembolso, gracias.',
          translation: 'Para iadesi daha iyi olur, teşekkürler.',
          altAccepted: ['Prefiero el reembolso', 'Solo el reembolso por favor'],
          next: 'refund_done' }
      ]
    },
    refund_done: {
      id: 'refund_done', speakerId: 'zoe', emotion: 'happy',
      text: 'Listo — el reembolso estará en su tarjeta en unos días. ¡Gracias por su paciencia!',
      translation: 'Tamamdır — para birkaç gün içinde kartınıza geri yansır. Sabrınız için teşekkürler!',
      next: 'end_refund'
    }
  },
  endings: {
    end_exchange: { id: 'end_exchange', kind: 'problem-solved', title: 'Cambiada por la talla correcta', titleTr: 'Doğru bedenle değişti',
      text: 'Explicaste el problema y saliste con una chaqueta que sí te queda. Bien hecho.',
      translation: 'Sorunu anlattın ve sana gerçekten olan bir ceketle çıktın. Güzel iş.',
      relationshipEffect: 1, coins: 12 },
    end_refund: { id: 'end_refund', kind: 'success', title: 'Reembolso resuelto', titleTr: 'İade halledildi',
      text: 'Gestionaste la devolución con calma y recuperaste tu dinero. Claro y cortés de principio a fin.',
      translation: 'İadeyi sakince hallettin ve paranı geri aldın. Baştan sona net ve kibar.',
      coins: 10 }
  }
});
