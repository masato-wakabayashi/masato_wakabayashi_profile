import React, { useState } from 'react';
import { PROFILE, CAREER_HISTORY, SKILLS, CERTIFICATIONS } from '../constants';
import { Cpu, Shield, Globe, Code, Zap, MessageSquare, Activity, Radio, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export const CyberTheme: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stack' | 'projects' | 'cloudworks'>('stack');

  // Transform skills for Radar Chart
  const radarData = [
    { subject: 'Backend', A: 85, fullMark: 100 },
    { subject: 'Frontend', A: 70, fullMark: 100 },
    { subject: 'Infra', A: 65, fullMark: 100 },
    { subject: 'Mgmt', A: 85, fullMark: 100 },
    { subject: 'Comm', A: 80, fullMark: 100 },
    { subject: 'DB', A: 80, fullMark: 100 },
  ];

  // CloudWorks Data
  const CLOUDWORKS_LOGS = [
    {
      id: 'cw-01',
      date: '2025-02-15',
      category: 'Kintone Dev',
      title: 'kintone-出荷アプリ開発',
      client: '物流・製造業様',
      summary: '出荷管理プロセスのシステム化により、業務効率と正確性を向上させるアプリケーションを構築。',
      status: 'COMPLETED'
    },
    {
      id: 'cw-02',
      date: '2025-01-20',
      category: 'Excel Design',
      title: 'JIS審査書類のExcelフォーマット作成',
      client: '製造業様',
      summary: 'JIS審査に必要な提出書類のフォーマットを整備・自動化し、入力負荷の軽減と標準化を実現。',
      status: 'COMPLETED'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-cyan-400 font-mono selection:bg-cyan-900 selection:text-white overflow-x-hidden">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Identity */}
        <div className="lg:col-span-3 space-y-6">
            <div className="bg-slate-900/80 backdrop-blur border border-cyan-500/30 p-6 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <div className="w-32 h-32 mx-auto rounded-full border-2 border-cyan-400 p-1 mb-4 relative">
                    <div className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-20"></div>
                    <img src="https://picsum.photos/400/400?grayscale" alt="Avatar" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
                <h1 className="text-2xl font-bold text-white text-center tracking-tighter">{PROFILE.englishName}</h1>
                <p className="text-cyan-600 text-center text-xs mb-4">ID: MW-2025-DEV</p>
                <div className="flex justify-center gap-2 mb-6">
                    <span className="px-2 py-1 bg-cyan-950 text-cyan-300 text-xs border border-cyan-800 rounded">LEAD</span>
                    <span className="px-2 py-1 bg-cyan-950 text-cyan-300 text-xs border border-cyan-800 rounded">JAVA</span>
                    <span className="px-2 py-1 bg-cyan-950 text-cyan-300 text-xs border border-cyan-800 rounded">AWS</span>
                </div>
                <div className="space-y-2 text-sm text-slate-400 flex justify-center">
                    <div className="flex items-center gap-2"><Globe size={14} /> JP / Tokyo</div>
                </div>
            </div>

            {/* Certs Mini-Module */}
            <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl">
                <h3 className="text-white text-sm font-bold mb-3 flex items-center gap-2"><Shield size={14} /> CREDENTIALS</h3>
                <ul className="space-y-3">
                    {CERTIFICATIONS.map((c,i) => (
                        <li key={i} className="flex flex-col border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                            <span className="text-cyan-200 text-xs leading-snug mb-1">{c.name}</span>
                            <span className="text-slate-500 text-[10px] text-right font-mono">{c.date}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Center Column: Dashboard */}
        <div className="lg:col-span-9 space-y-6">
            
            {/* Top Bar Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-900/50 border border-cyan-900/50 p-4 rounded-lg">
                    <div className="text-slate-500 text-xs uppercase">EXP. YEARS</div>
                    <div className="text-2xl font-bold text-white">10<span className="text-cyan-500 text-sm">.0</span></div>
                </div>
                <div className="bg-slate-900/50 border border-cyan-900/50 p-4 rounded-lg">
                    <div className="text-slate-500 text-xs uppercase">PROJECTS</div>
                    <div className="text-2xl font-bold text-white">12<span className="text-cyan-500 text-sm">+</span></div>
                </div>
                <div className="bg-slate-900/50 border border-cyan-900/50 p-4 rounded-lg">
                    <div className="text-slate-500 text-xs uppercase">MAX TEAM</div>
                    <div className="text-2xl font-bold text-white">10<span className="text-cyan-500 text-sm">ppl</span></div>
                </div>
                <div className="bg-slate-900/50 border border-cyan-900/50 p-4 rounded-lg">
                    <div className="text-slate-500 text-xs uppercase">STATUS</div>
                    <div className="text-2xl font-bold text-green-400 animate-pulse text-base mt-1">ONLINE</div>
                </div>
            </div>

            {/* Main Interface */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden min-h-[600px] flex flex-col shadow-2xl">
                
                {/* Enhanced Tab Bar */}
                <div className="flex bg-slate-950 border-b border-slate-800 overflow-x-auto">
                    {[
                        { id: 'stack', icon: <Cpu size={16} />, label: 'SYSTEM_DIAGNOSTICS' },
                        { id: 'projects', icon: <Code size={16} />, label: 'PROJECT_LOGS' },
                        { id: 'cloudworks', icon: <Briefcase size={16} />, label: 'FREELANCE_OPS' }
                    ].map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button 
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`
                                    relative px-6 py-4 text-sm font-bold flex items-center gap-3 transition-all duration-300 min-w-[200px]
                                    ${isActive 
                                        ? 'text-cyan-400 bg-slate-900' 
                                        : 'text-slate-500 hover:text-cyan-200 hover:bg-slate-900/50'
                                    }
                                `}
                            >
                                {/* Active Indicator Bar */}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
                                )}
                                
                                <span className={isActive ? 'text-cyan-400 animate-pulse' : 'text-slate-600'}>
                                    {tab.icon}
                                </span>
                                <span>
                                    {isActive ? `[ ${tab.label} ]` : tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 overflow-y-auto scrollbar-hide bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-950">
                    
                    {/* SYSTEM DIAGNOSTICS TAB */}
                    {activeTab === 'stack' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full animate-in fade-in zoom-in duration-300">
                            <div className="relative">
                                <h3 className="text-xs text-slate-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                                    <Activity size={12}/> SKILL_RADAR_ANALYSIS
                                </h3>
                                <div className="h-[300px] w-full bg-slate-900/50 rounded-lg p-4 border border-slate-800/50">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                                            <PolarGrid stroke="#334155" />
                                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                            <Radar name="Masato" dataKey="A" stroke="#06b6d4" strokeWidth={2} fill="#06b6d4" fillOpacity={0.3} />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xs text-slate-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                                    <Zap size={12}/> CORE_MODULES
                                </h3>
                                {SKILLS.slice(0,6).map((skill, idx) => (
                                    <div key={idx} className="group">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-cyan-100 group-hover:text-cyan-400 transition-colors">{skill.name}</span>
                                            <span className="text-slate-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-cyan-900 to-cyan-500 transition-all duration-1000 ease-out" 
                                                style={{width: `${skill.level}%`}}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                                
                                <div className="mt-8 bg-slate-950/80 border-l-2 border-cyan-500 pl-4 py-3 pr-4 rounded-r bg-gradient-to-r from-slate-900/50 to-transparent">
                                    <h4 className="text-cyan-400 text-xs font-bold mb-3 flex items-center gap-2">
                                        <Activity size={14} /> // SYSTEM_PROFILE
                                    </h4>
                                    <div className="space-y-3 text-xs font-mono">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-slate-500 text-[10px] uppercase tracking-wider">Class</span>
                                            <span className="text-cyan-100">ハイブリッドエンジニア (Business + Tech)</span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-slate-500 text-[10px] uppercase tracking-wider">Specialty</span>
                                            <span className="text-cyan-100">レガシーシステム刷新 / DX推進</span>
                                        </div>
                                        <div className="pt-2 border-t border-slate-800/50">
                                             <p className="text-slate-400 leading-relaxed italic">
                                                "複雑な業務要件を堅牢なクラウドアーキテクチャへと変換。非技術部門とエンジニアリングチームの架け橋として機能します。"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* PROJECT LOGS TAB */}
                    {activeTab === 'projects' && (
                        <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                            {CAREER_HISTORY.map((career) => (
                                <div key={career.id} className="relative pl-6 border-l border-cyan-900/50">
                                    <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-slate-900 border border-cyan-500 rounded-full shadow-[0_0_8px_cyan]"></div>
                                    <div className="mb-4">
                                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                            {career.company}
                                            <span className="text-[10px] text-slate-500 border border-slate-800 px-2 py-0.5 rounded">ORG_ID: {career.id.toUpperCase()}</span>
                                        </h3>
                                        <span className="text-xs text-cyan-600 font-mono block mt-1">{career.period}</span>
                                    </div>
                                    <div className="grid gap-4">
                                        {career.projects.map((p, idx) => (
                                            <div key={idx} className="bg-slate-950/50 p-4 rounded border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all cursor-default group">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-bold text-cyan-200 group-hover:text-cyan-400 transition-colors">{p.title}</h4>
                                                    <span className="px-2 py-0.5 bg-slate-800 rounded text-[10px] text-slate-400 group-hover:text-white transition-colors">{p.role}</span>
                                                </div>
                                                <p className="text-sm text-slate-400 mb-3 leading-relaxed">{p.summary}</p>
                                                <div className="flex gap-2 flex-wrap">
                                                    {p.stack.map(s => (
                                                        <span key={s} className="text-[10px] uppercase border border-slate-700 px-1.5 py-0.5 rounded text-slate-500 group-hover:border-cyan-900 group-hover:text-cyan-600 transition-colors">{s}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* FREELANCE OPS TAB */}
                    {activeTab === 'cloudworks' && (
                        <div className="animate-in slide-in-from-bottom-4 duration-300">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xs text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                    <Briefcase size={12}/> TRANSACTION_HISTORY // FREELANCE
                                </h3>
                                <span className="text-[10px] bg-green-950 text-green-400 px-2 py-1 rounded border border-green-900 flex items-center gap-1">
                                    <CheckCircle2 size={10} /> SYSTEMS_NORMAL
                                </span>
                            </div>

                            <div className="grid gap-3">
                                <div className="grid grid-cols-12 text-[10px] text-slate-600 uppercase tracking-wider px-4 pb-2 border-b border-slate-800">
                                    <div className="col-span-2">Date_Stamp</div>
                                    <div className="col-span-3">Op_Type</div>
                                    <div className="col-span-7">Mission_Detail</div>
                                </div>
                                {CLOUDWORKS_LOGS.map((log) => (
                                    <div key={log.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0 p-4 bg-slate-900/40 border border-slate-800/50 rounded hover:border-green-500/30 hover:bg-slate-900 transition-all items-center group">
                                        <div className="col-span-2 text-xs font-mono text-cyan-700 group-hover:text-cyan-500 transition-colors">
                                            {log.date}
                                        </div>
                                        <div className="col-span-3">
                                            <span className="inline-block px-2 py-1 rounded text-[10px] font-bold bg-slate-800 text-slate-400 group-hover:text-white border border-slate-700 group-hover:border-green-900 transition-all">
                                                {log.category}
                                            </span>
                                        </div>
                                        <div className="col-span-7">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-sm font-bold text-slate-200 group-hover:text-green-400 transition-colors">{log.title}</span>
                                                    <ChevronRight size={12} className="text-slate-600 group-hover:text-green-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                                                </div>
                                                <p className="text-xs text-slate-500 line-clamp-2 md:line-clamp-1">{log.summary}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Placeholder for more */}
                                <div className="p-4 border border-dashed border-slate-800 rounded text-center text-slate-600 text-xs mt-2">
                                    // AWAITING_NEW_MISSIONS...
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Contact / Transmission Section */}
            <div className="bg-slate-900/80 border border-green-500/30 rounded-xl p-5 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group hover:border-green-400/50 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Radio size={100} className="text-green-500" />
                </div>

                <div className="bg-green-500/10 p-3 rounded-full shrink-0 relative z-10">
                    <Radio size={24} className="text-green-400" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
                </div>

                <div className="flex-1 relative z-10">
                    <h4 className="text-xs text-green-500 font-bold tracking-widest mb-2 flex items-center gap-2">
                        SYSTEM_MESSAGE // OPEN_FOR_WORK
                    </h4>
                    <div className="text-sm text-slate-300 font-mono leading-relaxed">
                        <span className="animate-pulse">
                            "多岐にわたる業務に対応可能です。簡易ツールの作成からExcel業務の自動化まで、規模を問わず柔軟にサポートいたします。CloudWorksよりお気軽にご連絡ください。"
                        </span>
                    </div>
                </div>
                
                <div className="relative z-10 shrink-0">
                     <a 
                        href="https://crowdworks.jp/public/employees/5739345?ref=share_url_wkprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-green-950 text-green-400 border border-green-600/50 text-xs font-bold tracking-wider hover:bg-green-900 hover:text-white hover:border-green-400 transition-all rounded uppercase shadow-[0_0_10px_rgba(34,197,94,0.1)]"
                     >
                        CONTACT_VIA_CLOUDWORKS &gt;&gt;
                     </a>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};