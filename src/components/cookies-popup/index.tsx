"use client";

import { useEffect, useState } from "react";

export function CookiesPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="bg-white bottom-4 fixed flex flex-col gap-4 items-center justify-between left-1/2 max-w-3xl px-6 py-4 rounded-2xl shadow-lg sm:flex-row sm:items-center w-[90%] z-50 -translate-x-1/2">
      <p className="sm:max-w-[70%] sm:text-left text-center text-gray-700 text-sm">
        Usamos cookies para melhorar sua experiência e analisar o tráfego. Ao
        continuar, você concorda com nossa política de privacidade.
      </p>

      <button
        onClick={acceptCookies}
        className="bg-primary font-semibold px-5 py-2 rounded-full text-sm text-white whitespace-nowrap"
      >
        Aceitar
      </button>
    </div>
  );
}
