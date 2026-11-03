import { getCollection } from 'astro:content';

// Drafts are visible in `npm run dev` and never published.
// Template files (template-*.md) are never shown, not even in dev.
const visible = ({ id, data }: { id: string; data: { draft: boolean } }) =>
  !id.startsWith('template-') && (!import.meta.env.PROD || !data.draft);

const byOrder = <T extends { data: { order: number; year: number } }>(a: T, b: T) =>
  a.data.order - b.data.order || b.data.year - a.data.year;

export async function getWork() {
  return (await getCollection('work', visible)).sort(byOrder);
}

export async function getCreative() {
  return (await getCollection('creative', visible)).sort(byOrder);
}

export const pad = (n: number) => String(n).padStart(2, '0');
