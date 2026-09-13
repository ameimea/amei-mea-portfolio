const data = window.PORTFOLIO_DATA;
const root = window.PORTFOLIO_ROOT;

function sorted(kind) {
  return [...data[kind]].sort((a, b) =>
    String(b.date || "").localeCompare(String(a.date || "")) ||
    String(a.id || "").localeCompare(String(b.id || ""), "ja", { numeric: true })
  );
}

function imageUrl(item, width) {
  return new URL(`${item.image}-${width}.webp`, root).href;
}

function galleryCard(item) {
  return `<article class="art-card">
    <button class="art-button" type="button" data-full="${imageUrl(item, 960)}" aria-label="${item.title}を拡大表示">
      <picture>
        <source media="(min-width:700px)" srcset="${imageUrl(item, 960)}">
        <img src="${imageUrl(item, 480)}" alt="${item.title}" width="720" height="960" loading="lazy">
      </picture>
    </button>
    <div class="art-meta"><span>${item.id}</span><strong>${item.title}</strong></div>
    ${item.note ? `<p>${item.note}</p>` : ""}
  </article>`;
}

function homeCard(item) {
  return `<span class="home-slot">
    <button class="home-art art-button" type="button" data-full="${imageUrl(item, 960)}" aria-label="${item.title}を拡大表示">
      <picture><img src="${imageUrl(item, 480)}" alt="${item.title}" loading="eager"></picture>
    </button>
  </span>`;
}

document.querySelectorAll("[data-home-gallery]").forEach((gallery) => {
  gallery.innerHTML = sorted(gallery.dataset.homeGallery).slice(0, 5).map(homeCard).join("");
});

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const items = sorted(gallery.dataset.gallery);
  const pageSize = 9;
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const requested = Number(new URLSearchParams(location.search).get("page") || 1);
  const current = Math.min(totalPages, Math.max(1, requested));
  const start = (current - 1) * pageSize;
  gallery.innerHTML = items.slice(start, start + pageSize).map(galleryCard).join("");

  const pagination = document.querySelector(".pagination");
  if (pagination && totalPages > 1) {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => {
      const page = index + 1;
      return `<a class="pagination-number" href="?page=${page}" ${page === current ? 'aria-current="page"' : ""}>${page}</a>`;
    }).join("");

    const previous = current > 1
      ? `<a class="pagination-step pagination-previous" href="?page=${current - 1}" aria-label="前のページ">← 前へ</a>`
      : `<span class="pagination-step pagination-previous" aria-disabled="true">← 前へ</span>`;
    const next = current < totalPages
      ? `<a class="pagination-step pagination-next" href="?page=${current + 1}" aria-label="次のページ">次へ →</a>`
      : `<span class="pagination-step pagination-next" aria-disabled="true">次へ →</span>`;

    pagination.innerHTML = `${previous}<span class="pagination-status" aria-current="page">${current} / ${totalPages}</span>${pageNumbers}${next}`;
  }
});

const dialog = document.querySelector("#lightbox");
if (dialog) {
  const image = dialog.querySelector("img");
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".art-button");
    if (!button) return;
    image.src = button.dataset.full;
    image.alt = button.getAttribute("aria-label").replace("を拡大表示", "");
    dialog.showModal();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest(".lightbox-close")) dialog.close();
  });
}
