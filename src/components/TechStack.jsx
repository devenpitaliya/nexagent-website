import { motion } from 'framer-motion'
import {
  siAnthropic, siLangchain, siN8n, siMake, siZapier,
  siNotion, siAirtable, siHubspot, siShopify,
  siGoogledrive, siGooglesheets, siGooglecloud,
  siSupabase, siMongodb, siPostgresql, siVercel,
  siZendesk, siIntercom, siMailchimp, siStripe,
  siAsana, siJira, siClickup, siGithub, siWhatsapp, siTelegram,
  siDiscord, siFigma, siLinear, siMixpanel,
} from 'simple-icons'

const ROW1 = [
  { icon: siAnthropic,    name: 'Anthropic'    },
  { icon: siLangchain,    name: 'LangChain'    },
  { icon: siN8n,          name: 'n8n'          },
  { icon: siMake,         name: 'Make'         },
  { icon: siZapier,       name: 'Zapier'       },
  { icon: siDiscord,      name: 'Discord'      },
  { icon: siNotion,       name: 'Notion'       },
  { icon: siAirtable,     name: 'Airtable'     },
  { icon: siHubspot,      name: 'HubSpot'      },
  { icon: siShopify,      name: 'Shopify'      },
  { icon: siZendesk,      name: 'Zendesk'      },
  { icon: siIntercom,     name: 'Intercom'     },
]

const ROW2 = [
  { icon: siGoogledrive,  name: 'Google Drive'  },
  { icon: siGooglesheets, name: 'Google Sheets' },
  { icon: siGooglecloud,  name: 'Google Cloud'  },
  { icon: siSupabase,     name: 'Supabase'      },
  { icon: siMongodb,      name: 'MongoDB'       },
  { icon: siPostgresql,   name: 'PostgreSQL'    },
  { icon: siVercel,       name: 'Vercel'        },
  { icon: siMailchimp,    name: 'Mailchimp'     },
  { icon: siStripe,       name: 'Stripe'        },
  { icon: siAsana,        name: 'Asana'         },
  { icon: siJira,         name: 'Jira'          },
  { icon: siClickup,      name: 'ClickUp'       },
  { icon: siGithub,       name: 'GitHub'        },
  { icon: siWhatsapp,     name: 'WhatsApp'      },
  { icon: siTelegram,     name: 'Telegram'      },
  { icon: siFigma,        name: 'Figma'         },
  { icon: siLinear,       name: 'Linear'        },
  { icon: siMixpanel,     name: 'Mixpanel'      },
]

function LogoChipColored({ icon, name }) {
  return (
    <div className="group flex items-center gap-3 px-5 py-3 mx-3 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 cursor-default flex-shrink-0">
      <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 fill-slate-300 group-hover:fill-slate-600 transition-colors duration-300">
        <path d={icon.path} />
      </svg>
      <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-700 transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-wrap overflow-hidden">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((item, i) => (
          <LogoChipColored key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden bg-slate-50/50">
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-orange-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 container-wide"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-slate-200 bg-white text-slate-500 mb-4">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Integrates With the Tools{' '}
            <span className="text-gradient">You Already Use</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            No ripping out your stack. We plug directly into the platforms your team runs on today.
          </p>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
            <MarqueeRow items={ROW1} />
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
            <MarqueeRow items={ROW2} reverse />
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-slate-400 text-sm mt-8 container-wide"
        >
          + any tool with an API or webhook
        </motion.p>
      </div>
    </section>
  )
}
