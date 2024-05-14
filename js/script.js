const BASE_URL = location.origin;
const pathname = location.pathname;
const menuEl = document.querySelector(".home-menu");

const menu = [
  {
    title: "Редколлегия",
    href: "editorial-board",
  },
  {
    title: "Рецензирование статьей",
    href: "article-review",
  },
  {
    title: "Архив журнала",
    href: "magazine-archive",
  },
  {
    title: "Правила для авторов",
    href: "rules-for-authors",
  },
  {
    title: "Публикационная этика",
    href: "publication-ethics",
  },
  {
    title: "Порядок представления рукописей статей",
    href: "procedure-for-submitting-article-manuscripts",
  },
  {
    title: "Нормативно-правовые документы",
    href: "regulatory-documents",
  },
  {
    title: "Индексирование журнала",
    href: "journal-indexing",
  },
  {
    title: "Контакты",
    href: "contacts",
  },
];

menuEl.innerHTML = menu
  .map(
    (i) =>
      `<a href="/?menu=${i.href}" class="text-decoration-none" style="color: #565656">${i.title}</a>`
  )
  .join("");
