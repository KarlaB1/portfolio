export const categories = ['professional', 'academic', 'personal', 'experimental'] as const;
export type Category = (typeof categories)[number];

export const categoryLabels: Record<Category, string> = {
  professional: 'Profesional',
  academic: 'Académico',
  personal: 'Personal',
  experimental: 'Experimental',
};

export const media = ['photography', 'video', 'comic', 'illustration', 'multimedia'] as const;
export type Medium = (typeof media)[number];

export const mediumLabels: Record<Medium, string> = {
  photography: 'Fotografía',
  video: 'Video',
  comic: 'Cómic',
  illustration: 'Ilustración',
  multimedia: 'Multimedia',
};
