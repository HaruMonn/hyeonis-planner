# 혀니's 플래너

세무사 시험 전용 스터디 플래너 앱 (개인용)

## 기능
- 홈: D-day 카운터, 공부 타이머, 오늘의 할 일
- 플래너: 월별 로드맵 + 요일별 플랜
- 가이드: 과목별 강사 가이드, 과목 비중
- 과외: 과외 시간표

## 기술
- React 19 + Vite + Tailwind CSS
- Capacitor (Android)
- 데이터는 localStorage에 저장 (서버 없음)

## APK 빌드
GitHub Actions에서 자동 빌드 → Artifacts에서 `hyeonis-planner-debug-apk` 다운로드
