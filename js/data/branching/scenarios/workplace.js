import { createScenario } from '../scenarioSchema.js?v=6';

// ── Job interview (B2) ──────────────────────────────────────────────────────
export const jobInterview = createScenario({
  id: 'job-interview',
  title: 'La entrevista de trabajo',
  titleTr: 'İş görüşmesi',
  environmentId: 'workplace', sceneType: 'formal-office', level: 'B2',
  goal: 'Causa una buena impresión y maneja las preguntas difíciles.',
  goalTr: 'Güçlü bir izlenim bırak ve zor soruları yönet.',
  npcIds: ['carter'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'carter', emotion: 'formal',
      text: 'Gracias por venir. Para empezar, ¿me puede contar un poco sobre usted?',
      translation: 'Geldiğiniz için teşekkürler. Başlangıç olarak, kendinizden biraz bahseder misiniz?',
      choices: [
        { id: 'professional', intentionTr: 'Deneyimine odaklanarak profesyonel yanıt ver', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Por supuesto. Tengo tres años de experiencia en marketing y tengo ganas de asumir más responsabilidad.',
          translation: 'Tabii. Pazarlamada üç yıllık deneyimim var ve daha fazla sorumluluk almaya istekliyim.',
          altAccepted: ['Tengo tres años en marketing y quiero más responsabilidad', 'Llevo tres años en marketing y estoy listo para más responsabilidad'],
          next: 'strengths', relationshipEffect: 1 },
        { id: 'personal', intentionTr: 'Daha kişisel ve tutkulu bir yanıt ver', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: 'Claro. Soy una persona curiosa a la que le encanta resolver problemas y aprender cosas nuevas.',
          translation: 'Elbette. Sorun çözmeyi ve yeni beceriler öğrenmeyi seven meraklı bir insanım.',
          altAccepted: ['Soy curioso y me encanta resolver problemas', 'Me encanta aprender y resolver problemas'],
          next: 'strengths' }
      ]
    },
    strengths: {
      id: 'strengths', speakerId: 'carter', emotion: 'curious',
      text: 'Bien. ¿Cuál diría que es su mayor fortaleza, y me puede dar un ejemplo?',
      translation: 'Güzel. En büyük gücünüz nedir ve bir örnek verebilir misiniz?',
      choices: [
        { id: 'teamwork', intentionTr: 'Takım çalışması gücünü örnekle', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Trabajo bien bajo presión. El año pasado dirigí un proyecto que se entregó dos semanas antes.',
          translation: 'Baskı altında iyi çalışırım. Geçen yıl iki hafta erken tamamlanan bir projeyi yönettim.',
          altAccepted: ['Manejo bien la presión dirigí un proyecto que terminó antes', 'Soy bueno bajo presión mi último proyecto salió antes'],
          next: 'weakness' },
        { id: 'communication', intentionTr: 'İletişim gücünü örnekle', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'La comunicación. Suelo explicar ideas técnicas para que cualquiera pueda entenderlas.',
          translation: 'İletişim. Teknik fikirleri herkesin anlayabileceği şekilde sık sık açıklarım.',
          altAccepted: ['Comunico bien explico claro lo técnico', 'La comunicación hago simples las ideas complejas'],
          next: 'weakness' }
      ]
    },
    weakness: {
      id: 'weakness', speakerId: 'carter', emotion: 'thinking',
      text: 'Y, sinceramente, ¿qué debilidad está trabajando en mejorar?',
      translation: 'Peki, dürüstçe, üzerinde çalıştığınız bir zayıflık nedir?',
      choices: [
        { id: 'honest_weakness', intentionTr: 'Dürüst ama olgun bir zayıflık ver', tone: 'formal', difficulty: 'hard', xp: 20,
          sentence: 'Antes asumía demasiado yo solo, pero estoy aprendiendo a delegar más.',
          translation: 'Eskiden her şeyi kendim üstlenirdim ama daha fazla yetki devretmeyi öğreniyorum.',
          altAccepted: ['Asumía demasiado ahora aprendo a delegar', 'Tiendo a hacerlo todo yo pero estoy mejorando en delegar'],
          next: 'questions', relationshipEffect: 1 },
        { id: 'cliche', intentionTr: 'Klişe “çok çalışıyorum” yanıtı ver', tone: 'direct', difficulty: 'medium', xp: 12,
          sentence: 'Sinceramente, creo que a veces simplemente trabajo demasiado.',
          translation: 'Açıkçası, sanırım bazen sadece çok fazla çalışıyorum.',
          altAccepted: ['A veces trabajo demasiado', 'Mi debilidad es que trabajo demasiado'],
          next: 'questions_flat' }
      ]
    },
    questions: {
      id: 'questions', speakerId: 'carter', emotion: 'happy',
      text: 'Es una respuesta reflexiva. ¿Tiene alguna pregunta para mí?',
      translation: 'Bu düşünceli bir cevap. Bana sormak istediğiniz bir şey var mı?',
      choices: [
        { id: 'ask_team', intentionTr: 'Ekip hakkında bir soru sor', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Sí — ¿cómo se ve el éxito en este puesto durante los primeros seis meses?',
          translation: 'Evet — bu rolde ilk altı ayda başarı neye benzer?',
          altAccepted: ['Cómo se ve el éxito en los primeros seis meses', 'Cómo medirían el éxito en este puesto al principio'],
          next: 'end_strong', relationshipEffect: 2 },
        { id: 'no_questions', intentionTr: 'Sorunun olmadığını söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'No, creo que lo ha cubierto todo. Gracias.',
          translation: 'Hayır, sanırım her şeyi anlattınız. Teşekkürler.',
          altAccepted: ['No lo cubrió todo gracias', 'No tengo preguntas gracias'],
          next: 'end_solid' }
      ]
    },
    questions_flat: {
      id: 'questions_flat', speakerId: 'carter', emotion: 'neutral',
      text: 'Mmm, es una respuesta común. Bueno — ¿tiene alguna pregunta para mí?',
      translation: 'Hmm, bu yaygın bir cevap. Peki — bana sormak istediğiniz bir şey var mı?',
      choices: [
        { id: 'recover', intentionTr: 'Güçlü bir soruyla toparla', tone: 'formal', difficulty: 'hard', xp: 18,
          sentence: 'Sí — ¿cómo describiría al equipo con el que trabajaría?',
          translation: 'Evet — birlikte çalışacağım ekibi nasıl tanımlarsınız?',
          altAccepted: ['Cómo describiría al equipo', 'Cómo es el equipo al que me uniría'],
          next: 'end_solid', relationshipEffect: 1 },
        { id: 'no_q2', intentionTr: 'Soru sorma', tone: 'polite', difficulty: 'easy', xp: 8,
          sentence: 'No, nada por ahora. Gracias por su tiempo.',
          translation: 'Hayır, şimdilik yok. Zaman ayırdığınız için teşekkürler.',
          altAccepted: ['Sin preguntas gracias por su tiempo', 'Nada por ahora gracias'],
          next: 'end_neutral' }
      ]
    }
  },
  endings: {
    end_strong: { id: 'end_strong', kind: 'excellent', title: 'Una entrevista sobresaliente', titleTr: 'Öne çıkan bir görüşme',
      text: 'Respuestas estructuradas, una debilidad honesta y una pregunta final aguda. La señora Carter quedó impresionada.',
      translation: 'Düzenli cevaplar, dürüst bir zayıflık ve keskin bir kapanış sorusu. Ms. Carter etkilendi.',
      relationshipEffect: 2, coins: 20 },
    end_solid: { id: 'end_solid', kind: 'success', title: 'Una entrevista sólida', titleTr: 'Sağlam bir görüşme',
      text: 'Manejaste bien las preguntas y pareciste capaz. Una buena actuación.',
      translation: 'Soruları iyi yönettin ve yetenekli göründün. Güçlü bir performans.',
      relationshipEffect: 1, coins: 12 },
    end_neutral: { id: 'end_neutral', kind: 'neutral', title: 'Una entrevista aceptable', titleTr: 'İyi bir görüşme',
      text: 'Saliste del paso, pero algunas respuestas fueron algo tímidas. La próxima vez haz una pregunta final fuerte — ¡vuelve a jugar e inténtalo!',
      translation: 'Atlattın ama birkaç cevap biraz temkinliydi. Bir dahaki sefere güçlü bir kapanış sorusu sor — tekrar oyna ve dene!',
      coins: 6 }
  }
});

// ── Workplace misunderstanding (B1) ─────────────────────────────────────────
export const workplaceMisunderstanding = createScenario({
  id: 'workplace-misunderstanding',
  title: 'Aclarar un malentendido',
  titleTr: 'Bir yanlış anlaşılmayı gidermek',
  environmentId: 'workplace', sceneType: 'formal-office', level: 'B1',
  goal: 'Arregla una confusión con un compañero sin empeorarla.',
  goalTr: 'Bir iş arkadaşıyla yaşanan karışıklığı daha kötüye götürmeden çöz.',
  npcIds: ['raj'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'raj', emotion: 'concerned',
      text: 'Oye, pensé que tú le mandabas el informe al cliente ayer. Acaban de escribir preguntando dónde está.',
      translation: 'Selam, raporu dün müşteriye göndereceğini sanıyordum. Az önce nerede olduğunu sorarak e-posta attılar.',
      choices: [
        { id: 'clarify', intentionTr: 'Kibarca yanlış anlaşıldığını açıkla', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Uy, creo que hubo una confusión — yo entendí que lo enviabas tú.',
          translation: 'Ah, sanırım bir karışıklık olmuş — onu senin göndereceğini anlamıştım.',
          altAccepted: ['Pensé que lo enviabas tú', 'Hay un malentendido entendí que tú lo mandabas'],
          next: 'check_email' },
        { id: 'defensive', intentionTr: 'Savunmaya geç', tone: 'direct', difficulty: 'medium', xp: 12,
          sentence: 'Ese no era mi trabajo. Nadie me dijo que lo enviara.',
          translation: 'Bu benim işim değildi. Kimse bana göndermemi söylemedi.',
          altAccepted: ['No era mi tarea nadie me lo dijo', 'No es mi trabajo nadie me lo pidió'],
          next: 'tension' }
      ]
    },
    check_email: {
      id: 'check_email', speakerId: 'raj', emotion: 'thinking',
      text: '¿En serio? Déjame revisar el hilo… Ah, tienes razón, el mensaje no era claro. Culpa mía. ¿Qué hacemos ahora?',
      translation: 'Gerçekten mi? Yazışmaya bakayım… Ah, haklısın, mesaj net değildi. Benim hatam. Şimdi ne yapmalıyız?',
      choices: [
        { id: 'take_action', intentionTr: 'Hemen çözüm öner', tone: 'friendly', difficulty: 'medium', xp: 16,
          sentence: 'No pasa nada. Lo envío ahora mismo y me disculpo con el cliente por el retraso.',
          translation: 'Sorun değil. Hemen gönderip gecikme için müşteriden özür dilerim.',
          altAccepted: ['Lo envío ahora y me disculpo por el retraso', 'Lo mando ya y le pido disculpas al cliente'],
          next: 'end_teamwork', relationshipEffect: 2 },
        { id: 'share_blame', intentionTr: 'Birlikte hallederiz de', tone: 'friendly', difficulty: 'hard', xp: 18,
          sentence: 'Son cosas que pasan. Respondamos los dos para que el cliente sepa que estamos en ello.',
          translation: 'Olur böyle şeyler. İkimiz de yanıt verelim ki müşteri ilgilendiğimizi bilsin.',
          altAccepted: ['Respondamos los dos al cliente', 'Pasa respondamos juntos para que lo sepan'],
          next: 'end_teamwork', relationshipEffect: 2 }
      ]
    },
    tension: {
      id: 'tension', speakerId: 'raj', emotion: 'concerned',
      text: 'Vale, no hace falta ponerse así. No te culpo — solo quiero arreglarlo. ¿Lo resolvemos juntos?',
      translation: 'Tamam, ters çıkmana gerek yok. Seni suçlamıyorum — sadece düzeltmek istiyorum. Bunu birlikte çözebilir miyiz?',
      choices: [
        { id: 'apologize', intentionTr: 'Ters çıktığın için özür dile', tone: 'polite', difficulty: 'medium', xp: 16,
          sentence: 'Tienes razón, perdona — estaba algo estresado. Sí, arreglémoslo juntos.',
          translation: 'Haklısın, özür dilerim — biraz stresliydim. Evet, birlikte çözelim.',
          altAccepted: ['Perdona estaba estresado arreglémoslo juntos', 'Tienes razón lo siento vamos a resolverlo'],
          next: 'end_recovered', relationshipEffect: 1 },
        { id: 'stay_cold', intentionTr: 'Soğuk kal ama işi yap', tone: 'direct', difficulty: 'easy', xp: 10,
          sentence: 'Está bien. Envío el informe ahora.',
          translation: 'Tamam. Raporu şimdi göndereyim.',
          altAccepted: ['Vale lo envío ahora', 'Bien lo mando ya'],
          next: 'end_cold' }
      ]
    }
  },
  endings: {
    end_teamwork: { id: 'end_teamwork', kind: 'problem-solved', title: 'Resuelto en equipo', titleTr: 'Ekip olarak çözüldü',
      text: 'Mantuviste la calma, aclaraste la confusión y ofreciste una solución. Raj está encantado de trabajar contigo.',
      translation: 'Sakin kaldın, karışıklığı giderdin ve bir çözüm önerdin. Raj seninle çalışmaktan memnun.',
      relationshipEffect: 1, coins: 16 },
    end_recovered: { id: 'end_recovered', kind: 'relationship', title: 'Bien recuperado', titleTr: 'İyi toparlandı',
      text: 'Primero reaccionaste a la defensiva, pero te disculpaste y le diste la vuelta. Saber reparar un momento es una habilidad de verdad.',
      translation: 'Önce savunmaya geçtin ama özür dileyip durumu düzelttin. Bir anı onarmayı bilmek gerçek bir beceri.',
      relationshipEffect: 1, coins: 12 },
    end_cold: { id: 'end_cold', kind: 'neutral', title: 'El trabajo se hizo', titleTr: 'İş halledildi',
      text: 'El informe salió, pero el ambiente quedó frío. La próxima vez intenta suavizar las cosas — vuelve a jugar y nota la diferencia.',
      translation: 'Rapor gönderildi ama hava soğuk kaldı. Bir dahaki sefere ortamı yumuşatmayı dene — tekrar oyna ve farkı gör.',
      coins: 5 }
  }
});
