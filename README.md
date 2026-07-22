# SpeakScenes İspanyolca — Kaydır, Konuş, Büyü

SpeakScenes'in **Shorts odaklı İspanyolca** klonu. TikTok tarzı dikey akışta
gerçek, seviyelendirilmiş (A0→C2) İspanyolca cümleler: her yukarı kaydırma
karakterini büyütür (bebek → kendinden emin yetişkin) ve cümleler tam o hızda
zorlaşır. Her kart dinlenebilir (🔊 / 🐢 yavaş), **mikrofonla sesli söylenip**
gerçek konuşma tanımayla puanlanır (es-ES), Türkçe çevirisi bir dokunuşla açılır.

- **Binlerce üretilmiş, dil bilgisi doğrulanmış cümle** — un/una, el/la,
  sıfat-cinsiyet uyumu ve ser/estar ayrımı kelime bankasında elle işlenmiştir;
  deterministik üretim, her açılışta aynı sıra.
- **Konuşma puanlama** dürüst hizalama motoru: eksik/yanlış/fazla kelimeler
  gerçek ASR çıktısından; olumsuzluk (no/nunca) ve sayı hataları her seviyede
  reddedilir. Aksansız yazım adil karşılaştırılır (está→esta her iki tarafta).
- **Mikrofon yoksa** net şekilde belirtilen yazılı moda düşer.

Orijinal İngilizce uygulamanın diyalog/hikaye modları İngilizce içeriğe özel
olduğundan bu klonda kayıtlı değildir.

## Çalıştırma

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1 -LocalOnly
# http://localhost:8123
```

Testler: `http://localhost:8123/tests/`
