import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/*
  Chapters collection. One MDX file per chapter, frontmatter validated by zod.
  Astro derives the chapter slug from the MDX filename, so no `slug` field here.
*/
const chapters = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/chapters" }),
	schema: z.object({
		chapter: z.number().int().min(1).max(99),
		title: z.string(),
		sig: z.enum(["cyan", "magenta", "lime", "orange"]),
		status: z.enum(["live", "wip", "meta"]),
		tagline: z.string(),
		shipped: z.string(),
		platform: z.string(),
		prevChapter: z.string().optional(),
		nextChapter: z.string().optional(),
	}),
});

export const collections = { chapters };
