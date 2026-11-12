import React from 'react';

/* =========================================================================
   DISCOUNT DIAGRAM — visuals for discounts.
   • SaleTag    marked price crossed out, % off badge, sale price
   • SaveBar    marked price bar split into "you pay" and "you save" (10% blocks)
   • Chain      value boxes joined by multiplier arrows
   ========================================================================= */

export const C_PAY = '#38bdf8';
export const C_SAVE = '#f472b6';
export const money = v => {
  if (!Number.isFinite(v)) return '?';
  const r = Math.round(v * 100) / 100;
  return '$' + (Number.isInteger(r) ? r.toLocaleString('en-US') : r.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
};

/** Sale tag: marked price struck through, % off badge and sale price (strings). */
export function SaleTag({ cx = 180, cy = 100, marked, off, sale, w = 230, h = 120 }) {
  const x = cx - w / 2, y = cy - h / 2;
  return (
    <g>
      <path d={`M${x} ${y + h * 0.25} L${x + 28} ${y} L${x + w} ${y} L${x + w} ${y + h} L${x + 28} ${y + h} L${x} ${y + h * 0.75}Z`} fill="#14082c" stroke="#facc15" strokeWidth="3" />
      <circle cx={x + 30} cy={cy} r="7" fill="#facc15" />
      <text x={cx + 10} y={y + 36} fill="#94a3b8" fontSize="22" fontWeight="900" textAnchor="middle">{marked}</text>
      <line x1={cx - 34} y1={y + 29} x2={cx + 54} y2={y + 29} stroke="#f87171" strokeWidth="3" />
      <text x={cx + 10} y={y + 88} fill="#fff" fontSize="34" fontWeight="900" textAnchor="middle">{sale}</text>
      {off && (
        <g>
          <circle cx={x + w - 6} cy={y + 4} r="30" fill={C_SAVE} stroke="#fff" strokeWidth="2.5" />
          <text x={x + w - 6} y={y + 2} fill="#fff" fontSize="15" fontWeight="900" textAnchor="middle">{off}</text>
          <text x={x + w - 6} y={y + 18} fill="#fff" fontSize="11" fontWeight="900" textAnchor="middle">OFF</text>
        </g>
      )}
    </g>
  );
}

/** Bar of the marked price split into pay / save at `pct` percent off. */
export function SaveBar({ pct, x = 20, y = 30, w = 320, h = 34, payLabel = 'you pay', saveLabel = 'you save', fs = 12 }) {
  const payW = (w * (100 - pct)) / 100;
  return (
    <g>
      {[...Array(10)].map((_, i) => {
        const bx = x + (i * w) / 10, inPay = (i + 1) * 10 <= 100 - pct + 1e-9;
        const partial = !inPay && i * 10 < 100 - pct;
        return (
          <g key={i}>
            <rect x={bx} y={y} width={w / 10 - 3} height={h} rx="5" fill={C_SAVE} fillOpacity="0.25" stroke={C_SAVE} strokeDasharray="4 3" />
            {(inPay || partial) && <rect x={bx} y={y} width={partial ? ((100 - pct - i * 10) / 10) * (w / 10) - 1 : w / 10 - 3} height={h} rx="5" fill={C_PAY} fillOpacity="0.8" stroke={C_PAY} />}
          </g>
        );
      })}
      <text x={x + payW / 2} y={y + h + 18} fill={C_PAY} fontSize={fs} fontWeight="900" textAnchor="middle">{payLabel} {100 - pct}%</text>
      {pct > 0 && <text x={x + payW + (w - payW) / 2} y={y - 8} fill={C_SAVE} fontSize={fs} fontWeight="900" textAnchor="middle">{saveLabel} {pct}%</text>}
    </g>
  );
}

/** Chain of value boxes. nodes: [{ label, ok, caption }], edges: ['×0.8', ...] */
export function Chain({ nodes, edges, y = 80, w = 360, fs = 14 }) {
  const n = nodes.length;
  const bw = Math.min(92, (w - 20) / n - 26);
  const step = (w - 20 - bw) / Math.max(1, n - 1);
  const X = i => 10 + i * step;
  return (
    <g>
      <defs>
        <marker id="disc-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8Z" fill="#facc15" /></marker>
      </defs>
      {edges.map((e, i) => (
        <g key={i}>
          <line x1={X(i) + bw + 2} y1={y + 22} x2={X(i + 1) - 4} y2={y + 22} stroke="#facc15" strokeWidth="3" markerEnd="url(#disc-arrow)" />
          <text x={(X(i) + bw + X(i + 1)) / 2} y={y - 6} fill="#facc15" fontSize={fs - 2} fontWeight="900" textAnchor="middle">{e}</text>
        </g>
      ))}
      {nodes.map((nd, i) => (
        <g key={i}>
          <rect x={X(i)} y={y} width={bw} height="44" rx="12" fill={nd.ok ? '#064e3b' : '#14082c'} stroke={nd.ok ? '#4ade80' : nd.label === '?' ? '#f472b6' : '#a78bfa'} strokeWidth="2.5" />
          <text x={X(i) + bw / 2} y={y + 28} fill="#fff" fontSize={nd.label.length > 7 ? fs - 3 : fs} fontWeight="900" textAnchor="middle">{nd.label}</text>
          {nd.caption && <text x={X(i) + bw / 2} y={y + 62} fill="#c4b5fd" fontSize={fs - 3} fontWeight="800" textAnchor="middle">{nd.caption}</text>}
        </g>
      ))}
    </g>
  );
}

/** Practice diagram wrapper. */
export function DiscountDiagram({ diagramData, size = 180 }) {
  if (!diagramData) return null;
  const d = diagramData;
  let body = null;
  if (d.type === 'tag') body = <SaleTag cx={180} cy={105} marked={d.marked} off={d.off} sale={d.sale} />;
  else if (d.type === 'bar') body = <SaveBar pct={d.pct} y={80} />;
  else if (d.type === 'chain') body = <Chain nodes={d.nodes} edges={d.edges} y={70} />;
  else if (d.type === 'two') {
    body = (
      <g>
        <g transform="translate(-85 0) scale(1)"><SaleTag cx={180} cy={105} marked={d.a.marked} off={d.a.off} sale={d.a.sale} w={150} h={100} /></g>
        <g transform="translate(85 0)"><SaleTag cx={180} cy={105} marked={d.b.marked} off={d.b.off} sale={d.b.sale} w={150} h={100} /></g>
        <text x="95" y="185" fill="#f472b6" fontSize="14" fontWeight="900" textAnchor="middle">{d.a.name}</text>
        <text x="265" y="185" fill="#38bdf8" fontSize="14" fontWeight="900" textAnchor="middle">{d.b.name}</text>
      </g>
    );
  }
  if (!body) return null;
  return (
    <div className="flex items-center justify-center my-1">
      <svg width={size * 1.8} height={size} viewBox="0 0 360 200" className="max-w-full drop-shadow-[0_0_18px_rgba(250,204,21,0.25)]">
        {body}
      </svg>
    </div>
  );
}
