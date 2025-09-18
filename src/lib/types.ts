export interface Service {
  name: string;
  slug: string;
}

export interface PodsFields {
  clientName: string;
  projectUrl?: string;
  testimonialText?: string;
  mdxContent?: string;
}

export interface Project {
  databaseId: number;
  slug: string;
  title: string;
  content?: string;
  featuredImage?: {
    node: {
      sourceUrl?: string;
      altText?: string;
    };
  };
  services?: {
    nodes: Service[];
  };
  podsFields?: PodsFields;
}

export interface ProjectSlug {
  slug: string;
}
