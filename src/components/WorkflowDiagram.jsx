import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Database, Brain, Zap, Settings2, CheckCircle2, Activity } from 'lucide-react'

const NODES = [
  {
    id: 0,
    icon: Database,
    label: 'Data Input',
    sublabel: 'CRM / API / Files',
    colorText: 'text-blue-500',
    colorBg: 'bg-blue-50',
    colorBorder: 'border-blue-200',
    colorGlow: 'shadow-blue-100',
  },
  {
    id: 1,
    icon: Brain,
    label: 'AI Agent',
    sublabel: 'Understands context',
    colorText: 'text-purple-500',
    colorBg: 'bg-purple-50',
    colorBorder: 'border-purple-200',
    colorGlow: 'shadow-purple-100',
  },
  {
    id: 2,
    icon: Zap,
    label: 'Decision',
    sublabel: 'Picks best action',
    colorText: 'text-amber-500',
    colorBg: 'bg-amber-50',
    colorBorder: 'border-amber-200',
    colorGlow: 'shadow-amber-100',
  },
  {
    id: 3,
    icon: Settings2,
    label: 'Execute',
    sublabel: 'Runs the workflow',
    colorText: 'text-orange-500',
    colorBg: 'bg-orange-50',
    colorBorder: 'border-orange-200',
    colorGlow: 'shadow-orange-100',
  },
  {
    id: 4,
    icon: CheckCircle2,
    label: 'Result',
    sublabel: 'Delivered output',
    colorText: 'text-emerald-500',
    colorBg: 'bg-emerald-50',
    colorBorder: 'border-emerald-200',
    colorGlow: 'shadow-emerald-100',
  },
]

function PipelineConnector({ isActive }) {
  return (
    <div className="relative flex items-center ml-[19px] my-0.5">
      <div
        className={`w-px h-5 transition-all duration-700 ${
          isActive
            ? 'bg-gradient-to-b from-orange-400/80 to-amber-400/80'
            : 'bg-slate-200'
        }`}
      />
      {isActive && (
        <motion.div
          className="absolute left-[-3px] w-1.5 h-1.5 rounded-full bg-orange-500 shadow-sm shadow-orange-300"
          initial={{ top: '0%', opacity: 0 }}
          animate={{ top: ['0%', '100%'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 0.7, ease: 'linear', repeat: Infinity, repeatDelay: 0.3 }}
        />
      )}
    </div>
  )
}

export default function WorkflowDiagram() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [logs, setLogs] = useState([
    { text: 'Initializing agent pipeline...', done: true },
    { text: 'Reading data source', done: true },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => {
        const next = (prev + 1) % NODES.length
        return next
      })
    }, 900)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const logMessages = [
      'Reading data source...',
      'Agent analyzing context...',
      'Decision engine processing...',
      'Executing workflow action...',
      'Delivering result ✓',
    ]
    const msg = logMessages[activeIdx]
    setLogs((prev) => {
      const updated = [...prev, { text: msg, done: false }].slice(-4)
      return updated
    })
    const timeout = setTimeout(() => {
      setLogs((prev) => prev.map((l) => ({ ...l, done: true })))
    }, 300)
    return () => clearTimeout(timeout)
  }, [activeIdx])

  const progress = (activeIdx / (NODES.length - 1)) * 100

  return (
    <div className="glass-card rounded-2xl p-6 lg:p-7 shadow-xl shadow-orange-100/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mb-0.5">
            Live Preview
          </p>
          <h3 className="text-slate-900 font-bold text-base">AI Agent Pipeline</h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-medium text-emerald-600">Running</span>
        </div>
      </div>

      {/* Pipeline nodes */}
      <div className="flex flex-col">
        {NODES.map((node, i) => {
          const Icon = node.icon
          const isActive = activeIdx >= i
          const isCurrent = activeIdx === i

          return (
            <div key={node.id}>
              <motion.div
                animate={isCurrent ? { scale: [1, 1.015, 1] } : {}}
                transition={{ duration: 0.5 }}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl border transition-all duration-500 ${
                  isActive
                    ? `${node.colorBg} ${node.colorBorder} shadow-lg ${node.colorGlow}`
                    : 'bg-slate-50 border-slate-100'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                    isActive ? node.colorBg : 'bg-slate-100'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors duration-500 ${
                      isActive ? node.colorText : 'text-slate-300'
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-semibold text-sm leading-none mb-0.5 transition-colors duration-500 ${
                      isActive ? 'text-slate-900' : 'text-slate-300'
                    }`}
                  >
                    {node.label}
                  </p>
                  <p
                    className={`text-[11px] transition-colors duration-500 ${
                      isActive ? 'text-slate-500' : 'text-slate-300'
                    }`}
                  >
                    {node.sublabel}
                  </p>
                </div>

                {/* Status indicator */}
                {isCurrent && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-2 h-2 rounded-full bg-orange-500 animate-pulse flex-shrink-0"
                  />
                )}
                {isActive && !isCurrent && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"
                  />
                )}
              </motion.div>

              {i < NODES.length - 1 && (
                <PipelineConnector isActive={isActive} />
              )}
            </div>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-5">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3 h-3 text-slate-400" />
            <span className="text-[11px] text-slate-400 font-medium">Processing</span>
          </div>
          <span className="text-[11px] text-orange-500 font-semibold">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Agent log */}
      <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 font-mono">
        <p className="text-[10px] text-slate-400 mb-2 font-sans uppercase tracking-wider">Agent Log</p>
        {logs.map((log, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: log.done ? 0.5 : 1, x: 0 }}
            className="text-[11px] text-orange-500 leading-relaxed"
          >
            <span className="text-slate-300 mr-1">›</span>
            {log.text}
          </motion.p>
        ))}
      </div>
    </div>
  )
}
