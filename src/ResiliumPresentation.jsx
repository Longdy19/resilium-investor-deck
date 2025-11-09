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
  FaBars
} from "react-icons/fa";

export default function ResiliumPresentation() {
  const slides = [
    { id: "cover", title: "Resilium — Strategic Plan 2025–2035", subtitle: "Engineering Resilience for a Sustainable Future", icon: <FaMountain className="text-[#16808A]" size={32} /> },
    { id: "story", title: "Our Brand Story", icon: <FaSeedling className="text-[#16808A]" size={28} />, bullets: ["Resilium was founded to transform Cambodia’s construction through engineering, management, and digital innovation.", "Built on the vision of Longdy Ouk (Sumitomo Mitsui, Archetype; Master’s in Service Engineering & Management).", "‘Resilium’ means resilience + evolution — building from the ground up for a sustainable, risk-managed future.", "Core strengths: Geotechnics, Cost & Risk Management, and Digital Delivery."] },
    { id: "vision", title: "Vision, Mission & Purpose", icon: <FaLightbulb className="text-[#16808A]" size={28} />, bullets: ["Vision: To be Southeast Asia’s trusted leader in sustainable, data-driven, and resilient infrastructure.", "Mission: Integrate geotechnical, cost, and risk management with digital innovation to enable safer, smarter, and more sustainable projects.", "Purpose: To empower organizations through engineering intelligence — transforming insight into impact."] },
    { id: "goals", title: "Strategic Goals (2025–2030)", icon: <FaBullseye className="text-[#16808A]" size={28} />, bullets: ["Build reputation for resilience-based engineering and cost-risk management.", "Digitize workflows — BIM/GIS dashboards and risk analytics (100% projects by 2027).", "Regional expansion to Laos, Vietnam, and Thailand by 2028.", "Launch Resilium Academy by 2030.", "Reach 30% revenue from digital services and analytics."] },
    { id: "pest", title: "PEST Analysis", icon: <FaGlobe className="text-[#16808A]" size={28} />, grid: { Political: ["Gov’t infra & resilience programs", "Environmental regulations"], Economic: ["ASEAN infra growth", "Inflation & cost volatility"], Social: ["Climate resilience awareness", "Urbanization & smart cities"], Technological: ["BIM/GIS/digital twins", "Risk & cost analytics integration"] } },
    { id: "fiveforces", title: "Porter’s Five Forces", icon: <FaBalanceScale className="text-[#16808A]" size={28} />, bullets: ["New Entrants — Moderate: digital and technical barriers.", "Suppliers — Moderate: manage labs and survey partners.", "Buyers — High: demand for optimized cost & safety.", "Substitutes — Low: integrated cost-risk model is rare.", "Rivalry — High: differentiate via accuracy & digital delivery."] },
    { id: "framework", title: "Service Framework (RGSF 1.0)", icon: <FaUsers className="text-[#16808A]" size={28} />, bullets: ["Discover — Define scope, context, and risk baseline.", "Investigate — Geotechnical & topographic survey using advanced tools.", "Analyze — Cost & risk modeling with analytics.", "Recommend — Optimized foundation & design strategy.", "Integrate — Deliver via BIM/GIS dashboards."] },
    { id: "bmc", title: "Business Model Canvas — Resilium Ground", icon: <FaChartLine className="text-[#16808A]" size={28} />, grid: { KeyPartners: ["Labs/testing", "Survey firms", "GIS vendors", "Universities", "Sustainability orgs"], KeyActivities: ["Geotech work", "Risk modeling", "PM consulting", "Digital dashboards"], ValuePropositions: ["Integrated ground–cost–risk intelligence", "Reduced uncertainty", "Sustainability alignment"], CustomerSegments: ["Developers", "Contractors", "Infra owners", "Gov’t"], KeyResources: ["Engineers", "Equipment", "Data", "Partnerships"], CustomerRelationships: ["Trusted advisor", "Collaborative delivery"], Channels: ["Direct B2B", "Webinars", "Conferences"], CostStructure: ["People", "Equipment", "Training", "Marketing"], RevenueStreams: ["Project fees", "Consulting retainers", "Digital subscriptions"] } },
    { id: "budget", title: "Strategic Budget Allocation (2025–2028)", icon: <FaMoneyBillWave className="text-[#16808A]" size={28} />, bullets: ["R&D & Digital Development — 30%", "Human Capital — 25%", "Operations & Equipment — 20%", "Marketing & Branding — 15%", "Contingency — 10%"] },
    { id: "roadmap", title: "Growth Roadmap & BHAG", icon: <FaMountain className="text-[#16808A]" size={28} />, bullets: ["Phase 1 (2025–26): Establish Resilium Ground — data & cost-risk excellence.", "Phase 2 (2027–29): Launch design & build — sustainable digital engineering.", "Phase 3 (2030–35): Resilium Academy & AI expansion.", "Beyond 2035: ASEAN leader in resilient infrastructure."], bhag: "Be Cambodia’s first globally recognized digital construction and resilience brand." },
  ];

  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const [menuOpen, setMenuOpen] = useState(false);

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const goTo = (i) => { setIndex(i); setMenuOpen(false); };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#F7FBFB] to-white text-[#0B3A57] font-sans">
      {/* Sidebar */}
      <div className={`fixed md:static z-20 bg-white md:w-64 w-60 border-r border-gray-200 shadow-sm p-4 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-bold text-[#0B3A57]">Resilium Deck</h1>
          <button className="md:hidden" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        <ul className="space-y-2">
          {slides.map((s, i) => (
            <li
              key={s.id}
              onClick={() => goTo(i)}
              className={`cursor-pointer rounded-lg p-2 flex items-center gap-2 ${index === i ? "bg-[#16808A] text-white" : "hover:bg-gray-100"}`}
            >
              {s.icon}
              <span className="text-sm font-medium">{s.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-6 md:p-10 relative">
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden fixed top-4 left-4 bg-[#0B3A57] text-white p-2 rounded-lg shadow-lg z-30">
          <FaBars />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl p-10 shadow-lg border-t-4 border-[#16808A] min-h-[500px]"
          >
            <div className="flex items-center gap-4 mb-6">
              {slide.icon && <div>{slide.icon}</div>}
              <h2 className="text-3xl font-bold">{slide.title}</h2>
            </div>
            {slide.subtitle && <div className="text-gray-700 mb-6 text-lg">{slide.subtitle}</div>}
            {slide.bullets && (
              <ul className="list-disc ml-5 space-y-3">
                {slide.bullets.map((b, i) => (
                  <li key={i} className="text-gray-700 text-lg">{b}</li>
                ))}
              </ul>
            )}
            {slide.grid && (
              <div className="grid grid-cols-2 gap-6 mt-6">
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
            {slide.bhag && (
              <div className="mt-8 bg-[#F0FAFA] p-5 rounded-lg border-l-4 border-[#16808A] shadow">
                <div className="font-semibold text-[#0B3A57]">BHAG</div>
                <div className="mt-2 text-gray-700 text-lg">{slide.bhag}</div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center text-sm text-gray-600">
          <button onClick={prev} className="px-4 py-2 border rounded hover:bg-gray-100">Previous</button>
          <span>Slide {index + 1} / {slides.length}</span>
          <button onClick={next} className="px-4 py-2 bg-[#16808A] text-white rounded hover:opacity-90">Next</button>
        </div>
      </div>
    </div>
  );
}
