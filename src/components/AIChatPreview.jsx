import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, User, Zap, CheckCircle2, Database, Send } from 'lucide-react'

const SCENARIOS = [
  {
    label: 'Customer Support',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    messages: [
      { role: 'user', text: "My order #4821 hasn't arrived. It's been 2 weeks!" },
      { role: 'tool', text: 'Querying order database…' },
      { role: 'agent', text: "Found it! Your order hit a weather delay in Memphis. It'll arrive tomorrow by 5pm. Want SMS tracking updates?" },
      { role: 'user', text: 'Yes please!' },
      { role: 'agent', text: "Done! Updates sent every 2 hrs. Anything else I can help with?" },
    ],
  },
  {
    label: 'Sales Outreach',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    messages: [
      { role: 'user', text: 'Interested in your enterprise plan.' },
      { role: 'tool', text: 'Enriching lead from CRM + LinkedIn…' },
      { role: 'agent', text: "Hi Marcus! For a 120-person team, our plan saves ~$84k/year. I've drafted a personalised proposal — want me to send it over?" },
      { role: 'user', text: 'That would be great, yes.' },
      { role: 'agent', text: 'Proposal sent + a calendar link for a 20-min call. Looking forward to connecting!' },
    ],
  },
  {
    label: 'Data Pipelines',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    messages: [
      { role: 'tool', text: 'Running nightly pipeline — 8 sources detected…' },
      { role: 'tool', text: 'Normalising formats, running quality checks…' },
      { role: 'agent', text: '✓ Pipeline complete. 142k rows processed, 99.4% accuracy. 3 anomalies flagged for review.' },
      { role: 'user', text: 'Any critical errors?' },
      { role: 'agent', text: 'No critical errors. Minor duplicate rows in Salesforce export — auto-deduplicated. Clean report posted to Slack.' },
    ],
  },
]

function TypingDots() {
  return (
    <div className="flex gap-1 items-center py-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-slate-400"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </div>
  )
}

function Message({ msg, visible }) {
  if (!visible) return null

  const isUser = msg.role === 'user'
  const isTool = msg.role === 'tool'

  if (isTool) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 w-fit"
      >
        <Database className="w-3 h-3 text-slate-400 flex-shrink-0" />
        <span className="text-[11px] text-slate-500 font-medium font-mono">{msg.text}</span>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-end gap-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
    >
      {/* Avatar */}
      <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center ${isUser ? 'bg-slate-200' : 'bg-gradient-to-br from-orange-500 to-amber-400'}`}>
        {isUser
          ? <User className="w-3 h-3 text-slate-500" />
          : <Bot className="w-3 h-3 text-white" />
        }
      </div>

      {/* Bubble */}
      <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
        isUser
          ? 'bg-slate-100 text-slate-700 rounded-br-sm'
          : 'bg-gradient-to-br from-orange-500 to-amber-400 text-white rounded-bl-sm'
      }`}>
        {msg.text}
      </div>
    </motion.div>
  )
}

export default function AIChatPreview() {
  const [scenarioIdx, setScenarioIdx] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)
  const [showTyping, setShowTyping] = useState(false)
  const timerRef = useRef(null)
  const bottomRef = useRef(null)

  const scenario = SCENARIOS[scenarioIdx]
  const messages = scenario.messages

  const clearTimer = () => { if (timerRef.current) clearTimeout(timerRef.current) }

  useEffect(() => {
    setVisibleCount(0)
    setShowTyping(false)

    const DELAYS = { user: 900, tool: 600, agent: 1400 }
    let step = 0

    const advance = () => {
      if (step >= messages.length) {
        // Pause then cycle to next scenario
        timerRef.current = setTimeout(() => {
          setScenarioIdx((s) => (s + 1) % SCENARIOS.length)
        }, 3200)
        return
      }

      const msg = messages[step]
      const isAgent = msg.role === 'agent'

      if (isAgent) {
        setShowTyping(true)
        timerRef.current = setTimeout(() => {
          setShowTyping(false)
          setVisibleCount(step + 1)
          step++
          timerRef.current = setTimeout(advance, DELAYS[msg.role])
        }, 1000)
      } else {
        timerRef.current = setTimeout(() => {
          setVisibleCount(step + 1)
          step++
          timerRef.current = setTimeout(advance, DELAYS[msg.role])
        }, DELAYS[msg.role])
      }
    }

    timerRef.current = setTimeout(advance, 400)
    return clearTimer
  }, [scenarioIdx]) // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-scroll chat window
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [visibleCount, showTyping])

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-200 shadow-xl w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white/60">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800">NexAgent AI</p>
            <p className="text-[10px] text-emerald-500 font-medium">● Live</p>
          </div>
        </div>

        {/* Scenario tabs */}
        <div className="flex gap-1">
          {SCENARIOS.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setScenarioIdx(i)}
              className={`text-[10px] px-2 py-1 rounded-full font-medium transition-all ${
                i === scenarioIdx
                  ? 'bg-orange-100 text-orange-600 border border-orange-200'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {s.label.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3 p-4 h-[260px] overflow-y-auto scroll-smooth">
        <AnimatePresence mode="wait">
          <motion.div
            key={scenarioIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-3"
          >
            {messages.map((msg, i) => (
              <Message key={i} msg={msg} visible={i < visibleCount} />
            ))}

            {showTyping && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-end gap-2"
              >
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-400">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <div className="px-3 py-2 rounded-2xl rounded-bl-sm bg-gradient-to-br from-orange-500 to-amber-400">
                  <TypingDots />
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Footer / input bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-t border-slate-100 bg-white/40">
        <div className="flex-1 text-[11px] text-slate-400 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200">
          Agent is handling this automatically…
        </div>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center flex-shrink-0">
          <Zap className="w-3 h-3 text-white fill-white" />
        </div>
      </div>
    </div>
  )
}
