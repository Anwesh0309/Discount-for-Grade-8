import React, { useState, useEffect } from 'react';
import { BgSymbols } from '../components/TopNav.jsx';
import { narrate, stopNarration } from '../utils/audio.js';
import { simulateStationIntro, simulateActivityGuidance, simulateActivityHint, feedbackNarration } from '../utils/narration.js';
import { SaleTag, SaveBar, Chain, money, C_PAY, C_SAVE } from '../components/DiscountDiagram.jsx';

/* =========================================================================
   SIMULATION STATIONS — Discount (Grade 8)
   Station 1 · Sale Sticker Studio → SEE how % off shrinks the price
   Station 2 · Checkout Counter    → TRY it: scan items, build the receipt
   Station 3 · Deal Detective      → APPLY: stacked deals, reverse & tax
   ========================================================================= */

const parseVal = str => {
  const s = String(str ?? '').replace(/[$,%\s]/g, '');
  return s === '' ? NaN : Number(s);
};
const near = (str, want, tol = 0.006) => { const v = parseVal(str); return Number.isFinite(v) && Math.abs(v - want) <= tol; };
const r2 = v => Math.round(v * 100) / 100;

/* ------------------------------------------------------------------------
   STATION DATA
   ------------------------------------------------------------------------ */
const STATION_ACTIVITIES = {
  1: [
    {
      id: 1,
      title: "Activity 1: Headphone Sale",
      desc: "Headphones are marked at $80. The shop wants the sale price to be $60. Turn the discount dial to make the right sale sticker.",
      icon: "🎧",
      marked: 80, target: 60,
      fields: [['save', 'Amount saved ($)', 20], ['mult', 'Multiplier (what you pay)', 0.75]],
      hint: "$80 − $60 = $20 off. 20 ÷ 80 = 0.25, so it's 25% off. You pay 75%, so the multiplier is 0.75."
    },
    {
      id: 2,
      title: "Activity 2: Bike Blowout",
      desc: "A bike is marked at $250 and must sell for $175. Find the discount on the dial, then work out the savings.",
      icon: "🚲",
      marked: 250, target: 175,
      fields: [['save', 'Amount saved ($)', 75], ['mult', 'Multiplier (what you pay)', 0.7]],
      hint: "$250 − $175 = $75 off. 75 ÷ 250 = 0.3 → 30% off. You pay 70%."
    },
    {
      id: 3,
      title: "Activity 3: Jacket Clearance",
      desc: "A winter jacket marked at $120 is cleared for $78. What percentage off is that?",
      icon: "🧥",
      marked: 120, target: 78,
      fields: [['save', 'Amount saved ($)', 42], ['mult', 'Multiplier (what you pay)', 0.65]],
      hint: "$120 − $78 = $42 off. 42 ÷ 120 = 0.35 → 35% off."
    }
  ],
  2: [
    {
      id: 1,
      title: "Activity 1: Weekend Outfit",
      desc: "Mia brings two items to the checkout. Scan them, find each sale price, then work out her savings.",
      icon: "👕",
      items: [
        { name: 'T-shirt', icon: '👕', marked: 40, off: 10 },
        { name: 'Jeans', icon: '👖', marked: 60, off: 30 }
      ],
      totals: [['paid', 'Total paid ($)'], ['saved', 'Total saved ($)'], ['pct', 'Overall discount (%)']],
      hint: "T-shirt: $40 × 0.9. Jeans: $60 × 0.7. Saved = $100 − total paid. Overall % = saved ÷ $100 × 100."
    },
    {
      id: 2,
      title: "Activity 2: Sports Day",
      desc: "Leo buys trainers and socks in a sale. Scan the items and complete the receipt.",
      icon: "👟",
      items: [
        { name: 'Trainers', icon: '👟', marked: 90, off: 20 },
        { name: 'Socks', icon: '🧦', marked: 10, off: 50 }
      ],
      totals: [['paid', 'Total paid ($)'], ['saved', 'Total saved ($)'], ['pct', 'Overall discount (%)']],
      hint: "Trainers: $90 × 0.8. Socks: $10 × 0.5. The marked prices add up to $100."
    },
    {
      id: 3,
      title: "Activity 3: Back to School",
      desc: "Three items, three different discounts! Scan them all and find the overall discount on the whole cart.",
      icon: "🎒",
      items: [
        { name: 'Backpack', icon: '🎒', marked: 30, off: 10 },
        { name: 'Desk lamp', icon: '💡', marked: 50, off: 40 },
        { name: 'Pencil case', icon: '✏️', marked: 20, off: 25 }
      ],
      totals: [['paid', 'Total paid ($)'], ['saved', 'Total saved ($)'], ['pct', 'Overall discount (%)']],
      hint: "$30 × 0.9, $50 × 0.6 and $20 × 0.75. The overall % is NOT the average of 10%, 40% and 25%!"
    }
  ],
  3: [
    {
      id: 1,
      title: "Activity 1: Leo's Sneakers",
      desc: "Shop A: 40% off $200. Shop B: 20% off $200, then another 20% off the NEW price. Follow both chains.",
      icon: "👟",
      rows: [
        { label: 'Shop A', nodes: [{ given: 200 }, { key: 'a' }], edges: ['−40% (×0.6)'] },
        { label: 'Shop B', nodes: [{ given: 200 }, { key: 'b1' }, { key: 'b2' }], edges: ['×0.8', '×0.8'] }
      ],
      fields: [['a', 'Shop A price ($)', 120], ['b1', 'Shop B after 1st discount ($)', 160], ['b2', 'Shop B final price ($)', 128], ['pct', "Shop B's REAL total discount (%)", 36]],
      choice: { q: 'Which shop is cheaper?', options: ['Shop A', 'Shop B'], answer: 'Shop A' },
      done: "🎉 Shop A: $120. Shop B: $128 (0.8 × 0.8 = 0.64 → only 36% off). Shop A wins!",
      hint: "200 × 0.6 = 120. 200 × 0.8 = 160, then 160 × 0.8 = 128. Saving $72 out of $200 is 36%."
    },
    {
      id: 2,
      title: "Activity 2: Mystery Marked Price",
      desc: "Ava paid $45 for a video game in a '25% off' sale. The price tag is torn off! What was the marked price?",
      icon: "🎮",
      rows: [{ label: 'Game', nodes: [{ key: 'mp' }, { given: 45 }], edges: ['−25% (×0.75)'] }],
      fields: [['mult', 'Multiplier for 25% off', 0.75], ['mp', 'Marked price ($)', 60], ['save', 'Amount Ava saved ($)', 15]],
      done: "🎉 $45 ÷ 0.75 = $60. Adding 25% of $45 back would give $56.25 — wrong!",
      hint: "Marked × 0.75 = 45, so marked = 45 ÷ 0.75."
    },
    {
      id: 3,
      title: "Activity 3: Discount vs Tax",
      desc: "An $80 jacket has 15% off, and there is 10% sales tax. Does it matter which is applied first? Follow both chains!",
      icon: "🧾",
      rows: [
        { label: 'Discount first', nodes: [{ given: 80 }, { key: 'd1' }, { key: 'd2' }], edges: ['×0.85', '×1.1'] },
        { label: 'Tax first', nodes: [{ given: 80 }, { key: 't1' }, { key: 't2' }], edges: ['×1.1', '×0.85'] }
      ],
      fields: [['d1', 'After discount ($)', 68], ['d2', 'Then add tax ($)', 74.8], ['t1', 'After tax ($)', 88], ['t2', 'Then discount ($)', 74.8]],
      done: "🎉 Both orders give $74.80, because 80 × 0.85 × 1.1 = 80 × 1.1 × 0.85!",
      hint: "80 × 0.85 = 68, then 68 × 1.1. And 80 × 1.1 = 88, then 88 × 0.85."
    }
  ]
};

export function SimulatePhase({ muted, onNext }) {
  const [station, setStation] = useState(1);
  const [actIdx, setActIdx] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState(null);

  // Station 1
  const [pct, setPct] = useState(0);
  const [ans1, setAns1] = useState({});
  const [ok1, setOk1] = useState({});

  // Station 2
  const [scanned, setScanned] = useState([]);
  const [ans2, setAns2] = useState({});
  const [ok2, setOk2] = useState({});

  // Station 3
  const [ans3, setAns3] = useState({});
  const [ok3, setOk3] = useState({});
  const [pick3, setPick3] = useState(null);

  const currentActivity = STATION_ACTIVITIES[station][actIdx];
  const say = list => narrate(list, !muted);

  useEffect(() => {
    setShowHint(false);
    setFeedback(null);
    setPct(0);
    setAns1({});
    setOk1({});
    setScanned([]);
    setAns2({});
    setOk2({});
    setAns3({});
    setOk3({});
    setPick3(null);
  }, [station, actIdx]);

  useEffect(() => {
    stopNarration();
    say(simulateActivityGuidance(station, actIdx));
    return () => stopNarration();
  }, [station, actIdx, muted]);

  /* ---------- Station 1: Sale Sticker Studio ---------- */
  const s1 = station === 1 ? currentActivity : null;
  const sale1 = s1 ? r2((s1.marked * (100 - pct)) / 100) : 0;
  const hit1 = s1 ? Math.abs(sale1 - s1.target) < 0.005 : false;
  const turn = d => { setPct(p => Math.max(0, Math.min(90, p + d))); setFeedback(null); };
  const check1 = () => {
    const ok = {};
    s1.fields.forEach(([k, , v]) => { ok[k] = near(ans1[k], v, 0.005); });
    setOk1(ok);
    if (hit1 && Object.values(ok).every(Boolean)) {
      setFeedback({ success: true, text: `🎉 ${pct}% off ${money(s1.marked)} = ${money(s1.target)}. You save ${money(s1.marked - s1.target)}!` });
      say(feedbackNarration.splitDone());
    } else {
      setFeedback({ success: false, text: !hit1 ? `The sale price must be ${money(s1.target)}. Keep turning the dial!` : 'Sticker is right! Now check the red boxes.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 2: Checkout Counter ---------- */
  const s2 = station === 2 ? currentActivity : null;
  const sales2 = s2 ? s2.items.map(it => r2((it.marked * (100 - it.off)) / 100)) : [];
  const markedTotal = s2 ? s2.items.reduce((a, it) => a + it.marked, 0) : 0;
  const paid2 = sales2.reduce((a, b) => a + b, 0);
  const totalsWant = { paid: paid2, saved: markedTotal - paid2, pct: ((markedTotal - paid2) / markedTotal) * 100 };
  const allScanned = s2 ? scanned.length === s2.items.length : false;
  const scan = i => { if (!scanned.includes(i)) { setScanned(s => [...s, i]); setFeedback(null); } };
  const check2 = () => {
    const ok = {};
    s2.items.forEach((_, i) => { ok[i] = near(ans2[i], sales2[i]); });
    s2.totals.forEach(([k]) => { ok[k] = near(ans2[k], totalsWant[k], k === 'pct' ? 0.01 : 0.006); });
    setOk2(ok);
    if (Object.values(ok).every(Boolean)) {
      setFeedback({ success: true, text: `🎉 Paid ${money(paid2)} instead of ${money(markedTotal)} — saved ${money(markedTotal - paid2)} (${r2(totalsWant.pct)}% overall)!` });
      say(feedbackNarration.buildDone());
    } else {
      setFeedback({ success: false, text: s2.items.some((_, i) => !ok[i]) ? 'Check the red item prices: marked price × (1 − discount).' : 'Overall % = total saved ÷ total MARKED price × 100.' });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Station 3: Deal Detective ---------- */
  const s3 = station === 3 ? currentActivity : null;
  const val3 = k => s3.fields.find(f => f[0] === k)[2];
  const rows3 = s3 ? s3.rows.map(r => ({
    ...r,
    nodes: r.nodes.map(n => (n.given !== undefined ? { label: money(n.given) } : { label: ok3[n.key] ? money(val3(n.key)) : '?', ok: ok3[n.key] }))
  })) : [];
  const check3 = () => {
    const ok = {};
    s3.fields.forEach(([k, , v]) => { ok[k] = near(ans3[k], v, 0.005); });
    setOk3(ok);
    const choiceOk = !s3.choice || pick3 === s3.choice.answer;
    if (Object.values(ok).every(Boolean) && choiceOk) {
      setFeedback({ success: true, text: s3.done });
      say(feedbackNarration.reverseDone());
    } else {
      setFeedback({ success: false, text: !Object.values(ok).every(Boolean) ? 'Check the red boxes. Multiply along the arrows, divide to go backwards.' : `Now answer: ${s3.choice.q}` });
      say(feedbackNarration.tryAgain());
    }
  };

  /* ---------- Navigation ---------- */
  const nextActivity = () => {
    stopNarration();
    if (actIdx < 2) {
      setActIdx(i => i + 1);
    } else if (station < 3) {
      setStation(s => s + 1);
      setActIdx(0);
    } else {
      onNext();
    }
  };

  const prevActivity = () => {
    stopNarration();
    if (actIdx > 0) {
      setActIdx(i => i - 1);
    } else if (station > 1) {
      setStation(s => s - 1);
      setActIdx(2);
    }
  };

  const STATIONS = [
    { n: 1, icon: '🏷️', name: 'Station 1: Sale Sticker Studio', sub: 'Dial in the % off' },
    { n: 2, icon: '🧾', name: 'Station 2: Checkout Counter', sub: 'Scan & build the receipt' },
    { n: 3, icon: '🕵️', name: 'Station 3: Deal Detective', sub: 'Stacked deals, reverse & tax' }
  ];

  const inputCls = ok =>
    `bg-[#14082c] border-2 rounded-xl px-3 py-2 text-white font-display font-900 text-base text-center outline-none w-24 shadow-inner ${
      ok === true ? 'border-emerald-400' : ok === false ? 'border-rose-400' : 'border-cyan-400/70 focus:border-amber-400'
    }`;

  const toggleHint = () => {
    setShowHint(h => {
      const next = !h;
      if (next) {
        say(simulateActivityHint(station, actIdx));
      } else {
        stopNarration();
      }
      return next;
    });
  };

  const repeatGuidance = () => {
    say(simulateActivityGuidance(station, actIdx));
  };

  const hintBtn = (
    <div className="flex items-center gap-2">
      <button
        onClick={repeatGuidance}
        title="Hear guidance again"
        className="bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200 font-display font-900 text-xs px-2.5 py-2 rounded-xl transition cursor-pointer"
      >
        🔊 Listen
      </button>
      <button
        onClick={toggleHint}
        className="bg-purple-900/80 hover:bg-purple-800 border border-purple-400/50 text-purple-200 font-display font-900 text-xs px-3 py-2 rounded-xl transition cursor-pointer"
      >
        💡 {showHint ? 'Hide Hint' : 'Hint'}
      </button>
    </div>
  );

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center p-3 sm:p-5 relative overflow-hidden select-none z-10">
      <BgSymbols />

      {/* Main Simulation Stations Glass Card Container */}
      <div className="w-full max-w-6xl max-h-[94vh] bg-[#160b36]/95 border-2 border-purple-400/40 rounded-3xl p-5 sm:p-7 shadow-2xl backdrop-blur-md flex flex-col items-center fade-in-up z-20 my-auto overflow-hidden">
        {/* Cyan Accent Bar */}
        <div className="w-24 h-2 bg-cyan-400 rounded-full mb-2.5 shadow-[0_0_18px_rgba(56,189,248,0.85)] shrink-0" />

        {/* Card Header Title */}
        <h2 className="font-display font-900 text-2xl sm:text-3xl text-white flex items-center gap-3 mb-3.5 shrink-0">
          <span className="text-3xl sm:text-4xl">🧪</span>
          <span>Simulation Stations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-7 w-full items-stretch flex-1 min-h-0 overflow-hidden">
          {/* Left Column: Station Sidebar Tabs */}
          <div className="md:col-span-4 flex flex-col justify-between gap-3 shrink-0">
            <div className="flex flex-col gap-3.5">
              {STATIONS.map(s => (
                <button
                  key={s.n}
                  onClick={() => {
                    stopNarration();
                    setStation(s.n);
                    setActIdx(0);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border-2 flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    station === s.n
                      ? 'border-cyan-400 bg-[#1e2852] text-white shadow-[0_0_22px_rgba(56,189,248,0.4)] scale-[1.02]'
                      : 'border-purple-500/25 bg-[#13082b]/80 text-slate-300 hover:border-cyan-400/50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0 ${
                      station === s.n ? 'bg-cyan-500/30 text-cyan-300' : 'bg-white/10 text-white'
                    }`}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-display font-900 text-base sm:text-lg leading-tight">{s.name}</p>
                      <p className="text-xs font-extrabold text-slate-300 mt-0.5">{s.sub}</p>
                    </div>
                  </div>
                  <span className="text-base">🔓</span>
                </button>
              ))}
            </div>

            {/* Bottom Left CTA Button */}
            <button
              onClick={onNext}
              className="btn-gold font-display font-900 text-base sm:text-lg py-4 px-6 shadow-[0_0_25px_rgba(250,204,21,0.65)] hover:scale-105 transition mt-2 w-full flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>Go to Practice Phase!</span>
              <span>→</span>
            </button>
          </div>

          {/* Right Column: Interactive Simulation Box */}
          <div className="md:col-span-8 bg-[#13092e]/95 border-2 border-purple-400/35 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-inner flex-1 min-h-0 overflow-hidden">
            <div className="flex flex-col flex-1 min-h-0 justify-between">
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-3 shrink-0 gap-3">
                <h3 className="font-display font-900 text-xl sm:text-2xl text-cyan-300 flex items-center gap-3">
                  <span className="text-3xl sm:text-4xl">{currentActivity.icon}</span>
                  <span>{currentActivity.title}</span>
                </h3>
                <span className="font-display font-900 text-xs sm:text-sm text-slate-200 bg-white/10 px-4 py-1 rounded-full border border-white/15 shrink-0">
                  Activity {actIdx + 1} of 3
                </span>
              </div>

              {/* Activity Description */}
              <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-extrabold mb-3 shrink-0">
                {currentActivity.desc}
              </p>

              {/* ===================== STATION 1: SALE STICKER STUDIO ===================== */}
              {station === 1 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-2 overflow-y-auto">
                    <div className="flex items-center justify-between shrink-0">
                      <span className="bg-[#14082c] rounded-full px-3 py-1 border border-white/10 text-sm font-900 text-amber-300">{s1.icon} Target sale price: {money(s1.target)}</span>
                    </div>
                    <svg viewBox="12 22 336 196" className="w-full flex-1 min-h-[120px]">
                      <SaleTag cx={180} cy={85} marked={money(s1.marked)} off={pct ? `${pct}%` : null} sale={money(sale1)} w={210} h={110} />
                      <SaveBar pct={pct} y={175} h={26} />
                    </svg>
                    <div className="flex items-center justify-center gap-1.5 shrink-0">
                      {[-5, -1].map(d => <button key={d} onClick={() => turn(d)} className="w-10 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-900 cursor-pointer">{d}%</button>)}
                      <input type="range" min="0" max="90" value={pct} onChange={e => { setPct(Number(e.target.value)); setFeedback(null); }} className="w-32 sm:w-44 accent-pink-400" />
                      {[1, 5].map(d => <button key={d} onClick={() => turn(d)} className="w-10 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-900 cursor-pointer">+{d}%</button>)}
                      <span className="w-16 text-center font-display font-900 text-lg text-pink-300">{pct}% off</span>
                    </div>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Make the sticker</p>
                    <div className={`rounded-xl px-3 py-1.5 border-2 text-xs font-900 ${hit1 ? 'bg-emerald-950/60 border-emerald-400/60 text-emerald-200' : 'bg-rose-950/40 border-rose-400/40 text-rose-200'}`}>{hit1 ? '✔' : '✗'} Sale price = {money(s1.target)}</div>
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Work out the savings</p>
                    {s1.fields.map(([k, lab]) => (
                      <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-300 flex-1 leading-tight">{lab}</span>
                        <input type="number" value={ans1[k] ?? ''} onChange={e => setAns1(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check1()} className={inputCls(ok1[k]) + ' !w-20 !py-0.5'} />
                      </div>
                    ))}
                    <div className="flex gap-2">
                      <button onClick={check1} className="btn-gold flex-1 text-sm font-900 px-3 py-2">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== STATION 2: CHECKOUT COUNTER ===================== */}
              {station === 2 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col gap-2 overflow-y-auto">
                    <div className="flex gap-2 justify-center shrink-0">
                      {s2.items.map((it, i) => (
                        <button key={it.name} onClick={() => scan(i)}
                          className={`relative flex-1 max-w-[140px] rounded-2xl px-2 py-2 border-2 flex flex-col items-center transition cursor-pointer ${scanned.includes(i) ? 'bg-emerald-950/50 border-emerald-400/60 opacity-70' : 'bg-[#14082c] border-cyan-400/60 hover:-translate-y-1'}`}>
                          <span className="text-3xl">{it.icon}</span>
                          <span className="text-[11px] font-900 text-white">{it.name}</span>
                          <span className="text-xs font-900 text-amber-300">{money(it.marked)}</span>
                          <span className="absolute -top-2 -right-2 rounded-full px-1.5 py-0.5 text-[10px] font-900 text-white" style={{ background: C_SAVE }}>−{it.off}%</span>
                          <span className="text-[10px] font-900 text-cyan-300 mt-0.5">{scanned.includes(i) ? '✔ scanned' : 'tap to scan'}</span>
                        </button>
                      ))}
                    </div>
                    <div className="flex-1 min-h-0 bg-[#f8fafc] text-slate-900 rounded-xl px-3 py-2 font-mono text-xs shadow-inner overflow-y-auto">
                      <p className="text-center font-900 tracking-widest">🧾 RECEIPT</p>
                      <p className="text-center text-[10px] text-slate-500 mb-1">- - - - - - - - - - - - - - - - -</p>
                      {scanned.length === 0 && <p className="text-center text-slate-400">Scan items to start…</p>}
                      {scanned.map(i => {
                        const it = s2.items[i];
                        return (
                          <div key={i} className="mb-1">
                            <div className="flex justify-between font-900"><span>{it.name}</span><span className="line-through text-slate-400">{money(it.marked)}</span></div>
                            <div className="flex justify-between"><span className="text-pink-600">  {it.off}% off</span><span className="font-900">{ok2[i] ? money(sales2[i]) : '$ ?'}</span></div>
                          </div>
                        );
                      })}
                      {allScanned && (
                        <>
                          <p className="text-center text-[10px] text-slate-500">- - - - - - - - - - - - - - - - -</p>
                          <div className="flex justify-between font-900"><span>TOTAL</span><span>{ok2.paid ? money(paid2) : '$ ?'}</span></div>
                          <div className="flex justify-between text-pink-600 font-900"><span>YOU SAVED</span><span>{ok2.saved ? money(markedTotal - paid2) : '$ ?'}</span></div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                    <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">① Sale price of each item</p>
                    {scanned.length === 0 && <p className="text-xs font-bold text-slate-400 italic">Tap each item to scan it.</p>}
                    {scanned.map(i => (
                      <div key={i} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-300 flex-1 leading-tight">{s2.items[i].icon} {s2.items[i].name} ($)</span>
                        <input type="number" value={ans2[i] ?? ''} onChange={e => setAns2(a => ({ ...a, [i]: e.target.value }))} className={inputCls(ok2[i]) + ' !w-20 !py-0.5'} />
                      </div>
                    ))}
                    {allScanned && (
                      <>
                        <p className="text-xs font-900 text-cyan-300 uppercase tracking-wider">② Receipt totals</p>
                        {s2.totals.map(([k, lab]) => (
                          <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-emerald-400/40 flex items-center gap-2">
                            <span className="text-xs font-900 text-emerald-200 flex-1 leading-tight">{lab}</span>
                            <input type="number" value={ans2[k] ?? ''} onChange={e => setAns2(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check2()} className={inputCls(ok2[k]) + ' !w-20 !py-0.5'} />
                          </div>
                        ))}
                      </>
                    )}
                    <div className="flex gap-2">
                      <button onClick={check2} disabled={!allScanned} className="btn-gold flex-1 text-sm font-900 px-3 py-2 disabled:opacity-40">{allScanned ? 'Check ✨' : 'Scan all items'}</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* ===================== STATION 3: DEAL DETECTIVE ===================== */}
              {station === 3 && (
                <div className="flex gap-4 bg-[#1e1342]/95 border-2 border-cyan-400/40 rounded-2xl p-3 sm:p-4 shadow-xl flex-1 min-h-0">
                  <div className="flex-1 min-w-0 min-h-0 flex flex-col items-center justify-center">
                    <svg viewBox={`0 0 360 ${rows3.length * 100 + 10}`} className="w-full max-h-full">
                      {rows3.map((r, i) => (
                        <g key={i}>
                          <text x="10" y={i * 100 + 22} fill={i ? C_PAY : C_SAVE} fontSize="14" fontWeight="900">{r.label}</text>
                          <Chain nodes={r.nodes} edges={r.edges} y={i * 100 + 46} fs={15} />
                        </g>
                      ))}
                    </svg>
                  </div>

                  <div className="w-60 sm:w-64 shrink-0 flex flex-col gap-1 min-h-0 overflow-y-auto">
                                        {s3.fields.map(([k, lab]) => (
                      <div key={k} className="bg-[#14082c] rounded-xl px-2 py-1 border-2 border-amber-400/40 flex items-center gap-2">
                        <span className="text-xs font-900 text-amber-200 flex-1 leading-tight">{lab}</span>
                        <input type="number" value={ans3[k] ?? ''} onChange={e => setAns3(a => ({ ...a, [k]: e.target.value }))} onKeyDown={e => e.key === 'Enter' && check3()} className={inputCls(ok3[k]) + ' !w-20 !py-0.5'} />
                      </div>
                    ))}
                    {s3.choice && (
                      <div className="flex gap-1.5 items-center">
                        <span className="text-[11px] font-900 text-cyan-200 flex-1">{s3.choice.q}</span>
                        {s3.choice.options.map(o => (
                          <button key={o} onClick={() => { setPick3(o); setFeedback(null); }} className={`px-2 py-1 rounded-lg border-2 text-[11px] font-900 cursor-pointer ${pick3 === o ? 'bg-amber-400 text-slate-950 border-amber-200' : 'bg-white/5 text-white border-white/20'}`}>{o}</button>
                        ))}
                      </div>
                    )}
                    <div className="flex gap-2">
                      <button onClick={check3} className="btn-gold flex-1 text-sm font-900 px-3 py-2">Check ✨</button>
                      {hintBtn}
                    </div>
                  </div>
                </div>
              )}

              {/* Hint + feedback strip */}
              {showHint && (
                <div className="p-2.5 mt-2 bg-amber-950/90 border border-amber-400/50 text-amber-200 rounded-xl text-xs sm:text-sm font-bold w-full text-center fade-in-up shrink-0">
                  💡 {currentActivity.hint}
                </div>
              )}
              {feedback && (
                <div className={`p-2.5 mt-2 rounded-2xl text-sm font-900 w-full text-center shadow-xl shrink-0 fade-in-up ${
                  feedback.success ? 'bg-emerald-950/90 text-emerald-300 border-2 border-emerald-400/60' : 'bg-rose-950/90 text-rose-300 border-2 border-rose-400/60'
                }`}>
                  {feedback.text}
                </div>
              )}
            </div>

            {/* Bottom Activity Step Buttons */}
            <div className="flex items-center justify-between border-t border-white/15 pt-3 mt-3 shrink-0">
              <button
                onClick={prevActivity}
                disabled={station === 1 && actIdx === 0}
                className="bg-[#1c0d3a]/90 hover:bg-[#2c1859] border-2 border-white/25 text-white font-display font-900 text-sm sm:text-base px-6 py-2.5 rounded-full cursor-pointer transition disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
              >
                ← Previous Activity
              </button>

              <button
                onClick={nextActivity}
                className="btn-gold text-sm sm:text-base font-900 px-8 py-2.5 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <span>{station === 3 && actIdx === 2 ? 'Go to Practice Phase' : 'Next Activity'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
