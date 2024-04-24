import "@/public/fonts/css/line-awesome.min.css";
import "@/public/styles/style.scss";
import { LayoutProvider } from "@/utils/LayoutContext";
import ThemeProvider from "@/utils/ThemeProvider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Next13NProgress } from "nextjs13-progress";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Boletrics - Donde cada boleto es el inicio de una gran historia.",
  description: "Boletrics es la plataforma líder en venta de boletos para eventos, dedicada a conectar organizadores de eventos con su audiencia de manera eficiente y confiable. Con tecnología innovadora y un enfoque centrado en el cliente, Boletrics ofrece una experiencia incomparable en la gestión y promoción de eventos de todo tipo. Desde conciertos hasta conferencias, Boletrics es tu socio ideal para crear experiencias inolvidables. ¡Descubre cómo podemos hacer que tu próximo evento sea un éxito!",
  keywords: [
    "Venta de boletos para eventos",
    "Plataforma de boletos en línea",
    "Compra de entradas para eventos",
    "Gestión de eventos",
    "Organización de eventos",
    "Boletos para conciertos",
    "Boletos para festivales",
    "Boletos para conferencias",
    "Sistema de boletos electrónico",
    "Plataforma de venta de boletos digitales",
    "Venta de boletos en línea México",
    "Plataforma de boletos confiable",
    "Compra segura de boletos",
    "Boletos personalizados",
    "Servicio de venta de boletos profesional"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-mx" className="!scroll-smooth">
      <head>
        <link rel="icon" href="./favicon.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${inter.className} text-n500 dark:text-n30`}>
        <ThemeProvider>
          <LayoutProvider>
            <div>
              <Next13NProgress color="#20B757" height={3} />
              {children}
            </div>
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
