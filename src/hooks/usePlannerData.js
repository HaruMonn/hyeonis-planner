import { useState, useEffect } from 'react';
import * as bundled from '../data.js';

const REMOTE_URL = 'https://raw.githubusercontent.com/HaruMonn/hyeonis-planner/main/public/planner-data.json';
const LS_KEY = 'hyeoni_planner_data';
const LS_TS = 'hyeoni_planner_data_ts';

export function calcDday(dateStr) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(dateStr + 'T00:00:00');
  return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
}

function getCached() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return null;
}

export function usePlannerData() {
  const [data, setData] = useState(() => getCached() || bundled);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(REMOTE_URL, { cache: 'no-store' })
      .then((r) => {
        if (!r.ok) throw new Error('fetch failed');
        return r.json();
      })
      .then((remote) => {
        if (cancelled) return;
        const prevTs = localStorage.getItem(LS_TS) || '';
        const nextTs = JSON.stringify(remote).length + ':' + (remote._v || '');
        try {
          localStorage.setItem(LS_KEY, JSON.stringify(remote));
          localStorage.setItem(LS_TS, nextTs);
        } catch { /* ignore */ }
        setData(remote);
        if (prevTs && prevTs !== nextTs) setUpdated(true);
      })
      .catch(() => { /* offline: keep bundled/cached */ });
    return () => { cancelled = true; };
  }, []);

  return { data, updated, dismissUpdate: () => setUpdated(false) };
}
