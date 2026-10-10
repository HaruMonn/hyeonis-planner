import { PHASES } from '../data.js';

export default function PlannerTab() {
  return (
    <div className="flex flex-col gap-4">
      {PHASES.map((p) => (
        <div key={p.months} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className={`${p.headerBg} px-5 py-3`}>
            <span className="text-white font-black text-sm">{p.months} · {p.title}</span>
          </div>
          <div className="p-4">
            <div className="text-xs text-slate-400 font-bold mb-3">{p.desc}</div>
            <div className="flex flex-col gap-2">
              {p.days.map((d) => (
                <div
                  key={d.day}
                  className={`flex items-start gap-3 rounded-xl px-3 py-2.5 ${d.rest
                    ? 'bg-slate-50 border border-dashed border-slate-200'
                    : 'bg-slate-50 border border-slate-100'}`}
                >
                  <span className={`shrink-0 text-[13px] font-black w-14 ${d.rest ? 'text-slate-400' : 'text-slate-700'}`}>{d.day}</span>
                  <span className={`text-[13px] leading-relaxed ${d.rest ? 'text-slate-400' : 'text-slate-600'}`}>{d.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
