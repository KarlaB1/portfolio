import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categories, media } from './data/taxonomy';

const base = {
  title: z.string(),
  summary: z.string(),
  category: z.enum(categories),
  year: z.number(),
  featured: z.boolean().default(false),
  order: z.number().default(100),
  draft: z.boolean().default(false),
};

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      ...base,
      role: z.string(),
      team: z.string().optional(),
      duration: z.string().optional(),
      tools: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      // Shown on the page when work was done under confidentiality.
      note: z.string().optional(),
    }),
});

const creative = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/creative' }),
  schema: ({ image }) =>
    z.object({
      ...base,
      medium: z.enum(media),
      role: z.string().optional(),
      tools: z.array(z.string()).default([]),
      location: z.string().optional(),
      camera: z.string().optional(),
      cover: image(),
      coverAlt: z.string(),
      images: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      // Smaller series shown under the main gallery, each with its own heading.
      subseries: z
        .array(
          z.object({
            title: z.string(),
            intro: z.string().optional(),
            images: z.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() })),
          }),
        )
        .default([]),
      video: z
        .object({
          provider: z.enum(['youtube', 'vimeo', 'file']),
          id: z.string().optional(), // youtube / vimeo
          src: z.string().optional(), // file in /public
          captions: z.string().optional(), // .vtt in /public
          duration: z.string().optional(),
        })
        .optional(),
    }),
});

export const collections = { work, creative };
