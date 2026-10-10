import { useState } from 'react';
import { Home, CalendarRange, BookOpen, Clock } from 'lucide-react';
import HomeTab from './components/HomeTab.jsx';
import PlannerTab from './components/PlannerTab.jsx';
import GuideTab from './components/GuideTab.jsx';
import TutoringTab from './components/TutoringTab.jsx';

const TABS = [
  { id: 'home', label: '홈', icon: Home, title: "혀니's 플래너", subtitle: '세무사 스터디' },
  { id: 'planner', label: '플래너', icon: CalendarRange, title: '월별 플래너', subtitle: '2026.10 – 2027.7' },
  { id: 'guide', label: '가이드', icon: BookOpen, title: '강사 가이드', subtitle: '과목별 강사' },
  { id: 'tutoring', label: '과외', icon: Clock, title: '과외 시간표', subtitle: '금토일월' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const tab = TABS.find((t) => t.id === activeTab);

  return (
    <div className="relative flex flex-col h-full max-w-md mx-auto bg-slate-50 overflow-hidden">
      <header className="shrink-0 bg-white/90 backdrop-blur-md border-b border-slate-100 px-5 pt-5 pb-3 z-30">
        <h1 className="text-xl font-black text-slate-800">{tab.title}</h1>
        <p className="text-xs text-slate-400 font-bold">{tab.subtitle}</p>
      </header>

      <main className="flex-1 overflow-y-auto p-5 pb-28">
        {activeTab === 'home' && <HomeTab />}
        {activeTab === 'planner' && <PlannerTab />}
        {activeTab === 'guide' && <GuideTab />}
        {activeTab === 'tutoring' && <TutoringTab />}
      </main>

      <nav className="absolute bottom-0 w-full nav-safe bg-white/90 backdrop-blur-md border-t border-slate-100 flex items-center justify-around px-2 z-40">
        {TABS.map((t) => {
          const Icon = t.icon;
          const active = activeTab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`flex flex-1 flex-col items-center justify-center py-2.5 transition-all ${active ? 'text-slate-800' : 'text-slate-400'}`}
            >
              <Icon size={24} className={active ? 'drop-shadow-sm scale-110 mb-1' : 'mb-1'} />
              <span className="text-[10px] font-bold">{t.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
