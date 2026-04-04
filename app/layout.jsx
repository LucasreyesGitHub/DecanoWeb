import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="text-white">

        <div className="fixed inset-0 -z-10">
          <img src="/bg.jpg" className="w-full h-full object-cover blur-sm" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {children}
      </body>
    </html>
  );
}