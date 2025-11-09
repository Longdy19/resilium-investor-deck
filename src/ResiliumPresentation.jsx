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
  FaBars,
} from "react-icons/fa";

export default function ResiliumPresentation() {
  const slides = [
    {
      id: "cover",
      title: "Resilium — Strategic Plan 2025–2035",
      subtitle: "Engineering Resilience for a Sustainable Future",
      icon: <FaMountain size={32} className="text-[#FFFFFF]" />,
    },
    {
      id: "story",
      title: "Our Brand Story",
      icon: <FaSeedling size={28} className="text-[#16808A]" />,
      bullets: [
        "Resilium was founded to transform Cambodia’s construction industry through engineering, management, and digital innovation.",
        "Built on the vision of Longdy Ouk (Sumitomo Mitsui, Archetype; Master’s in Service Engineering & Management).",
        "‘Resilium’ stands for resilience + evolution — building from the ground up for a sustainable, risk-managed future.",
        "Core strengths: Geotechnics, Cost & Risk Management, and Digital Delivery.",
      ],
    },
    {
      id: "vision",
      title: "Vision, Mission & Purpose",
      icon: <FaLightbulb size={28} className="text-[#16808A]" />,
      bullets: [
        "Vision: To be Southeast Asia’s trusted leader in sustainable, data-driven, and resilient infrastructure.",
        "Mission: Integrate geotechnical, cost, and risk management with digital innovation for safer, smarter, and more sustainable projects.",
        "Purpose: Empower organizations through engineering intelligence — transforming insight into impact.",
      ],
    },
    {
      id: "goals",
      title: "Strategic Goals (2025–2030)",
      icon: <FaBullseye size={28} className="text-[#16808A]" />,
      bullets: [
        "Build a national reputation for resilience-based engineering and cost–risk management.",
        "Digitize workflows — BIM/GIS dashboards and analytics (100% projects by 2027).",
        "Expand to Laos, Vietnam, and Thailand by 2028.",
        "Launch Resilium Academy by 2030.",
        "Achieve 30% revenue from digital services by 2030.",
      ],
    },
    {
      id: "pest",
      title: "PEST Analysis",
      icon: <FaGlobe size={28} className="text-[#16808A]" />,
      grid: {
        Political: ["Gov’t infrastructure & resilience policies", "Regulatory modernization"],
        Economic: ["ASEAN construction growth", "Inflation & currency risks"],
        Social: ["Rising safety & resilience awareness", "Urbanization & smart cities"],
        Technological: ["BIM/GIS adoption", "AI & risk analytics evolution"],
      },
    },
    {
      id: "fiveforces",
      title: "Porter’s Five Forces",
      icon: <FaBalanceScale size={28} className="text-[#16808A]" />,
      bullets: [
        "New Entrants — Moderate: technical expertise limits competition.",
        "Suppliers — Moderate: balance through partnerships.",
        "Buyers — High: focus on cost & quality differentiation.",
        "Substitutes — Low: unique integrated ground–cost–risk solutions.",
        "Rivalry — High: compete via innovation and delivery precision.",
      ],
    },
    {
      id: "framework",
      title: "Service Framework — RGSF 1.0",
      icon: <FaUsers size={28} className="text-[#16808A]" />,
      bullets: [
        "Discover — Define scope and baseline risks.",
        "Investigate — Conduct geotechnical & topographic surveys.",
        "Analyze — Integrate cost, time, and risk models.",
        "Recommend — Offer resilient, data-driven foundation solutions.",
        "Integrate — Deliver via BIM/GIS dashboards.",
      ],
    },
    {
      id: "bmc",
      title: "Business Model Canvas — Resilium Ground",
      icon: <FaChartLine size={28} className="text-[#16808A]" />,
      grid: {
        KeyPartners: ["Labs/testing", "Survey firms", "GIS/BIM vendors", "Universities", "Sustainability orgs"],
        KeyActivities: ["Geotech work", "Risk modeling", "Digital dashboards", "PM consulting"],
        ValuePropositions: ["Integrated cost–risk–ground insights", "Reduced uncertainty", "Sustainability integration"],
        CustomerSegments: ["Developers", "Contractors", "Infra owners", "Gov’t"],
        KeyResources: ["Experts", "Equipment", "Data", "Partnerships"],
        CustomerRelationships: ["Trusted advisor", "Collaborative delivery"],
        Channels: ["Direct B2B", "Webinars", "Conferences"],
        CostStructure: ["Human capital", "Equipment", "R&D", "Marketing"],
        RevenueStreams: ["Project fees", "Consulting retainers", "Digital subscriptions"],
      },
    },
    {
      id: "budget",
      title: "Strategic Budget (2025–2028)",
      icon: <FaMoneyBillWave size={28} className="text-[#16808A]" />,
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
      icon: <FaMountain size={28} className="text-[#16808A]" />,
      bullets: [
        "Phase 1 (2025–26): Strengthen core — establish Resilium Ground with cost–risk–data leadership.",
        "Phase 2 (2027–29): Launch design & build with sustainable engineering.",
        "Phase 3 (2030–35): AI-driven risk analytics & Resilium Academy.",
        "Beyond 2035: Become ASEAN’s leading digital resilience brand.",
      ],
      bhag: "To be Cambodia’s first globally recognized digital construction and resilience brand.",
    },
  ];

  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const [menuOpen, setMenuOpen] = useState(false);

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const goTo = (i) => {
    setIndex(i);
    setMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#F7FBFB] to-white text-[#0B3A57] font-sans">
      {/* Sidebar */}
      <div
        className={`fixed md:static z-20 bg-gradient-to-b from-[#0B3A57] to-[#16808A] text-white md:w-72 w-60 border-r border-gray-200 shadow-xl p-5 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-[#16808A] font-bold rounded-lg flex items-center justify-center text-lg shadow-md">
              R
            </div>
            <div>
              <h1 className="text-lg font-semibold">Resilium</h1>
              <p className="text-xs text-gray-200">Engineering Resilience</p>
            </div>
          </div>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(false)}>
            ✕
          </button>
        </div>

        {/* Menu */}
        <ul className="space-y-2">
          {slides.map((s, i) => (
            <li
              key={s.id}
              onClick={() => goTo(i)}
              className={`cursor-pointer p-2 rounded-lg flex items-center gap-2 transition-all ${
                index === i ? "bg-white text-[#16808A] font-semibold" : "hover:bg-white/10"
              }`}
            >
              {s.icon}
              <span className="text-sm">{s.title}</span>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-4 left-5 text-xs text-gray-200">
          © 2025 Resilium | Longdy Ouk
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-72 p-6 md:p-10 relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden fixed top-4 left-4 bg-[#0B3A57] text-white p-2 rounded-lg shadow-lg z-30"
        >
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
                  <li key={i} className="text-gray-700 text-lg">
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {slide.grid && (
              <div className="grid grid-cols-2 gap-6 mt-6">
                {Object.entries(slide.grid).map(([key, values]) => (
                  <div key={key} className="bg-[#F9FAFB] p-5 rounded-lg shadow-sm">
                    <div className="font-semibold mb-2 text-[#16808A]">{key}</div>
                    <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
                      {values.map((v, i) => (
                        <li key={i}>{v}</li>
                      ))}
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

        {/* Footer Navigation */}
        <div className="mt-8 flex justify-between items-center text-sm text-gray-600">
          <button onClick={prev} className="px-4 py-2 border rounded hover:bg-gray-100">
            Previous
          </button>
          <span>
            Slide {index + 1} / {slides.length}
          </span>
          <button
            onClick={next}
            className="px-4 py-2 bg-[#16808A] text-white rounded hover:opacity-90"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
