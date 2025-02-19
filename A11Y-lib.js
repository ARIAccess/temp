const rt = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`, at = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`, dt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#ffffff" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
    <path
        d="M12 7.5C12.4142 7.5 12.75 7.16421 12.75 6.75C12.75 6.33579 12.4142 6 12 6M12 7.5C11.5858 7.5 11.25 7.16421 11.25 6.75C11.25 6.33579 11.5858 6 12 6M12 7.5V6"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 9C14.9691 9.61859 13.5573 10 12 10C10.4427 10 9.03086 9.61859 8 9" stroke="currentColor"
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13 14L14 18M13 14V10M13 14H12M10 18L11 14M11 14V10M11 14H12M12 14V10" stroke="currentColor"
        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`, K = "YAR-WIDGET";
function f(t) {
  const e = document.createElement("div");
  if (t.styles && Object.assign(e.style, t.styles), t.attributes)
    for (let n in t.attributes)
      e.setAttribute(n, t.attributes[n]);
  return e;
}
function gt(t) {
  const e = document.createElement("img");
  if (t.styles && Object.assign(e.style, t.styles), t.attributes)
    for (let n in t.attributes)
      e.setAttribute(n, t.attributes[n]);
  return e;
}
function v(t = {}) {
  const e = document.createElement("button");
  if (t.attributes)
    for (let n in t.attributes)
      e.setAttribute(n, t.attributes[n]);
  return t.icons && t.icons.length > 0 && t.icons.forEach((n) => {
    e.appendChild(n);
  }), t.text && e.appendChild(document.createTextNode(t.text)), t.onClick && typeof t.onClick == "function" && e.addEventListener("click", t.onClick), e;
}
function S(t, e = []) {
  const o = new DOMParser().parseFromString(t, "image/svg+xml").documentElement, r = document.createElement("span");
  return r.classList.add("yar-widget__icon", ...e), r.appendChild(o), r;
}
const ut = (t, e) => {
  t.forEach((n) => {
    n.classList.toggle("yar-widget--hidden", !e);
  });
}, ht = (t, e) => {
  t.classList.toggle("yar-widget--hidden", !e);
};
function q(t, e, n, i = !0) {
  t.open = !t.open;
  const { widgetIcon: o, closeIcon: r } = t;
  ht(o, !t.open), ut([r, e], t.open), e.setAttribute("aria-hidden", (!t.open).toString()), t.open ? i && requestAnimationFrame(() => {
    const a = e.querySelector(".yar-widget__language-btn");
    a && a.focus();
  }) : n && n.focus();
}
const z = "ariaccessBtnState", st = "ariaccessLanguage";
function pt() {
  try {
    localStorage.removeItem(z);
  } catch (t) {
    console.error("Error clearing stepper states:", t);
  }
}
function k(t, e) {
  const n = JSON.parse(localStorage.getItem(z)) || {};
  n[t] = e, localStorage.setItem(z, JSON.stringify(n));
}
function Ct() {
  return JSON.parse(localStorage.getItem(z)) || {};
}
function I(t) {
  return (JSON.parse(localStorage.getItem(z)) || {})[t] || null;
}
function ft(t) {
  try {
    localStorage.setItem(st, t);
  } catch (e) {
    console.error("Error saving language code:", e);
  }
}
function Y() {
  try {
    return localStorage.getItem(st);
  } catch (t) {
    console.error("Error retrieving language code:", t);
  }
}
const mt = "Schließen", wt = "Kontrast", yt = "Sättigung", bt = "Entsättigt", xt = "Helligkeit", kt = {
  "Accessibility Menu": "Barrierefreiheitsmenü",
  "Highlight Title": "Titel hervorheben",
  "Highlight Links": "Links hervorheben",
  "Reset settings": "Einstellungen zurücksetzen",
  Close: mt,
  "Content Settings": "Inhaltseinstellungen",
  "Color Settings": "Farbeneinstellungen",
  "Navigation Settings": "Navigationseinstellungen",
  "Text Align": "Textausrichtung",
  "Align Left": "Links ausrichten",
  "Align Right": "Rechts ausrichten",
  "Align Center": "Zentrieren",
  "Align Justify": "Blocksatz",
  "Text Spacing": "Textabstand",
  "Light Spacing": "Leichter Abstand",
  "Moderate Spacing": "Moderater Abstand",
  "Heavy Spacing": "Großer Abstand",
  "Line Height": "Zeilenhöhe",
  "Line Height (1.5x)": "Zeilenhöhe (1.5x)",
  "Line Height (1.75x)": "Zeilenhöhe (1.75x)",
  "Line Height (2x)": "Zeilenhöhe (2x)",
  "Hide Images": "Bilder ausblenden",
  "Readable Font": "Lesbare Schriftart",
  "Stop Animations": "Animationen stoppen",
  "Dyslexia Font": "Schriftart für Legasthenie",
  Contrast: wt,
  "Light Contrast": "Heller Kontrast",
  "Invert Colors": "Farben umkehren",
  "Dark Contrast": "Dunkler Kontrast",
  "High Contrast": "Hoher Kontrast",
  Saturation: yt,
  "Low Saturation": "Niedrige Sättigung",
  "High Saturation": "Hohe Sättigung",
  Desaturated: bt,
  "Blue Filter": "Blaufilter",
  Brightness: xt,
  "Big Cursor": "Großer Cursor",
  "Reading Guide": "Leseführer",
  "Select Language": "Sprache auswählen",
  "Text to Speech": "Text zu Sprache",
  "Bigger Text": "Größerer Text",
  "Reading Mask": "Lesemaskierung"
}, vt = "Close", St = "Contrast", _t = "Saturation", Lt = "Desaturated", At = "Brightness", Mt = {
  "Accessibility Menu": "Accessibility Menu",
  "Highlight Title": "Highlight Title",
  "Highlight Links": "Highlight Links",
  "Reset settings": "Reset settings",
  Close: vt,
  "Content Settings": "Content Settings",
  "Color Settings": "Color Settings",
  "Navigation Settings": "Navigation Settings",
  "Text Align": "Text Align",
  "Select Language": "Select Language",
  "Align Left": "Align Left",
  "Align Right": "Align Right",
  "Align Center": "Align Center",
  "Align Justify": "Align Justify",
  "Text Spacing": "Text Spacing",
  "Light Spacing": "Light Spacing",
  "Moderate Spacing": "Moderate Spacing",
  "Heavy Spacing": "Heavy Spacing",
  "Line Height": "Line Height",
  "Line Height (1.5x)": "Line Height (1.5x)",
  "Line Height (1.75x)": "Line Height (1.75x)",
  "Line Height (2x)": "Line Height (2x)",
  "Hide Images": "Hide Images",
  "Readable Font": "Readable Font",
  "Invert Colors": "Invert Colors",
  "Stop Animations": "Stop Animations",
  "Dyslexia Font": "Dyslexia Font",
  Contrast: St,
  "Light Contrast": "Light Contrast",
  "Dark Contrast": "Dark Contrast",
  "High Contrast": "High Contrast",
  Saturation: _t,
  "Low Saturation": "Low Saturation",
  "High Saturation": "High Saturation",
  Desaturated: Lt,
  "Blue Filter": "Blue Filter",
  Brightness: At,
  "Big Cursor": "Big Cursor",
  "Reading Guide": "Reading Guide",
  "Bigger Text": "Bigger Text",
  "Reading Mask": "Reading Mask",
  "Text to Speech": "Text to Speech"
}, Ht = "Fermer", Et = "Contraste", Bt = "Saturation", Tt = "Désaturé", Ft = "Luminosité", zt = {
  "Accessibility Menu": "Menu d'accessibilité",
  "Highlight Title": "Mettre en évidence le titre",
  "Highlight Links": "Mettre en évidence les liens",
  "Reset settings": "Réinitialiser les paramètres",
  Close: Ht,
  "Content Settings": "Paramètres de contenu",
  "Color Settings": "Paramètres de couleur",
  "Navigation Settings": "Paramètres de navigation",
  "Text Align": "Alignement du texte",
  "Align Left": "Aligner à gauche",
  "Align Right": "Aligner à droite",
  "Align Center": "Aligner au centre",
  "Align Justify": "Justifier",
  "Text Spacing": "Espacement du texte",
  "Light Spacing": "Espacement léger",
  "Moderate Spacing": "Espacement modéré",
  "Heavy Spacing": "Espacement important",
  "Line Height": "Hauteur de ligne",
  "Line Height (1.5x)": "Hauteur de ligne (1.5x)",
  "Line Height (1.75x)": "Hauteur de ligne (1.75x)",
  "Line Height (2x)": "Hauteur de ligne (2x)",
  "Hide Images": "Masquer les images",
  "Readable Font": "Police lisible",
  "Stop Animations": "Arrêter les animations",
  "Dyslexia Font": "Police pour dyslexie",
  "Invert Colors": "Inverser les couleurs",
  Contrast: Et,
  "Light Contrast": "Contraste clair",
  "Dark Contrast": "Contraste sombre",
  "High Contrast": "Contraste élevé",
  Saturation: Bt,
  "Low Saturation": "Saturation faible",
  "High Saturation": "Saturation élevée",
  Desaturated: Tt,
  "Blue Filter": "Filtre bleu",
  Brightness: Ft,
  "Big Cursor": "Grand curseur",
  "Reading Guide": "Guide de lecture",
  "Select Language": "Sélectionner la langue",
  "Text to Speech": "Parole de texte",
  "Bigger Text": "Texte plus grand",
  "Reading Mask": "Masque de lecture"
}, It = "Chiudi", Rt = "Contrasto", jt = "Saturazione", $t = "Desaturato", Dt = "Luminosità", Ot = {
  "Accessibility Menu": "Menu di accessibilità",
  "Highlight Title": "Evidenzia titolo",
  "Highlight Links": "Evidenzia collegamenti",
  "Reset settings": "Reimposta impostazioni",
  Close: It,
  "Content Settings": "Impostazioni del contenuto",
  "Color Settings": "Impostazioni del colore",
  "Navigation Settings": "Impostazioni di navigazione",
  "Text Align": "Allineamento testo",
  "Align Left": "Allinea a sinistra",
  "Align Right": "Allinea a destra",
  "Align Center": "Allinea al centro",
  "Align Justify": "Giustifica",
  "Text Spacing": "Spaziatura del testo",
  "Light Spacing": "Spaziatura leggera",
  "Moderate Spacing": "Spaziatura moderata",
  "Invert Colors": "Inverti colori",
  "Heavy Spacing": "Spaziatura ampia",
  "Line Height": "Interlinea",
  "Line Height (1.5x)": "Interlinea (1.5x)",
  "Line Height (1.75x)": "Interlinea (1.75x)",
  "Line Height (2x)": "Interlinea (2x)",
  "Hide Images": "Nascondi immagini",
  "Readable Font": "Carattere leggibile",
  "Stop Animations": "Interrompi animazioni",
  "Dyslexia Font": "Carattere per dislessia",
  Contrast: Rt,
  "Light Contrast": "Contrasto chiaro",
  "Dark Contrast": "Contrasto scuro",
  "High Contrast": "Contrasto alto",
  Saturation: jt,
  "Low Saturation": "Bassa saturazione",
  "High Saturation": "Alta saturazione",
  Desaturated: $t,
  "Blue Filter": "Filtro blu",
  Brightness: Dt,
  "Big Cursor": "Cursore grande",
  "Reading Guide": "Guida alla lettura",
  "Select Language": "Seleziona lingua",
  "Text to Speech": "Testo a voce",
  "Bigger Text": "Testo più grande",
  "Reading Mask": "Maschera di lettura"
}, Gt = "Kapat", Nt = "Kontrast", Pt = "Doygunluk", Zt = "Doygunluğu Azaltılmış", Wt = "Parlaklık", Vt = {
  "Accessibility Menu": "Erişilebilirlik Menüsü",
  "Highlight Title": "Başlığı Vurgula",
  "Highlight Links": "Bağlantıları Vurgula",
  "Reset settings": "Ayarları Sıfırla",
  Close: Gt,
  "Content Settings": "İçerik Ayarları",
  "Color Settings": "Renk Ayarları",
  "Navigation Settings": "Gezinme Ayarları",
  "Text Align": "Metin Hizalama",
  "Align Left": "Sola Hizala",
  "Align Right": "Sağa Hizala",
  "Align Center": "Ortaya Hizala",
  "Align Justify": "İki Yana Yasla",
  "Text Spacing": "Metin Aralığı",
  "Light Spacing": "Hafif Aralık",
  "Moderate Spacing": "Orta Aralık",
  "Heavy Spacing": "Geniş Aralık",
  "Line Height": "Satır Yüksekliği",
  "Line Height (1.5x)": "Satır Yüksekliği (1.5x)",
  "Line Height (1.75x)": "Satır Yüksekliği (1.75x)",
  "Line Height (2x)": "Satır Yüksekliği (2x)",
  "Hide Images": "Görüntüleri Gizle",
  "Invert Colors": "Renkleri Tersine Çevir",
  "Readable Font": "Okunaklı Yazı Tipi",
  "Stop Animations": "Animasyonları Durdur",
  "Dyslexia Font": "Disleksi Yazı Tipi",
  Contrast: Nt,
  "Light Contrast": "Açık Kontrast",
  "Dark Contrast": "Koyu Kontrast",
  "High Contrast": "Yüksek Kontrast",
  Saturation: Pt,
  "Low Saturation": "Düşük Doygunluk",
  "High Saturation": "Yüksek Doygunluk",
  Desaturated: Zt,
  "Blue Filter": "Mavi Filtre",
  Brightness: Wt,
  "Big Cursor": "Büyük İmleç",
  "Reading Guide": "Okuma Rehberi",
  "Select Language": "Dil Seç",
  "Text to Speech": "Metin Sesli Okuma",
  "Bigger Text": "Büyük Metin",
  "Reading Mask": "Okuma Maske"
}, qt = "Cerrar", Jt = "Contraste", Kt = "Saturación", Yt = "Desaturado", Ut = "Brillo", Xt = {
  "Accessibility Menu": "Menú de Accesibilidad",
  "Highlight Title": "Resaltar Título",
  "Highlight Links": "Resaltar Enlaces",
  "Reset settings": "Restablecer configuración",
  Close: qt,
  "Content Settings": "Configuración de contenido",
  "Color Settings": "Configuración de color",
  "Navigation Settings": "Configuración de navegación",
  "Text Align": "Alineación de texto",
  "Align Left": "Alinear a la izquierda",
  "Align Right": "Alinear a la derecha",
  "Align Center": "Centrar",
  "Align Justify": "Justificar",
  "Text Spacing": "Espaciado de texto",
  "Light Spacing": "Espaciado ligero",
  "Moderate Spacing": "Espaciado moderado",
  "Heavy Spacing": "Espaciado amplio",
  "Line Height": "Altura de línea",
  "Line Height (1.5x)": "Altura de línea (1.5x)",
  "Line Height (1.75x)": "Altura de línea (1.75x)",
  "Line Height (2x)": "Altura de línea (2x)",
  "Hide Images": "Ocultar imágenes",
  "Readable Font": "Fuente legible",
  "Stop Animations": "Detener animaciones",
  "Dyslexia Font": "Fuente para dislexia",
  "Invert Colors": "Invertir colores",
  Contrast: Jt,
  "Light Contrast": "Contraste claro",
  "Dark Contrast": "Contraste oscuro",
  "High Contrast": "Contraste alto",
  Saturation: Kt,
  "Low Saturation": "Saturación baja",
  "High Saturation": "Saturación alta",
  Desaturated: Yt,
  "Blue Filter": "Filtro azul",
  Brightness: Ut,
  "Big Cursor": "Cursor grande",
  "Reading Guide": "Guía de lectura",
  "Select Language": "Seleccionar idioma",
  "Text to Speech": "Texto a voz",
  "Bigger Text": "Texto más grande",
  "Reading Mask": "Máscara de lectura"
}, Qt = "关闭", te = "对比度", ee = "饱和度", ne = "去饱和", ie = "亮度", oe = {
  "Accessibility Menu": "无障碍菜单",
  "Highlight Title": "突出显示标题",
  "Highlight Links": "突出显示链接",
  "Reset settings": "重置设置",
  Close: Qt,
  "Content Settings": "内容设置",
  "Color Settings": "颜色设置",
  "Navigation Settings": "导航设置",
  "Text Align": "文本对齐",
  "Align Left": "左对齐",
  "Align Right": "右对齐",
  "Align Center": "居中对齐",
  "Align Justify": "两端对齐",
  "Text Spacing": "文本间距",
  "Light Spacing": "轻微间距",
  "Moderate Spacing": "适中间距",
  "Heavy Spacing": "大间距",
  "Line Height": "行高",
  "Line Height (1.5x)": "行高 (1.5x)",
  "Line Height (1.75x)": "行高 (1.75x)",
  "Line Height (2x)": "行高 (2x)",
  "Hide Images": "隐藏图片",
  "Readable Font": "可读字体",
  "Stop Animations": "停止动画",
  "Dyslexia Font": "阅读障碍字体",
  "Invert Colors": "反转颜色",
  Contrast: te,
  "Light Contrast": "浅对比",
  "Dark Contrast": "深对比",
  "High Contrast": "高对比",
  Saturation: ee,
  "Low Saturation": "低饱和度",
  "High Saturation": "高饱和度",
  Desaturated: ne,
  "Blue Filter": "蓝光滤镜",
  Brightness: ie,
  "Big Cursor": "大光标",
  "Reading Guide": "阅读指南",
  "Select Language": "选择语言"
}, re = "बंद करें", ae = "कॉन्ट्रास्ट", se = "संतृप्ति", le = "असंतृप्त", ce = "चमक", de = {
  "Accessibility Menu": "सुलभता मेनू",
  "Highlight Title": "शीर्षक को हाइलाइट करें",
  "Highlight Links": "लिंक को हाइलाइट करें",
  "Reset settings": "सेटिंग्स रीसेट करें",
  Close: re,
  "Content Settings": "सामग्री सेटिंग्स",
  "Color Settings": "रंग सेटिंग्स",
  "Navigation Settings": "नेविगेशन सेटिंग्स",
  "Text Align": "पाठ संरेखण",
  "Align Left": "बाएँ संरेखित करें",
  "Align Right": "दाएँ संरेखित करें",
  "Align Center": "केंद्र में संरेखित करें",
  "Align Justify": "संपूर्ण संरेखित करें",
  "Text Spacing": "पाठ अंतराल",
  "Light Spacing": "हल्का अंतराल",
  "Moderate Spacing": "मध्यम अंतराल",
  "Heavy Spacing": "बड़ा अंतराल",
  "Invert Colors": "रंग उलटें",
  "Line Height": "पंक्ति ऊँचाई",
  "Line Height (1.5x)": "पंक्ति ऊँचाई (1.5x)",
  "Line Height (1.75x)": "पंक्ति ऊँचाई (1.75x)",
  "Line Height (2x)": "पंक्ति ऊँचाई (2x)",
  "Hide Images": "छवियाँ छिपाएँ",
  "Readable Font": "पढ़ने योग्य फ़ॉन्ट",
  "Stop Animations": "एनीमेशन बंद करें",
  "Dyslexia Font": "डिस्लेक्सिया फ़ॉन्ट",
  Contrast: ae,
  "Light Contrast": "हल्का कॉन्ट्रास्ट",
  "Dark Contrast": "गहरा कॉन्ट्रास्ट",
  "High Contrast": "उच्च कॉन्ट्रास्ट",
  Saturation: se,
  "Low Saturation": "कम संतृप्ति",
  "High Saturation": "उच्च संतृप्ति",
  Desaturated: le,
  "Blue Filter": "नीला फ़िल्टर",
  Brightness: ce,
  "Big Cursor": "बड़ा कर्सर",
  "Reading Guide": "पढ़ने की मार्गदर्शिका",
  "Select Language": "भाषा चुनें",
  "Text to Speech": "पाठ का शब्दावली",
  "Bigger Text": "बड़ा पाठ",
  "Reading Mask": "पढ़ने का मास्क"
}, ge = "Закрыть", ue = "Контрастность", he = "Насыщенность", pe = "Обесцвечено", Ce = "Яркость", fe = {
  "Accessibility Menu": "Меню доступности",
  "Highlight Title": "Выделить заголовок",
  "Highlight Links": "Выделить ссылки",
  "Reset settings": "Сбросить настройки",
  Close: ge,
  "Content Settings": "Настройки контента",
  "Color Settings": "Настройки цвета",
  "Navigation Settings": "Настройки навигации",
  "Text Align": "Выравнивание текста",
  "Align Left": "Выровнять по левому краю",
  "Align Right": "Выровнять по правому краю",
  "Align Center": "Выровнять по центру",
  "Align Justify": "Выровнять по ширине",
  "Text Spacing": "Междустрочный интервал",
  "Light Spacing": "Малый интервал",
  "Moderate Spacing": "Умеренный интервал",
  "Heavy Spacing": "Большой интервал",
  "Line Height": "Высота строки",
  "Line Height (1.5x)": "Высота строки (1.5x)",
  "Line Height (1.75x)": "Высота строки (1.75x)",
  "Line Height (2x)": "Высота строки (2x)",
  "Invert Colors": "Инвертировать цвета",
  "Hide Images": "Скрыть изображения",
  "Readable Font": "Читаемый шрифт",
  "Stop Animations": "Остановить анимации",
  "Dyslexia Font": "Шрифт для дислексии",
  Contrast: ue,
  "Light Contrast": "Светлый контраст",
  "Dark Contrast": "Темный контраст",
  "High Contrast": "Высокий контраст",
  Saturation: he,
  "Low Saturation": "Низкая насыщенность",
  "High Saturation": "Высокая насыщенность",
  Desaturated: pe,
  "Blue Filter": "Синий фильтр",
  Brightness: Ce,
  "Big Cursor": "Большой курсор",
  "Reading Guide": "Гид для чтения",
  "Select Language": "Выбрать язык",
  "Text to Speech": "Текст на речь",
  "Bigger Text": "Больший текст",
  "Reading Mask": "Маска для чтения"
}, me = {
  de: kt,
  en: Mt,
  fr: zt,
  it: Ot,
  tr: Vt,
  es: Xt,
  zh: oe,
  hi: de,
  ru: fe
}, j = [
  {
    code: "en",
    label: "English",
    flag: "https://flagcdn.com/w20/us.png"
  },
  {
    code: "en-US",
    label: "English",
    flag: "https://flagcdn.com/w20/us.png"
  },
  {
    code: "en-GB",
    label: "English",
    flag: "https://flagcdn.com/w20/us.png"
  },
  {
    code: "en-CA",
    label: "English",
    flag: "https://flagcdn.com/w20/us.png"
  },
  {
    code: "en-AU",
    label: "English",
    flag: "https://flagcdn.com/w20/us.png"
  },
  {
    code: "fr",
    label: "Français",
    flag: "https://flagcdn.com/w20/fr.png"
  },
  {
    code: "de",
    label: "Deutsch",
    flag: "https://flagcdn.com/w20/de.png"
  },
  {
    code: "it",
    label: "Italiano",
    flag: "https://flagcdn.com/w20/it.png"
  },
  {
    code: "tr",
    label: "Türkçe",
    flag: "https://flagcdn.com/w20/tr.png"
  },
  {
    code: "es",
    label: "Español",
    flag: "https://flagcdn.com/w20/es.png"
  },
  {
    code: "zh",
    label: "中文",
    flag: "https://flagcdn.com/w20/cn.png"
  },
  {
    code: "hi",
    label: "हिन्दी",
    flag: "https://flagcdn.com/w20/in.png"
  },
  {
    code: "ru",
    label: "Русский",
    flag: "https://flagcdn.com/w20/ru.png"
  }
];
let lt = Y() || navigator.language.split("-")[0];
function we(t) {
  lt = t, ft(t);
  const e = new CustomEvent("navigo-widget:localeChange", { detail: { locale: t } });
  window.dispatchEvent(e);
}
function C(t) {
  var e;
  return ((e = me[lt]) == null ? void 0 : e[t]) || t;
}
function A(t) {
  return t ? C(t) : "";
}
function ct(t, e) {
  let n = t.getAttribute("data-translate");
  return !n && e && (n = e, t.setAttribute("data-translate", n)), C(n);
}
function tt(t, e = ".yar-widget__action-btn") {
  t.querySelectorAll(e).forEach((n) => {
    n.childNodes.forEach((i) => {
      i.nodeType === Node.TEXT_NODE && (i.textContent = ct(n, i.textContent).trim());
    });
  });
}
function ye({ LANGUAGES: t, defaultLanguage: e, onSelectLanguage: n, onClose: i }) {
  const o = document.createElement("div");
  o.className = "yar-widget__modal", o.setAttribute("role", "dialog"), o.setAttribute("aria-modal", "true"), o.setAttribute("aria-labelledby", "language-modal-title");
  const r = document.createElement("div");
  r.className = "yar-widget__modal-overlay", r.onclick = i;
  const a = document.createElement("div");
  a.className = "yar-widget__modal-content";
  const s = document.createElement("h2");
  s.id = "language-modal-title", s.className = "yar-widget__modal-title", s.textContent = A("Select Language");
  const l = v({
    attributes: {
      class: "yar-widget__language-modal-close-btn",
      "aria-label": A("closeLanguageSelector"),
      tabindex: "1"
    },
    icons: [S(at)],
    onClick: i
  }), g = document.createElement("div");
  return g.className = "yar-widget__modal-languages-content", t.forEach((h) => {
    if (h.label === "English" && h.code !== "en")
      return null;
    const p = h.code === (Y() || e.code), c = v({
      text: h.label,
      attributes: {
        class: `yar-widget__language-btn-modal${p ? " active" : ""}`,
        "aria-label": h.label,
        tabindex: "1",
        role: "button"
      },
      onClick: () => {
        n(h), i();
      }
    }), m = document.createElement("img");
    m.src = h.flag, m.alt = "", m.setAttribute("aria-hidden", "true"), m.className = "yar-widget__language-flag", c.insertBefore(m, c.firstChild), g.appendChild(c);
  }), o.addEventListener("keydown", (h) => {
    h.key === "Escape" && (h.stopPropagation(), i());
  }), o.appendChild(r), a.appendChild(l), a.appendChild(s), a.appendChild(g), o.appendChild(a), o;
}
function be() {
  let t;
  const n = j.find((l) => l.code === Y()) || j.find((l) => l.code === navigator.language), i = () => {
    if (!t) {
      const l = document.getElementsByTagName("a11y-widget").item(0).shadowRoot.querySelectorAll(".yar-widget__menu-container")[0];
      t = ye({
        LANGUAGES: j,
        defaultLanguage: n,
        onSelectLanguage: s,
        onClose: a
      }), l.appendChild(t), o.setAttribute("aria-expanded", "true");
    }
  }, o = v({
    text: n.label,
    attributes: {
      class: "yar-widget__language-btn",
      "aria-haspopup": "listbox",
      // Indicates this button opens a listbox
      "aria-expanded": "false",
      // Indicates the collapsed/expanded state
      "aria-label": A("selectLanguage"),
      tabindex: "1"
    },
    onClick: i
  }), r = gt({
    attributes: {
      src: n.flag,
      alt: "",
      // Empty alt for decorative images
      "aria-hidden": "true"
      // Hide from screen readers since it's decorative
    }
  }), a = () => {
    t && (t.remove(), t = null, o.setAttribute("aria-expanded", "false"), o.focus());
  }, s = ({ code: l }) => {
    we(l), a();
  };
  return o.addEventListener("keydown", (l) => {
    l.key === "Escape" && t && (l.preventDefault(), a());
  }), window.addEventListener("navigo-widget:localeChange", (l) => {
    const g = l.detail.locale, h = j.find((p) => p.code === g);
    o.textContent = h.label, o.setAttribute("aria-label", A("selectLanguage")), r.src = h.flag, o.insertBefore(r, o.firstChild);
  }), o.insertBefore(r, o.firstChild), o;
}
function xe() {
  const t = f({
    attributes: {
      class: "yar-widget__menu-header"
    }
  }), e = f({
    attributes: {
      class: "yar-widget__menu-header-title"
    }
  }), n = document.createElement("h1");
  n.textContent = C("Accessibility Menu");
  const i = () => {
    const a = X[K];
    a && q(a.widgetState, a.widgetContainer);
  }, o = f({
    attributes: {
      class: "yar-widget__language_wrapper"
    }
  }), r = v({
    attributes: {
      class: "yar-widget__menu-header-close-button",
      tabindex: "0"
    },
    icons: [S(rt)],
    onClick: i
  });
  return o.appendChild(be()), o.appendChild(r), t.appendChild(o), e.appendChild(n), t.appendChild(e), t.updateTitle = function(a) {
    n.textContent = a;
  }, t;
}
function U(t) {
  const e = f({
    attributes: {
      class: "yar-widget__card",
      role: "region",
      // Identifies this as a distinct region of the page
      "aria-label": t
    }
  });
  let n;
  if (t) {
    const o = f({
      attributes: {
        class: "yar-widget__card-header"
      }
    });
    n = document.createElement("h1"), n.textContent = t, o.appendChild(n), e.appendChild(o), e.updateHeader = function(r) {
      n.textContent = r, e.setAttribute("aria-label", r);
    };
  }
  const i = f({
    attributes: {
      class: "yar-widget__card-body"
    }
  });
  return e.appendChild(i), e.add = function(o) {
    i.appendChild(o);
  }, e;
}
const ke = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#000000" fill="none">
    <path d="M9 4.5H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 9.5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 14.5H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 19.5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5 3V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`, ve = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#FFFFFF" fill="#FFFFFF">
    <path d="M3 3H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 9H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 15H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`, Se = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
    <path d="M3 3H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 9H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 15H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 21H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`, _e = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
    <path d="M3 3H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13 9H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 15H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13 21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`, Le = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#ffffff" fill="none">
    <path d="M3 3H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 9H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 15H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 21H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`, $ = ["", "*:not(a11y-widget *)"], Ae = ["a[href]"], T = [
  "h1:not(a11y-widget)",
  "h2:not(a11y-widget)",
  "h3:not(a11y-widget)",
  "h4:not(a11y-widget)",
  "h5:not(a11y-widget)",
  "h6:not(a11y-widget)"
], y = [
  ...T,
  "p",
  "a",
  // 'button',
  // 'label',
  "th",
  "td",
  "span",
  "blockquote",
  "li",
  "ol",
  // 'ul',
  "dl",
  "dt"
  // 'dd'
], Me = [
  "img",
  // Standard image element
  "picture",
  // For responsive images
  "figure",
  // Often used to wrap images with captions
  "svg",
  // Inline scalable vector graphics
  '[role="img"]'
  // Accessible images using ARIA roles
], d = {
  default: null,
  invertColors: {
    selectors: ["html"],
    styles: {
      filter: "invert(1)"
    }
  },
  brightness: {
    selectors: ["html"],
    styles: {
      filter: "brightness(50%)"
    }
  },
  "highlight-titles": {
    selectors: T,
    styles: {
      outline: "3px solid #0048ff",
      "outline-offset": "2px",
      "background-color": "rgba(0, 72, 255, 0.1)"
    }
  },
  "highlight-links": {
    selectors: Ae,
    styles: {
      outline: "2px solid #006054",
      "outline-offset": "2px",
      "text-decoration": "underline",
      "text-decoration-thickness": "2px",
      "text-underline-offset": "2px"
    }
  },
  "text-align": {
    alignLeft: {
      selectors: y,
      styles: {
        "text-align": "left",
        "margin-left": "0",
        "margin-right": "auto"
      }
    },
    alignRight: {
      selectors: y,
      styles: {
        "text-align": "right",
        "margin-left": "auto",
        "margin-right": "0"
      }
    },
    alignCenter: {
      selectors: y,
      styles: {
        "text-align": "center",
        margin: "0 auto"
      }
    },
    alignJustify: {
      selectors: y,
      styles: {
        "text-align": "justify",
        "word-spacing": "0.16em",
        hyphens: "auto"
      }
    }
  },
  "bigger-text": {
    biggerText125x: {
      selectors: y,
      onApply: (t) => {
        t.forEach((e) => {
          if (!e.getAttribute("navigo-original-font-size")) {
            e.style.removeProperty("font-size");
            const i = window.getComputedStyle(e).fontSize;
            e.setAttribute("navigo-original-font-size", i);
          }
          const n = parseInt(e.getAttribute("navigo-original-font-size"));
          e.style.fontSize = `${n * 1.2}px`;
        });
      },
      onReset: (t, e = !1) => {
        t.forEach((n) => {
          e && n.removeAttribute("navigo-original-font-size"), n.style.removeProperty("font-size");
        });
      }
    },
    biggerText15x: {
      selectors: y,
      onApply: (t) => {
        t.forEach((e) => {
          if (!e.getAttribute("navigo-original-font-size")) {
            e.style.removeProperty("font-size");
            const i = window.getComputedStyle(e).fontSize;
            e.setAttribute("navigo-original-font-size", i);
          }
          const n = parseInt(e.getAttribute("navigo-original-font-size"));
          e.style.fontSize = `${n * 1.25}px`;
        });
      },
      onReset: (t, e = !1) => {
        t.forEach((n) => {
          e && n.removeAttribute("navigo-original-font-size"), n.style.removeProperty("font-size");
        });
      }
    },
    biggerText2x: {
      selectors: y,
      onApply: (t) => {
        t.forEach((e) => {
          if (!e.getAttribute("navigo-original-font-size")) {
            e.style.removeProperty("font-size");
            const i = window.getComputedStyle(e).fontSize;
            e.setAttribute("navigo-original-font-size", i);
          }
          const n = parseInt(e.getAttribute("navigo-original-font-size"));
          e.style.fontSize = `${n * 1.3}px`;
        });
      },
      onReset: (t, e = !1) => {
        t.forEach((n) => {
          e && n.removeAttribute("navigo-original-font-size"), n.style.removeProperty("font-size");
        });
      }
    }
  },
  "big-cursor": {
    selectors: ["body"],
    childrenSelector: ["*"],
    styles: {
      cursor: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='98px' height='98px' viewBox='0 0 48 48'%3E%3Cpath fill='%23E0E0E0' d='M27.8 39.7c-.1 0-.2 0-.4-.1s-.4-.3-.6-.5l-3.7-8.6-4.5 4.2c-.1.2-.3.3-.6.3-.1 0-.3 0-.4-.1-.3-.1-.6-.5-.6-.9V12c0-.4.2-.8.6-.9.1-.1.3-.1.4-.1.2 0 .5.1.7.3l16 15c.3.3.4.7.3 1.1-.1.4-.5.6-.9.7l-6.3.6 3.9 8.5c.1.2.1.5 0 .8-.1.2-.3.5-.5.6l-2.9 1.3c-.2-.2-.4-.2-.5-.2z'/%3E%3Cpath fill='%23212121' d='m18 12 16 15-7.7.7 4.5 9.8-2.9 1.3-4.3-9.9L18 34V12m0-2c-.3 0-.5.1-.8.2-.7.3-1.2 1-1.2 1.8v22c0 .8.5 1.5 1.2 1.8.3.2.6.2.8.2.5 0 1-.2 1.4-.5l3.4-3.2 3.1 7.3c.2.5.6.9 1.1 1.1.2.1.5.1.7.1.3 0 .5-.1.8-.2l2.9-1.3c.5-.2.9-.6 1.1-1.1.2-.5.2-1.1 0-1.5l-3.3-7.2 4.9-.4c.8-.1 1.5-.6 1.7-1.3.3-.7.1-1.6-.5-2.1l-16-15c-.3-.5-.8-.7-1.3-.7z'/%3E%3C/svg%3E") 40 15, auto`
    }
  },
  "dyslexia-fonts": {
    selectors: ["html"],
    childrenSelector: [$, ...y],
    styles: {
      "font-family": "OpenDyslexic3"
    },
    css: `
      @font-face {
        font-family: 'OpenDyslexic3';
        src: url('https://navigo-widget-v1.b-cdn.net/fonts/OpenDyslexic-Regular.otf') format('opentype');
        font-weight: normal;
        font-style: normal;
      }
    `
  },
  "stop-animations": {
    selectors: ["html"],
    childrenSelector: ["*"],
    styles: {
      transition: "none",
      "animation-fill-mode": "forwards",
      "animation-iteration-count": "1",
      "animation-duration": ".01s"
    }
  },
  "color-contrast": {
    lightContrast: {
      selectors: ["html"],
      styles: {
        color: "#2A2A2A",
        fill: "#2A2A2A",
        "background-color": "#F8F9FA",
        "outline-color": "#2A2A2A"
      },
      childrenSelector: [$, ...T],
      css: `
        a {
          color: #0052CC !important;
          text-decoration: underline !important;
        }
        :focus {
          outline: 3px solid #2A2A2A !important;
          outline-offset: 2px !important;
        }
      `
    },
    darkContrast: {
      selectors: ["html"],
      styles: {
        color: "#1AC8FF",
        fill: "#ffffff",
        "background-color": "#000000",
        "outline-color": "#1AC8FF"
      },
      childrenSelector: [$, ...T],
      css: `
        a {
          color: #00FF00 !important;
          text-decoration: underline !important;
          text-decoration-thickness: 2px !important;
        }
        :focus {
          outline: 3px solid #1AC8FF !important;
          outline-offset: 2px !important;
        }
      `
    },
    highContrast: {
      selectors: ["html"],
      styles: {
        color: "#FFFFFF",
        fill: "#FFFFFF",
        "background-color": "#000000",
        "border-color": "#FFFFFF",
        "outline-color": "#FFFFFF"
      },
      childrenSelector: [$, ...T],
      css: `
        a {
          color: #FFFF00 !important;
          text-decoration: underline !important;
          text-decoration-thickness: 2px !important;
        }
        button, input, select, textarea {
          border: 2px solid #FFFFFF !important;
          outline: 2px solid transparent !important;
        }
        :focus {
          outline: 3px solid #FFFFFF !important;
          outline-offset: 2px !important;
        }
        img, video, iframe {
          border: 2px solid #FFFFFF !important;
        }
      `
    }
  },
  "hide-images": {
    selectors: ["html"],
    childrenSelector: Me,
    styles: {
      display: "none"
    }
  },
  saturation: {
    lowSaturation: {
      selectors: ["html"],
      styles: {
        filter: "saturate(0.5)"
      }
    },
    highSaturation: {
      selectors: ["html"],
      styles: {
        filter: "saturate(3)"
      }
    },
    desaturted: {
      selectors: ["html"],
      styles: {
        filter: "saturate(0)"
      }
    }
  },
  "text-spacing": {
    lightSpacing: {
      selectors: y,
      styles: {
        "word-spacing": ".16em",
        "letter-spacing": ".12em"
      }
    },
    moderateSpacing: {
      selectors: y,
      styles: {
        "word-spacing": ".32em",
        "letter-spacing": ".24em"
      }
    },
    heavySpacing: {
      selectors: y,
      styles: {
        "word-spacing": ".48em",
        "letter-spacing": ".36em"
      }
    }
  },
  "line-height": {
    lightHeight: {
      selectors: y,
      styles: {
        "line-height": "1.5"
      }
    },
    moderateHeight: {
      selectors: y,
      styles: {
        "line-height": "1.75"
      }
    },
    heavyHeight: {
      selectors: y,
      styles: {
        "line-height": "2"
      }
    }
  },
  "text-to-speech": {
    styles: {
      cursor: "pointer"
    }
  }
};
function R(t, e, n, i) {
  const o = Object.keys(n[i]).filter((s) => s !== "default"), r = t.getCurrentStep();
  o.forEach((s) => {
    const l = s === e.id;
    k(s, { enabled: l });
  });
  const a = r !== 0;
  t.applyConfig(e, a), r !== 0 && k(e.id, { step: r, enabled: !0 });
}
const w = {
  colorBg: "#eff1f5",
  // Background color,
  colorPrimary: "#006BE6",
  // Primary color
  colorPrimaryLight: "#5a8df2",
  // Lighter primary color for hover and other interactions
  colorPrimaryDark: "#063c8a",
  // Darker primary color for active state
  colorBtnSelected: "#006BE6",
  // Button selected state
  colorBtnDisabled: "#d1e3f3",
  // Disabled button state
  colorTextPrimary: "#2d3a48",
  // Primary text color
  colorTextSecondary: "#7a8c99",
  // Secondary text color
  colorBtnHover: "#5a8df2",
  // Button hover state
  colorBtnActive: "#063c8a",
  // Button active state
  colorBtnFocus: "#0848ca",
  // Button focus state
  stepperInActive: "#dee9f559",
  // Inactive stepper state
  stepperActive: "#0848ca",
  // Active stepper state
  borderColor: "#ced4da",
  // Border color
  borderColorHover: "#b0c5db",
  // Border color on hover
  borderColorFocus: "#0848ca",
  // Border color on focus
  shadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  // Box shadow for elevated elements
  white: "#ffffff",
  black: "#000000"
}, V = {
  fontPrimary: "'Roboto', sans-serif",
  // Primary font for the app
  fontSecondary: "'Arial', sans-serif",
  // Secondary font for fallback
  fontSizeBase: "16px",
  // Base font size
  fontSizeLg: "18px",
  // Large font size
  fontSizeSm: "14px",
  // Small font size
  fontWeightRegular: 400,
  // Regular font weight
  fontWeightBold: 700
  // Bold font weight
};
function E(t) {
  const e = f({
    attributes: { class: "yar-widget__steps-container" }
  });
  for (let n = 1; n < t; n++) {
    const i = document.createElement("span");
    i.classList.add("yar-widget__step", `yar-widget__step-${n}`), e.appendChild(i);
  }
  return e;
}
function M(t, e) {
  if (t) {
    const n = t.getElementsByClassName("yar-widget__step");
    Array.from(n).forEach((i, o) => {
      i.style.background = o + 1 === e ? w.white : w.stepperInActive;
    });
  }
}
const u = (t, e, n, i, o) => ({
  id: t,
  text: e,
  icon: n,
  styleConfig: i || null,
  buttonGroup: o
}), He = ["-o-", "-ms-", "-moz-", "-webkit-", ""], Ee = ["filter"];
function Be(t) {
  return t ? Object.entries(t).reduce((e, [n, i]) => ((Ee.includes(n) ? He : [""]).forEach((r) => {
    e += `${r}${n}:${i} !important;`;
  }), e), "") : null;
}
function Te({ selectors: t = [""], childrenSelector: e = [""], css: n }) {
  let i = "";
  return t.forEach((o) => {
    e.length === 0 ? i += `${o} {${n}}` : e.forEach((r) => {
      i += `${o} ${r}{${n}}`;
    });
  }), i;
}
function Fe(t) {
  const { styles: e, selectors: n = [], childrenSelector: i = [], css: o = "" } = t;
  let r = Be(e);
  return r && n.length && (r = Te({ selectors: n, childrenSelector: i, css: r })), r + o;
}
const F = /* @__PURE__ */ new Map();
function D(t) {
  const e = F.get(t);
  e && (document.adoptedStyleSheets = document.adoptedStyleSheets.filter(
    (n) => n !== e
  ), F.delete(t));
}
function ze() {
  window.navigation.reload();
}
function J(t, e, n) {
  const { enable: i = !1 } = t, o = n ? `${n}-${e}` : e;
  if (!i)
    n ? F.forEach((r, a) => {
      a.startsWith(`${n}-`) && D(a);
    }) : D(o);
  else {
    const r = Fe(t);
    n && F.forEach((s, l) => {
      l.startsWith(`${n}-`) && !l.endsWith(`${e}`) && D(l);
    });
    const a = new CSSStyleSheet();
    a.replaceSync(r), D(o), document.adoptedStyleSheets = [...document.adoptedStyleSheets, a], F.set(o, a);
  }
}
function Ie(t) {
  let e = !1, n = 0;
  const i = (g) => e = g, o = () => e, r = () => n;
  return { getCurrentStep: r, setCurrentStep: (g) => {
    n = g >= 0 ? g % t.length : 0;
  }, getCurrentConfig: () => t[r()], applyConfig: (g, h = !1) => {
    g && g.styleConfig ? J({ ...g.styleConfig, enable: h }, g.id, g.buttonGroup) : J({ enable: !1 }, g.id, g.buttonGroup);
  }, setActive: i, isActive: o };
}
function B(t, e, n, i) {
  const o = t[0], r = Ie(t), a = v({
    text: o.text,
    attributes: {
      class: "yar-widget__action-btn",
      "aria-pressed": "false",
      // Indicates toggle state
      "aria-label": C(o.text)
      // Clear description of current state
    },
    icons: [S(o.icon)],
    onClick: s
  });
  function s() {
    r.setCurrentStep(r.getCurrentStep() + 1);
    const c = r.getCurrentConfig(), m = r.getCurrentStep() !== 0;
    r.applyConfig(c, m), l(c), g(m), h(m), typeof e == "function" && e(r, c, n);
  }
  function l(c) {
    a.innerHTML = "", a.appendChild(S(c.icon)), a.appendChild(document.createTextNode(C(c.text))), a.setAttribute("aria-label", C(c.text)), a.setAttribute("data-step", r.getCurrentStep().toString());
  }
  function g(c) {
    a.classList.toggle("yar-widget__action-btn--active", c), a.setAttribute("aria-pressed", c.toString()), n && (c && a.appendChild(n), n.style.opacity = c ? "1" : "0");
  }
  function h(c) {
    c && n ? (a.contains(n) || a.appendChild(n), n.style.opacity = "1") : c || (n.style.opacity = "0");
  }
  function p() {
    const c = t.reduce((_, b) => (_[b.id] = I(b.id), _), {}), m = Object.entries(c).find(([_, b]) => b == null ? void 0 : b.enabled);
    if (m) {
      const [_, b] = m, H = b.enabled, W = b == null ? void 0 : b.step;
      H && (r.setCurrentStep(W), typeof i == "function" && i(r, r.getCurrentConfig()), r.applyConfig(r.getCurrentConfig(), H), l(r.getCurrentConfig()), g(H), M(n, r.getCurrentStep()));
    }
    h(!0);
  }
  return p(), a;
}
function Re() {
  const t = [
    u(
      "default",
      "Text Align",
      ke,
      d.default,
      "text-align"
    ),
    u(
      "alignLeft",
      "Align Left",
      Le,
      d["text-align"].alignLeft,
      "text-align"
    ),
    u(
      "alignRight",
      "Align Right",
      _e,
      d["text-align"].alignRight,
      "text-align"
    ),
    u(
      "alignCenter",
      "Align Center",
      Se,
      d["text-align"].alignCenter,
      "text-align"
    ),
    u(
      "alignJustify",
      "Align Justify",
      ve,
      d["text-align"].alignJustify,
      "text-align"
    )
  ], e = E(t.length);
  function n(o, r) {
    R(o, r, d, "text-align"), M(e, o.getCurrentStep());
  }
  const i = B(t, n, e);
  return i.appendChild(e), i;
}
const je = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path d="M6.3 2.75143C5.26076 2.94471 4.49591 3.28657 3.89124 3.89124C3.28657 4.49591 2.94471 5.26076 2.75143 6.3M17.7 2.75143C18.7392 2.94471 19.5041 3.28657 20.1088 3.89124C20.7134 4.49591 21.0553 5.26076 21.2486 6.3M13.9 2.50495C13.3156 2.5 12.6839 2.5 12 2.5C11.3161 2.5 10.6844 2.5 10.1 2.50495M21.495 10.1C21.5 10.6844 21.5 11.3161 21.5 12C21.5 12.6839 21.5 13.3156 21.495 13.9001M2.50495 10.1C2.5 10.6844 2.5 11.3161 2.5 12C2.5 12.6839 2.5 13.3156 2.50496 13.9001M2.75143 17.7C2.94471 18.7392 3.28657 19.5041 3.89124 20.1088C4.49591 20.7134 5.26076 21.0553 6.3 21.2486M21.2486 17.7C21.0553 18.7392 20.7134 19.5041 20.1088 20.1088C19.5041 20.7134 18.7392 21.0553 17.7 21.2486M13.9 21.495C13.3156 21.5 12.6839 21.5 12 21.5C11.3162 21.5 10.6845 21.5 10.1002 21.495" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
function L(t) {
  const e = !t.isActive();
  t.setActive(e);
  const n = t.getCurrentConfig();
  t.applyConfig(n, e), k(n.id, { enabled: e });
}
function $e(t, e) {
  let n = !1;
  return { getCurrentConfig: () => e[0], isActive: () => n, applyConfig: (s, l = !1) => {
    J({ ...s.styleConfig, enable: l }, s.id), t.innerHTML = "", t.appendChild(S(s.icon)), t.appendChild(
      document.createTextNode(ct(t, s.text))
    );
  }, setActive: (s) => n = s };
}
function x(t, e) {
  const n = t[0], i = v({
    text: n.text,
    attributes: {
      class: "yar-widget__action-btn",
      role: "button",
      "aria-pressed": "false",
      "aria-label": A(n.text),
      tabindex: "0"
    },
    icons: [S(n.icon)],
    onClick: r
  }), o = $e(i, t);
  function r(l) {
    if (l.type === "keydown") {
      if (l.key !== "Enter" && l.key !== " ")
        return;
      l.preventDefault();
    }
    typeof e == "function" && e(o, i), a();
  }
  function a() {
    const l = o.isActive();
    i.classList.toggle("yar-widget__action-btn--active", l), i.setAttribute("aria-pressed", l.toString());
  }
  i.addEventListener("click", r), i.addEventListener("keydown", r);
  function s() {
    const l = Ct();
    t.forEach((g) => {
      const h = g.id, p = l[h];
      if (p && p.enabled === !0) {
        const c = p.enabled;
        o.setActive(c), o.applyConfig(g, c);
      }
      a();
    });
  }
  return s(), i;
}
function De() {
  const t = "highlight-titles", e = [
    u(
      t,
      "Highlight Title",
      je,
      d[t]
    )
  ];
  return x(e, (o) => {
    L(o);
  });
}
const Oe = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"  fill="none">
    <path d="M13.5 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H13.5M10.5 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M9 12H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`;
function Ge() {
  const t = [
    u(
      "highlight-links",
      "Highlight Links",
      Oe,
      d["highlight-links"]
    )
  ];
  return x(t, (i) => {
    L(i);
  });
}
const Ne = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
        d="M14 19L11.1069 10.7479C9.76348 6.91597 9.09177 5 8 5C6.90823 5 6.23652 6.91597 4.89309 10.7479L2 19M4.5 12H11.5"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
        d="M21.9692 13.9392V18.4392M21.9692 13.9392C22.0164 13.1161 22.0182 12.4891 21.9194 11.9773C21.6864 10.7709 20.4258 10.0439 19.206 9.89599C18.0385 9.75447 17.1015 10.055 16.1535 11.4363M21.9692 13.9392L19.1256 13.9392C18.6887 13.9392 18.2481 13.9603 17.8272 14.0773C15.2545 14.7925 15.4431 18.4003 18.0233 18.845C18.3099 18.8944 18.6025 18.9156 18.8927 18.9026C19.5703 18.8724 20.1955 18.545 20.7321 18.1301C21.3605 17.644 21.9692 16.9655 21.9692 15.9392V13.9392Z"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
function Pe() {
  const t = [
    u(
      "dyslexia-fonts",
      "Dyslexia Font",
      Ne,
      d["dyslexia-fonts"]
    )
  ];
  return x(t, (i) => {
    L(i);
  });
}
const O = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
        d="M22 19H2M22 19C22 18.4398 20.4046 17.3932 20 17M22 19C22 19.5602 20.4046 20.6068 20 21M2 19C2 18.4398 3.59544 17.3932 4 17M2 19C2 19.5602 3.59544 20.6068 4 21"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
        d="M22 14L20.0714 8.5M20.0714 8.5L18.3793 3.67442C18.3324 3.54046 18.3089 3.47349 18.2792 3.4166C18.1653 3.19858 17.9709 3.0495 17.7493 3.01024C17.6915 3 17.6277 3 17.5 3C17.3723 3 17.3085 3 17.2507 3.01024C17.0291 3.0495 16.8347 3.19858 16.7208 3.4166C16.6911 3.47349 16.6676 3.54046 16.6207 3.67442L14.9286 8.5M20.0714 8.5L14.9286 8.5M14.9286 8.5L13 14"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
        d="M2 3L5.62066 13.3256C5.66763 13.4595 5.69112 13.5265 5.72083 13.5834C5.83469 13.8014 6.02907 13.9505 6.25065 13.9898C6.30847 14 6.37231 14 6.5 14C6.62768 14 6.69153 14 6.74934 13.9898C6.97093 13.9505 7.16531 13.8014 7.27917 13.5834C7.30888 13.5265 7.33237 13.4595 7.37934 13.3256L11 3"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
function Ze() {
  const t = [
    u(
      "default",
      "Text Spacing",
      O,
      d.default,
      "text-spacing"
    ),
    u(
      "lightSpacing",
      "Light Spacing",
      O,
      d["text-spacing"].lightSpacing,
      "text-spacing"
    ),
    u(
      "moderateSpacing",
      "Moderate Spacing",
      O,
      d["text-spacing"].moderateSpacing,
      "text-spacing"
    ),
    u(
      "heavySpacing",
      "Heavy Spacing",
      O,
      d["text-spacing"].heavySpacing,
      "text-spacing"
    )
  ], e = E(t.length);
  function n(o, r) {
    R(o, r, d, "text-spacing"), M(e, o.getCurrentStep());
  }
  const i = B(t, n, e);
  return i.appendChild(e), i;
}
const G = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path d="M12 4.5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 9.5H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 14.5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 19.5H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
        d="M1.99805 9L3.06285 7.89844C3.96404 6.96615 4.41463 6.5 4.99805 6.5C5.58146 6.5 6.03206 6.96615 6.93324 7.89844L7.99805 9"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M8 14L6.9352 15.1016C6.03401 16.0339 5.58342 16.5 5 16.5C4.41658 16.5 3.96599 16.0339 3.0648 15.1016L2 14"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
function We() {
  const t = [
    u(
      "default",
      "Line Height",
      G,
      d.default,
      "line-height"
    ),
    u(
      "lightHeight",
      "Line Height (1.5x)",
      G,
      d["line-height"].lightHeight,
      "line-height"
    ),
    u(
      "moderateHeight",
      "Line Height (1.75x)",
      G,
      d["line-height"].moderateHeight,
      "line-height"
    ),
    u(
      "heavyHeight",
      "Line Height (2x)",
      G,
      d["line-height"].heavyHeight,
      "line-height"
    )
  ], e = E(t.length);
  function n(o, r) {
    R(o, r, d, "line-height"), M(e, o.getCurrentStep());
  }
  const i = B(t, n, e);
  return i.appendChild(e), i;
}
const Ve = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <circle cx="16.5" cy="7.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
    <path
        d="M2 14.1354C2.66663 14.0455 3.3406 14.0011 4.01569 14.0027C6.87163 13.9466 9.65761 14.7729 11.8765 16.3342C13.9345 17.7821 15.3805 19.7749 16 22"
        stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M13.5 17.5C14.5 16.5 15.1772 16.2768 16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
    <path
        d="M20 20.2131C18.6012 21.5 16.3635 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1087C2.5 18.7175 2.5 16.4783 2.5 12C2.5 7.6364 2.5 5.3987 3.78701 3.99988"
        stroke="currentColor" stroke-width="1.5" />
    <path
        d="M20.0002 16C20.5427 16 21.048 16.2945 21.3967 16.5638C21.5 15.3693 21.5 13.8825 21.5 12C21.5 7.52166 21.5 5.28249 20.1088 3.89124C18.7175 2.5 16.4783 2.5 12 2.5C9.59086 2.5 7.82972 2.5 6.5 2.71659"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2 2L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
function qe() {
  const t = [
    u(
      "hide-images",
      "Hide Images",
      Ve,
      d["hide-images"]
    )
  ];
  return x(t, (i) => {
    L(i);
  });
}
const Je = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path d="M9.5 9L9.5 15M14.5 9V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
</svg>`;
function Ke() {
  const t = [
    u(
      "stop-animations",
      "Stop Animations",
      Je,
      d["stop-animations"]
    )
  ];
  return x(t, (i) => {
    L(i);
  });
}
const N = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
        d="M10.5714 18H5.42857M8 3V18M8 3C6.81082 3 5.28326 3.12265 4.06709 3.24346C3.55271 3.29456 3.29552 3.32011 3.06788 3.41021C2.59438 3.59763 2.21271 4.00855 2.06906 4.48556C2 4.71489 2 4.97659 2 5.5M8 3C9.18918 3 10.7167 3.12265 11.9329 3.24346C12.4473 3.29456 12.7045 3.32011 12.9321 3.41021C13.4056 3.59763 13.7873 4.00855 13.9309 4.48556C14 4.71489 14 4.97659 14 5.5"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path
        d="M19.7143 21H16.2857M18 12V21M18 12C17.2072 12 16.1888 12.0818 15.3781 12.1623C15.0351 12.1964 14.8637 12.2134 14.7119 12.2735C14.3963 12.3984 14.1418 12.6724 14.046 12.9904C14 13.1433 14 13.3177 14 13.6667M18 12C18.7928 12 19.8112 12.0818 20.6219 12.1623C20.9649 12.1964 21.1363 12.2134 21.2881 12.2735C21.6037 12.3984 21.8582 12.6724 21.954 12.9904C22 13.1433 22 13.3177 22 13.6667"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`;
function Ye() {
  const t = [
    u(
      "default",
      "Bigger Text",
      N,
      d.default,
      "bigger-text"
    ),
    u(
      "biggerText125x",
      "Bigger Text",
      N,
      d["bigger-text"].biggerText125x,
      "bigger-text"
    ),
    u(
      "biggerText15x",
      "Bigger Text",
      N,
      d["bigger-text"].biggerText15x,
      "bigger-text"
    ),
    u(
      "biggerText2x",
      "Bigger Text",
      N,
      d["bigger-text"].biggerText2x,
      "bigger-text"
    )
  ], e = E(t.length);
  function n(r, a) {
    const s = document.querySelectorAll(y.join(",")), l = r.getCurrentStep() !== 0, g = r.getCurrentStep(), h = g - 1;
    if (h > 0) {
      const p = t[h];
      p.styleConfig.onReset(s), k(p.id, { enabled: !1 });
    }
    l ? (a.styleConfig.onApply(s), k(a.id, { step: g, enabled: !0 })) : (Object.keys(d["bigger-text"]).filter(
      (c) => c !== "default"
    ).forEach((c) => {
      k(c, { enabled: !1 });
    }), s.forEach((c) => {
      c.removeAttribute("navigo-original-font-size"), c.style.removeProperty("font-size");
    })), M(e, r.getCurrentStep());
  }
  function i(r, a) {
    if (r.getCurrentStep() !== 0) {
      const s = document.querySelectorAll(y.join(","));
      s.forEach((l) => {
        if (!l.getAttribute("navigo-original-font-size")) {
          const g = window.getComputedStyle(l).fontSize;
          l.setAttribute("navigo-original-font-size", g);
        }
      }), a.styleConfig.onApply(s);
    }
  }
  const o = B(
    t,
    n,
    e,
    i
  );
  return o.appendChild(e), o;
}
function Ue() {
  const t = U(C("Content Settings"));
  return t.add(Ye()), t.add(De()), t.add(Ge()), t.add(Re()), t.add(Ze()), t.add(We()), t.add(qe()), t.add(Ke()), t.add(Pe()), window.addEventListener("navigo-widget:localeChange", () => {
    const e = C("Content Settings");
    t.updateHeader(e);
  }), t;
}
const Xe = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.49686 4.28663C4.8662 4.03819 4.55087 3.91397 4.34995 3.9808C4.17548 4.03884 4.03859 4.17573 3.98056 4.35019C3.91372 4.55111 4.03794 4.86644 4.28638 5.4971L10.4705 21.1951C10.6706 21.7031 10.7706 21.957 10.9337 22.059C11.0758 22.1478 11.2493 22.1712 11.4099 22.1232C11.5942 22.0682 11.7579 21.8498 12.0855 21.413L14.5829 18.0832L18.6071 23.6165C18.8284 23.9207 18.939 24.0728 19.0799 24.1364C19.2036 24.1922 19.3429 24.2031 19.4738 24.1673C19.623 24.1264 19.7559 23.9935 20.0219 23.7275L23.7272 20.0222C23.9932 19.7562 24.1262 19.6232 24.167 19.4741C24.2028 19.3432 24.1919 19.2039 24.1361 19.0802C24.0725 18.9392 23.9204 18.8286 23.6162 18.6074L18.0829 14.5832L21.4128 12.0857C21.8495 11.7582 22.0679 11.5944 22.123 11.4102C22.171 11.2496 22.1476 11.076 22.0587 10.9339C21.9568 10.7708 21.7028 10.6708 21.1949 10.4707L5.49686 4.28663Z"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
function Qe() {
  const t = [
    u("big-cursor", "Big Cursor", Xe, d["big-cursor"])
  ];
  return x(t, (i) => {
    L(i);
  });
}
const tn = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M13.9999 23.3332H6.06659C4.7598 23.3332 4.1064 23.3332 3.60727 23.0789C3.16823 22.8551 2.81127 22.4982 2.58757 22.0591C2.33325 21.56 2.33325 20.9066 2.33325 19.5998V8.39984C2.33325 7.09305 2.33325 6.43965 2.58757 5.94053C2.81127 5.50148 3.16823 5.14453 3.60727 4.92082C4.1064 4.6665 4.7598 4.6665 6.06659 4.6665H6.53325C9.14683 4.6665 10.4536 4.6665 11.4519 5.17514C12.33 5.62255 13.0439 6.33646 13.4913 7.21455C13.9999 8.2128 13.9999 9.51959 13.9999 12.1332M13.9999 23.3332V12.1332M13.9999 23.3332H21.9333C23.24 23.3332 23.8934 23.3332 24.3926 23.0789C24.8316 22.8551 25.1886 22.4982 25.4123 22.0591C25.6666 21.56 25.6666 20.9066 25.6666 19.5998V8.39984C25.6666 7.09305 25.6666 6.43965 25.4123 5.94053C25.1886 5.50148 24.8316 5.14453 24.3926 4.92082C23.8934 4.6665 23.24 4.6665 21.9333 4.6665H21.4666C18.853 4.6665 17.5462 4.6665 16.548 5.17514C15.6699 5.62255 14.956 6.33646 14.5086 7.21455C13.9999 8.2128 13.9999 9.51959 13.9999 12.1332"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`, en = `<style>
    .a11y-widget-rg-container {
        touch-action: none; /* Prevents default touch behaviors */
        -webkit-user-select: none; /* Prevents text selection on iOS */
        user-select: none;
    }

    .a11y-widget-rg {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 0;
        pointer-events: none;
        background-color: rgba(0, 0, 0, 0.8) !important;
        z-index: 234234423234;
    }
</style>
<div class="a11y-widget-rg a11y-widget-rg-top"></div>
<div class="a11y-widget-rg a11y-widget-rg-bottom" style="top: auto; bottom: 0;"></div>`;
function et(t = !1) {
  let e = document.querySelector(".a11y-widget-rg-container");
  if (t) {
    if (!e) {
      e = document.createElement("div"), e.setAttribute("class", "a11y-widget-rg-container"), e.innerHTML = en;
      const n = e.querySelector(".a11y-widget-rg-top"), i = e.querySelector(".a11y-widget-rg-bottom"), o = 20;
      window.__a11y_widget__onGuideMove = (r) => {
        const a = r.touches ? r.touches[0].clientY : r.clientY;
        n.style.height = `${a - o}px`, i.style.height = `${window.innerHeight - a - o * 2}px`;
      }, document.addEventListener("mousemove", window.__a11y_widget__onGuideMove, {
        passive: !1
      }), document.addEventListener("touchmove", window.__a11y_widget__onGuideMove, {
        passive: !1
      }), document.body.appendChild(e);
    }
  } else
    e && e.remove(), window.__a11y_widget__onGuideMove && (document.removeEventListener("mousemove", window.__a11y_widget__onGuideMove), document.removeEventListener("touchmove", window.__a11y_widget__onGuideMove), delete window.__a11y_widget__onGuideMove);
}
function nn() {
  var o;
  const t = [u("reading-mask", "Reading Mask", tn)];
  return ((o = I("reading-mask")) == null ? void 0 : o.enabled) && et(!0), x(t, (r) => {
    const a = !r.isActive();
    r.setActive(a), et(r.isActive());
    const s = r.getCurrentConfig();
    k(s.id, { enabled: a });
  });
}
const on = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
        d="M3 12C3 11.4188 3 11.1282 3.0575 10.8897C3.21354 10.2427 3.6684 9.73726 4.25074 9.56389C4.46534 9.5 4.72689 9.5 5.25 9.5H18.75C19.2731 9.5 19.5347 9.5 19.7493 9.56389C20.3316 9.73726 20.7865 10.2427 20.9425 10.8897C21 11.1282 21 11.4188 21 12C21 12.5812 21 12.8718 20.9425 13.1103C20.7865 13.7573 20.3316 14.2627 19.7493 14.4361C19.5347 14.5 19.2731 14.5 18.75 14.5H5.25C4.72689 14.5 4.46534 14.5 4.25074 14.4361C3.6684 14.2627 3.21354 13.7573 3.0575 13.1103C3 12.8718 3 12.5812 3 12Z"
        stroke="currentColor" stroke-width="1.5" />
</svg>`;
function nt(t = !1) {
  const e = document.querySelector("a11y-widget");
  let n = e.shadowRoot.querySelector(".yar-widget__reading-guide");
  t ? n || (n = f({
    attributes: {
      styles: {
        display: "none"
        // Initially hidden
      },
      class: "yar-widget__reading-guide"
    }
  }), e.shadowRoot.appendChild(n), window.__a11y_widget__onMouseMoveLineGuide = (i) => {
    n.style.left = `${i.clientX - 300}px`, n.style.top = `${i.clientY - 10}px`;
  }, document.addEventListener("mousemove", window.__a11y_widget__onMouseMoveLineGuide, {
    passive: !0
  })) : (n && n.remove(), window.__a11y_widget__onMouseMoveLineGuide && (document.removeEventListener("mousemove", window.__a11y_widget__onMouseMoveLineGuide), delete window.__a11y_widget__onMouseMoveLineGuide));
}
function rn() {
  var o;
  const t = [u("reading-guide", "Reading Guide", on)];
  return ((o = I("reading-guide")) == null ? void 0 : o.enabled) && nt(!0), x(t, (r) => {
    const a = !r.isActive();
    r.setActive(a), nt(r.isActive());
    const s = r.getCurrentConfig();
    k(s.id, { enabled: a });
  });
}
const an = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="none" fill="none">
    <path
        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
        stroke="currentColor" stroke-width="1.5" />
    <path d="M12 8V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M6 11V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15 10V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18 11V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
function sn() {
  var h;
  const t = [
    u(
      "text-to-speech",
      "Text to Speech",
      an,
      d["text-to-speech"]
    )
  ];
  let e = !1, n = null, i = null, o = null;
  window.speechSynthesis ? n = window.speechSynthesis : console.error("Speech synthesis not supported");
  const r = (p, c) => {
    n && (i && n.cancel(), c.style.backgroundColor = "rgba(255, 255, 0, 0.2)", o = c, i = new SpeechSynthesisUtterance(p), i.rate = 1, i.pitch = 1, i.volume = 1, i.onend = () => {
      o && (o.style.backgroundColor = "");
    }, n.speak(i));
  }, a = (p) => {
    var m;
    if (!e)
      return;
    const c = (m = p.target.textContent) == null ? void 0 : m.trim();
    c && c.length > 0 && r(c, p.target);
  };
  return ((h = I("text-to-speech")) == null ? void 0 : h.enabled) && (e = !0, document.addEventListener("click", a)), x(t, (p) => {
    e = !p.isActive(), p.setActive(e), e ? document.addEventListener("click", a) : (document.removeEventListener("click", a), n && n.cancel(), o && (o.style.backgroundColor = ""));
    const c = p.getCurrentConfig();
    k(c.id, { enabled: e });
  });
}
function ln() {
  const t = U(C("Navigation Settings"));
  return t.add(Qe()), t.add(sn()), t.add(nn()), t.add(rn()), window.addEventListener("navigo-widget:localeChange", () => {
    const e = C("Navigation Settings");
    t.updateHeader(e);
  }), t;
}
const cn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
        d="M7.5 20H6.45416C5.09333 20 4.41291 20 3.91897 19.6827C3.67759 19.5276 3.4724 19.3224 3.31733 19.081C3 18.5871 3 17.9067 3 16.5458C3 16.1093 3 15.891 2.95448 15.6813C2.93177 15.5767 2.9007 15.4741 2.86157 15.3744C2.78313 15.1747 2.66204 14.9931 2.41987 14.6298L2 14H7.5C8.43188 14 8.89782 14 9.26537 14.1522C9.75542 14.3552 10.1448 14.7446 10.3478 15.2346C10.5 15.6022 10.5 16.0681 10.5 17C10.5 17.9319 10.5 18.3978 10.3478 18.7654C10.1448 19.2554 9.75542 19.6448 9.26537 19.8478C8.89782 20 8.43188 20 7.5 20Z"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
        d="M16.5 20H17.5458C18.9067 20 19.5871 20 20.081 19.6827C20.3224 19.5276 20.5276 19.3224 20.6827 19.081C21 18.5871 21 17.9067 21 16.5458C21 16.1093 21 15.891 21.0455 15.6813C21.0682 15.5767 21.0993 15.4741 21.1384 15.3744C21.2169 15.1747 21.338 14.9931 21.5801 14.6298L22 14H16.5C15.5681 14 15.1022 14 14.7346 14.1522C14.2446 14.3552 13.8552 14.7446 13.6522 15.2346C13.5 15.6022 13.5 16.0681 13.5 17C13.5 17.9319 13.5 18.3978 13.6522 18.7654C13.8552 19.2554 14.2446 19.6448 14.7346 19.8478C15.1022 20 15.5681 20 16.5 20Z"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
        d="M22 14L18.5259 5.46423C18.2366 4.75344 18.092 4.39804 17.8922 4.22854C17.597 3.97809 17.2005 3.92952 16.8629 4.10248C16.6345 4.21953 16.423 4.53131 16 5.15486"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path
        d="M2 14L5.47409 5.46423C5.76338 4.75344 5.90803 4.39804 6.1078 4.22854C6.40296 3.97809 6.79947 3.92952 7.13705 4.10248C7.36553 4.21953 7.57702 4.53131 8 5.15486"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16" stroke="currentColor"
        stroke-width="1.5" />
</svg>`;
function it(t = !1) {
  let e = document.querySelector(".yar-widget__blue-filter");
  t ? e || (e = f({
    styles: {
      "z-index": 2e5,
      background: "rgba(255, 240, 75, 0.78)",
      position: "fixed",
      inset: "0px",
      "mix-blend-mode": "multiply",
      opacity: 0.5,
      "pointer-events": "none",
      height: "100lvh"
    },
    attributes: {
      class: "yar-widget__blue-filter"
    }
  }), document.body.appendChild(e)) : e && e.remove();
}
function dn() {
  var o;
  const t = [u("blue-filter", "Blue Filter", cn)];
  return ((o = I("blue-filter")) == null ? void 0 : o.enabled) && it(!0), x(t, (r) => {
    const a = !r.isActive();
    r.setActive(a), it(r.isActive());
    const s = r.getCurrentConfig();
    k(s.id, { enabled: a });
  });
}
const gn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
        d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
        stroke="currentColor" stroke-width="1.5" />
    <path
        d="M12 2V3.5M12 20.5V22M19.0708 19.0713L18.0101 18.0106M5.98926 5.98926L4.9286 4.9286M22 12H20.5M3.5 12H2M19.0713 4.92871L18.0106 5.98937M5.98975 18.0107L4.92909 19.0714"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>`;
function un() {
  const t = [
    u("brightness", "Brightness", gn, d.brightness)
  ];
  return x(t, (i) => {
    L(i);
  });
}
const P = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M13.9999 25.6668C20.4432 25.6668 25.6666 20.4435 25.6666 14.0002C25.6666 7.55684 20.4432 2.3335 13.9999 2.3335C7.5566 2.3335 2.33325 7.55684 2.33325 14.0002C2.33325 20.4435 7.5566 25.6668 13.9999 25.6668Z"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path
        d="M13.9999 21.5835C18.1881 21.5835 21.5833 18.1883 21.5833 14.0002C21.5833 9.812 18.1881 6.41683 13.9999 6.41683V21.5835Z"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
function hn() {
  const t = [
    u(
      "default",
      "Contrast",
      P,
      d.default,
      "color-contrast"
    ),
    u(
      "lightContrast",
      "Light Contrast",
      P,
      d["color-contrast"].lightContrast,
      "color-contrast"
    ),
    u(
      "darkContrast",
      "Dark Contrast",
      P,
      d["color-contrast"].darkContrast,
      "color-contrast"
    ),
    u(
      "highContrast",
      "High Contrast",
      P,
      d["color-contrast"].highContrast,
      "color-contrast"
    )
  ], e = E(t.length);
  function n(o, r) {
    R(o, r, d, "color-contrast"), M(e, o.getCurrentStep());
  }
  const i = B(t, n, e);
  return i.appendChild(e), i;
}
const pn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none">
    <path
        d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C12.8417 22 14 22.1163 14 21C14 20.391 13.6832 19.9212 13.3686 19.4544C12.9082 18.7715 12.4523 18.0953 13 17C13.6667 15.6667 14.7778 15.6667 16.4815 15.6667C17.3334 15.6667 18.3334 15.6667 19.5 15.5C21.601 15.1999 22 13.9084 22 12Z"
        stroke="currentColor" stroke-width="1.5" />
    <path d="M7 15.002L7.00868 14.9996" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    <circle cx="9.5" cy="8.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
    <circle cx="16.5" cy="9.5" r="1.5" stroke="currentColor" stroke-width="1.5" />
</svg>`;
function Cn() {
  const t = [
    u(
      "invertColors",
      "Invert Colors",
      pn,
      d.invertColors
    )
  ];
  return x(t, (i) => {
    L(i);
  });
}
const Z = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 12.9391 4.20651 11.9264 4.58152 11C5.76829 8.06817 12 2 12 2C12 2 18.2317 8.06817 19.4185 11C19.7935 11.9264 20 12.9391 20 14Z"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;
function fn() {
  const t = [
    u(
      "default",
      "Saturation",
      Z,
      d.default,
      "saturation"
    ),
    u(
      "lowSaturation",
      "Low Saturation",
      Z,
      d.saturation.lowSaturation,
      "saturation"
    ),
    u(
      "highSaturation",
      "High Saturation",
      Z,
      d.saturation.highSaturation,
      "saturation"
    ),
    u(
      "desaturted",
      "Desaturated",
      Z,
      d.saturation.desaturted,
      "saturation"
    )
  ], e = E(t.length);
  function n(o, r) {
    R(o, r, d, "saturation"), M(e, o.getCurrentStep());
  }
  const i = B(t, n, e);
  return i.appendChild(e), i;
}
function mn() {
  const t = U(C("Color Settings"));
  return t.add(hn()), t.add(fn()), t.add(dn()), t.add(un()), t.add(Cn()), window.addEventListener("navigo-widget:localeChange", () => {
    const e = C("Color Settings");
    t.updateHeader(e);
  }), t;
}
function wn() {
  const t = f({
    attributes: {
      class: "yar-widget__menu-items-container"
    }
  });
  return t.appendChild(ln()), t.appendChild(Ue()), t.appendChild(mn()), t;
}
const yn = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="66" zoomAndPan="magnify" viewBox="0 0 49.5 18.749999" height="25" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/><clipPath id="a7389dbf97"><path d="M 0.253906 4 L 9 4 L 9 15.542969 L 0.253906 15.542969 Z M 0.253906 4 " clip-rule="nonzero"/></clipPath><clipPath id="5c5103fd53"><path d="M 2 4 L 9 4 L 9 15.542969 L 2 15.542969 Z M 2 4 " clip-rule="nonzero"/></clipPath><clipPath id="e25fde5374"><path d="M 10 3 L 11.921875 3 L 11.921875 5 L 10 5 Z M 10 3 " clip-rule="nonzero"/></clipPath></defs><g fill="#000000" fill-opacity="1"><g transform="translate(12.101819, 13.187098)"><g><path d="M 6.625 0 L 4.859375 0 L 2.015625 -4.9375 L 1.96875 -4.9375 C 1.988281 -4.738281 2 -4.535156 2 -4.328125 C 2.007812 -4.117188 2.019531 -3.910156 2.03125 -3.703125 C 2.039062 -3.492188 2.050781 -3.285156 2.0625 -3.078125 L 2.0625 0 L 0.828125 0 L 0.828125 -6.53125 L 2.578125 -6.53125 L 5.40625 -1.640625 L 5.4375 -1.640625 C 5.4375 -1.835938 5.429688 -2.035156 5.421875 -2.234375 C 5.410156 -2.441406 5.398438 -2.644531 5.390625 -2.84375 C 5.390625 -3.039062 5.382812 -3.238281 5.375 -3.4375 L 5.375 -6.53125 L 6.625 -6.53125 Z M 6.625 0 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(19.534133, 13.187098)"><g><path d="M 2.765625 -5.09375 C 3.429688 -5.09375 3.941406 -4.945312 4.296875 -4.65625 C 4.660156 -4.363281 4.84375 -3.921875 4.84375 -3.328125 L 4.84375 0 L 3.890625 0 L 3.625 -0.671875 L 3.59375 -0.671875 C 3.445312 -0.492188 3.296875 -0.347656 3.140625 -0.234375 C 2.992188 -0.128906 2.820312 -0.0507812 2.625 0 C 2.4375 0.0625 2.207031 0.09375 1.9375 0.09375 C 1.632812 0.09375 1.363281 0.0351562 1.125 -0.078125 C 0.894531 -0.191406 0.710938 -0.363281 0.578125 -0.59375 C 0.453125 -0.832031 0.390625 -1.132812 0.390625 -1.5 C 0.390625 -2.03125 0.570312 -2.421875 0.9375 -2.671875 C 1.3125 -2.921875 1.875 -3.054688 2.625 -3.078125 L 3.484375 -3.109375 L 3.484375 -3.328125 C 3.484375 -3.585938 3.414062 -3.78125 3.28125 -3.90625 C 3.144531 -4.03125 2.953125 -4.09375 2.703125 -4.09375 C 2.460938 -4.09375 2.226562 -4.054688 2 -3.984375 C 1.769531 -3.921875 1.535156 -3.835938 1.296875 -3.734375 L 0.84375 -4.65625 C 1.113281 -4.789062 1.410156 -4.894531 1.734375 -4.96875 C 2.066406 -5.050781 2.410156 -5.09375 2.765625 -5.09375 Z M 3.484375 -2.3125 L 2.953125 -2.296875 C 2.515625 -2.285156 2.207031 -2.207031 2.03125 -2.0625 C 1.863281 -1.914062 1.78125 -1.722656 1.78125 -1.484375 C 1.78125 -1.273438 1.84375 -1.125 1.96875 -1.03125 C 2.09375 -0.945312 2.253906 -0.90625 2.453125 -0.90625 C 2.742188 -0.90625 2.988281 -0.988281 3.1875 -1.15625 C 3.382812 -1.332031 3.484375 -1.582031 3.484375 -1.90625 Z M 3.484375 -2.3125 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(25.055919, 13.187098)"><g><path d="M 1.90625 0 L 0 -5 L 1.421875 -5 L 2.390625 -2.15625 C 2.441406 -1.988281 2.484375 -1.8125 2.515625 -1.625 C 2.546875 -1.4375 2.566406 -1.269531 2.578125 -1.125 L 2.625 -1.125 C 2.632812 -1.28125 2.65625 -1.445312 2.6875 -1.625 C 2.71875 -1.8125 2.765625 -1.988281 2.828125 -2.15625 L 3.78125 -5 L 5.203125 -5 L 3.296875 0 Z M 1.90625 0 "/></g></g></g><g fill="#000000" fill-opacity="1"><g transform="translate(30.256308, 13.187098)"><g><path d="M 2.078125 -5 L 2.078125 0 L 0.71875 0 L 0.71875 -5 Z M 1.40625 -6.953125 C 1.601562 -6.953125 1.773438 -6.90625 1.921875 -6.8125 C 2.066406 -6.71875 2.140625 -6.546875 2.140625 -6.296875 C 2.140625 -6.035156 2.066406 -5.859375 1.921875 -5.765625 C 1.773438 -5.671875 1.601562 -5.625 1.40625 -5.625 C 1.195312 -5.625 1.019531 -5.671875 0.875 -5.765625 C 0.726562 -5.859375 0.65625 -6.035156 0.65625 -6.296875 C 0.65625 -6.546875 0.726562 -6.71875 0.875 -6.8125 C 1.019531 -6.90625 1.195312 -6.953125 1.40625 -6.953125 Z M 1.40625 -6.953125 "/></g></g></g><g fill="#3c50e0" fill-opacity="1"><g transform="translate(33.055327, 13.187098)"><g><path d="M 3.296875 -3.671875 L 5.890625 -3.671875 L 5.890625 -0.28125 C 5.554688 -0.164062 5.203125 -0.0703125 4.828125 0 C 4.460938 0.0625 4.046875 0.09375 3.578125 0.09375 C 2.921875 0.09375 2.363281 -0.03125 1.90625 -0.28125 C 1.457031 -0.539062 1.113281 -0.921875 0.875 -1.421875 C 0.644531 -1.929688 0.53125 -2.550781 0.53125 -3.28125 C 0.53125 -3.96875 0.660156 -4.5625 0.921875 -5.0625 C 1.191406 -5.5625 1.578125 -5.945312 2.078125 -6.21875 C 2.585938 -6.488281 3.210938 -6.625 3.953125 -6.625 C 4.296875 -6.625 4.632812 -6.585938 4.96875 -6.515625 C 5.3125 -6.441406 5.617188 -6.347656 5.890625 -6.234375 L 5.421875 -5.125 C 5.222656 -5.21875 4.992188 -5.300781 4.734375 -5.375 C 4.484375 -5.445312 4.21875 -5.484375 3.9375 -5.484375 C 3.53125 -5.484375 3.179688 -5.390625 2.890625 -5.203125 C 2.597656 -5.015625 2.367188 -4.753906 2.203125 -4.421875 C 2.035156 -4.085938 1.953125 -3.695312 1.953125 -3.25 C 1.953125 -2.820312 2.007812 -2.441406 2.125 -2.109375 C 2.25 -1.785156 2.4375 -1.53125 2.6875 -1.34375 C 2.9375 -1.15625 3.257812 -1.0625 3.65625 -1.0625 C 3.851562 -1.0625 4.019531 -1.070312 4.15625 -1.09375 C 4.289062 -1.113281 4.421875 -1.132812 4.546875 -1.15625 L 4.546875 -2.515625 L 3.296875 -2.515625 Z M 3.296875 -3.671875 "/></g></g></g><g fill="#3c50e0" fill-opacity="1"><g transform="translate(39.67522, 13.187098)"><g><path d="M 5.25 -2.515625 C 5.25 -2.085938 5.191406 -1.710938 5.078125 -1.390625 C 4.972656 -1.078125 4.8125 -0.804688 4.59375 -0.578125 C 4.382812 -0.359375 4.128906 -0.191406 3.828125 -0.078125 C 3.535156 0.0351562 3.203125 0.09375 2.828125 0.09375 C 2.472656 0.09375 2.144531 0.0351562 1.84375 -0.078125 C 1.550781 -0.191406 1.296875 -0.359375 1.078125 -0.578125 C 0.867188 -0.804688 0.703125 -1.078125 0.578125 -1.390625 C 0.460938 -1.710938 0.40625 -2.085938 0.40625 -2.515625 C 0.40625 -3.066406 0.503906 -3.535156 0.703125 -3.921875 C 0.898438 -4.304688 1.179688 -4.597656 1.546875 -4.796875 C 1.910156 -4.992188 2.34375 -5.09375 2.84375 -5.09375 C 3.3125 -5.09375 3.726562 -4.992188 4.09375 -4.796875 C 4.457031 -4.597656 4.738281 -4.304688 4.9375 -3.921875 C 5.144531 -3.535156 5.25 -3.066406 5.25 -2.515625 Z M 1.796875 -2.515625 C 1.796875 -2.179688 1.832031 -1.898438 1.90625 -1.671875 C 1.976562 -1.453125 2.085938 -1.285156 2.234375 -1.171875 C 2.390625 -1.054688 2.59375 -1 2.84375 -1 C 3.082031 -1 3.273438 -1.054688 3.421875 -1.171875 C 3.578125 -1.285156 3.6875 -1.453125 3.75 -1.671875 C 3.820312 -1.898438 3.859375 -2.179688 3.859375 -2.515625 C 3.859375 -2.835938 3.820312 -3.109375 3.75 -3.328125 C 3.6875 -3.546875 3.578125 -3.710938 3.421875 -3.828125 C 3.273438 -3.941406 3.078125 -4 2.828125 -4 C 2.472656 -4 2.210938 -3.875 2.046875 -3.625 C 1.878906 -3.375 1.796875 -3.003906 1.796875 -2.515625 Z M 1.796875 -2.515625 "/></g></g></g><g clip-path="url(#a7389dbf97)"><path fill="#4e84ff" d="M 0.695312 9.695312 L 3.242188 10.113281 L 1.195312 13.65625 C 1 13.996094 1.117188 14.433594 1.457031 14.632812 L 2.386719 15.167969 L 2.496094 15.230469 C 2.839844 15.429688 3.277344 15.3125 3.472656 14.96875 L 5.519531 11.429688 L 6.226562 12.289062 L 7.15625 13.421875 C 7.46875 13.804688 8.085938 13.597656 8.105469 13.105469 L 8.4375 4.972656 C 8.460938 4.410156 7.847656 4.054688 7.371094 4.355469 L 0.496094 8.710938 C 0.078125 8.972656 0.207031 9.613281 0.695312 9.695312 Z M 0.695312 9.695312 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#5c5103fd53)"><path fill="#3c50e0" d="M 4.625 10.34375 L 8.09375 4.339844 C 8.300781 4.460938 8.449219 4.691406 8.4375 4.972656 L 8.105469 13.105469 C 8.085938 13.597656 7.46875 13.804688 7.15625 13.421875 L 5.519531 11.429688 L 3.472656 14.96875 C 3.277344 15.3125 2.839844 15.429688 2.496094 15.230469 L 2.386719 15.167969 L 4.695312 11.171875 C 4.847656 10.910156 4.820312 10.578125 4.625 10.34375 Z M 4.625 10.34375 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#000000" d="M 8.125 2.027344 C 8.253906 2.027344 8.355469 1.925781 8.355469 1.796875 L 8.355469 0.230469 C 8.355469 0.105469 8.253906 0 8.125 0 C 7.996094 0 7.894531 0.105469 7.894531 0.230469 L 7.894531 1.796875 C 7.894531 1.925781 7.996094 2.027344 8.125 2.027344 Z M 8.125 2.027344 " fill-opacity="1" fill-rule="nonzero"/><path fill="#000000" d="M 9.660156 2.664062 C 9.71875 2.664062 9.777344 2.640625 9.820312 2.597656 L 10.929688 1.488281 C 11.019531 1.398438 11.019531 1.25 10.929688 1.160156 C 10.839844 1.070312 10.691406 1.070312 10.601562 1.160156 L 9.496094 2.269531 C 9.40625 2.359375 9.40625 2.507812 9.496094 2.597656 C 9.539062 2.640625 9.597656 2.664062 9.660156 2.664062 Z M 9.660156 2.664062 " fill-opacity="1" fill-rule="nonzero"/><g clip-path="url(#e25fde5374)"><path fill="#000000" d="M 10.292969 4.195312 L 11.859375 4.195312 C 11.988281 4.195312 12.089844 4.09375 12.089844 3.964844 C 12.089844 3.839844 11.988281 3.734375 11.859375 3.734375 L 10.292969 3.734375 C 10.164062 3.734375 10.0625 3.839844 10.0625 3.964844 C 10.0625 4.09375 10.164062 4.195312 10.292969 4.195312 Z M 10.292969 4.195312 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#000000" d="M 4.390625 4.195312 L 5.957031 4.195312 C 6.085938 4.195312 6.1875 4.09375 6.1875 3.964844 C 6.1875 3.839844 6.085938 3.734375 5.957031 3.734375 L 4.390625 3.734375 C 4.261719 3.734375 4.160156 3.839844 4.160156 3.964844 C 4.160156 4.09375 4.261719 4.195312 4.390625 4.195312 Z M 4.390625 4.195312 " fill-opacity="1" fill-rule="nonzero"/><path fill="#000000" d="M 10.765625 6.839844 C 10.824219 6.839844 10.882812 6.816406 10.929688 6.769531 C 11.019531 6.679688 11.019531 6.535156 10.929688 6.445312 L 9.820312 5.335938 C 9.730469 5.246094 9.585938 5.246094 9.496094 5.335938 C 9.40625 5.425781 9.40625 5.570312 9.496094 5.664062 L 10.601562 6.769531 C 10.648438 6.816406 10.707031 6.839844 10.765625 6.839844 Z M 10.765625 6.839844 " fill-opacity="1" fill-rule="nonzero"/><path fill="#000000" d="M 6.59375 2.664062 C 6.652344 2.664062 6.710938 2.640625 6.757812 2.597656 C 6.847656 2.507812 6.847656 2.359375 6.757812 2.269531 L 5.648438 1.160156 C 5.558594 1.070312 5.410156 1.070312 5.320312 1.160156 C 5.230469 1.25 5.230469 1.398438 5.320312 1.488281 L 6.429688 2.597656 C 6.472656 2.640625 6.535156 2.664062 6.59375 2.664062 Z M 6.59375 2.664062 " fill-opacity="1" fill-rule="nonzero"/></svg>', bn = `
  <section class="yar-widget__statement-section">
    <h3 class="yar-widget__statement-subtitle">Commitment to Accessibility</h3>
    <p>Navigo Accessibility is dedicated to creating a more inclusive digital world by providing tools that enhance website accessibility for everyone, including individuals with disabilities. We are committed to complying with the Web Content Accessibility Guidelines (WCAG) 2.1 and continually improving our services to provide a seamless and equitable browsing experience.</p>
  </section>

  <section class="yar-widget__statement-section">
    <h3 class="yar-widget__statement-subtitle">Conformance Status</h3>
    <p>Navigo Accessibility aligns with WCAG 2.1 standards, focusing on Level AA compliance. These guidelines help ensure our tools and features meet accessibility needs, providing robust support for users with diverse requirements.</p>
  </section>

  <section class="yar-widget__statement-section">
    <h3 class="yar-widget__statement-subtitle">Technical Information</h3>
    <p>Navigo Accessibility's tools rely on the following technologies to deliver accessibility features effectively:</p>
    <ul class="yar-widget__statement-list">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </section>

  <section class="yar-widget__statement-section">
    <h3 class="yar-widget__statement-subtitle">Accessibility Features</h3>
    <div class="yar-widget__features-grid">
      <div class="yar-widget__feature-item">
        <h4>Text-to-Speech</h4>
        <p>Reads website content aloud for auditory accessibility (WCAG 2.1/1.1.1).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Font Size Adjustment</h4>
        <p>Allows users to enlarge or reduce text size for improved readability (WCAG 2.1/1.4.4).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Highlight Titles and Links</h4>
        <p>Emphasizes headings and hyperlinks for better navigation and focus (WCAG 2.1/2.4.4).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Big Cursor</h4>
        <p>Enlarges the cursor for easier visibility and navigation (WCAG 2.1/2.1.1).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Hide Images</h4>
        <p>Removes visual elements to enhance content focus and readability (WCAG 2.1/1.1.1, 1.4.1).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Contrast Adjustment</h4>
        <p>Offers options to increase or decrease contrast for users with low vision (WCAG 2.1/1.4.6).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Blue Filter</h4>
        <p>Reduces blue light to minimize eye strain during prolonged use (WCAG 2.1/1.4.8).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Saturation Control</h4>
        <p>Adjusts color intensity to suit user preferences (WCAG 2.1/1.4.3, 1.4.11).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Dyslexia-Friendly Fonts</h4>
        <p>Replaces standard fonts with fonts optimized for readers with dyslexia (WCAG 2.1/1.4.8).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Letter Spacing and Line Height Adjustments</h4>
        <p>Customizes spacing between letters and lines for enhanced readability (WCAG 2.1/1.4.8).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Mute Sound</h4>
        <p>Provides the ability to silence audio content, ensuring a distraction-free environment (WCAG 2.1/1.4.2).</p>
      </div>
      <div class="yar-widget__feature-item">
        <h4>Invert Colors</h4>
        <p>Reverses colors on the site to improve visibility for users with visual impairments (WCAG 2.1/1.4.6).</p>
      </div>
    </div>
  </section>

  <section class="yar-widget__statement-section">
    <h3 class="yar-widget__statement-subtitle">Ongoing Efforts and Feedback</h3>
    <p>At Navigo Accessibility, we are committed to improving and expanding our accessibility features to meet evolving needs. While we aim to provide a fully accessible experience, some third-party content or integrations may not fully meet accessibility standards. Please notify us of any challenges you encounter, and we will address them promptly.</p>
  </section>

  <section class="yar-widget__statement-section">
    <h3 class="yar-widget__statement-subtitle">Contact Us</h3>
    <p>We value your feedback and are always here to assist. If you have questions, experience issues, or wish to suggest improvements, reach out to us:</p>
    <p class="yar-widget__contact-email">`;
function xn({ onClose: t }) {
  const e = document.createElement("div");
  e.className = "yar-widget__modal", e.setAttribute("role", "dialog"), e.setAttribute("aria-modal", "true"), e.setAttribute("aria-labelledby", "accessibility-statement-title");
  const n = document.createElement("div");
  n.className = "yar-widget__modal-overlay", n.onclick = t, n.setAttribute("role", "button"), n.setAttribute("aria-label", C("Close accessibility statement"));
  const i = document.createElement("div");
  i.className = "yar-widget__modal-content", i.setAttribute("role", "document");
  const o = v({
    attributes: {
      class: "yar-widget__language-modal-close-btn",
      "aria-label": C("Close accessibility statement"),
      tabindex: "0"
    },
    icons: [S(at)],
    onClick: t
  }), r = document.createElement("div");
  r.className = "yar-widget__modal-statement-content", r.setAttribute("role", "region"), r.setAttribute("aria-label", C("Accessibility statement content"));
  const a = document.createElement("h2");
  a.className = "yar-widget__modal-title", a.id = "accessibility-statement-title", a.textContent = C("Accessibility Statement");
  const s = document.createElement("div");
  s.className = "yar-widget__modal-text", s.innerHTML = bn, s.setAttribute("role", "article");
  const l = (c) => {
    if (e.contains(c.target) && (c.key === "Escape" && (c.stopPropagation(), t()), c.key === "Tab")) {
      const m = e.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ), _ = Array.from(m).filter((W) => {
        const Q = window.getComputedStyle(W);
        return Q.display !== "none" && Q.visibility !== "hidden";
      }), b = _[0], H = _[_.length - 1];
      c.shiftKey ? document.activeElement === b && (H.focus(), c.preventDefault()) : document.activeElement === H && (b.focus(), c.preventDefault());
    }
  };
  e.addEventListener("keydown", l);
  const g = document.activeElement;
  setTimeout(() => {
    o.focus();
  }, 0);
  const h = () => {
    e.removeEventListener("keydown", l), g == null || g.focus();
  };
  r.appendChild(a), r.appendChild(s), e.appendChild(n), i.appendChild(o), i.appendChild(r), e.appendChild(i);
  const p = () => {
    h(), t();
  };
  return n.onclick = p, o.onclick = p, e;
}
function kn() {
  let t;
  const e = () => {
    if (!t) {
      const p = document.getElementsByTagName("a11y-widget").item(0).shadowRoot.querySelectorAll(".yar-widget__menu-container")[0];
      t = xn({
        onClose: n
      }), p.appendChild(t);
    }
  }, n = () => {
    t == null || t.remove(), t = null;
  }, i = f({
    attributes: {
      class: "yar-widget__menu-footer"
    }
  }), o = f({
    attributes: {
      class: "yar-widget__menu-footer-left"
    }
  }), r = f({
    attributes: {
      class: "yar-widget__menu-footer-logo"
    }
  }), a = document.createElement("span");
  a.textContent = "Powered by", a.className = "yar-widget__menu-footer-powered-by";
  const s = document.createElement("a");
  s.href = "https://navigopro.com", s.target = "_blank", s.rel = "noopener noreferrer";
  const l = S(yn, ["yar-widget__menu-footer-logo-img"]), g = f({
    attributes: {
      class: "yar-widget__menu-footer-right"
    }
  }), h = v({
    attributes: {
      class: "yar-widget__menu-footer-statement-button"
    },
    text: C("Accessibility Statement"),
    onClick: e
  });
  return s.appendChild(l), r.appendChild(a), r.appendChild(s), o.appendChild(r), g.appendChild(h), i.appendChild(o), i.appendChild(g), i;
}
function vn() {
  const t = f({
    attributes: {
      class: "yar-widget__reset-button-wrapper"
    }
  }), e = v({
    text: C("Reset settings"),
    attributes: {
      class: "yar-widget__reset-button",
      "aria-label": C("Reset settings"),
      // Clear description of action
      role: "button"
      // Explicit role
    },
    onClick: n
  });
  function n() {
    X[K] && (e.setAttribute("aria-disabled", "true"), ze(), pt(), e.setAttribute("aria-disabled", "false"));
  }
  return window.addEventListener("navigo-widget:localeChange", () => {
    const i = C("Reset settings");
    e.textContent = i, e.setAttribute("aria-label", i);
  }), t.appendChild(e), t;
}
function Sn(t) {
  const e = f({
    styles: { [t]: 0 },
    attributes: {
      class: "yar-widget__menu-container"
    }
  }), n = xe();
  return window.addEventListener("navigo-widget:localeChange", () => {
    const i = C("Accessibility Menu");
    n.updateTitle(i);
  }), e.appendChild(n), e.appendChild(wn()), e.appendChild(vn()), e.appendChild(kn()), e;
}
const _n = `
    :host {
      --widget-primary-color: #3C50E0;
    }

    .yar-widget {
      position: fixed;
      font-family: ${V.fontSecondary};
      z-index: 9999;
    }

    .yar-widget--hidden {
      display: none;
    }

    .yar-widget__main-container * {
      box-sizing: border-box;
    }

    .yar-widget__icon {
      width: 40px;
      height: 40px
    }

    .yar-widget__menu-footer-logo-img svg {
      width: 80px;
      height: 60px;
    }
    .yar-widget__menu-footer-powered-by {
       color: var(--yar-widget-text-color);
       font-size: 12px;
    }
    .yar-widget__toggle-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: var(--widget-primary-color);
      width: 3.15rem;
      height: 3.15rem;
      border-radius: 50%;
      cursor: pointer;
    }

    .yar-widget__menu-container {
      display: flex;
      flex-direction: column;
      top: 0;
      height: 100%;
      width: 33.4rem;
      position: fixed;
      z-index: 9999;
      background: ${w.colorBg};
    }
    .yar-widget__menu-container::after {
      position: absolute;
      background-image: linear-gradient(180deg, var(--widget-primary-color), #c2c8d50f);
      top: 0;
      left: 0;
      width: 100%;
      height: 220px;
      z-index: -1;
      content: "";
    }
    .yar-widget__menu-header-close-button {
        border: none;
        cursor: pointer;
        border-radius: 20px;
    }

    .yar-widget__menu-header-close-button:hover {
        border: none;
        cursor: pointer;
        border-radius: 20px;
    }

    .yar-widget__menu-header-title {
      text-align: center;
    
    }
    
    .yar-widget__menu-header {
      position: sticky;
      top: 0px;
      z-index: 1;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      font-weight: 100;
      color: ${w.white};
      box-sizing: border-box;

      h1 {
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0; 
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
        border-radius: 20px;
      }
    }

    .yar-widget__menu-footer {
      display: flex;
      width: 100%;
      position: sticky;
      bottom: 0px;
      padding: 1rem;
      font-weight: 100;
      color: ${w.textColor}; 
      background: #c2c8d50f; 
      box-sizing: border-box;
      height: 7%;
      border-top: 1px solid ${w.softGray}; 
      box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1)
    }
    .yar-widget__menu-footer-logo {
      display: flex;
      align-items: center;
    }

    .yar-widget__menu-footer-logo img {
      max-width: 100%;
      height: auto;
      transition: opacity 0.2s ease;
    }

    .yar-widget__menu-footer-logo a:hover img {
        opacity: 0.8;
    }

  .yar-widget__reset-button {
        align-self: center;
        width: 95%;
        color: ${w.white}; 
        font-size: 14px;
        padding: 0.5rem;
        border-radius: 5px;
        background: var(--widget-primary-color);
        border: none;
        cursor: pointer;
    }
    .yar-widget__reset-button-wrapper {
      width: 100%;
      margin: 0.80rem;
    }

    .yar-widget__menu-items-container {
      overflow-y: auto;
      flex-grow: 1;
      margin-right: 10px;
      margin: 0.80rem;
      border-radius: 0.75rem;
      justify-items: center;
    }

    /* Custom Scrollbar for Modal */
    .yar-widget__menu-items-container::-webkit-scrollbar {
      width: 5px; 
    }

    .yar-widget__menu-items-container::-webkit-scrollbar-track {
      background: ${w.colorBg}; 
      border-radius: 2px;
    }

    .yar-widget__menu-items-container::-webkit-scrollbar-thumb {
      background: ${w.borderColor}; 
      border-radius: 2px; 
    }

    .yar-widget__menu-items-container::-webkit-scrollbar-thumb:hover {
      background: ${w.borderColorHover}; 
    }

    .yar-widget__card {
      padding: 0.70rem;
      margin-bottom: 1rem;
      width: 95%;
      background: ${w.white};
      border-radius: 0.75rem;
      box-sizing: border-box;
      box-shadow: rgba(60, 80, 170, 0.1) 0px 10px 30px;
    }

    .yar-widget__card-header {
      h1 {
        font-size: 1rem;
        padding: 0.75rem 0.5rem;
        font-weight: 500;
        margin: 0; 
        text-align: left;
      }
    }

    .yar-widget__card-body {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 0.65rem;
      place-items: center;
    }

    .yar-widget__action-btn {
      position: relative;
      width: 8.375rem;
      height: 7.125rem;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      -webkit-appearance: none;
      cursor: pointer;
      background: ${w.colorBg};
      border-radius: 0.75rem;
      border: 0.125rem solid #ebeff3;
      padding: 0.3125rem 0.625rem;
      transition: border-color .15s ease;
      font-size: 0.875rem;

      .yar-widget__levels-container {
        opacity: 0;
      }
    }

    .yar-widget__action-btn--active {
      background: var(--widget-primary-color);
      border-color: var(--widget-primary-color);
      color: ${w.white};
    }

    .yar-widget__steps-container {
      opacity: 0; 
      transition: opacity 0.3s ease;
      width: 80%;
      height: 0.188rem;
      position: absolute;
      bottom: 0.625rem;
      display: flex;
      justify-content: space-between;
      gap: 0.375rem;
    }

    .yar-widget__step {
      height: 100%;
      width: 100%;
      display: inline-block;
      background: ${w.colorBg};
      border-radius: 10px;
    }

    .yar-widget__action-btn:hover {
      border-color: var(--widget-primary-color);
    }

    .yar-widget__reading-guide {
      z-index: 2147483647;
      pointer-events: none;
      background-color: rgba(35, 83, 255, 1); 
      border-radius: 10px;
      width: 600px;
      height: 8px; 
      display: block;
      position: fixed;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .yar-widget__reading-guide::after {
      content: "";
      background: rgba(35, 83, 255, 1); 
      width: 12px; 
      height: 12px; 
      position: absolute;
      top: -6px;
      left: 50%;
      transform: translate(-50%) rotate(45deg);
    }

    .yar-widget__modal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    }

    .yar-widget__modal-overlay {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;
    }

    .yar-widget__modal-content {
      position: relative;
      background: white;
      padding: 2rem;
      border-radius: 10px;
      align-items: center;
      z-index: 10000;
      max-width: 400px;
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      outline: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .yar-widget__modal-languages-content {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    .yar-widget__language-btn-modal {
      display: flex;
      align-items: center;
      justify-content: center; 
      border: none;
      gap: 10px;
      padding: 0.5rem;
      width: 100%;
      font-size: 1rem;
      background-color: ${w.colorBg};
      cursor: pointer;
      border-radius: 5px;
    }

    .yar-widget__language-btn-modal.active {
      background-color: var(--widget-primary-color); 
      color: white; 
      box-shadow: 0 0 10px rgba(0, 123, 255, 0.5); 
    }

    .yar-widget__language-btn-modal:hover {
      background-color: var(--widget-primary-color);
      color: ${w.white};
    }

    .yar-widget__language-modal-close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: gray;
      z-index: 10001;
      padding: 8px;
      border-radius: 4px;
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .yar-widget__language-btn-modal:focus {
      outline: 2px solid var(--widget-primary-color);
      outline-offset: 2px;
    }

    .yar-widget__language-btn {
      display: flex;
      align-items: center;
      font-size: ${V.fontSizeBase};
      gap: 5px;
      color: ${w.white}; 
      padding: 0.5rem;
      cursor: pointer;
      font-weight: ${V.fontWeightRegular};
    }

    .yar-widget__language-btn:hover {
      background-color: var(--widget-primary-color);
    }

    .yar-widget__language_wrapper {
      display: flex;
      justify-content: space-between;
    }

    .yar-widget__language-flag {
      width: 20px;
      height: 15px;
    }

    @media (max-width: 768px) {
      .yar-widget__menu-container {
        width: 100%
      }

      .yar-widget__card-body {
        grid-template-columns: 1fr 1fr;
      }
    }

    .yar-widget__menu-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
}

.yar-widget__menu-footer-left {
  display: flex;
  align-items: center;
}

.yar-widget__menu-footer-logo {
  display: flex;
  align-items: center;
  gap: 4px;
}

.yar-widget__menu-footer-label {
  color: var(--yar-widget-text-color);
  font-size: 14px;
}

.yar-widget__menu-footer-statement-button {
  padding: 8px 16px;
  border-radius: 4px;
  background: var(--yar-widget-primary-color);
  color: var(--yar-widget-text-color);
  border: none;
  cursor: pointer;
}

.yar-widget__modal-content {
  max-height: 80vh;
  overflow-y: auto;
}

.yar-widget__statement-section {
  margin-bottom: 1.5rem;
}

.yar-widget__statement-subtitle {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.yar-widget__statement-list {
  list-style-type: disc;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}

.yar-widget__features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.yar-widget__feature-item {
  background: rgba(0, 0, 0, 0.03);
  padding: 1rem;
  border-radius: 4px;
}

.yar-widget__feature-item h4 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.yar-widget__contact-email {
  margin-top: 0.5rem;
  font-weight: 500;
}

/* Add high contrast focus styles */
:focus-visible {
  outline: 3px solid var(--widget-primary-color);
  outline-offset: 2px;
}
`;
function Ln(t) {
  const e = new CSSStyleSheet();
  e.replaceSync(_n), t.adoptedStyleSheets = [...t.adoptedStyleSheets, e];
}
function An(t) {
  tt(t), window.addEventListener("navigo-widget:localeChange", () => {
    tt(t);
  });
}
const ot = "1.875rem", X = {};
function Mn(t) {
  const [e, n] = t.split("-");
  return {
    [e]: ot,
    [n]: ot
  };
}
function Hn(t, e = "bottom-right") {
  const n = {
    open: !1,
    position: Mn(e),
    widgetIcon: S(dt),
    closeIcon: S(rt, ["yar-widget--hidden"])
  }, i = f({
    attributes: {
      class: "yar-widget--hidden",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": A("accessibilityMenu")
    }
  });
  i.appendChild(Sn(e.split("-")[1]));
  const o = v({
    attributes: {
      class: "yar-widget__toggle-btn",
      "aria-label": A("openAccessibilityMenu")
    },
    icons: [n.widgetIcon, n.closeIcon],
    onClick: () => q(n, i, o)
  }), r = (s) => {
    s.key === "Escape" && n.open && (i.querySelector(".yar-widget__modal") || q(n, i, o));
  };
  document.addEventListener("keydown", r);
  const a = f({
    styles: n.position,
    attributes: {
      class: "yar-widget",
      tabindex: "-1"
    }
  });
  a.appendChild(i), a.appendChild(o), t.appendChild(a), Ln(t), An(t), X[K] = {
    widgetState: n,
    widgetContainer: i
  };
}
class En extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  // Invoked when the custom element is first connected to the document's DOM.
  connectedCallback() {
    console.log("Custom element added to page.");
    const e = this.getAttribute("position") || "bottom-right";
    Hn(this.shadowRoot, e);
  }
  // Invoked when the custom element is disconnected from the document's DOM.
  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }
  //Invoked when the custom element is moved to a new document.
  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }
  // Invoked when one of the custom element's attributes is added, removed, or changed.
  attributeChangedCallback(e) {
    console.log(`Attribute ${e} has changed.`);
  }
}
customElements.get("a11y-widget") || customElements.define("a11y-widget", En);
async function Bn(t, e) {
  try {
    const n = await fetch("https://navigopro-v1-server.fly.dev/auth/widget", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        widgetAccountKey: t,
        hostname: e
      })
    });
    if (!n.ok)
      throw new Error("Invalid Client key");
    return await n.json();
  } catch (n) {
    return console.error("Client key validation failed:", n), !1;
  }
}
async function Tn() {
  var o, r;
  const t = document.querySelector('script[src*="A11Y-lib.js"]'), e = t == null ? void 0 : t.getAttribute("data-account");
  if (!e) {
    console.error("API key is required");
    return;
  }
  const n = await Bn(e, window.location.hostname);
  if (!n.config.isEnabled)
    return;
  if (!n.isAuthenticated) {
    console.error("Authentication failed");
    return;
  }
  const i = document.createElement("a11y-widget");
  i.setAttribute("position", ((o = n == null ? void 0 : n.config) == null ? void 0 : o.widgetPosition) || "bottom-right"), i.style.setProperty("--widget-primary-color", ((r = n == null ? void 0 : n.config) == null ? void 0 : r.colorCode) || "#3C50E0"), document.body.appendChild(i);
}
Tn();
