import "./globals.css";

export const metadata = {
  title: "Mohanad's portfolio",
  description: "a portfolio that describes the skills, services, and experience I've in the web development industry using MERN-stack technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}