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
      notes: "Cover with logo, tagline, and identity.",
    },
    {
      id: "story",
      title: "Our Brand Story",
      icon: <FaSeedling size={36} className="text-[#16808A]" />,
      bullets: [
        "Resilium was born to transform Cambodia’s construction through engineering, management, and digital innovation.",
        "Founded by Longdy Ouk (Sumitomo Mitsui, Archetype; Master’s in Service Engineering & Management).",
        "‘Resilium’ stands for resilience + evolution — building from the ground up for safer, smarter, sustainable outcomes.",
        "Core strengths: geotechnics, cost & risk management, and digital delivery.",
      ],
    },
    {
      id: "vision",
      title: "Vision, Mission & Purpose",
      icon: <FaLightbulb size={36} className="text-[#16808A]" />,
      bullets: [
        "Vision: To become Southeast Asia’s trusted leader in sustainable, data-driven, and resilient construction.",
        "Mission: Integrate geotechnical, cost, and risk management with digital innovation to enable safer, smarter, and more sustainable infrastructure.",
        "Purpose: Transform insights into impact by uniting engineering, management, and digital intelligence — empowering organizations to design, build, and operate resilient projects that improve lives.",
      ],
    },
    {
      id: "team",
      title: "Team Structure",
      icon: <FaUserTie size={36} className="text-[#16808A]" />,
      bullets: [
        "Founder & Managing Director — Longdy Ouk: Strategy, partnerships, innovation.",
        "Technical Director (Geotechnical) — Site investigation & analysis leadership.",
        "Digital Transformation Lead — BIM/GIS & data integration.",
        "Cost & Risk Analyst — Cost models, VE, risk frameworks.",
        "Project Managers — Delivery, stakeholder coordination.",
        "Support — Admin, Procurement, Logistics.",
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7FBFB] to-white text-[#0B3A57] font-sans p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0B3A57] text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">
              R
            </div>
            <div>
              <div className="text-xl font-bold">Resilium</div>
              <div className="text-sm text-gray-600">
                Investor Presentation — Strategic Plan 2025–2035
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="text-sm px-3 py-1 border rounded hover:bg-[#F0FAFA]"
            >
              Prev
            </button>
            <button
              onClick={next}
              className="text-sm px-3 py-1 bg-[#16808A] text-white rounded hover:opacity-90"
            >
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
              {slide.subtitle && (
                <div className="text-gray-700 mb-6 text-lg">
                  {slide.subtitle}
                </div>
              )}
              {slide.bullets && (
                <ul className="space-y-3 list-disc ml-5 mb-6">
                  {slide.bullets.map((b, i) => (
                    <li key={i} className="text-gray-700 text-lg">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
