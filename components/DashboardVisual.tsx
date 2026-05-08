import { Activity, Phone, Globe2, TrendingUp, CheckCircle, ArrowUpRight, BarChart2 } from 'lucide-react';

/**
 * DashboardVisual — Task 14
 * Illustrative routing/analytics dashboard UI used for marketing visuals.
 * No real data — pure CSS/SVG illustration to increase SaaS legitimacy.
 */
export default function DashboardVisual() {
  const routes = [
    { dest: 'United States',  asr: 98, acd: '4:22', cps: 28, status: 'active' },
    { dest: 'United Kingdom', asr: 97, acd: '3:51', cps: 14, status: 'active' },
    { dest: 'Germany',        asr: 96, acd: '4:05', cps: 9,  status: 'active' },
    { dest: 'UAE',            asr: 93, acd: '2:44', cps: 6,  status: 'active' },
    { dest: 'India',          asr: 91, acd: '3:12', cps: 12, status: 'active' },
  ];

  const stats = [
    { label: 'Active Calls', value: '1,247', icon: Phone,      delta: '+8%' },
    { label: 'ASR Average',  value: '95.2%', icon: TrendingUp,  delta: '+1.2%' },
    { label: 'Destinations', value: '190+',  icon: Globe2,      delta: '' },
    { label: 'Uptime',       value: '99.99%',icon: CheckCircle, delta: 'SLA' },
  ];

  const barData = [62, 78, 55, 90, 85, 95, 88, 92, 70, 98, 87, 94];
  const months  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  return (
    <div className="rounded-2xl bg-[#0A0F1E] border border-primary/20 overflow-hidden shadow-2xl select-none">
      {/* Topbar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-black/30">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-[10px] text-slate-500 font-mono ml-3">VoIP Cat — Routing Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-green-400 font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>LIVE</span>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Stat cards */}
        <div className="grid grid-cols-4 gap-3">
          {stats.map(({ label, value, icon: Icon, delta }, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <Icon className="w-4 h-4 text-primary" />
                {delta && <span className="text-[10px] text-green-400 font-bold">{delta}</span>}
              </div>
              <div className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>{value}</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Bar chart */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-primary" />
              <span className="text-[11px] text-slate-400 uppercase tracking-widest font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>ASR by Month (%)</span>
            </div>
            <span className="text-[10px] text-slate-600">Last 12 months</span>
          </div>
          <div className="flex items-end gap-1.5 h-20">
            {barData.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-sm bg-primary/60 hover:bg-primary transition-colors"
                  style={{ height: `${v}%` }}
                  title={`${months[i]}: ${v}%`}
                />
                <span className="text-[8px] text-slate-600">{months[i].slice(0,1)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Route table */}
        <div className="bg-white/5 rounded-xl border border-white/5 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-[11px] text-slate-400 uppercase tracking-widest font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>Active Routes</span>
          </div>
          <div className="divide-y divide-white/5">
            {routes.map((r, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2.5 hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white font-medium">{r.dest}</span>
                </div>
                <div className="flex items-center gap-6 text-[11px]">
                  <span className="text-slate-400">ASR <span className="text-green-400 font-bold">{r.asr}%</span></span>
                  <span className="text-slate-400">ACD <span className="text-white">{r.acd}</span></span>
                  <span className="text-slate-400">CPS <span className="text-primary font-bold">{r.cps}</span></span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
