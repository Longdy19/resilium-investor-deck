import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCogs,
  FaMountain,
  FaSeedling,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaBalanceScale,
  FaGlobe,
  FaUserTie,
  FaBullseye,
  FaMoneyBillWave,
} from "react-icons/fa";

export default function ResiliumPresentation() {
  const slides = [
    {
      id: "cover",
      title: "Resilium — Strategic Plan 2025–2035",
      subtitle: "Engineering Resilience for a Sustainable Future",
      icon: <FaMountain size={48} className="text-[#16808A]" />,
    },
    {
      id: "story",
      title: "Our Brand Story",
      icon: <FaSeedling size={36} className="text-[#16808A]" />,
      bullets: [
        "Resilium was founded to advance Cambodia’s construction sector through engineering, management, and digital transformation.",
        "Built on the vision of Longdy Ouk (Sumitomo Mitsui, Archetype; Master’s in Service Engineering & Management).",
        "‘Resilium’ means resilience + evolution — building from the ground up for a sustainable, risk-managed future.",
        "Core strengths: Geotechnics, Cost & Risk Management, and Digital Delivery.",
      ],
    },
    {
      id: "vision",
      title: "Vision, Mission & Purpose",
      icon: <FaLightbulb size={36} className="text-[#16808A]" />,
      bullets: [
        "Vision: To be Southeast Asia’s most trusted partner in sustainable, data-driven, and resilient infrastructure.",
        "Mission: Integrate geotechnical, cost, and risk management with digital innovation to enable safer, smarter, and more sustainable projects.",
        "Purpose: To empower organizations through engineering intelligence — transforming insight into impact.",
      ],
    },
    {
      id: "goals",
      title: "Strategic Goals (2025–2030)",
      icon: <FaBullseye size={36} className="text-[#16808A]" />,
      bullets: [
        "Establish reputation for resilience-based engineering and cost-risk excellence.",
        "Digitize workflows — BIM/GIS dashboards and risk analytics (100% projects by 2027).",
        "Regional expansion to Laos, Vietnam, and Thailand by 2028.",
        "Launch Resilium Academy by 2030 for professional capacity building.",
        "Achieve 30% revenue from digital services and risk analytics.",
      ],
    },
    {
      id: "pest",
      title: "PEST Analysis",
      icon: <FaGlobe size={36} className="text-[#16808A]" />,
      grid: {
        Political: ["Gov’t infrastructure & resilience programs", "Stronger environmental & safety regulations"],
        Economic: ["Growing ASEAN infrastructure investments", "Inflation & material cost volatility"],
        Social: ["Rising climate resilience awareness", "Urbanization & smart city demand"],
        Technological: ["Digital twins, BIM, and GIS adoption", "AI & data-driven cost/risk analysis"],
      },
    },
    {
      id: "fiveforces",
      title: "Porter’s Five Forces",
      icon: <FaBalanceScale size={36} className="text-[#16808A]" />,
      bullets: [
        "New Entrants — Moderate: expertise & digital barriers protect incumbents.",
        "Suppliers — Moderate: depend on lab/testing & survey vendors.",
        "Buyers — High: demand for cost-effective and proven solutions.",
        "Substitutes — Low: integrated cost–risk–digital approach is rare.",
        "Rivalry — High: differentiation via data quality & precision delivery.",
      ],
    },
    {
      id: "framework",
      title: "Service Framework — RGSF 1.0",
      icon: <FaUsers size={36} className="text-[#16808A]" />,
      bullets: [
        "Discover — Define scope, context, and risk baseline.",
        "Investigate — Geotechnical & topographic survey using advanced methods.",
        "Analyze — Apply cost & risk modeling with data analytics.",
        "Recommend — Deliver optimized foundation & design strategies.",
        "Integrate — Report via BIM/GIS dashboards & digital delivery.",
      ],
    },
    {
      id: "bmc",
      title: "Business Model Canvas — Resilium Ground",
      icon: <FaChartLine size={36} className="text-[#16808A]" />,
      grid: {
        KeyPartners: ["Labs/testing", "Drone & survey firms", "BIM/GIS vendors", "Universities", "Sustainability orgs"],
        KeyActivities: ["Geotech investigations", "Cost & risk modeling", "Digital dashboards", "PM consulting"],
        ValuePropositions: [
          "Integrated cost–risk–ground intelligence",
          "Reduced project uncertainty",
          "Faster decision-making",
          "Sustainability alignment",
        ],
        CustomerSegments: ["Developers", "Government", "Contractors", "Infra owners"],
        KeyResources: ["Engineers & analysts", "Field equipment", "Software & data", "Partnerships"],
        CustomerRelationships: ["Trusted advisor", "Collaborative engagement", "Digital reporting"],
        Channels: ["Direct B2B", "Website/webinars", "Industry conferences"],
        CostStructure: ["Human capital", "Equipment/software", "Training & R&D", "Marketing"],
        RevenueStreams: ["Project fees", "Consulting retainers", "Digital subscriptions", "Monitoring services"],
      },
    },
    {
      id: "budget",
      title: "Strategic Budget (2025–2028)",
      icon: <FaMoneyBillWave size={36} className="text-[#16808A]" />,
      bullets: [
        "R&D & Digital Development — 30%",
        "Human Capital — 25%",
        "Operations & Equipment — 20%",
        "Marketing & Branding — 15%",
        "Contingency — 10%",
      ],
    },
    {
      id: "roadmap",
      title: "Growth Roadmap & BHAG",
      icon: <FaMountain size={36} className="text-[#16808A]" />,
      bullets: [
        "Phase 1 (2025–26): Strengthen foundation — Resilium Ground excellence & digital risk models.",
        "Phase 2 (2027–29): Launch design & build — Sustainable, data-driven construction.",
        "Phase 3 (2030–35): Resilium Academy & AI analytics expansion.",
        "Beyond 2035: Become ASEAN leader in resilience-based infrastructure innovation.",
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7FBFB] to-white text-[#0B3A57] font-sans p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0B3A57] text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">
              R
            </div>
            <div>
              <div className="text-xl font-bold">Resilium</div>
              <div className="text-sm text-gray-600">Investor Presentation — Strategic Plan 2025–2035</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={prev} className="text-sm px-3 py-1 border rounded hover:bg-[#F0FAFA]">
              Prev
            </button>
            <button onClick={next} className="text-sm px-3 py-1 bg-[#16808A] text-white rounded hover:opacity-90">
              Next
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-10 shadow-lg border-t-4 border-[#16808A]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
            >
              <div className="flex items-center gap-4 mb-6">
                {slide.icon && <div>{slide.icon}</div>}
                <h2 className="text-3xl font-bold">{slide.title}</h2>
              </div>
              {slide.subtitle && <div className="text-gray-700 mb-6 text-lg">{slide.subtitle}</div>}
              {slide.bullets && (
                <ul className="space-y-3 list-disc ml-5 mb-6">
                  {slide.bullets.map((b, i) => (
                    <li key={i} className="text-gray-700 text-lg">{b}</li>
                  ))}
                </ul>
              )}
              {slide.grid && (
                <div className="grid grid-cols-2 gap-6">
                  {Object.entries(slide.grid).map(([key, values]) => (
                    <div key={key} className="bg-[#F9FAFB] p-5 rounded-lg shadow-sm">
                      <div className="font-semibold mb-2 text-[#16808A]">{key}</div>
                      <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                        {values.map((v, i) => <li key={i}>{v}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 text-sm text-gray-600 text-center">
          Slide {index + 1} of {slides.length} • Resilium — Engineering Resilience for a Sustainable Future
        </div>
      </div>
    </div>
  );
}
