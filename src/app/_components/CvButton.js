import { Download } from "lucide-react";

export default function CvButton() {
    return  <a
      href="/Mohanad-Shohdy-CV.pdf"
      download="Mohanad-Shohdy-CV.pdf"
      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full backdrop-blur-md bg-sky-400 hover:bg-sky-700 border border-white/20 shadow-lg shadow-blue-500/10 transition-all duration-300">
      <Download className="w-5 h-5" />
        Download CV
    </a>
}