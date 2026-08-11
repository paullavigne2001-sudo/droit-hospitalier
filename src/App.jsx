import { useMemo, useState } from "react";
import notions from "./data/finances.json";

function App() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState("FIN-001");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return notions;
    return notions.filter((n) =>
      [
        n.Notion_ID,
        n.Notion,
        n["Sous-domaine"],
        n["Résumé"],
        n["Mots-clés"]
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [search]);

  const selected =
    notions.find((n) => n.Notion_ID === selectedId) ?? notions[0];

  return (
    <main className="app">
      <header className="header">
        <div>
          <p className="eyebrow">RÉFÉRENTIEL DROIT HOSPITALIER</p>
          <h1>Finances hospitalières</h1>
          <p className="subtitle">
            Première ébauche — FIN-001 à FIN-045
          </p>
        </div>
        <div className="badge">{notions.length} notions</div>
      </header>

      <section className="layout">
        <aside className="panel list-panel">
          <input
            className="search"
            type="search"
            placeholder="Rechercher une notion..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="list">
            {filtered.map((n) => (
              <button
                key={n.Notion_ID}
                className={`list-item ${
                  n.Notion_ID === selectedId ? "active" : ""
                }`}
                onClick={() => setSelectedId(n.Notion_ID)}
              >
                <span className="id">{n.Notion_ID}</span>
                <span>{n.Notion}</span>
              </button>
            ))}
          </div>
        </aside>

        <section className="panel content-panel">
          <div className="notion-header">
            <div>
              <span className="id">{selected.Notion_ID}</span>
              <h2>{selected.Notion}</h2>
              <p className="subdomain">{selected["Sous-domaine"]}</p>
            </div>
            <span className="status">{selected.Statut_juridique}</span>
          </div>

          <Info title="Définition juridique" value={selected.Définition_juridique} />
          <Info title="Définition pédagogique" value={selected.Définition_pédagogique} />
          <Info title="Fondement juridique" value={selected.Fondement_juridique} />
          <Info title="Articles précis" value={selected.Articles_précis} />
          <Info title="Résumé" value={selected.Résumé} />
          <Info title="Points essentiels" value={selected.Points_essentiels} />
          <Info title="Pièges" value={selected.Pièges} />
          <Info title="Exemple hospitalier" value={selected.Exemple_hospitalier} />
        </section>
      </section>
    </main>
  );
}

function Info({ title, value }) {
  if (!value) return null;
  return (
    <article className="info">
      <h3>{title}</h3>
      <p>{value}</p>
    </article>
  );
}

export default App;
