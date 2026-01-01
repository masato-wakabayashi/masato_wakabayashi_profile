import React from 'react';
import { ThemeType } from '../types';
import { Layout, Briefcase, Cpu } from 'lucide-react';

interface Props {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeSelector: React.FC<Props> = ({ currentTheme, setTheme }) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-2xl rounded-full p-2 flex gap-2 border border-slate-200 dark:border-slate-700">
      <button
        onClick={() => setTheme(ThemeType.CORPORATE)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium ${
          currentTheme === ThemeType.CORPORATE
            ? 'bg-slate-900 text-white shadow-md'
            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
        }`}
      >
        <Briefcase size={16} />
        <span className="hidden sm:inline">Corporate</span>
      </button>
      <button
        onClick={() => setTheme(ThemeType.NARRATIVE)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium ${
          currentTheme === ThemeType.NARRATIVE
            ? 'bg-orange-600 text-white shadow-md'
            : 'text-slate-600 hover:bg-orange-50 dark:text-slate-300 dark:hover:bg-slate-700'
        }`}
      >
        <Layout size={16} />
        <span className="hidden sm:inline">Story</span>
      </button>
      <button
        onClick={() => setTheme(ThemeType.CYBER)}
        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium ${
          currentTheme === ThemeType.CYBER
            ? 'bg-cyan-600 text-white shadow-md'
            : 'text-slate-600 hover:bg-cyan-900/30 dark:text-slate-300 dark:hover:bg-slate-700'
        }`}
      >
        <Cpu size={16} />
        <span className="hidden sm:inline">Tech</span>
      </button>
    </div>
  );
};