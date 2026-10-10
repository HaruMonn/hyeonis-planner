import { GUIDE_1CHA, GUIDE_2CHA, SUBJECT_RATIO } from '../data.js';

function GuideCard({ title, guides }) {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
      <h3 className="text-base font-black text-slate-800 mb-3">{title}</h3>
      <div className="flex flex-col gap-3">
        {guides.map((g) => (
          <div key={g.subject} className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
            <div className="text-sm font-black text-teal-600 mb-1">{g.subject}</div>
            {g.items.map((it, i) => (
              <div key={i} className="text-[13px] text-slate-600 leading-relaxed">· {it}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GuideTab() {
  return (
    <div className="flex flex-col gap-4">
      <GuideCard title="1차 과목" guides={GUIDE_1CHA} />
      <GuideCard title="2차 과목" guides={GUIDE_2CHA} />
      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
        <h3 className="text-base font-black text-slate-800 mb-4">과목 비중</h3>
        <div className="flex flex-col gap-3">
          {SUBJECT_RATIO.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-[13px] mb-1.5">
                <span className="font-bold text-slate-700">{s.name}</span>
                <span className="text-slate-400 font-bold">{s.pct}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-2 rounded-full ${s.bar}`} style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
