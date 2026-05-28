import { CheckCircle, AlertTriangle, TrendingUp, DollarSign, Users, Zap } from 'lucide-react'
import { H2, H3, P, Callout, StatCard, StepCard, CaseBlock, CompareRow, TOC, FAQ, ClosingCTA } from './BlogComponents'

export default function Post3() {
  return (
    <>
      <P className="text-lg text-slate-700 font-medium leading-relaxed">
        Your sales team is spending 60–70% of their time on tasks that are not selling. Prospecting, personalizing emails, updating CRMs, scheduling follow-ups, chasing cold leads who went quiet — all of it is manual, repetitive, and completely automatable with AI agents in 2025.
      </P>
      <P>
        AI lead generation automation does not replace your salespeople. It removes everything that prevents them from doing the one thing they are actually paid to do: have meaningful conversations with qualified prospects. This guide covers how to build an AI sales system, what it costs, and what the numbers look like in practice.
      </P>

      <TOC items={[
        { id: 'problem', label: 'Why Manual Lead Generation Is Broken' },
        { id: 'what-it-is', label: 'What AI Lead Generation Automation Looks Like' },
        { id: 'four-components', label: 'The 4 Core Components of an AI Sales System' },
        { id: 'setup', label: 'Building Your AI Lead Generation Pipeline' },
        { id: 'results', label: 'Real Numbers: What Businesses Achieve' },
        { id: 'cost', label: 'What Does AI Sales Automation Cost?' },
        { id: 'mistakes', label: 'Mistakes That Kill ROI' },
        { id: 'faq', label: 'FAQ' },
      ]} />

      <H2 id="problem">Why Manual Lead Generation Is Broken in 2025</H2>
      <P>
        The average sales rep sends fewer than 35 personalized outreach emails per day manually. An AI sales system sends 300–500 personalized, researched, context-aware messages per day — and handles all follow-ups automatically.
      </P>
      <P>
        The math alone should end the debate. But the issue goes deeper than volume. Manual outreach means inconsistent follow-up timing, forgotten leads, no A/B testing across sequences, and reps spending prime hours on research instead of calls. AI fixes all of it simultaneously.
      </P>

      <div className="grid sm:grid-cols-3 gap-4 my-8">
        <StatCard value="35" label="Emails/day — manual rep" sub="Industry average" />
        <StatCard value="400+" label="Emails/day — AI system" sub="With personalization" />
        <StatCard value="3×" label="Reply rate improvement" sub="vs. generic sequences" />
      </div>

      <Callout icon={TrendingUp} color="orange" title="The hidden cost of manual outreach">
        A sales rep at $70,000/year spending 60% of their time on non-selling tasks costs you $42,000 annually in wasted labor — before accounting for the deals they missed because they were too busy updating spreadsheets. AI sales automation reclaims that time and redirects it to revenue.
      </Callout>

      <H2 id="what-it-is">What AI Lead Generation Automation Looks Like in Practice</H2>
      <P>
        An AI sales system operates across four stages of the outreach pipeline — all running simultaneously, continuously, without human involvement unless a prospect replies.
      </P>

      <div className="flex flex-col gap-0 my-6 rounded-2xl border border-slate-100 overflow-hidden">
        {[
          { stage: '1. Research', what: 'Agent scrapes LinkedIn, company websites, and news for prospect context. Identifies pain points, recent triggers (funding rounds, new hires, product launches), and the right contact.' },
          { stage: '2. Personalize', what: "LLM drafts a personalized first email based on the research — referencing the specific trigger, the prospect's role, and a concrete way NexAgent solves their likely problem. Not a template. An actual personalized message." },
          { stage: '3. Sequence', what: 'Agent manages the full follow-up sequence — timing, tone variation across touchpoints, pausing if the prospect opens without replying, escalating to a different channel (LinkedIn, phone prompt) after email silence.' },
          { stage: '4. Qualify & Route', what: 'When a prospect replies, AI reads the reply, classifies intent (interested, not now, wrong person, objection), and either responds to move forward or routes to the rep with a briefing and suggested next step.' },
        ].map((row, i) => (
          <div key={row.stage} className={`p-5 ${i < 3 ? 'border-b border-slate-100' : ''}`}>
            <p className="font-bold text-orange-500 text-xs uppercase tracking-widest mb-1">{row.stage}</p>
            <p className="text-slate-600 text-sm leading-relaxed">{row.what}</p>
          </div>
        ))}
      </div>

      <H2 id="four-components">The 4 Core Components of an AI Sales System</H2>

      <H3>1. Prospect Intelligence Agent</H3>
      <P>
        Pulls data on target prospects from LinkedIn, company websites, Crunchbase, news APIs, and your existing CRM. Identifies the right contact, their role, recent company activity, and any signals that indicate they might need what you sell. Outputs a structured prospect brief for the personalization layer.
      </P>

      <H3>2. Personalization Engine</H3>
      <P>
        Uses a large language model to write outreach that reads like a human wrote it — because it reasons about the prospect's specific context, not just their industry. The difference between "Hi [First Name], I saw you work in e-commerce..." and "Hi Sarah, saw Glossier just launched in three new markets — congrats. When brands scale distribution that fast, support volume usually spikes before the team catches up. That's exactly what we solve..."
      </P>

      <H3>3. Sequence Orchestrator</H3>
      <P>
        Manages the full multi-touch sequence across email (and optionally LinkedIn). Tracks open rates, reply rates, and bounce rates per message variant. Automatically A/B tests subject lines and opening hooks across batches. Pauses sequences for prospects who engage but don't reply. Respects unsubscribes and bounces instantly.
      </P>

      <H3>4. Reply Handler and Qualifier</H3>
      <P>
        When a reply comes in, AI reads it and classifies: Is this a meeting request? An objection? A referral to someone else? A "not now"? Based on classification, it either responds to advance the conversation (for simple moves forward) or briefs the rep with full context and a suggested response for anything that requires sales judgment.
      </P>

      <Callout icon={CheckCircle} color="green" title="The boundary that matters most">
        AI handles prospecting, personalization, sequencing, and simple reply handling. Humans handle actual sales conversations — discovery calls, demos, negotiations, closing. The best AI sales systems are not replacing salespeople; they are ensuring salespeople spend 100% of their time on selling.
      </Callout>

      <H2 id="setup">Building Your AI Lead Generation Pipeline: Step by Step</H2>
      <div className="flex flex-col gap-3 my-6">
        <StepCard num="01" title="Define your Ideal Customer Profile precisely" desc="The AI needs to know exactly who to target. Industry, company size, job titles, tech stack signals, funding stage, geographic market. The more specific the ICP, the higher the reply rate." />
        <StepCard num="02" title="Audit your current sequence performance" desc="Pull reply rates, open rates, and meeting booking rates from your existing outreach. This is the baseline you are trying to beat — and it tells you which stages to prioritize." />
        <StepCard num="03" title="Build the prospect data pipeline" desc="Connect enrichment sources (LinkedIn Sales Navigator, Apollo, Clearbit, custom scrapers) to feed qualified prospects into the system continuously. Define what data points the personalization layer needs." />
        <StepCard num="04" title="Write the first-touch winning formula" desc="Work with your best rep to identify the opening hooks and value propositions that have historically generated the highest reply rates. This becomes the training signal for the personalization engine." />
        <StepCard num="05" title="Test in a controlled batch first" desc="Run the first 100 AI-generated emails alongside 100 manual emails. Compare open rates and reply rates. Tune the personalization layer before scaling." />
        <StepCard num="06" title="Scale and monitor weekly" desc="Once reply rates match or exceed manual outreach, scale volume. Monitor weekly: reply rate, meeting booking rate, unsubscribe rate, spam complaints. Tune sequences quarterly." />
      </div>

      <H2 id="results">Real Numbers: What Businesses Achieve</H2>

      <CaseBlock
        company="GrowthVessel"
        industry="Sales Tech"
        challenge="Sales Director spending 6 hours/day on manual outreach follow-ups. Reply rates below 3%. Pipeline was thin."
        result="NexAgent built a personalized email sequence agent with automated follow-up orchestration and reply classification. Sales Director now spends time on calls only."
        stats={[{ value: '3×', label: 'Reply Rate' }, { value: '6 hrs', label: 'Daily Time Reclaimed' }, { value: '400+', label: 'Emails/Day Sent' }]}
        color="purple"
      />

      <P>
        The pattern is consistent across industries: when personalization quality stays high while volume scales, reply rates increase — not decrease. The common assumption that automation kills personalization is wrong when the AI is reasoning about each prospect individually rather than substituting a mail-merge template.
      </P>

      <H2 id="cost">What Does AI Sales Automation Cost?</H2>

      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden my-6">
        <CompareRow header />
        <CompareRow label="Setup cost" ai="$3,000–$6,000 one-time" traditional="$0 (rep's time)" />
        <CompareRow label="Monthly running cost" ai="$200–$500 (APIs)" traditional="$5,000–$8,000 (salary)" />
        <CompareRow label="Emails/day capacity" ai="300–500 personalized" traditional="30–50 manual" />
        <CompareRow label="Follow-up consistency" ai="100% — never forgotten" traditional="~60% — human error" />
        <CompareRow label="A/B testing" ai="Automatic, continuous" traditional="Manual, infrequent" />
        <CompareRow label="Scales with growth" ai="Yes — zero marginal cost" traditional="No — hire more reps" />
      </div>

      <P>
        A $5,000 AI sales system that generates two additional qualified meetings per week — which is conservative — at an average deal value of $5,000 pays back in the first month. The comparison to a full-time SDR at $60,000–$80,000/year is stark: AI does the prospecting work at less than 10% of the cost with 10× the throughput.
      </P>

      <H2 id="mistakes">Mistakes That Kill AI Sales Automation ROI</H2>
      <div className="flex flex-col gap-4 my-6">
        {[
          { title: 'Using AI to send more generic emails faster', desc: 'Volume without personalization increases spam complaints and tanks your domain reputation. AI should increase personalization quality at scale, not spray and pray at higher volume.' },
          { title: 'No ICP definition before building', desc: "If the AI doesn't know exactly who to target, it will research and personalize for the wrong people. Define your ICP in detail — industry, size, role, signals — before the first email is written." },
          { title: 'Automating too far into the sales process', desc: 'AI handles prospecting and initial qualification. Once a prospect expresses genuine interest, a human should take over. Automating discovery calls or negotiations destroys the relationship.' },
          { title: 'Ignoring deliverability setup', desc: 'Sending 400 emails/day from a cold domain will land in spam within a week. Properly warming your sending domain and maintaining a clean list is non-negotiable infrastructure for AI outreach.' },
          { title: 'Not reviewing and tuning monthly', desc: 'Markets change. Messaging that resonates in Q1 may fall flat in Q3. AI sales systems need quarterly audits of what is working and active tuning of personalization hooks and subject lines.' },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl border border-red-100">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800 mb-1">{item.title}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <H2 id="faq">FAQ: AI Lead Generation Automation</H2>
      <FAQ items={[
        { q: "Will AI outreach get flagged as spam?", a: "Not when built correctly. The keys are: proper domain warm-up, clean sending lists with verified emails, reasonable daily sending volume ramp-up, and genuine personalization that passes spam filters. AI-generated emails that look like templates will fail. AI-generated emails that look like a human wrote them for that specific person will not." },
        { q: "Can AI handle LinkedIn outreach too, not just email?", a: "Yes. AI sales systems can manage LinkedIn connection requests and follow-up messages as part of a multi-channel sequence. LinkedIn is typically used as a second or third touchpoint after email silence, not the primary channel." },
        { q: "How do you make AI outreach sound human?", a: "By giving the AI actual research to work from. When the personalization engine has the prospect's recent LinkedIn activity, their company's latest news, and a specific trigger event to reference, the resulting email reads as a genuine observation — not a template. The quality of the research input determines the quality of the personalization output." },
        { q: "What reply rate should I expect from AI outreach?", a: "A well-tuned AI outreach system typically achieves 5–12% reply rates on cold outreach — compared to 1–3% for generic sequences. The exact rate depends on ICP quality, personalization depth, offer clarity, and market timing." },
        { q: "What CRM systems does AI sales automation integrate with?", a: "NexAgent integrates with HubSpot, Salesforce, Pipedrive, and any CRM with an API. All prospect activities, replies, and meeting bookings sync back to your CRM automatically — no manual data entry." },
      ]} />

      <ClosingCTA />
    </>
  )
}
