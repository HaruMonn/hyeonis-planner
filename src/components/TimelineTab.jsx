const WHO = {
  buyer: { label: '구매자', cls: 'bg-blue-100 text-blue-700' },
  seller: { label: '판매자', cls: 'bg-slate-200 text-slate-600' },
  wife: { label: '와이프', cls: 'bg-purple-100 text-purple-700' },
  staff: { label: '전직원', cls: 'bg-amber-100 text-amber-700' },
};

const CHAN = {
  '당근': 'bg-orange-100 text-orange-700',
  '문자': 'bg-emerald-100 text-emerald-700',
};

function DayCard({ day }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 mb-1 flex-wrap">
        <span className="text-sm font-black text-slate-800">
          {day.date}{day.dow ? ` (${day.dow})` : ''}
        </span>
        {day.channels.map((c) => (
          <span key={c} className={`text-[10px] font-black rounded-md px-1.5 py-0.5 ${CHAN[c] || 'bg-slate-100 text-slate-500'}`}>{c}</span>
        ))}
      </div>
      <h3 className="text-[15px] font-black text-slate-800 mb-4">{day.title}</h3>
      <div className="border-l-2 border-slate-200 ml-1 pl-4 flex flex-col gap-3">
        {day.events.map((e, i) => {
          if (e.who === 'note') {
            return (
              <div key={i} className="text-[11.5px] text-slate-400 bg-slate-50 rounded-xl px-3 py-2 leading-relaxed">
                ※ {e.text}
              </div>
            );
          }
          const w = WHO[e.who] || WHO.seller;
          return (
            <div key={i} className="relative">
              <span className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ${e.key ? 'bg-rose-500' : 'bg-violet-400'}`} />
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                {e.t ? <span className="text-[11px] font-black text-slate-400 tabular-nums">{e.t}</span> : null}
                <span className={`text-[10px] font-black rounded-full px-2 py-0.5 ${w.cls}`}>{w.label}</span>
              </div>
              <p className={`text-[13px] leading-relaxed ${e.key ? 'font-bold text-slate-800' : 'text-slate-600'}`}>{e.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TimelineTab({ data }) {
  const days = data.CASE_TIMELINE || [];
  const notes = data.CASE_TIMELINE_NOTES || [];
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
        <h3 className="text-base font-black text-slate-800 mb-1">부쉐론 콰트로 목걸이 사건</h3>
        <p className="text-xs text-slate-400 font-bold mb-4">2026-09-24 ~ 2026-10-13 · 증거 스크린샷 기반</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
            <div className="text-base font-black text-slate-800">350만원</div>
            <div className="text-[11px] text-slate-400 font-bold">송금 총액 (9/24)</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
            <div className="text-base font-black text-slate-800">380만원</div>
            <div className="text-[11px] text-slate-400 font-bold">환불 합의액</div>
          </div>
          <div className="bg-rose-50 rounded-2xl p-3 text-center border border-rose-100">
            <div className="text-base font-black text-rose-600">10만원</div>
            <div className="text-[11px] text-slate-400 font-bold">실제 입금액</div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
            <div className="text-base font-black text-slate-800">합의 결렬</div>
            <div className="text-[11px] text-slate-400 font-bold">고소 접수 완료</div>
          </div>
        </div>
      </div>

      {days.map((d) => (
        <DayCard key={d.date + d.title} day={d} />
      ))}

      {notes.length > 0 && (
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
          <h3 className="text-base font-black text-slate-800 mb-3">핵심 쟁점 메모</h3>
          <ol className="flex flex-col gap-2.5 list-decimal list-inside">
            {notes.map((n, i) => (
              <li key={i} className="text-[13px] text-slate-600 leading-relaxed marker:font-black marker:text-violet-500">{n}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
