// Canvaの1ページ目・左上から右へ並ぶ順番を、そのまま登録しています。
// 今後の新作は、公開日を入れた項目を追加すると日付順で自動的に先頭へ並びます。
window.PORTFOLIO_ROOT = new URL("./", document.currentScript.src);

function importedGallery(folder, prefix, count, title) {
  return Array.from({ length: count }, (_, index) => {
    const id = String(index + 1).padStart(3, "0");
    return {
      id,
      date: "2026-09-13",
      title: `${title} ${id}`,
      note: "",
      image: `assets/${folder}/${prefix}-${id}`
    };
  });
}

window.PORTFOLIO_DATA = {
  works: importedGallery("works", "work", 42, "WORK"),
  illustrations: importedGallery("illustrations", "illustration", 130, "ILLUSTRATION")
};
