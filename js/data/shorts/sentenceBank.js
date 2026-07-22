// ============================================================================
// Shorts sentence bank — SPANISH. Sentence-first deterministic expansion:
// gender agreement, ser/estar per adjective, pretérito past, ir-a future,
// llevo-durations, and a hand-written DAILY set of real everyday sentences.
// Sorted A0 -> C2.
// ============================================================================

import { NOUNS, GOODS, PLACES, OWNABLE, ADJECTIVES, VERBS, OPINIONS, REQUESTS, ACTIVITIES, DURATIONS, DAILY } from './wordBanks.js?v=5';

export const LEVEL_ORDER = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const levelRank = (c) => LEVEL_ORDER.indexOf(c);

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function trQ(word) {
  const v = (word.toLowerCase().match(/[aeıioöuü]/g) || ['e']).pop();
  return { a: 'mı', ı: 'mı', e: 'mi', i: 'mi', o: 'mu', u: 'mu', ö: 'mü', ü: 'mü' }[v] || 'mi';
}

const agree = (a, n) => n.g === 'f' ? a.f : a.m;
const copula = (a) => a.e ? 'está' : 'es';

function frame(level, topic, capN, slots, make) {
  return { level, topic, capN, slots, make };
}

function expandFrame(f, seedBase) {
  const sizes = f.slots.map(s => s.length);
  const total = sizes.reduce((a, b) => a * b, 1);
  const rnd = mulberry32(seedBase);
  let picks;
  if (total <= f.capN) {
    picks = Array.from({ length: total }, (_, i) => i);
  } else {
    const seen = new Set(); picks = [];
    let guard = f.capN * 40;
    while (picks.length < f.capN && guard-- > 0) {
      const idx = Math.floor(rnd() * total);
      if (!seen.has(idx)) { seen.add(idx); picks.push(idx); }
    }
  }
  const out = [];
  for (const flat of picks) {
    let rem = flat;
    const items = [];
    for (let s = f.slots.length - 1; s >= 0; s--) {
      const sz = sizes[s];
      items[s] = f.slots[s][rem % sz];
      rem = Math.floor(rem / sz);
    }
    const { en, tr } = f.make(items);
    out.push({ en, tr, level: f.level, topic: f.topic, words: en.split(/\s+/).length });
  }
  return out;
}

const A = ADJECTIVES, V = VERBS;
// SER-only adjectives: the upper-level frames below embed a fixed "es/sea/fuera",
// so state adjectives (that need ESTAR) are excluded to keep every sentence correct.
const ASER = ADJECTIVES.filter(a => !a.e);

const FRAMES = [
  // ---------------- A0 : first mini-sentences ----------------------------
  frame('A0', 'first-words', 999, [NOUNS], ([n]) => ({ en: `¡${cap(n.ind)} ${n.w}!`, tr: `Bir ${n.tr}!` })),
  frame('A0', 'pointing', 999, [NOUNS], ([n]) => ({ en: `¡Mira, ${n.ind} ${n.w}!`, tr: `Bak, bir ${n.tr}!` })),
  frame('A0', 'pointing', 999, [NOUNS], ([n]) => ({ en: `¡Ahí hay ${n.ind} ${n.w}!`, tr: `İşte orada bir ${n.tr}!` })),
  frame('A0', 'first-words', 999, [NOUNS], ([n]) => ({ en: `¡${n.g === 'f' ? 'Otra' : 'Otro'} ${n.w}!`, tr: `Bir ${n.tr} daha!` })),
  frame('A0', 'location', 999, [NOUNS], ([n]) => ({ en: `¡${cap(n.def)} ${n.w} está aquí!`, tr: `${cap(n.tr)} burada!` })),
  frame('A0', 'first-words', 999, [NOUNS], ([n]) => ({ en: `¡Oh, ${n.ind} ${n.w}!`, tr: `Oo, bir ${n.tr}!` })),
  frame('A0', 'first-words', 260, [NOUNS, NOUNS], ([a, b]) => ({ en: `¡${cap(a.ind)} ${a.w} y ${b.ind} ${b.w}!`, tr: `Bir ${a.tr} ve bir ${b.tr}!` })),

  // ---------------- A1 -----------------------------------------------------
  frame('A1', 'naming', 999, [NOUNS], ([n]) => ({ en: `Es ${n.ind} ${n.w}.`, tr: `Bu bir ${n.tr}.` })),
  frame('A1', 'pointing', 999, [NOUNS], ([n]) => ({ en: `Aquí hay ${n.ind} ${n.w}.`, tr: `İşte bir ${n.tr}.` })),
  frame('A1', 'questions', 999, [NOUNS], ([n]) => ({ en: `¿Dónde está ${n.def} ${n.w}?`, tr: `${cap(n.tr)} nerede?` })),
  frame('A1', 'seeing', 999, [NOUNS], ([n]) => ({ en: `Veo ${n.ind} ${n.w}.`, tr: `Bir ${n.tr} görüyorum.` })),
  frame('A1', 'having', 999, [NOUNS], ([n]) => ({ en: `Tengo ${n.ind} ${n.w}.`, tr: `Bende bir ${n.tr} var.` })),
  frame('A1', 'questions', 999, [NOUNS], ([n]) => ({ en: `¿Es ${n.ind} ${n.w}?`, tr: `Bu bir ${n.tr} ${trQ(n.tr)}?` })),
  frame('A1', 'seeing', 999, [NOUNS], ([n]) => ({ en: `Encontré ${n.ind} ${n.w}.`, tr: `Bir ${n.tr} buldum.` })),
  frame('A1', 'questions', 999, [OWNABLE], ([n]) => ({ en: `¡${cap(n.def)} ${n.w} se ha perdido!`, tr: `${cap(n.tr)} kayıp!` })),
  frame('A1', 'describing', 999, [NOUNS, A], ([n, a]) => ({ en: `${cap(n.def)} ${n.w} ${copula(a)} ${agree(a, n)}.`, tr: `${cap(n.tr)} ${a.tr}.` })),
  frame('A1', 'describing', 500, [NOUNS, A], ([n, a]) => ({ en: `${cap(n.def)} ${n.w} no ${copula(a)} ${agree(a, n)}.`, tr: `${cap(n.tr)} ${a.tr} değil.` })),
  frame('A1', 'describing', 800, [NOUNS, A], ([n, a]) => ({ en: `Es ${n.ind} ${n.w} ${agree(a, n)}.`, tr: `Bu ${a.tr} bir ${n.tr}.` })),
  frame('A1', 'routines', 999, [V], ([v]) => ({ en: `${cap(v.first)} todos los días.`, tr: `Her gün ${v.tr1}.` })),
  frame('A1', 'likes', 999, [V], ([v]) => ({ en: `Me gusta ${v.inf}.`, tr: `${cap(v.trGer)} severim.` })),

  // ---------------- A2 -----------------------------------------------------
  frame('A2', 'requests', 999, [GOODS], ([n]) => ({ en: `¿Me da ${n.ind} ${n.w}, por favor?`, tr: `Bir ${n.tr} alabilir miyim, lütfen?` })),
  frame('A2', 'shopping', 999, [GOODS], ([n]) => ({ en: `¿Cuánto cuesta ${n.def} ${n.w}?`, tr: `${cap(n.tr)} ne kadar?` })),
  frame('A2', 'questions', 999, [GOODS], ([n]) => ({ en: `¿Tiene ${n.ind} ${n.w}?`, tr: `Sizde ${n.tr} var mı?` })),
  frame('A2', 'shopping', 999, [GOODS], ([n]) => ({ en: `Estoy buscando ${n.ind} ${n.w}.`, tr: `Bir ${n.tr} arıyorum.` })),
  frame('A2', 'shopping', 999, [GOODS], ([n]) => ({ en: `Quiero comprar ${n.ind} ${n.w}.`, tr: `Bir ${n.tr} almak istiyorum.` })),
  frame('A2', 'negatives', 999, [NOUNS], ([n]) => ({ en: `No tengo ${n.w}.`, tr: `Bende ${n.tr} yok.` })),
  frame('A2', 'negatives', 999, [NOUNS], ([n]) => ({ en: `No necesito ${n.ind} ${n.w}.`, tr: `Bana ${n.tr} gerekmiyor.` })),
  frame('A2', 'needs', 999, [NOUNS], ([n]) => ({ en: `Necesito ${n.ind} ${n.w}.`, tr: `Bana bir ${n.tr} lazım.` })),
  frame('A2', 'location', 999, [NOUNS], ([n]) => ({ en: `Hay ${n.ind} ${n.w} aquí.`, tr: `Burada bir ${n.tr} var.` })),
  frame('A2', 'location', 999, [NOUNS], ([n]) => ({ en: `¿Hay ${n.ind} ${n.w} cerca de aquí?`, tr: `Yakınlarda bir ${n.tr} var mı?` })),
  frame('A2', 'seeing', 999, [NOUNS], ([n]) => ({ en: `He visto ${n.ind} ${n.w}.`, tr: `Bir ${n.tr} gördüm.` })),
  frame('A2', 'shopping', 620, [GOODS, A], ([n, a]) => ({ en: `Compró ${n.ind} ${n.w} ${agree(a, n)}.`, tr: `${cap(a.tr)} bir ${n.tr} aldı.` })),
  frame('A2', 'describing', 700, [OWNABLE, A], ([n, a]) => ({ en: `Tengo ${n.ind} ${n.w} ${agree(a, n)}.`, tr: `Bende ${a.tr} bir ${n.tr} var.` })),
  frame('A2', 'exclaim', 600, [NOUNS, A], ([n, a]) => ({ en: `¡Qué ${n.w} tan ${agree(a, n)}!`, tr: `Ne ${a.tr} bir ${n.tr}!` })),
  frame('A2', 'plans', 999, [V], ([v]) => ({ en: `Hoy quiero ${v.inf}.`, tr: `Bugün ${v.trInf} istiyorum.` })),
  frame('A2', 'negatives', 999, [V], ([v]) => ({ en: `Ahora no quiero ${v.inf}.`, tr: `Şimdi ${v.trInf} istemiyorum.` })),
  frame('A2', 'obligation', 999, [V], ([v]) => ({ en: `Ahora tengo que ${v.inf}.`, tr: `Şimdi ${v.trInf} zorundayım.` })),
  frame('A2', 'plans', 999, [V], ([v]) => ({ en: `¿Quieres ${v.inf}?`, tr: `${cap(v.trInf)} ister misin?` })),
  frame('A2', 'routines', 999, [V], ([v]) => ({ en: `Los fines de semana me gusta ${v.inf}.`, tr: `Hafta sonları ${v.trGer} severim.` })),
  frame('A2', 'routines', 999, [V], ([v]) => ({ en: `Ayer ${v.pret} mucho.`, tr: `Dün çok ${v.trPast}.` })),
  frame('A2', 'plans', 999, [V], ([v]) => ({ en: `Mañana voy a ${v.inf}.`, tr: `Yarın ${v.trFut}.` })),

  // ---------------- B1 -----------------------------------------------------
  frame('B1', 'polite-requests', 999, [REQUESTS], ([r]) => ({ en: `¿Podría ${r.r}, por favor?`, tr: `Acaba ${r.tr}?` })),
  frame('B1', 'polite-requests', 999, [REQUESTS], ([r]) => ({ en: `¿Puedes ${r.r}?`, tr: `Lütfen, ${r.tr}?` })),
  frame('B1', 'directions', 999, [PLACES], ([n]) => ({ en: `¿Sabe dónde está ${n.def} ${n.w}?`, tr: `${cap(n.tr)} nerede, biliyor musunuz?` })),
  frame('B1', 'opinions', 999, [OPINIONS], ([o]) => ({ en: `Creo que ${o.c}.`, tr: `Bence ${o.tr}.` })),
  frame('B1', 'plans', 999, [V], ([v]) => ({ en: `Me gustaría aprender a ${v.inf}.`, tr: `${cap(v.trInf)} öğrenmek istiyorum.` })),
  frame('B1', 'experience', 999, [ACTIVITIES, DURATIONS], ([a, d]) => ({ en: `Llevo ${d.t} ${a.t}.`, tr: `${cap(d.tr)} ${a.tr}.` })),
  frame('B1', 'describing', 700, [OWNABLE, A], ([n, a]) => ({ en: `Nunca he visto ${n.ind} ${n.w} tan ${agree(a, n)}.`, tr: `Daha önce hiç bu kadar ${a.tr} bir ${n.tr} görmedim.` })),

  // ---------------- B2 -----------------------------------------------------
  frame('B2', 'opinions', 999, [OPINIONS], ([o]) => ({ en: `En mi opinión, ${o.c}.`, tr: `Bana göre ${o.tr}.` })),
  frame('B2', 'opinions', 999, [OPINIONS], ([o]) => ({ en: `Para ser honesto, ${o.c}.`, tr: `Dürüst olmak gerekirse, ${o.tr}.` })),
  frame('B2', 'polite-requests', 999, [REQUESTS], ([r]) => ({ en: `¿Le importaría ${r.r}?`, tr: `Acaba ${r.tr}? Çok memnun olurum.` })),

  // ---------------- C1 -----------------------------------------------------
  frame('C1', 'opinions', 999, [OPINIONS], ([o]) => ({ en: `Desde mi punto de vista, ${o.c}.`, tr: `Bana kalırsa ${o.tr}.` })),
  frame('C1', 'opinions', 999, [OPINIONS], ([o]) => ({ en: `En lo que a mí respecta, ${o.c}.`, tr: `Benim açımdan ${o.tr}.` })),

  // ---------------- C2 -----------------------------------------------------
  frame('C2', 'nuance', 999, [OPINIONS], ([o]) => ({ en: `Siendo totalmente sincero, ${o.c}.`, tr: `Tamamen dürüst olmam gerekirse, ${o.tr}.` })),
  frame('C2', 'nuance', 999, [OPINIONS], ([o]) => ({ en: `Hay que admitirlo: ${cap(o.c)}.`, tr: `Kabul etmek gerek: ${o.tr}.` })),

  // ---- deeper upper-level content (matches the 6000-swipe growth pace) ----
  frame('B1', 'describing', 400, [NOUNS, ASER], ([n, a]) => ({ en: `Me pregunto si ${n.def} ${n.w} es realmente tan ${agree(a, n)}.`, tr: `${cap(n.tr)} gerçekten bu kadar ${a.tr} mı, merak ediyorum.` })),
  frame('B1', 'describing', 400, [NOUNS, ASER], ([n, a]) => ({ en: `¿No crees que ${n.def} ${n.w} es demasiado ${agree(a, n)}?`, tr: `Sence de ${n.tr} fazla ${a.tr} değil mi?` })),
  frame('B2', 'describing', 600, [NOUNS, ASER], ([n, a]) => ({ en: `Sinceramente, no habría pensado que ${n.def} ${n.w} fuera tan ${agree(a, n)}.`, tr: `Açıkçası ${n.tr} bu kadar ${a.tr} olur diye düşünmemiştim.` })),
  frame('B2', 'describing', 500, [NOUNS, ASER], ([n, a]) => ({ en: `Depende de lo ${agree(a, n)} que sea ${n.def} ${n.w} en realidad.`, tr: `${cap(n.tr)} gerçekte ne kadar ${a.tr}, ona bağlı.` })),
  frame('B2', 'describing', 400, [NOUNS, ASER], ([n, a]) => ({ en: `Por mi experiencia, ${n.def} ${n.w} rara vez es tan ${agree(a, n)}.`, tr: `Tecrübeme göre ${n.tr} nadiren bu kadar ${a.tr} olur.` })),
  frame('B2', 'plans', 999, [V], ([v]) => ({ en: `Nunca habría pensado que algún día podría ${v.inf}.`, tr: `Bir gün ${v.trInf} aklıma gelmezdi.` })),
  frame('B2', 'advice', 999, [V], ([v]) => ({ en: `Me cuesta ${v.inf} con regularidad.`, tr: `Düzenli olarak ${v.trInf} bana zor geliyor.` })),
  frame('C1', 'describing', 600, [NOUNS, ASER], ([n, a]) => ({ en: `Me sorprende lo ${agree(a, n)} que es ${n.def} ${n.w} en realidad.`, tr: `${cap(n.tr)} gerçekte ne kadar ${a.tr}, bu beni şaşırtıyor.` })),
  frame('C1', 'describing', 600, [NOUNS, ASER], ([n, a]) => ({ en: `No se debería dar por sentado que ${n.def} ${n.w} siempre es tan ${agree(a, n)}.`, tr: `${cap(n.tr)} her zaman bu kadar ${a.tr} olur diye varsaymamak gerek.` })),
  frame('C1', 'describing', 600, [NOUNS, ASER], ([n, a]) => ({ en: `Queda por ver si ${n.def} ${n.w} es realmente tan ${agree(a, n)}.`, tr: `${cap(n.tr)} gerçekten bu kadar ${a.tr} mı, şüpheli.` })),
  frame('C1', 'advice', 999, [V], ([v]) => ({ en: `Sería muy sensato ${v.inf} con regularidad.`, tr: `Düzenli olarak ${v.trInf} gerçekten mantıklı olurdu.` })),
  frame('C1', 'advice', 999, [V], ([v]) => ({ en: `Soy consciente de que debería ${v.inf} más a menudo.`, tr: `Daha sık ${v.trInf} gerektiğinin farkındayım.` })),
  frame('C2', 'describing', 600, [NOUNS, ASER], ([n, a]) => ({ en: `Difícilmente se podría afirmar que ${n.def} ${n.w} sea particularmente ${agree(a, n)}.`, tr: `${cap(n.tr)} özellikle ${a.tr} denemez pek.` })),
  frame('C2', 'describing', 600, [NOUNS, ASER], ([n, a]) => ({ en: `Es innegable que ${n.def} ${n.w} es notablemente ${agree(a, n)}.`, tr: `${cap(n.tr)} dikkat çekici derecede ${a.tr}, bu inkar edilemez.` })),
  frame('C2', 'describing', 500, [OWNABLE, ASER], ([n, a]) => ({ en: `Rara vez he visto ${n.ind} ${n.w} tan ${agree(a, n)}.`, tr: `Nadiren bu kadar ${a.tr} bir ${n.tr} gördüm.` })),
  frame('C2', 'plans', 999, [V], ([v]) => ({ en: `Visto en retrospectiva, tendría que ${v.inf} mucho más a menudo.`, tr: `Geriye dönüp bakınca çok daha sık ${v.trInf} gerekirmiş.` }))
];

let _bank = null;

export function buildShortsBank() {
  if (_bank) return _bank;
  const all = [];
  FRAMES.forEach((f, fi) => {
    const sentences = expandFrame(f, 1000 + fi * 7919);
    sentences.forEach((s, si) => all.push({ ...s, id: `s${fi}_${si}` }));
  });
  DAILY.forEach((d, i) => all.push({
    en: d.t, tr: d.tr, level: d.level, topic: 'daily',
    words: d.t.split(/\s+/).length, id: `d${i}`
  }));
  const seen = new Set();
  const deduped = all.filter(s => {
    const k = s.en.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  deduped.sort((a, b) => levelRank(a.level) - levelRank(b.level));
  _bank = deduped;
  return _bank;
}

export function levelBands() {
  const bank = buildShortsBank();
  const bands = {};
  LEVEL_ORDER.forEach(lv => { bands[lv] = { start: -1, count: 0 }; });
  bank.forEach((s, i) => {
    if (bands[s.level].start === -1) bands[s.level].start = i;
    bands[s.level].count++;
  });
  return bands;
}

export function levelAtIndex(i) {
  const bank = buildShortsBank();
  const s = bank[Math.max(0, Math.min(bank.length - 1, i))];
  return s ? s.level : 'A0';
}

export function shortsCount() {
  return buildShortsBank().length;
}

let _byLevel = null;
export function sentencesForLevel(level) {
  if (!_byLevel) {
    _byLevel = {};
    LEVEL_ORDER.forEach(lv => { _byLevel[lv] = []; });
    for (const s of buildShortsBank()) _byLevel[s.level].push(s);
  }
  return _byLevel[level] || [];
}

export function shortForLevel(level, cursor) {
  const list = sentencesForLevel(level);
  if (!list.length) return buildShortsBank()[0];
  return list[cursor % list.length];
}
