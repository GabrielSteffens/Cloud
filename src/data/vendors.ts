export interface VendorRegistryEntry {
  id: string;
  name: string;
  vendor: string;
  logoColor: string;
}

/**
 * Canonical list of vendors tracked for topic comparisons. Every macro
 * topic (src/data/topics.ts, plus any drafted in the Topic Comparison
 * screen) scaffolds one card per entry here, so a topic added for one
 * vendor automatically has a slot for every other vendor too.
 */
export const VENDORS: VendorRegistryEntry[] = [
  { id: 'yunlink', name: 'Yunlink', vendor: 'CloudNetlot / Ruike Technology', logoColor: '#2563eb' },
  { id: 'dahua', name: 'Dahua', vendor: 'Dahua Technology', logoColor: '#94a3b8' },
  { id: 'inc-cloud', name: 'INC Cloud', vendor: 'Intelbras', logoColor: '#00cc66' }
];
