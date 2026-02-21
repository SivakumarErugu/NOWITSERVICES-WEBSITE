// ❌ NO 'use client' here

export const getFooterTranslations = (locale = "en") => {
  const quickLinkText = {
    en: "Quick Link",
    hi: "त्वरित लिंक",
    es: "Enlace Rápido",
    fr: "Lien Rapide",
    de: "Schnelllink",
  };

  const businessSecText = {
    en: "Business Partnerships",
    hi: "व्यावसायिक साझेदारी",
    es: "Asociaciones Comerciales",
    fr: "Partenariats d’Affaires",
    de: "Geschäftspartnerschaften",
  };

  const legalText = {
    en: "Legal & Compliance",
    hi: "कानूनी और अनुपालन",
    es: "Legal y Cumplimiento",
    fr: "Légal et Conformité",
    de: "Rechtliche und Compliance",
  };

  const rightText = {
    en: "© 2026 Nowit Services. All rights reserved.",
    hi: "© 2026 Nowit Services. सर्वाधिकार सुरक्षित।",
    es: "© 2026 Nowit Services. Todos los derechos reservados.",
    fr: "© 2026 Nowit Services. Tous droits réservés.",
    de: "© 2026 Nowit Services. Alle Rechte vorbehalten.",
  };

  return {
    quickLinkText: quickLinkText[locale] || quickLinkText.en,
    businessSecText: businessSecText[locale] || businessSecText.en,
    legalText: legalText[locale] || legalText.en,
    rightText: rightText[locale] || rightText.en,
  };
};

