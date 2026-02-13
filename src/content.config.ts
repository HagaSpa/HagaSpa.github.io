import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const resume = defineCollection({
  loader: glob({ pattern: '*.md', base: './contents' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { resume };
