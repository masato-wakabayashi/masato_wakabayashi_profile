import React from 'react';
import { PROFILE, CAREER_HISTORY, SKILLS } from '../constants';
import { HardHat, Code2, ArrowRight, Construction, Database, Users, LayoutDashboard, Presentation } from 'lucide-react';

export const NarrativeTheme: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 font-serif selection:bg-orange-200">
      
      {/* Hero: The Transformation */}
      <header className="min-h-[80vh] flex flex-col justify-center px-8 md:px-20 relative overflow-hidden bg-stone-200">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600 opacity-10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-4xl relative z-10">
            <div className="flex items-center gap-4 text-orange-700 font-bold tracking-widest uppercase mb-6">
                <span className="w-12 h-0.5 bg-orange-600"></span>
                The Engineer's Journey
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-stone-900">
                From <span className="text-orange-600">Internal DX</span><br />
                To <span className="text-stone-600">System</span> Architecture.
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-stone-600 leading-relaxed mb-12">
                I don't just write code. I solve business problems. 
                Starting as an in-house SE, I transformed operational inefficiencies into streamlined digital workflows before stepping up to lead large-scale system developments.
            </p>
            <div className="flex gap-4">
                <div className="flex items-center gap-3 px-6 py-3 bg-stone-900 text-white rounded shadow-lg">
                    <LayoutDashboard size={20} />
                    <span>Internal SE (2018)</span>
                </div>
                <ArrowRight className="text-stone-400 self-center" />
                <div className="flex items-center gap-3 px-6 py-3 bg-orange-600 text-white rounded shadow-lg">
                    <Code2 size={20} />
                    <span>Tech Lead (2025)</span>
                </div>
            </div>
        </div>
      </header>

      {/* Chapter 1: The Transformation */}
      <section className="py-24 px-8 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold mb-6 flex items-center gap-4">
                        <Presentation className="text-orange-600" size={36} />
                        Chapter 1: The Transformation
                    </h2>
                    <p className="text-lg leading-loose text-stone-600 mb-6">
                        My journey began in a manufacturing company where manual processes were the norm. 
                        I saw a massive opportunity for <strong>Digital Transformation (DX)</strong>.
                    </p>
                    <p className="text-lg leading-loose text-stone-600">
                        I didn't just suggest changes; I learned to code to build the solutions myself. From automating Excel reports to rebuilding the core ERP system, I learned that technology is only as good as the problem it solves.
                    </p>
                </div>
                <div className="w-full md:w-1/3 bg-stone-100 p-8 rounded-xl border-2 border-stone-200 rotate-2 hover:rotate-0 transition-transform duration-500">
                    <h3 className="font-bold text-stone-500 uppercase tracking-widest mb-4">Key Achievement</h3>
                    <div className="text-5xl font-black text-orange-600 mb-2">90%</div>
                    <p className="font-medium text-stone-800">Reduction in report creation time.</p>
                    <p className="text-sm text-stone-500 mt-2">By automating manual workflows with a custom Java/Spring Boot application.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Chapter 2: Structural Integrity */}
      <section className="py-24 px-8 md:px-20 bg-stone-900 text-stone-300">
        <div className="max-w-5xl mx-auto">
             <h2 className="text-4xl font-bold mb-16 text-white flex items-center gap-4 justify-end">
                Chapter 2: Structural Integrity
                <Database className="text-orange-500" size={36} />
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                     <div className="bg-stone-800 p-8 rounded-lg border-l-4 border-orange-500">
                        <h3 className="text-2xl font-bold text-white mb-2">Core System Renewal</h3>
                        <p className="text-stone-400 mb-4">PMO / Vendor Control</p>
                        <p className="leading-relaxed">
                            Managing the migration of the core ERP system for a listed company, coordinating 50+ requirements across departments. 
                            <strong>Result:</strong> Zero delay launch through precise vendor management.
                        </p>
                     </div>
                     <div className="bg-stone-800 p-8 rounded-lg border-l-4 border-orange-500">
                        <h3 className="text-2xl font-bold text-white mb-2">Government Data Platform</h3>
                        <p className="text-stone-400 mb-4">Team Lead / Java API</p>
                        <p className="leading-relaxed">
                            Modernizing legacy infrastructure (SOAP to REST). Leading a team of 4 in a 200-person project. Ensuring code quality through strict review processes.
                        </p>
                     </div>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-xl italic font-light text-stone-400 border-l-2 border-stone-700 pl-6 py-4">
                        "The communication skills honed in the business planning department—speaking the language of both the end-users and the engineers—became my strongest asset."
                    </p>
                     <div className="mt-8 grid grid-cols-2 gap-4">
                        {SKILLS.slice(0, 6).map((skill) => (
                            <div key={skill.name} className="flex items-center justify-between bg-stone-800 px-4 py-2 rounded">
                                <span>{skill.name}</span>
                                <span className="text-orange-500 font-mono">Lvl {skill.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Chapter 3: The Architect's Desk */}
      <section className="py-24 px-8 md:px-20 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
            <Users className="mx-auto text-stone-400 mb-6" size={48} />
            <h2 className="text-4xl font-bold mb-8">Ready to Build Together?</h2>
            <p className="text-xl text-stone-600 mb-12">
                I bring the discipline of a project manager and the creativity of a full-stack engineer. 
                Whether it's optimizing internal flows or building large-scale architecture, I ensure it stands tall.
            </p>
            <button className="bg-stone-900 text-white px-10 py-4 rounded font-bold hover:bg-orange-600 transition-colors shadow-xl">
                Contact Masato
            </button>
        </div>
      </section>

    </div>
  );
};