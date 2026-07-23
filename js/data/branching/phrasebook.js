// ============================================================================
// Quick-Practice phrasebook — the "easy way" to add lots of content at scale.
//
// Instead of authoring a full branching graph, each entry is one compact
// [spanish, turkish] tuple grouped by place → topic → CEFR level. A tiny
// builder flattens them into practice items the Quick Practice screen scores
// with the SAME speech recognizer + scorer + TTS as Story Mode. Adding 20 more
// phrases is literally 20 more one-line tuples — no engine or UI changes.
//
// PhraseItem = { id, en, tr, level, locationId, topic }  (`en` = target lang)
// ============================================================================

// place → topic → { LEVEL: [[es, tr], ...] }
const RAW = {
  hotel: {
    'Check-in & rezervasyon': {
      A1: [
        ['Tengo una reserva.', 'Bir rezervasyonum var.'],
        ['Me llamo Alex Turner.', 'Adım Alex Turner.'],
        ['Aquí está mi pasaporte.', 'İşte pasaportum.'],
        ['Una habitación para dos noches, por favor.', 'İki geceliğine bir oda, lütfen.']
      ],
      A2: [
        ['Quisiera registrarme, por favor.', 'Giriş yapmak istiyorum, lütfen.'],
        ['¿El desayuno está incluido en el precio?', 'Kahvaltı fiyata dahil mi?'],
        ['¿A qué hora es la salida?', 'Çıkış saati kaçta?'],
        ['¿Podría tener una habitación con vistas?', 'Manzaralı bir oda alabilir miyim?']
      ],
      B1: [
        ['¿Sería posible una salida tardía?', 'Geç çıkış mümkün olur mu?'],
        ['¿Tienen habitaciones libres para esta noche?', 'Bu gece için boş odanız var mı?']
      ]
    },
    'Sorunlar & istekler': {
      A2: [
        ['¿Me pueden dar unas toallas extra?', 'Biraz fazladan havlu alabilir miyim?'],
        ['¿Cuál es la contraseña del Wi-Fi?', 'Wi-Fi şifresi nedir?'],
        ['El aire acondicionado no funciona.', 'Klima çalışmıyor.']
      ],
      B1: [
        ['Me temo que la habitación de al lado es muy ruidosa.', 'Maalesef yan oda çok gürültülü.'],
        ['Mi habitación todavía no se ha limpiado.', 'Odam henüz temizlenmedi.'],
        ['¿Alguien podría ayudarme con el equipaje?', 'Bavulumla biri yardım edebilir mi?']
      ]
    }
  },

  airport: {
    'Check-in & bagaj': {
      A1: [
        ['Aquí está mi tarjeta de embarque.', 'İşte biniş kartım.'],
        ['Tengo una maleta para facturar.', 'Check-in için bir bavulum var.'],
        ['¿Dónde está la puerta de embarque?', 'Kapı nerede?']
      ],
      A2: [
        ['Estoy facturando para el vuelo a Roma.', 'Roma uçuşu için check-in yapıyorum.'],
        ['¿Mi equipaje pasa el límite de peso?', 'Bavulum ağırlık limitini aşıyor mu?'],
        ['¿Me da un asiento de ventanilla, por favor?', 'Cam kenarı koltuk alabilir miyim, lütfen?']
      ],
      B1: [
        ['¿Se acepta una tarjeta de embarque digital?', 'Dijital biniş kartı geçerli mi?'],
        ['¿Cuánto cuesta la tarifa por exceso de equipaje?', 'Fazla bagaj ücreti ne kadar?']
      ]
    },
    'Sorunlar': {
      B1: [
        ['Mi vuelo de conexión se retrasó.', 'Aktarma uçuşum rötar yaptı.'],
        ['Creo que he perdido mi vuelo.', 'Sanırım uçuşumu kaçırdım.'],
        ['¿Podría ponerme en el próximo vuelo?', 'Beni bir sonraki uçağa alabilir misiniz?'],
        ['Mi maleta no salió por la cinta.', 'Valizim banttan çıkmadı.']
      ],
      B2: [
        ['Como el retraso fue culpa suya, no esperaría ningún cargo por el cambio.', 'Rötar sizin hatanız olduğu için yeniden rezervasyon ücreti beklemem.']
      ]
    }
  },

  restaurant: {
    'Sipariş verme': {
      A1: [
        ['Una mesa para dos, por favor.', 'İki kişilik bir masa, lütfen.'],
        ['¿Puedo ver el menú?', 'Menüyü görebilir miyim?'],
        ['Voy a tomar el pollo, por favor.', 'Tavuğu alacağım, lütfen.'],
        ['Solo agua para mí, gracias.', 'Bana sadece su, teşekkürler.']
      ],
      A2: [
        ['¿Qué me recomienda?', 'Ne önerirsiniz?'],
        ['¿Nos da unos minutos más?', 'Birkaç dakika daha alabilir miyiz?'],
        ['¿Este plato lleva frutos secos?', 'Bu yemekte fındık/fıstık var mı?']
      ],
      B1: [
        ['Soy alérgico al marisco, así que lo evitaré.', 'Deniz ürünlerine alerjim var, o yüzden ondan uzak duracağım.']
      ]
    },
    'Ödeme & sorunlar': {
      A2: [
        ['¿Nos trae la cuenta, por favor?', 'Hesabı alabilir miyiz, lütfen?'],
        ['¿Puedo pagar con tarjeta?', 'Kartla ödeyebilir miyim?'],
        ['Quédese con el cambio.', 'Üstü kalsın.']
      ],
      B1: [
        ['Lo siento, pero esto no es lo que pedí.', 'Üzgünüm ama bu sipariş ettiğim şey değil.'],
        ['Me temo que la comida está un poco fría.', 'Maalesef yemek biraz soğuk.']
      ]
    }
  },

  cafe: {
    'Tezgahta': {
      A1: [
        ['Un café, por favor.', 'Bir kahve, lütfen.'],
        ['¿Me da una taza de té?', 'Bir fincan çay alabilir miyim?'],
        ['Para llevar, por favor.', 'Dışarı alacağım, lütfen.'],
        ['¿Cuánto es?', 'Ne kadar?']
      ],
      A2: [
        ['Voy a tomar un latte grande, por favor.', 'Büyük boy bir latte alacağım, lütfen.'],
        ['¿Tienen leche de avena?', 'Yulaf sütünüz var mı?'],
        ['¿Me lo puede poner con menos azúcar?', 'Onu daha az şekerli alabilir miyim?']
      ]
    },
    'İnsanlarla tanışma': {
      B1: [
        ['¡Cuánto tiempo! ¿Cómo has estado?', 'Çok uzun zaman oldu — nasılsın?'],
        ['¡Qué casualidad verte aquí!', 'Seni burada görmek ne tesadüf!'],
        ['¿Buscamos una mesa y nos ponemos al día?', 'Bir masa tutup sohbet edelim mi?']
      ]
    }
  },

  hospital: {
    'Belirtileri anlatma': {
      A1: [
        ['No me siento bien.', 'Kendimi iyi hissetmiyorum.'],
        ['Me duele la cabeza.', 'Başım ağrıyor.'],
        ['Me duele la garganta.', 'Boğazım ağrıyor.']
      ],
      A2: [
        ['Tengo fiebre desde ayer.', 'Dünden beri ateşim var.'],
        ['El dolor empezó hace dos días.', 'Ağrı iki gün önce başladı.'],
        ['Me mareo cuando me levanto.', 'Ayağa kalkınca başım dönüyor.']
      ],
      B1: [
        ['Me siento agotado y no puedo dormir.', 'Çok bitkin hissediyorum ve uyuyamıyorum.'],
        ['Tomé un analgésico, pero no me ayudó.', 'Ağrı kesici aldım ama işe yaramadı.']
      ]
    },
    'Randevular': {
      A2: [
        ['Quisiera pedir una cita.', 'Randevu almak istiyorum.'],
        ['¿Cuándo debería volver?', 'Ne zaman geri gelmeliyim?']
      ]
    }
  },

  pharmacy: {
    'İlaç alma': {
      A1: [
        ['Estoy resfriado.', 'Üşüttüm.'],
        ['¿Tiene algo para la tos?', 'Öksürük için bir şeyiniz var mı?']
      ],
      A2: [
        ['¿Me recomienda algo para el dolor de garganta?', 'Boğaz ağrısı için bir şey önerebilir misiniz?'],
        ['¿Cada cuánto debo tomarlo?', 'Bunu ne sıklıkta almalıyım?'],
        ['Quisiera preparar esta receta.', 'Bu reçeteyi doldurtmak istiyorum.']
      ],
      B1: [
        ['¿Este medicamento me dará sueño?', 'Bu ilaç beni uykulu yapar mı?'],
        ['¿Es seguro tomarlo con comida?', 'Yemekle almak güvenli mi?']
      ]
    }
  },

  supermarket: {
    'Bulma & satın alma': {
      A1: [
        ['¿Dónde está la leche?', 'Süt nerede?'],
        ['¿Cuánto cuesta esto?', 'Bu ne kadar?'],
        ['¿Tienen pan?', 'Ekmeğiniz var mı?']
      ],
      A2: [
        ['¿En qué pasillo están los huevos?', 'Yumurtalar hangi koridorda?'],
        ['¿Venden productos sin gluten?', 'Glutensiz ürün satıyor musunuz?'],
        ['¿Puedo pagar con tarjeta aquí?', 'Burada kartla ödeyebilir miyim?']
      ],
      B1: [
        ['Perdone, creo que me cobraron esto dos veces.', 'Pardon, sanırım bunun için iki kez ücret alındı.']
      ]
    }
  },

  clothing: {
    'Kıyafet alışverişi': {
      A1: [
        ['¿Puedo probármelo?', 'Bunu deneyebilir miyim?'],
        ['¿Lo tienen en talla M?', 'Bunun orta bedeni var mı?'],
        ['¿Cuánto cuesta esta chaqueta?', 'Bu ceket ne kadar?']
      ],
      A2: [
        ['¿Lo tienen en otro color?', 'Bunun farklı bir rengi var mı?'],
        ['Me queda un poco apretado.', 'Bu biraz fazla dar.'],
        ['¿Dónde están los probadores?', 'Deneme kabinleri nerede?']
      ],
      B1: [
        ['Quisiera devolver esto — no me queda bien.', 'Bunu iade etmek istiyorum — bana olmadı.'],
        ['¿Puedo cambiarlo por una talla más grande?', 'Daha büyük bir bedenle değiştirebilir miyim?']
      ]
    }
  },

  train: {
    'Biletler & seyahat': {
      A1: [
        ['Un billete a Londres, por favor.', 'Londra’ya bir bilet, lütfen.'],
        ['¿Qué andén es?', 'Hangi peron?'],
        ['¿A qué hora sale el tren?', 'Tren saat kaçta kalkıyor?']
      ],
      A2: [
        ['Un billete de ida y vuelta, por favor.', 'Gidiş-dönüş bilet, lütfen.'],
        ['¿Cuándo es el próximo tren a la ciudad?', 'Şehre bir sonraki tren ne zaman?'],
        ['¿Está ocupado este asiento?', 'Bu koltuk dolu mu?']
      ],
      B1: [
        ['¿Hay descuento de estudiante?', 'Öğrenci indirimi var mı?'],
        ['Creo que me subí al tren equivocado.', 'Sanırım yanlış trene bindim.']
      ]
    }
  },

  taxi: {
    'Taksiye binme': {
      A1: [
        ['Al aeropuerto, por favor.', 'Havalimanına, lütfen.'],
        ['¿Cuánto es?', 'Ne kadar?'],
        ['Pare aquí, por favor.', 'Burada durun, lütfen.']
      ],
      A2: [
        ['¿Me puede llevar al hotel Sunrise?', 'Beni Sunrise Otel’e götürür müsünüz?'],
        ['Tengo un poco de prisa.', 'Biraz acelem var.'],
        ['¿Puedo pagar con tarjeta?', 'Kartla ödeyebilir miyim?']
      ],
      B1: [
        ['¿Podría tomar la ruta más rápida, por favor?', 'En hızlı yoldan gider misiniz, lütfen?']
      ]
    }
  },

  bank: {
    'Bankada': {
      A2: [
        ['Quisiera abrir una cuenta.', 'Bir hesap açmak istiyorum.'],
        ['Necesito cambiar dinero.', 'Biraz para bozdurmam gerekiyor.'],
        ['¿Cuál es el tipo de cambio hoy?', 'Bugün döviz kuru nedir?']
      ],
      B1: [
        ['Creo que he perdido mi tarjeta del banco.', 'Sanırım banka kartımı kaybettim.'],
        ['Hay un pago que no reconozco.', 'Tanımadığım bir ödeme var.'],
        ['¿Podría bloquear mi tarjeta, por favor?', 'Kartımı bloke edebilir misiniz, lütfen?']
      ]
    }
  },

  police: {
    'Bildirimde bulunma': {
      B1: [
        ['Quisiera denunciar un teléfono perdido.', 'Kayıp bir telefon bildirmek istiyorum.'],
        ['Creo que me robaron el bolso.', 'Sanırım çantam çalındı.'],
        ['Pasó hace una hora, más o menos.', 'Yaklaşık bir saat önce oldu.'],
        ['¿Me pueden dar una copia de la denuncia?', 'Tutanağın bir kopyasını alabilir miyim?']
      ],
      B2: [
        ['Necesitaré este documento para la reclamación del seguro.', 'Bu belge sigorta talebim için gerekecek.']
      ]
    }
  },

  street: {
    'Yol tarifi & sohbet': {
      A1: [
        ['Perdone, ¿dónde está la estación?', 'Pardon, istasyon nerede?'],
        ['¿Está lejos de aquí?', 'Buraya uzak mı?'],
        ['Gracias por su ayuda.', 'Yardımın için teşekkürler.']
      ],
      A2: [
        ['¿Me puede decir cómo llegar al museo?', 'Müzeye nasıl gideceğimi söyler misiniz?'],
        ['¿Hay una farmacia cerca de aquí?', 'Buralarda bir eczane var mı?'],
        ['Mucho gusto. Soy nuevo aquí.', 'Tanıştığıma memnun oldum. Buraya yeniyim.']
      ],
      B1: [
        ['¿Me podría decir dónde está el banco más cercano?', 'En yakın bankanın nerede olduğunu söyler misiniz?'],
        ['¿Te gustaría tomar un café con nosotros?', 'Bize kahveye katılmak ister misin?']
      ]
    }
  },

  workplace: {
    'Görüşmeler & ofis': {
      B1: [
        ['Gracias por invitarme a la entrevista.', 'Görüşmeye davet ettiğiniz için teşekkürler.'],
        ['Tengo tres años de experiencia en este campo.', 'Bu alanda üç yıllık deneyimim var.'],
        ['¿Me podría contar más sobre el puesto?', 'Bu pozisyon hakkında biraz daha bilgi verir misiniz?']
      ],
      B2: [
        ['Antes asumía demasiado, pero estoy aprendiendo a delegar.', 'Eskiden fazla iş üstlenirdim ama yetki devretmeyi öğreniyorum.'],
        ['¿Cómo se ve el éxito en los primeros seis meses?', 'İlk altı ayda başarı neye benzer?'],
        ['Creo que hubo un malentendido — déjeme explicar.', 'Sanırım bir yanlış anlaşılma oldu — açıklayayım.'],
        ['Resolvamos esto juntos.', 'Bunu birlikte çözelim.']
      ]
    }
  },

  home: {
    'Günlük ev sohbeti': {
      A1: [
        ['¡Buenos días! ¿Dormiste bien?', 'Günaydın! İyi uyudun mu?'],
        ['¿Qué hay de desayuno?', 'Kahvaltıda ne var?'],
        ['Todavía estoy un poco cansado.', 'Hâlâ biraz yorgunum.'],
        ['¡Hasta luego!', 'Sonra görüşürüz!']
      ],
      A2: [
        ['¿Qué planes tienes para hoy?', 'Bugün planların ne?'],
        ['¿Quieres ir al mercado juntos?', 'Birlikte pazara gitmek ister misin?'],
        ['¿Me ayudas con esto, por favor?', 'Bunda bana yardım eder misin, lütfen?']
      ]
    }
  }
};

// Second batch — same compact format. Kept separate purely so the file stays
// easy to scan; merged with RAW below. Adding more content = add more tuples.
const RAW_EXTRA = {
  hotel: {
    'Resepsiyonda dahası': {
      A2: [
        ['¿Me podría pedir un taxi para las ocho?', 'Saat sekiz için bana bir taksi çağırır mısınız?'],
        ['¿Hay gimnasio o piscina en el hotel?', 'Otelde spor salonu ya da havuz var mı?'],
        ['¿A qué hora abre el restaurante?', 'Restoran saat kaçta açılıyor?'],
        ['¿Puedo dejar mis maletas aquí hasta el mediodía?', 'Bavullarımı öğlene kadar burada bırakabilir miyim?']
      ],
      B1: [
        ['Quisiera extender mi estancia una noche más.', 'Konaklamamı bir gece uzatmak istiyorum.'],
        ['¿Hay servicio de traslado al aeropuerto?', 'Havalimanına servis var mı?']
      ]
    }
  },
  airport: {
    'Biniş & uçakta': {
      A2: [
        ['¿Dónde está el control de pasaportes?', 'Pasaport kontrolü nerede?'],
        ['¿Ya empezó el embarque del vuelo a París?', 'Paris uçuşu binişe başladı mı?'],
        ['¿Me da un vaso de agua, por favor?', 'Bir bardak su alabilir miyim, lütfen?']
      ],
      B1: [
        ['Estoy aquí de vacaciones por dos semanas.', 'İki haftalığına tatil için buradayım.'],
        ['Me alojaré en un hotel del centro.', 'Şehir merkezindeki bir otelde kalacağım.']
      ]
    }
  },
  restaurant: {
    'Ekstra istekler': {
      A2: [
        ['¿Podemos sentarnos junto a la ventana?', 'Pencere kenarına oturabilir miyiz?'],
        ['¿Me lo puede poner sin cebolla?', 'Bunu soğansız alabilir miyim?'],
        ['¿Me da la receta? ¡Está delicioso!', 'Tarifini alabilir miyim? Çok lezzetli!']
      ],
      B1: [
        ['Todo estuvo excelente, gracias.', 'Her şey mükemmeldi, teşekkürler.'],
        ['¿Podemos dividir la cuenta, por favor?', 'Hesabı bölüşebilir miyiz, lütfen?']
      ]
    }
  },
  cafe: {
    'Kafede dahası': {
      A1: [
        ['¿Está libre este asiento?', 'Bu koltuk boş mu?'],
        ['¿Me da también un vaso de agua?', 'Bir de bir bardak su alabilir miyim?']
      ],
      A2: [
        ['¿Tienen pasteles hoy?', 'Bugün kekiniz var mı?'],
        ['¿Me puede dar la contraseña del Wi-Fi?', 'Wi-Fi şifresini alabilir miyim?']
      ]
    }
  },
  hospital: {
    'Klinikte': {
      A2: [
        ['¿Necesito receta para esto?', 'Bunun için reçeteye ihtiyacım var mı?'],
        ['¿Cuánto tardarán los resultados?', 'Sonuçlar ne kadar sürer?'],
        ['¿Debería descansar unos días?', 'Birkaç gün dinlenmeli miyim?']
      ],
      B1: [
        ['¿Hay algo que debería evitar comer?', 'Yememem gereken bir şey var mı?']
      ]
    }
  },
  pharmacy: {
    'Eczanede dahası': {
      A1: [
        ['¿Tienen analgésicos?', 'Ağrı kesiciniz var mı?'],
        ['Necesito unas tiritas, por favor.', 'Biraz yara bandı gerekiyor, lütfen.']
      ],
      A2: [
        ['¿Puedo tomarlo con otros medicamentos?', 'Bunu başka ilaçla alabilir miyim?'],
        ['¿Hay una versión sin azúcar?', 'Şekersiz bir türü var mı?']
      ]
    }
  },
  supermarket: {
    'Kasada': {
      A1: [
        ['¿Tiene una bolsa?', 'Poşetiniz var mı?'],
        ['¿Me da un recibo?', 'Fiş alabilir miyim?']
      ],
      A2: [
        ['¿Esto está de oferta hoy?', 'Bu bugün indirimde mi?'],
        ['¿Dónde encuentro los congelados?', 'Dondurulmuş gıdaları nerede bulabilirim?'],
        ['¿Tiene tarjeta de fidelidad?', 'Sadakat kartınız var mı?']
      ]
    }
  },
  clothing: {
    'Daha fazla alışveriş': {
      A2: [
        ['¿Tienen estos zapatos en el 42?', 'Bu ayakkabıların 42 numarası var mı?'],
        ['¿Está rebajado?', 'Bu indirimde mi?'],
        ['¿Puedo pagar en efectivo?', 'Nakit ödeyebilir miyim?']
      ],
      B1: [
        ['¿Hacen devoluciones sin ticket?', 'Fişsiz para iadesi yapıyor musunuz?']
      ]
    }
  },
  train: {
    'Peronda': {
      A1: [
        ['¿Este es el tren a Londres?', 'Bu Londra treni mi?'],
        ['Perdone, ¿está libre este asiento?', 'Pardon, bu koltuk boş mu?']
      ],
      A2: [
        ['¿Tengo que hacer transbordo?', 'Aktarma yapmam gerekiyor mu?'],
        ['¿Cuánto dura el viaje?', 'Yolculuk ne kadar sürüyor?']
      ]
    }
  },
  taxi: {
    'Yolda': {
      A2: [
        ['¿Podría ir un poco más despacio, por favor?', 'Biraz yavaşlar mısınız, lütfen?'],
        ['¿Está lejos de aquí?', 'Buraya uzak mı?'],
        ['¿Podría esperar unos minutos?', 'Birkaç dakika bekler misiniz?']
      ]
    }
  },
  bank: {
    'Bankada dahası': {
      A2: [
        ['Quisiera sacar dinero.', 'Biraz para çekmek istiyorum.'],
        ['¿Dónde está el cajero más cercano?', 'En yakın bankamatik nerede?']
      ],
      B1: [
        ['¿Cuánto tardará en llegar la tarjeta nueva?', 'Yeni kart ne zaman gelir?'],
        ['¿Podría enviarla a mi dirección?', 'Adresime gönderebilir misiniz?']
      ]
    }
  },
  police: {
    'Daha fazla ayrıntı': {
      B1: [
        ['¿Puedo contactarlos por correo electrónico?', 'Sizinle e-posta ile iletişim kurabilir miyim?'],
        ['Es un teléfono negro con funda azul.', 'Mavi kılıfta siyah bir telefon.'],
        ['Lo tuve por última vez en el autobús número 12.', 'En son 12 numaralı otobüste elimdeydi.']
      ]
    }
  },
  street: {
    'Daha fazla yol tarifi': {
      A2: [
        ['Gire a la izquierda en el semáforo.', 'Trafik ışıklarında sola dön.'],
        ['Siga recto unos cinco minutos.', 'Yaklaşık beş dakika düz git.'],
        ['Está al lado de la farmacia.', 'Eczanenin yanında.'],
        ['¿Voy por el buen camino?', 'Doğru yolda mıyım?']
      ]
    },
    'Günlük temel cümleler': {
      A1: [
        ['Perdone, ¿me puede ayudar?', 'Pardon, yardım edebilir misiniz?'],
        ['Lo siento, no entiendo.', 'Üzgünüm, anlamıyorum.'],
        ['¿Puede repetirlo, por favor?', 'Bunu tekrar söyler misiniz, lütfen?'],
        ['¿Puede hablar más despacio, por favor?', 'Biraz daha yavaş konuşur musunuz, lütfen?'],
        ['¿Cómo se dice esto en español?', 'Bu İspanyolca nasıl söylenir?'],
        ['Muchas gracias por su ayuda.', 'Yardımınız için çok teşekkürler.']
      ]
    }
  },
  workplace: {
    'Günlük ofis': {
      A2: [
        ['¿Me podrías ayudar con esta tarea?', 'Bu işte bana yardım eder misin?'],
        ['Te enviaré el informe por correo.', 'Raporu sana e-posta ile göndereceğim.'],
        ['¿Podemos agendar una reunión para mañana?', 'Yarın için bir toplantı ayarlayabilir miyiz?']
      ],
      B1: [
        ['Lo siento, lo envío ahora mismo.', 'Özür dilerim, hemen gönderiyorum.']
      ]
    }
  },
  home: {
    'Evin içinde': {
      A1: [
        ['¿Me pasas la sal, por favor?', 'Tuzu uzatır mısın, lütfen?'],
        ['Voy a la tienda. ¿Necesitas algo?', 'Markete gidiyorum. Bir şeye ihtiyacın var mı?'],
        ['¡La cena está lista!', 'Yemek hazır!']
      ],
      A2: [
        ['¿Puedes bajar un poco la música?', 'Müziği biraz kısar mısın?'],
        ['Yo lavo los platos esta noche.', 'Bulaşıkları bu gece ben yıkarım.']
      ]
    }
  }
};

// Deep-merge two RAW objects (place → topic → level arrays never collide here
// because RAW_EXTRA uses distinct topic names).
function mergeRaw(a, b) {
  const out = JSON.parse(JSON.stringify(a));
  for (const [place, topics] of Object.entries(b)) {
    out[place] = { ...(out[place] || {}), ...topics };
  }
  return out;
}

// Flatten RAW into a single array with stable ids.
function build(raw) {
  const out = [];
  for (const [locationId, topics] of Object.entries(raw)) {
    for (const [topic, byLevel] of Object.entries(topics)) {
      for (const [level, pairs] of Object.entries(byLevel)) {
        pairs.forEach(([en, tr], i) => {
          out.push({
            id: `${locationId}-${topic.replace(/[^a-z]/gi, '').slice(0, 8)}-${level}-${i}`.toLowerCase(),
            en, tr, level, locationId, topic
          });
        });
      }
    }
  }
  return out;
}

export const PHRASEBOOK = build(mergeRaw(RAW, RAW_EXTRA));

// Group metadata for the Quick Practice screen (icon/label per place), reusing
// the Story environments where possible.
export const PHRASE_PLACES = {
  hotel:       { icon: '🏨', label: 'Hotel',            labelTr: 'Otel' },
  airport:     { icon: '✈️', label: 'Aeropuerto',       labelTr: 'Havalimanı' },
  restaurant:  { icon: '🍽️', label: 'Restaurante',      labelTr: 'Restoran' },
  cafe:        { icon: '☕', label: 'Cafetería',         labelTr: 'Kafe' },
  hospital:    { icon: '🏥', label: 'Hospital',         labelTr: 'Hastane' },
  pharmacy:    { icon: '💊', label: 'Farmacia',         labelTr: 'Eczane' },
  supermarket: { icon: '🛒', label: 'Supermercado',     labelTr: 'Market' },
  clothing:    { icon: '👕', label: 'Tienda de ropa',   labelTr: 'Giyim' },
  train:       { icon: '🚆', label: 'Estación de tren', labelTr: 'Tren Garı' },
  taxi:        { icon: '🚕', label: 'Taxi',             labelTr: 'Taksi' },
  bank:        { icon: '🏦', label: 'Banco',            labelTr: 'Banka' },
  police:      { icon: '🚓', label: 'Policía',          labelTr: 'Karakol' },
  street:      { icon: '🚶', label: 'Por la calle',     labelTr: 'Dışarıda' },
  workplace:   { icon: '💼', label: 'Trabajo',          labelTr: 'İş Yeri' },
  home:        { icon: '🏠', label: 'Casa',             labelTr: 'Ev' }
};

export function phrasesForPlace(locationId) {
  return PHRASEBOOK.filter(p => p.locationId === locationId);
}

export const PHRASEBOOK_COUNT = PHRASEBOOK.length;
