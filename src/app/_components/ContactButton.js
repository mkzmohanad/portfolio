export default function ContactButton() {
    return  <a href="mailto:mohanadshohdyhussain@gmail.com" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 shadow-lg shadow-blue-500/10 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0L12 12.75 2.25 6.75" />
            </svg>
            Contact Me
        </a>
}