// Content of the homepage: only facts from veon/client.json and design/concept.md (IDs in comments).
const NBSP = " ";

export const phone = {
  display: ["0", "800", "35", "52", "36"].join(NBSP), // company.contacts.phones
  href: "tel:0800355236",
};

export const results = {
  href: "https://client-astra-dia.cloud.terralab.pro/auth", // W-F011
  label: "Результати онлайн",
  note: "відкриється особистий кабінет",
};

export const emails = {
  info: "info@astra-dia.ua",
  b2b: "b2b@astra-dia.ua",
}; // company.contacts.emails

export const socials = [
  { name: "Facebook", href: "https://www.facebook.com/ml.astradia/" },
  { name: "Instagram", href: "https://www.instagram.com/astra_dia/" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCL3XThrHrh0o_Pcs6PSdtdw/videos" },
]; // socials[] status: confirmed

export const legalName = "ПП «АСТРА-ДІА»";

export const nav = [
  { href: "#analizy", label: "Аналізи й ціни" },
  { href: "#punkty", label: "Пункти забору" },
  { href: "#vyklyk", label: "Виклик медсестри" },
  { href: "#aktsii", label: "Акції" },
  { href: "#pro-nas", label: "Про лабораторію" },
  { href: "#klinikam", label: "Клінікам і лікарям" },
]; // W-R011

export const FUTURE_NOTE = "Розділ у розробці";

// company.geography: 25 населених пунктів у переліку «Наші відділення»
export const places = [
  "Ужгород", "Мукачево", "Тячів", "Свалява", "Берегово", "Виноградів", "Іршава", "Хуст", "Рахів",
  "Перечин", "В. Бичків", "Міжгір'я", "Дубове", "Нересниця", "Ільниця", "Яремче", "Воловець",
  "Колочава", "Великий Березний", "Кушниця", "Пилипець", "Чоп", "Велика Добронь", "Королево", "Поляна",
];

// company.contacts.addresses: Ужгород, 11 пунктів
export const uzhhorodAddresses = [
  "вул. Закарпатська, 44/2",
  "вул. Івана Коршинського, 25",
  "вул. Минайська, 14б",
  "вул. Капушанська, 161/1",
  "вул. Минайська, 54",
  "вул. Героїв 128 бригади, 23/27",
  "вул. Другетів, 73",
  "проспект Свободи, 43",
  "вул. Гошовського, 2",
  "вул. Капушанська, 167/4",
  "проспект Свободи, 7/26",
];

// W-F009 (ЗАК, феритин) і W-F025 («Популярні аналізи»: ціна при онлайн-оплаті / звичайна, термін)
export interface PriceTag { name: string; full: string | null; price: number; online: number | null; term: string | null; }
export const prices: PriceTag[] = [
  { name: "ЗАК з формулою", full: "Загальний аналіз крові з лейкоцитарною формулою", price: 200, online: null, term: "1–2 дні" },
  { name: "Феритин", full: null, price: 390, online: null, term: null },
  { name: "Гепатит С", full: "Антитіла сумарні (anti-HCV)", price: 490, online: 456, term: "2–3 дні" },
  { name: "Гепатит В", full: "HBsAg", price: 490, online: 456, term: "2–3 дні" },
  { name: "РЕА", full: "Раково-ембріональний антиген", price: 350, online: 326, term: "1–2 дні" },
  { name: "ХГЛ+бета", full: "3–18 тиждень вагітності", price: 360, online: 335, term: "1–2 дні" },
];

// Категорії каталогу (products_services) і два аналізи з W-F009 — чипи пошуку
export const searchChips = ["ЗАК з формулою", "Феритин", "Гормони", "Алергологія"];

// products_services: виклик медсестри
export const nurseCities = ["Ужгород", "Мукачево", "Тячів"]; // W-F012
export const nurseTariffs = [
  { cond: "По місту, наступного дня", price: "250 грн" },
  { cond: "По місту, того ж дня", price: "300 грн" },
  { cond: "Виїзд до 10 км", price: "350 грн" },
  { cond: "Замовлення аналізів від 2000 грн", price: "Безкоштовно" },
];
