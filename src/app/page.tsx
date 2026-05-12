import React from 'react';
import { mockProjects } from '../lib/mockData';

export default function DeliveryDashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-10 pb-6 border-b border-slate-800 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Client Delivery Hub</h1>
          <p className="text-slate-400 mt-1 text-sm">
            Offshore Client Project Milestones, Delivery Health & SLA Tracker
          </p>
        </div>
        <div className="flex gap-3">
          <span className="px-3 py-1 bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-semibold rounded-full flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            All SLAs Compliant (99.4%)
          </span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto space-y-8">
        {mockProjects.map((project) => (
          <section key={project.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">{project.clientRegion} • {project.clientName}</span>
                <h2 className="text-xl font-bold text-white mt-1">{project.projectName}</h2>
                <p className="text-slate-400 text-xs mt-1">Lead: <span className="text-slate-200">{project.leadEngineer}</span> | {project.currentSprint}</p>
              </div>
              <span className="px-3 py-1 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-md text-xs font-medium">
                {project.overallHealth}
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Milestone Roadmap</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.milestones.map((m) => (
                  <div key={m.id} className="bg-slate-950/70 border border-slate-800/80 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-slate-200 text-sm">{m.title}</h4>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {m.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mb-2">
                      <span>Target: {m.targetDate}</span>
                      <span>{m.completionPercentage}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${m.completionPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
