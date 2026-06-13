// =============================================================================
// Sources.jsx — Wrapper pour aligner plusieurs <Source /> à droite
// À placer dans : src/components/Sources.jsx
//
// Usage dans un fichier .mdx :
//   import Sources from '@site/src/components/Sources';
//   import Source from '@site/src/components/Source';
//
//   <Sources>
//     <Source livre="WC1" page="42" />
//     <Source livre="MC" page="149" />
//   </Sources>
// =============================================================================

import React from 'react';

export default function Sources({ children }) {
  return (
    <div className="sources-right">
      {children}
    </div>
  );
}
