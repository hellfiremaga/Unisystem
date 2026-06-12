// =============================================================================
// Source.jsx — Composant MDX pour annoter la source d'une information
// À placer dans : src/components/Source.jsx
//
// Usage dans un fichier .mdx :
//   import Source from '@site/src/components/Source';
//
//   Le personnage gagne 3 points d'attribut.<Source livre="WC1" page="42" />
//
// Props :
//   livre  (string) — code du livre source, ex: "WC1", "A2", "P&P"
//                     doit correspondre à un id dans le tableau des références du Glossaire
//   page   (string|number) — numéro de page (optionnel)
// =============================================================================

import React from 'react';
import Link from '@docusaurus/Link';

// Convertit le code livre en id d'ancre : "P&P" → "pp", "WC1" → "wc1"
function toAnchor(livre) {
  return livre
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '');
}

export default function Source({ livre, page }) {
  const label = [livre, page ? `p.${page}` : null].filter(Boolean).join(', ');
  const anchor = toAnchor(livre);
  const href = `/docs/Glossaire#${anchor}`;

  return (
    <Link
      to={href}
      className="source-annotation"
      title={`Voir la référence : ${label}`}
    >
      {label}
    </Link>
  );
}
