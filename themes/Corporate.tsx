import React from 'react';
import { PROFILE, CAREER_HISTORY, SKILLS, CERTIFICATIONS } from '../constants';
import { Mail, MapPin, Download, ExternalLink, ChevronRight, CheckCircle2, Building2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const CorporateTheme: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-slate-200">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-40">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight text-slate-900">M.WAKABAYASHI</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold tracking-wide uppercase">
                Open to Work
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Senior Software Engineer <br />
                <span className="text-slate-500">& Team Leader</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                {PROFILE.summary}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={18} /> {PROFILE.location}
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail size={18} /> {PROFILE.email}
                </div>
              </div>
            </div>
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl bg-slate-200 flex-shrink-0">
               <img src="../public/photo/profile-image.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight Grid */}
      <section className="bg-white py-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Building2 className="text-blue-600" /> Management
                </h3>
                <p className="text-slate-600 text-sm">Experienced in leading teams, vendor control, and PMO roles for core systems.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="text-green-600" /> Development
                </h3>
                <p className="text-slate-600 text-sm">Full-stack capabilities in Java (Spring Boot) and Frontend, with focus on Quality Assurance.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <ExternalLink className="text-purple-600" /> DX Strategy
                </h3>
                <p className="text-slate-600 text-sm">Proposal-driven approach to digital transformation, bridging operational gaps.</p>
            </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Career History</h2>
            <span className="text-slate-400 text-sm hidden md:inline">2018 - Present</span>
        </div>
        
        <div className="space-y-12 border-l-2 border-slate-200 ml-3 md:ml-0 pl-8 md:pl-0">
          {CAREER_HISTORY.map((item) => (
            <div key={item.id} className="relative md:grid md:grid-cols-12 md:gap-8">
                {/* Dot */}
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white bg-blue-600 md:hidden"></div>
                
                {/* Timeline info */}
                <div className="md:col-span-3 md:text-right mb-4 md:mb-0">
                    <div className="text-sm font-bold text-slate-900">{item.period}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">{item.role}</div>
                </div>

                {/* Dot Desktop */}
                <div className="hidden md:flex md:col-span-1 justify-center relative">
                    <div className="w-0.5 h-full bg-slate-200 absolute top-0"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-600 relative z-10 mt-1.5 ring-4 ring-white"></div>
                </div>

                {/* Content */}
                <div className="md:col-span-8 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">{item.company}</h3>
                        <p className="text-slate-600 mt-2 text-sm leading-relaxed">{item.description}</p>
                    </div>

                    <div className="space-y-4">
                        {item.projects.map((proj, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-semibold text-slate-800">{proj.title}</h4>
                                    <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">{proj.role}</span>
                                </div>
                                <p className="text-sm text-slate-600 mb-3">{proj.summary}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {proj.stack.map(s => (
                                        <span key={s} className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">{s}</span>
                                    ))}
                                </div>
                                <ul className="list-disc list-inside text-xs text-slate-500 space-y-1">
                                    {proj.achievements.map((ach, i) => (
                                        <li key={i}>{ach}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Certs */}
      <section id="skills" className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h2 className="text-3xl font-bold mb-8">Technical Proficiency</h2>
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={SKILLS.filter(s => s.category !== 'Soft').sort((a,b) => b.level - a.level)}
                            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
                        >
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={100} tick={{fill: '#94a3b8', fontSize: 12}} />
                            <Tooltip 
                                contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '8px'}}
                                itemStyle={{color: '#fff'}}
                                cursor={{fill: '#334155'}}
                            />
                            <Bar dataKey="level" barSize={20} radius={[0, 4, 4, 0]}>
                                {SKILLS.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.level > 85 ? '#3b82f6' : '#64748b'} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold mb-8">Certifications</h2>
                <div className="space-y-4">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg border border-slate-700">
                            <span className="font-medium">{cert.name}</span>
                            <span className="text-sm text-slate-400">{cert.date}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                     <h2 className="text-3xl font-bold mb-6">Soft Skills</h2>
                     <div className="grid grid-cols-2 gap-4">
                        {SKILLS.filter(s => s.category === 'Soft').map((skill, idx) => (
                            <div key={idx} className="p-4 bg-slate-800/50 border border-slate-700 rounded-lg">
                                <div className="text-blue-400 font-bold text-lg mb-1">{skill.level}%</div>
                                <div className="text-sm font-medium">{skill.name}</div>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>&copy; 2025 Masato Wakabayashi. All rights reserved.</p>
      </footer>
    </div>
  );
};