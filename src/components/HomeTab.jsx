import { useState, useEffect } from 'react';
import { Plus, Trash2, Play, Pause, Square, Check } from 'lucide-react';
import { calcDday } from '../hooks/usePlannerData.js';

const LS_TODOS = 'hyeoni_todos';
const LS_TIMER = 'hyeoni_timer_total';

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function DdayCard({ info }) {
  const d = calcDday(info.date);
  return (
    <div className="bg-gradient-to-br from-violet-500 to-indigo-600 rounded-3xl p-5 text-white shadow-sm">
      <div className="text-xs opacity-80 font-bold mb-1">{info.label}</div>
      <div className="text-4xl font-black tabular-nums">{d >= 0 ? `D-${d}` : `D+${-d}`}</div>
      <div className="text-xs opacity-70 mt-1">{info.note}</div>
    </div>
  );
}

export default function HomeTab({ data }) {
  const { DDAY_1CHA, DDAY_2CHA } = data;
  const [todos, setTodos] = useState(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(LS_TODOS) || '{}');
      return raw[todayKey()] || [];
    } catch { return []; }
  });
  const [input, setInput] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [totalToday, setTotalToday] = useState(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(LS_TIMER) || '{}');
      return raw[todayKey()] || 0;
    } catch { return 0; }
  });

  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(LS_TODOS) || '{}');
      raw[todayKey()] = todos;
      localStorage.setItem(LS_TODOS, JSON.stringify(raw));
    } catch { /* ignore */ }
  }, [todos]);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  const stopTimer = () => {
    setRunning(false);
    if (seconds > 0) {
      const next = totalToday + seconds;
      setTotalToday(next);
      try {
        const raw = JSON.parse(localStorage.getItem(LS_TIMER) || '{}');
        raw[todayKey()] = next;
        localStorage.setItem(LS_TIMER, JSON.stringify(raw));
      } catch { /* ignore */ }
      setSeconds(0);
    }
  };

  const fmt = (s) => {
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const addTodo = () => {
    const v = input.trim();
    if (!v) return;
    setTodos([...todos, { id: Date.now(), text: v, done: false }]);
    setInput('');
  };

  const doneCount = todos.filter((t) => t.done).length;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-3">
        <DdayCard info={DDAY_1CHA} />
        <DdayCard info={DDAY_2CHA} />
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
        <h3 className="text-base font-black text-slate-800 mb-1">공부 타이머</h3>
        <div className="text-xs text-slate-400 font-bold mb-3">오늘 누적 {fmt(totalToday)}</div>
        <div className="text-5xl font-black font-mono tabular-nums text-slate-800 text-center my-4">{fmt(seconds)}</div>
        <div className="flex gap-2 justify-center">
          {!running ? (
            <button onClick={() => setRunning(true)} className="flex items-center gap-1.5 px-6 py-2.5 bg-violet-500 text-white rounded-xl font-bold text-sm">
              <Play size={16} /> 시작
            </button>
          ) : (
            <button onClick={() => setRunning(false)} className="flex items-center gap-1.5 px-6 py-2.5 bg-amber-500 text-white rounded-xl font-bold text-sm">
              <Pause size={16} /> 일시정지
            </button>
          )}
          <button onClick={stopTimer} className="flex items-center gap-1.5 px-6 py-2.5 bg-slate-200 text-slate-700 rounded-xl font-bold text-sm">
            <Square size={16} /> 종료·저장
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-black text-slate-800">오늘의 할 일</h3>
          <span className="text-xs font-bold text-slate-400">{doneCount}/{todos.length}</span>
        </div>
        <div className="flex gap-2 mb-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTodo()}
            placeholder="할 일 입력"
            className="flex-1 min-w-0 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-500 font-bold"
          />
          <button onClick={addTodo} className="shrink-0 p-2.5 bg-violet-500 text-white rounded-xl">
            <Plus size={18} />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {todos.length === 0 && (
            <div className="text-center text-slate-300 text-sm py-4">오늘 할 일을 추가해보세요</div>
          )}
          {todos.map((t) => (
            <div key={t.id} className="flex items-center gap-2.5 bg-slate-50 rounded-xl px-3 py-2.5 border border-slate-100">
              <button
                onClick={() => setTodos(todos.map((x) => x.id === t.id ? { ...x, done: !x.done } : x))}
                className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${t.done ? 'bg-violet-500 border-violet-500 text-white' : 'border-slate-300'}`}
              >
                {t.done && <Check size={14} />}
              </button>
              <span className={`flex-1 text-sm font-bold ${t.done ? 'line-through text-slate-400' : 'text-slate-700'}`}>{t.text}</span>
              <button onClick={() => setTodos(todos.filter((x) => x.id !== t.id))} className="shrink-0 text-slate-300 hover:text-red-400">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
