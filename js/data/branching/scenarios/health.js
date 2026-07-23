import { createScenario } from '../scenarioSchema.js?v=6';

// NOTE: These are fictional language-learning conversations. They never give
// real medical advice or diagnoses — the NPC always defers to real care.

// ── Hospital visit (A2) ─────────────────────────────────────────────────────
export const hospitalVisit = createScenario({
  id: 'hospital-visit',
  title: 'Una visita al médico',
  titleTr: 'Doktora bir ziyaret',
  environmentId: 'hospital', sceneType: 'hospital', level: 'A2',
  goal: 'Describe cómo te sientes y entiende los próximos pasos.',
  goalTr: 'Nasıl hissettiğini anlat ve sonraki adımları anla.',
  npcIds: ['bennett'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'bennett', emotion: 'friendly',
      text: 'Hola, pase y siéntese. ¿Qué le trae por aquí hoy?',
      translation: 'Merhaba, içeri gelin ve oturun. Bugün sorun nedir?',
      choices: [
        { id: 'headache', intentionTr: 'Baş ağrın olduğunu anlat', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Llevo dos días con un fuerte dolor de cabeza.',
          translation: 'İki gündür şiddetli bir baş ağrım var.',
          altAccepted: ['Tengo dolor de cabeza desde hace dos días', 'Me duele la cabeza desde hace dos días'],
          next: 'when_started' },
        { id: 'stomach', intentionTr: 'Mide ağrın olduğunu anlat', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Me duele el estómago desde ayer.',
          translation: 'Dünden beri midem ağrıyor.',
          altAccepted: ['Tengo dolor de estómago desde ayer', 'El estómago me duele desde ayer'],
          next: 'when_started' },
        { id: 'tired', intentionTr: 'Çok yorgun hissettiğini anlat', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Me siento muy cansado y no puedo dormir bien.',
          translation: 'Çok yorgun hissediyorum ve iyi uyuyamıyorum.',
          altAccepted: ['Estoy muy cansado y duermo mal', 'Siempre estoy cansado y duermo mal'],
          next: 'lifestyle' }
      ]
    },
    when_started: {
      id: 'when_started', speakerId: 'bennett', emotion: 'thinking',
      text: 'Entiendo. ¿Y ha tomado algo, o es la primera vez que lo trata?',
      translation: 'Anlıyorum. Bunun için bir şey aldınız mı, yoksa ilk kez mi tedavi ediyorsunuz?',
      choices: [
        { id: 'took_nothing', intentionTr: 'Hiçbir şey almadığını söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'No, todavía no he tomado nada.',
          translation: 'Hayır, henüz hiçbir şey almadım.',
          altAccepted: ['No he tomado nada', 'No nada todavía'],
          next: 'advice' },
        { id: 'took_painkiller', intentionTr: 'Ağrı kesici aldığını ama işe yaramadığını söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Tomé un analgésico, pero la verdad no me ayudó mucho.',
          translation: 'Bir ağrı kesici aldım ama pek yardımcı olmadı.',
          altAccepted: ['Tomé un analgésico pero no ayudó', 'Un analgésico no funcionó'],
          next: 'advice' }
      ]
    },
    lifestyle: {
      id: 'lifestyle', speakerId: 'bennett', emotion: 'curious',
      text: 'Gracias por contármelo. ¿Cuánta agua bebe, y cómo anda de estrés últimamente?',
      translation: 'Söylediğiniz için teşekkürler. Ne kadar su içiyorsunuz ve son zamanlarda stres seviyeniz nasıl?',
      choices: [
        { id: 'stressed', intentionTr: 'Çok stresli olduğunu söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'He tenido mucho estrés en el trabajo últimamente.',
          translation: 'Son zamanlarda işte çok stres altındaydım.',
          altAccepted: ['Tengo mucho estrés en el trabajo', 'El trabajo ha sido muy estresante últimamente'],
          next: 'advice' },
        { id: 'fine_otherwise', intentionTr: 'Bunun dışında iyi olduğunu söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Por lo demás me siento bien, solo cansado todo el tiempo.',
          translation: 'Bunun dışında iyiyim, sadece sürekli yorgunum.',
          altAccepted: ['Por lo demás estoy bien', 'Aparte de eso bien solo cansado'],
          next: 'advice' }
      ]
    },
    advice: {
      id: 'advice', speakerId: 'bennett', emotion: 'friendly',
      text: 'Nada de esto me preocupa seriamente. Le anotaré unos pasos sencillos. ¿Tiene alguna pregunta antes de irse?',
      translation: 'Burada beni ciddi anlamda endişelendiren bir şey yok. Size basit adımlar içeren bir not yazacağım. Gitmeden önce sorunuz var mı?',
      choices: [
        { id: 'ask_followup', intentionTr: 'Ne zaman geri dönmen gerektiğini sor', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: '¿Cuándo debería volver si no mejora?',
          translation: 'Eğer düzelmezse ne zaman geri gelmeliyim?',
          altAccepted: ['Cuándo vuelvo si sigue igual', 'Debo volver si no mejora'],
          next: 'followup_answer', relationshipEffect: 1 },
        { id: 'thanks', intentionTr: 'Teşekkür et ve ayrıl', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'No, está claro. Muchas gracias, doctora.',
          translation: 'Hayır, açık. Çok teşekkür ederim, doktor.',
          altAccepted: ['Está claro gracias doctora', 'Sin preguntas muchas gracias'],
          next: 'end_clear' }
      ]
    },
    followup_answer: {
      id: 'followup_answer', speakerId: 'bennett', emotion: 'happy',
      text: 'Buena pregunta. Si no hay mejora en tres días, pida otra cita. Cuídese mucho.',
      translation: 'İyi soru. Üç günde iyileşme olmazsa yeni bir randevu alın. Kendinize iyi bakın.',
      next: 'end_thorough'
    }
  },
  endings: {
    end_clear: { id: 'end_clear', kind: 'success', title: 'Explicado con claridad', titleTr: 'Açıkça anlatıldı',
      text: 'Describiste tus síntomas con claridad y entendiste el consejo. Una visita tranquila y exitosa.',
      translation: 'Belirtilerini net anlattın ve tavsiyeyi anladın. Sakin, başarılı bir ziyaret.',
      coins: 10 },
    end_thorough: { id: 'end_thorough', kind: 'excellent', title: 'Una visita completa', titleTr: 'Kapsamlı bir ziyaret',
      text: 'No solo te explicaste, también hiciste una pregunta de seguimiento inteligente. Así se maneja una visita médica en español.',
      translation: 'Sadece kendini anlatmadın, akıllıca bir takip sorusu da sordun. Bir doktor ziyaretini İspanyolcada tam da böyle halledersin.',
      relationshipEffect: 1, coins: 14 }
  }
});

// ── Pharmacy visit (A2) ─────────────────────────────────────────────────────
export const pharmacyVisit = createScenario({
  id: 'pharmacy-visit',
  title: 'En la farmacia',
  titleTr: 'Eczanede',
  environmentId: 'pharmacy', sceneType: 'retail', level: 'A2',
  goal: 'Consigue algo para el resfriado y aprende cómo tomarlo.',
  goalTr: 'Soğuk algınlığı için bir şey al ve nasıl kullanacağını öğren.',
  npcIds: ['fatima'],
  startNodeId: 'start',
  nodes: {
    start: {
      id: 'start', speakerId: 'fatima', emotion: 'friendly',
      text: '¡Hola! ¿En qué puedo ayudarle hoy?',
      translation: 'Merhaba! Bugün size nasıl yardımcı olabilirim?',
      choices: [
        { id: 'cold', intentionTr: 'Soğuk algınlığı için bir şey iste', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Hola, estoy resfriado. ¿Me podría recomendar algo?',
          translation: 'Merhaba, üşüttüm. Bir şey önerebilir misiniz?',
          altAccepted: ['Estoy resfriado me recomienda algo', 'Tiene algo para el resfriado'],
          next: 'symptoms' },
        { id: 'prescription', intentionTr: 'Reçeteni vermek istediğini söyle', tone: 'polite', difficulty: 'medium', xp: 14,
          sentence: 'Tengo una receta que me gustaría preparar, por favor.',
          translation: 'Doldurtmak istediğim bir reçetem var, lütfen.',
          altAccepted: ['Quisiera preparar esta receta', 'Me puede preparar esta receta'],
          next: 'prescription_node' }
      ]
    },
    symptoms: {
      id: 'symptoms', speakerId: 'fatima', emotion: 'curious',
      text: 'Vaya, lo siento. ¿Tiene sobre todo dolor de garganta, tos, o la nariz tapada?',
      translation: 'Duyduğuma üzüldüm. Daha çok boğaz ağrınız mı, öksürüğünüz mü yoksa burun tıkanıklığınız mı var?',
      choices: [
        { id: 'throat', intentionTr: 'Boğazının ağrıdığını söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Sobre todo dolor de garganta y un poco de tos.',
          translation: 'Çoğunlukla boğaz ağrısı ve biraz öksürük.',
          altAccepted: ['Dolor de garganta y algo de tos', 'Más que nada la garganta y toso un poco'],
          next: 'recommend' },
        { id: 'nose', intentionTr: 'Burnunun tıkalı olduğunu söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Tengo la nariz muy tapada y no paro de estornudar.',
          translation: 'Burnum çok tıkalı ve sürekli hapşırıyorum.',
          altAccepted: ['La nariz tapada y estornudo mucho', 'Nariz muy tapada y muchos estornudos'],
          next: 'recommend' }
      ]
    },
    recommend: {
      id: 'recommend', speakerId: 'fatima', emotion: 'friendly',
      text: 'Este jarabe debería ayudar. Tome una cucharada tres veces al día, después de las comidas. ¿Tiene alguna alergia que deba saber?',
      translation: 'Bu şurup yardımcı olmalı. Günde üç kez, yemeklerden sonra bir kaşık alın. Bilmem gereken bir alerjiniz var mı?',
      choices: [
        { id: 'no_allergy', intentionTr: 'Alerjin olmadığını söyle', tone: 'polite', difficulty: 'easy', xp: 10,
          sentence: 'Sin alergias. ¿Lo tomo con agua?',
          translation: 'Alerjim yok. Suyla mı almalıyım?',
          altAccepted: ['Sin alergias lo tomo con agua', 'No ninguna con agua'],
          next: 'instructions', relationshipEffect: 1 },
        { id: 'ask_drowsy', intentionTr: 'Uyku yapıp yapmadığını sor', tone: 'polite', difficulty: 'hard', xp: 18,
          sentence: 'Sin alergias. ¿Esto da sueño? Tengo que conducir.',
          translation: 'Alerjim yok. Bu beni uyuşuk yapar mı? Araç kullanmam gerekiyor.',
          altAccepted: ['Da sueño tengo que conducir', 'Esto causa somnolencia'],
          next: 'drowsy_answer', relationshipEffect: 1 }
      ]
    },
    prescription_node: {
      id: 'prescription_node', speakerId: 'fatima', emotion: 'neutral',
      text: 'Gracias. Tardará unos diez minutos en estar lista. ¿Quiere esperar o volver más tarde?',
      translation: 'Teşekkürler. Hazırlaması yaklaşık on dakika sürer. Beklemek mi istersiniz yoksa sonra mı gelirsiniz?',
      choices: [
        { id: 'wait', intentionTr: 'Beklemeyi tercih et', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Espero aquí, gracias.',
          translation: 'Beklerim, teşekkürler.',
          altAccepted: ['Espero aquí mismo gracias', 'Puedo esperar'],
          next: 'end_prescription' },
        { id: 'come_back', intentionTr: 'Sonra geleceğini söyle', tone: 'casual', difficulty: 'easy', xp: 10,
          sentence: 'Vuelvo en veinte minutos, gracias.',
          translation: 'Yirmi dakikaya geri gelirim, teşekkürler.',
          altAccepted: ['Vuelvo más tarde', 'Regreso en veinte minutos'],
          next: 'end_prescription' }
      ]
    },
    instructions: {
      id: 'instructions', speakerId: 'fatima', emotion: 'happy',
      text: 'Con agua está bien. Termine todo el frasco aunque se sienta mejor. ¡Que se mejore pronto!',
      translation: 'Su uygun. Kendinizi iyi hissetseniz bile şişeyi bitirin. Geçmiş olsun!',
      next: 'end_helped'
    },
    drowsy_answer: {
      id: 'drowsy_answer', speakerId: 'fatima', emotion: 'concerned',
      text: 'Qué bien que pregunte — este puede dar sueño. Lleve mejor la versión que no da somnolencia, una pastilla por la mañana.',
      translation: 'Sorman iyi oldu — bu uyku yapabilir. Onun yerine uyku yapmayan türü al, sabah bir tablet.',
      next: 'end_careful'
    }
  },
  endings: {
    end_helped: { id: 'end_helped', kind: 'success', title: 'Resuelto', titleTr: 'Halledildi',
      text: 'Explicaste tus síntomas y entendiste cómo tomar la medicina. Simple y claro.',
      translation: 'Belirtilerini anlattın ve ilacı nasıl alacağını anladın. Basit ve net.',
      coins: 10 },
    end_careful: { id: 'end_careful', kind: 'excellent', title: 'Una pregunta inteligente', titleTr: 'Akıllı bir soru',
      text: 'Al preguntar por los efectos secundarios, evitaste un problema antes de conducir. Eso es exactamente lo que hay que preguntarle a una farmacéutica.',
      translation: 'Yan etkileri sorarak araç kullanmadan önce bir sorunu önledin. Bir eczacıya sorulacak tam da doğru şey.',
      relationshipEffect: 1, coins: 14 },
    end_prescription: { id: 'end_prescription', kind: 'success', title: 'Receta preparada', titleTr: 'Reçete hazırlandı',
      text: 'Gestionaste la receta con cortesía y claridad. Todo listo.',
      translation: 'Reçeteyi kibar ve net biçimde hallettin. Her şey tamam.',
      coins: 8 }
  }
});
