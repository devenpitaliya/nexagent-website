import { CheckCircle, AlertTriangle, Zap, Clock, TrendingDown, Star } from 'lucide-react'
import { H2, H3, P, Callout, StatCard, StepCard, CaseBlock, CompareRow, TOC, FAQ, ClosingCTA } from './BlogComponents'

export default function Post2() {
  return (
    <>
      <P className="text-lg text-slate-700 font-medium leading-relaxed">
        Customer support is the most visible place where understaffed businesses break. A 48-hour response time is not a staffing problem — it is an automation problem. In 2025, AI customer support automation handles up to 80% of tickets without a human, reduces response time from hours to minutes, and costs a fraction of the headcount required to achieve the same throughput manually.
      </P>
      <P>
        This guide covers exactly how to implement AI customer support for your business: what gets automated, how the technology works, what results to expect, and what the real costs look like.
      </P>

      <TOC items={[
        { id: 'state-of-support', label: 'The State of Customer Support in 2025' },
        { id: 'what-ai-support-is', label: 'What AI Customer Support Automation Actually Is' },
        { id: 'what-gets-automated', label: 'The 5 Support Tasks AI Handles Best' },
        { id: 'how-to-setup', label: 'How to Set Up AI Customer Support' },
        { id: 'tools', label: 'The Tech Stack Behind AI Support' },
        { id: 'results', label: 'Real Results: StyleForward Case Study' },
        { id: 'roi', label: 'Expected ROI and Timeline' },
        { id: 'faq', label: 'FAQ' },
      ]} />

      <H2 id="state-of-support">The State of Customer Support in 2025</H2>
      <P>
        Customer expectations have never been higher. 90% of customers now rate an "immediate" response as important when they have a support question — and "immediate" means under 10 minutes. Yet the average business support team responds in 12 hours or more.
      </P>
      <P>
        The math does not work with headcount alone. A mid-size e-commerce brand receiving 1,000 daily tickets would need 15–25 support agents to handle them in real time. That is $900,000–$1,500,000 in annual salary — for a problem AI solves for under $10,000 in setup costs.
      </P>

      <div className="grid sm:grid-cols-3 gap-4 my-8">
        <StatCard value="90%" label="Customers expect immediate response" sub="Under 10 minutes" />
        <StatCard value="80%" label="Tickets AI can resolve without a human" sub="Across industries" />
        <StatCard value="65%" label="Average support cost reduction" sub="After AI implementation" />
      </div>

      <Callout icon={TrendingDown} color="red" title="The headcount trap">
        Hiring more support agents is a linear solution to an exponential problem. As your business grows, ticket volume grows faster than you can hire. AI customer support automation scales with zero marginal cost per ticket — your 10,000th ticket costs the same as your first.
      </Callout>

      <H2 id="what-ai-support-is">What AI Customer Support Automation Actually Is</H2>
      <P>
        AI customer support automation is not a chatbot with canned responses. It is a multi-agent system that reads incoming tickets, understands context and intent, retrieves relevant data from your systems (orders, accounts, history), makes a decision on how to respond, and either sends the response or escalates to a human with everything pre-filled.
      </P>
      <P>
        The key distinction: traditional chatbots match keywords to scripts. AI support agents understand natural language, handle ambiguous requests, recognize emotional context (an angry customer vs. a confused one), and respond appropriately — or know when a human should take over.
      </P>

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden my-6">
        <CompareRow header />
        <CompareRow label="Handles unstructured input" ai="Yes — reads emails, chat, forms" traditional="No — keywords only" />
        <CompareRow label="Understands customer intent" ai="Yes — reasoning model" traditional="No — keyword matching" />
        <CompareRow label="Fetches order/account data" ai="Yes — live API calls" traditional="Limited or manual" />
        <CompareRow label="Writes personalized replies" ai="Yes — per-customer context" traditional="Template-only" />
        <CompareRow label="Handles edge cases" ai="Escalates with context" traditional="Fails or loops" />
        <CompareRow label="Learns from feedback" ai="Yes — continuous tuning" traditional="Manual rule updates" />
      </div>

      <H2 id="what-gets-automated">The 5 Support Tasks AI Handles Best</H2>

      <H3>1. Order Status and Tracking Enquiries</H3>
      <P>
        "Where is my order?" accounts for 20–40% of all e-commerce support volume. An AI agent connects to your order management system, fetches the real-time status, and responds with a personalized update in seconds — without a human touching the ticket.
      </P>

      <H3>2. FAQ and Policy Questions</H3>
      <P>
        Return policies, shipping timelines, account changes, password resets — these are high-volume, low-complexity tickets that drain agent time. AI handles these at 100% accuracy with consistent, on-brand responses every time.
      </P>

      <H3>3. Ticket Classification and Routing</H3>
      <P>
        Before any response is sent, AI classifies every incoming ticket by type, urgency, and customer tier — and routes complex or high-value cases to the right human agent with context pre-loaded. This alone cuts average handle time significantly.
      </P>

      <H3>4. First Response Drafting</H3>
      <P>
        For tickets that require a human, AI drafts the response based on ticket context and customer history. The agent reviews and sends with one click. This cuts human handle time by 40–60% even on escalated tickets.
      </P>

      <H3>5. Follow-up and Resolution Confirmation</H3>
      <P>
        After resolving a ticket, AI sends a follow-up 24–48 hours later to confirm resolution, asks for a satisfaction rating, and reopens the ticket if the customer indicates the issue persists. This runs entirely automatically.
      </P>

      <Callout icon={CheckCircle} color="green" title="What AI should NOT handle">
        High-value refund disputes, legal complaints, media inquiries, and accounts flagged for potential fraud should always route to a human. Define these thresholds explicitly before launch — the agent needs to know its own boundaries.
      </Callout>

      <H2 id="how-to-setup">How to Set Up AI Customer Support: Step by Step</H2>
      <div className="flex flex-col gap-3 my-6">
        <StepCard num="01" title="Audit your ticket data" desc="Pull 3–6 months of historical tickets. Categorize them by type and volume. This tells you what the agent will see most and what edge cases to anticipate." />
        <StepCard num="02" title="Define resolution criteria per category" desc="For each ticket type: what does a correct resolution look like? What data does the agent need to retrieve? What triggers escalation? Document this before building." />
        <StepCard num="03" title="Connect your data sources" desc="The agent needs live access to: order management system, CRM, knowledge base, and any relevant databases. API connections are set up during build — no manual data entry." />
        <StepCard num="04" title="Build and train in staging" desc="Run 3–6 months of historical tickets through the agent in staging. Review outputs against what a human would have sent. Tune until accuracy exceeds 90%." />
        <StepCard num="05" title="Deploy with shadow mode first" desc="For the first week in production, run AI in shadow mode — it generates responses but a human reviews before sending. This validates accuracy on real traffic before going fully autonomous." />
        <StepCard num="06" title="Monitor weekly and tune" desc="Track resolution rate, escalation rate, CSAT, and response time weekly. Most support agents improve by 15–25% in the first 30 days of tuning." />
      </div>

      <H2 id="tools">The Tech Stack Behind AI Customer Support</H2>
      <P>You do not need to understand the technology to use it — but knowing what goes into it helps you evaluate any implementation.</P>

      <div className="flex flex-col gap-3 my-6">
        {[
          { layer: 'Reasoning Model', examples: 'GPT-4o, Claude 3.5 Sonnet, Gemini 1.5', role: 'Reads the ticket, understands intent, decides on action or escalation' },
          { layer: 'Orchestration', examples: 'LangChain, n8n, custom Python', role: 'Coordinates the multi-step workflow: read → fetch → decide → respond' },
          { layer: 'Integrations', examples: 'Zendesk, Freshdesk, Intercom, HubSpot, Shopify', role: 'Pulls ticket data in, pushes responses out, updates records' },
          { layer: 'Knowledge Base', examples: 'Notion, Confluence, Google Docs, custom vector DB', role: 'Source of truth for policies, FAQs, product information the agent references' },
          { layer: 'Monitoring', examples: 'Custom dashboards, Slack alerts', role: 'Tracks accuracy, escalation rate, CSAT, and flags anomalies' },
        ].map(row => (
          <div key={row.layer} className="flex flex-col sm:flex-row gap-3 p-5 bg-white rounded-2xl border border-slate-100">
            <div className="sm:w-40 flex-shrink-0">
              <p className="font-bold text-slate-800 text-sm">{row.layer}</p>
              <p className="text-orange-500 text-xs font-medium mt-0.5">{row.examples}</p>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{row.role}</p>
          </div>
        ))}
      </div>

      <H2 id="results">Real Results: StyleForward Case Study</H2>
      <P>
        StyleForward is a mid-size fashion e-commerce brand that was receiving 1,200+ daily support tickets. Response times had hit 48 hours. Customer satisfaction was declining. They were hiring more agents but ticket volume was outpacing headcount.
      </P>
      <CaseBlock
        company="StyleForward"
        industry="E-Commerce"
        challenge="1,200+ daily tickets, 48-hour response time, declining CSAT, hiring unable to keep pace with volume growth."
        result="NexAgent built a 3-agent support system: classification agent, order-data agent, and reply agent. Live in 11 days. 80% of tickets fully automated, the rest escalated with full context."
        stats={[{ value: '65%', label: 'Cost Reduction' }, { value: '4 min', label: 'Avg Response' }, { value: '4.8★', label: 'CSAT Score' }]}
        color="orange"
      />
      <P>
        The agent now handles returns, order lookups, shipping questions, and basic policy queries automatically. Complex refund disputes and complaints route to a human agent with the full ticket history and recommended response pre-filled. Human agents now handle 80% fewer tickets and have time to resolve the ones that actually require judgment.
      </P>

      <H2 id="roi">Expected ROI and Timeline</H2>
      <div className="grid sm:grid-cols-2 gap-4 my-6">
        <div className="p-5 bg-white rounded-2xl border border-slate-100">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Typical Timeline</p>
          {[
            { phase: 'Discovery & audit', time: 'Days 1–3' },
            { phase: 'Build & integration', time: 'Days 4–10' },
            { phase: 'Staging & tuning', time: 'Days 10–13' },
            { phase: 'Production go-live', time: 'Day 14' },
            { phase: 'Full autonomous operation', time: 'Week 3–4' },
          ].map(row => (
            <div key={row.phase} className="flex justify-between py-2 border-b border-slate-50 last:border-0 text-sm">
              <span className="text-slate-600">{row.phase}</span>
              <span className="font-semibold text-orange-500">{row.time}</span>
            </div>
          ))}
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-100">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Typical ROI</p>
          {[
            { metric: 'Ticket automation rate', value: '70–80%' },
            { metric: 'Response time reduction', value: '95%+' },
            { metric: 'Support cost reduction', value: '50–70%' },
            { metric: 'CSAT improvement', value: '+0.4–0.8★' },
            { metric: 'Payback period', value: 'Under 60 days' },
          ].map(row => (
            <div key={row.metric} className="flex justify-between py-2 border-b border-slate-50 last:border-0 text-sm">
              <span className="text-slate-600">{row.metric}</span>
              <span className="font-semibold text-emerald-600">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      <H2 id="faq">FAQ: AI Customer Support Automation</H2>
      <FAQ items={[
        { q: "Will AI customer support feel impersonal to customers?", a: "No — when done properly, the opposite happens. AI responses are faster, more consistent, and personalized with the customer's name, order history, and specific situation. Customers care far more about response time than whether a human or AI sent the reply. Companies consistently see CSAT improvements after implementing AI support." },
        { q: "What happens when the AI doesn't know the answer?", a: "The agent escalates to a human with the full ticket context and a draft response pre-filled. The human reviews and sends. This is faster than a cold ticket — the human only needs to confirm or edit, not research from scratch." },
        { q: "How accurate is AI customer support?", a: "In well-tuned systems, 90–95% accuracy on supported ticket types is standard within 30 days of launch. The 5–10% that require human review are typically genuinely complex cases that benefit from human judgment anyway." },
        { q: "Can AI support integrate with our existing help desk?", a: "Yes. NexAgent integrates with Zendesk, Freshdesk, Intercom, HubSpot Service, Front, and any platform with an API. You do not need to switch tools — the agent works inside your existing system." },
        { q: "How long before AI support pays for itself?", a: "Most clients see payback in 30–60 days. A $5,000 implementation that saves two full-time support agents ($120,000+/year combined) pays back in under 2 weeks of saved salary." },
      ]} />

      <ClosingCTA />
    </>
  )
}
