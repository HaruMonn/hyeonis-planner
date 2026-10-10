export default function TutoringTab({ data }) {
  const { TUTORING_SCHEDULE } = data;
  return (
    <div className="flex flex-col gap-3">
      {TUTORING_SCHEDULE.map((d) => (
        <div key={d.day} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className={`${d.headerBg} px-4 py-2`}>
            <span className="text-white font-black text-sm">{d.day}요일</span>
          </div>
          <div className="p-3 flex flex-col gap-2">
            {d.sessions.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className={`shrink-0 text-xs font-black rounded-lg px-2.5 py-1.5 whitespace-nowrap ${s.pill}`}>
                  {s.time}
                </span>
                <div className="min-w-0">
                  <div className="text-[13px] font-bold text-slate-700">{s.place}</div>
                  {s.detail && <div className="text-xs text-slate-400">{s.detail}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="text-center text-xs text-slate-400 font-bold mt-2">주 21시간 과외</div>
    </div>
  );
}
