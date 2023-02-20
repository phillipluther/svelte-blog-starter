import { tick } from 'svelte';

const portals = new Map();
const namelessPortalId = 'namelessPortal';

let portalCount = 0;
let portalEl;

function closePortal() {
  if (portalEl) {
    portalEl.innerHTML = '';
  }
}

export default function portalize(contentNode, id = namelessPortalId) {
  if (!portalEl) {
    portalEl = document.createElement('div');

    portalEl.id = 'portal';

    tick().then(() => {
      document && document.body.appendChild(portalEl);
    });
  }

  closePortal();
  contentNode.parentNode.removeChild(contentNode);

  const portalId = id == namelessPortalId ? `${id}-${portalCount}` : id;
  portalCount++;

  portals.set(portalId, contentNode);
}
