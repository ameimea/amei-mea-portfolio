// 新しい作品はこの一覧に1件追加するだけで、日付順に自動で先頭へ並びます。
window.PORTFOLIO_ROOT = new URL("./", document.currentScript.src);
window.PORTFOLIO_DATA = {
  works: [
    { id: "01", date: "2026-09-05", title: "CHARACTER DESIGN", note: "企業案件", image: "assets/works/work-01" },
    { id: "02", date: "2026-09-04", title: "ILLUSTRATION", note: "書籍・CDジャケット", image: "assets/works/work-02" },
    { id: "03", date: "2026-09-03", title: "KEY VISUAL", note: "コラボレーション", image: "assets/works/work-03" },
    { id: "04", date: "2026-09-02", title: "GOODS ILLUSTRATION", note: "グッズ用イラスト", image: "assets/works/work-04" },
    { id: "05", date: "2026-09-01", title: "SD ILLUSTRATION", note: "スタンプ・グッズ", image: "assets/works/work-05" }
  ],
  illustrations: [
    { id: "01", date: "2026-09-05", title: "ORIGINAL", note: "", image: "assets/illustrations/illustration-01" },
    { id: "02", date: "2026-09-04", title: "ORIGINAL", note: "", image: "assets/illustrations/illustration-02" },
    { id: "03", date: "2026-09-03", title: "ORIGINAL", note: "", image: "assets/illustrations/illustration-03" },
    { id: "04", date: "2026-09-02", title: "ORIGINAL", note: "", image: "assets/illustrations/illustration-04" },
    { id: "05", date: "2026-09-01", title: "ORIGINAL", note: "", image: "assets/illustrations/illustration-05" }
  ]
};
