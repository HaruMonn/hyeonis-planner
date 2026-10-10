// 세무사 스터디 플래너 데이터
// 시험 일정이 확정되면 DDAY_1CHA / DDAY_2CHA 날짜를 업데이트

export const DDAY_1CHA = { label: '1차 시험', date: '2027-04-01', note: '2027년 4월 (확정일 발표 시 업데이트)' };
export const DDAY_2CHA = { label: '2차 시험', date: '2027-07-01', note: '2027년 7월 (확정일 발표 시 업데이트)' };

export const PHASES = [
  {
    months: '10 – 12월',
    title: '기초 재구축',
    headerBg: 'bg-violet-500',
    desc: '세법 기본서 정독 · 회계 개정 정리 · 재정학/행정소송법 훑기',
    days: [
      { day: '화', text: '세법 기본서 정독 9시간' },
      { day: '수', text: '회계 개정 중심 9시간' },
      { day: '목', text: '재정학 4h + 행정소송법 3h + 복습 2h' },
      { day: '금·일·월', text: '라이트 6시간 — 복습 위주' },
      { day: '토', text: '휴식 (과외 10시간)', rest: true },
    ],
  },
  {
    months: '1 – 2월',
    title: '심화 + 2차 병행',
    headerBg: 'bg-indigo-500',
    desc: '1차 기출 회독 · 2차 서술형 답안 연습 시작',
    days: [
      { day: '화', text: '세법 서술형 3h + 개론 기출 4h + 오답 2h' },
      { day: '수', text: '회계 서술형 3h + 개론 기출 4h + 오답 2h' },
      { day: '목', text: '재정학 3h + 행소법 3h + 서술형 3h' },
      { day: '금·일·월', text: '라이트 6시간 — 기출 + 오답' },
      { day: '토', text: '휴식 (과외 10시간)', rest: true },
    ],
  },
  {
    months: '3 – 4월',
    title: '1차 마무리',
    headerBg: 'bg-amber-500',
    desc: '전과목 기출 + 모의고사 · 2차 감각 유지',
    days: [
      { day: '화', text: '세법 기출 + 모의고사 9시간' },
      { day: '수', text: '회계 기출 + 모의고사 9시간' },
      { day: '목', text: '재정+행소법 6h · 서술형 유지 3h' },
      { day: '금·일·월', text: '라이트 6시간 — 오답 정리' },
      { day: '토', text: '휴식 (과외 10시간)', rest: true },
    ],
  },
  {
    months: '5 – 7월',
    title: '2차 올인',
    headerBg: 'bg-rose-500',
    desc: '2차 4과목 서술형 집중 · 답안 작성 훈련',
    days: [
      { day: '화', text: '세법학 1부 서술형 9시간' },
      { day: '수', text: '회계학 1부 서술형 9시간' },
      { day: '목', text: '세법학 2부 4h + 회계학 2부 5h' },
      { day: '금·일·월', text: '라이트 6시간 — 답안 첨삭 + 복습' },
      { day: '토', text: '휴식 (과외 10시간)', rest: true },
    ],
  },
];

export const GUIDE_1CHA = [
  {
    subject: '세법학개론',
    items: [
      '소득세/법인세/부가가치세 — 정우승 (나무, 책 독학 + 막히는 부분만 강의)',
      '국세기본법 — 강경태 (우리, 세법, 무료강의)',
      '국징법/조세범처벌법/국제조세 — 양소영 (기타세법)',
    ],
  },
  {
    subject: '회계학개론',
    items: ['재무회계 — 정윤돈 (해커스)', '원가관리회계 — 강경태 (해커스, 원가)'],
  },
  { subject: '재정학', items: ['황정빈 (우리)'] },
  { subject: '행정소송법', items: ['정인국 (우리)'] },
];

export const GUIDE_2CHA = [
  {
    subject: '세법학 1부',
    items: ['유은종 (나무) / 정우승 (나무) (고민 중) — 국세기본법/법인세/소득세/상속증여세'],
  },
  {
    subject: '세법학 2부',
    items: ['유은종 (나무) / 정우승 (나무) (고민 중) — 부가가치세/개별소비세/지방세/조특법'],
  },
  { subject: '회계학 1부', items: ['정윤돈 (해커스) — 재무회계', '강경태 (해커스, 원가) — 원가관리회계'] },
  { subject: '회계학 2부', items: ['세무회계 — 강경태 (우리, 세법) / 정우승 (나무) 중 1명 결정 필요'] },
  { subject: '세무회계 계산 연습', items: ['회계학 2부와 동일 강사로 통일'] },
];

export const SUBJECT_RATIO = [
  { name: '세법학', pct: 35, bar: 'bg-violet-500' },
  { name: '회계학', pct: 35, bar: 'bg-indigo-500' },
  { name: '재정학', pct: 15, bar: 'bg-violet-400' },
  { name: '행정소송법', pct: 15, bar: 'bg-indigo-300' },
];

export const TUTORING_SCHEDULE = [
  {
    day: '금',
    headerBg: 'bg-violet-500',
    sessions: [
      { time: '18:30 – 21:30', place: '진량', detail: '진량호반베르디움더포레스트', pill: 'bg-violet-100 text-violet-600' },
    ],
  },
  {
    day: '토',
    headerBg: 'bg-indigo-500',
    sessions: [
      { time: '09:00 – 12:00', place: '진량', detail: '진량호반베르디움더포레스트', pill: 'bg-violet-100 text-violet-600' },
      { time: '13:00 – 16:00', place: '수성', detail: '동대구로 10 수성 더파크', pill: 'bg-indigo-100 text-indigo-600' },
      { time: '17:00 – 21:00', place: '칠곡', detail: '', pill: 'bg-amber-100 text-amber-600' },
    ],
  },
  {
    day: '일',
    headerBg: 'bg-rose-500',
    sessions: [{ time: '20:00 – 24:00', place: '평택', detail: '', pill: 'bg-rose-100 text-rose-600' }],
  },
  {
    day: '월',
    headerBg: 'bg-rose-500',
    sessions: [{ time: '18:00 – 22:00', place: '평택', detail: '', pill: 'bg-rose-100 text-rose-600' }],
  },
];

export function calcDday(dateStr) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(dateStr + 'T00:00:00');
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  return diff;
}
