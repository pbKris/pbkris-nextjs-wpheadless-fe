// app/portfolio/[slug]/page.tsx
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from '@/services/project-service';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { Callout } from '@/components/myCustomComponents/callout';

// Impor komponen kustom yang ingin Anda gunakan di dalam MDX
// Contoh: import { Callout } from '@/components/ui/callout';
// Contoh: import { Chart } from '@/components/ui/chart';

type PageProps = {
  params: {
    slug: string;
  };
};

// Daftarkan komponen kustom Anda agar bisa ditemukan oleh MDXRemote
const components = {
  Callout,
  // Chart,
  // Anda bisa menimpa elemen HTML default juga, misal:
  // h2: (props) => <h2 className="text-2xl font-bold text-green-500" {...props} />,
};

export default async function ProjectPage({ params }: PageProps) {
  const project = await getProjectBySlug(params.slug);

  // Jika proyek tidak ditemukan, tampilkan halaman 404
  if (!project) {
    notFound();
  }

  const mdxSource = project.podsFields?.mdxContent;

  return (
    <article className="prose lg:prose-xl mx-auto p-8">
      {/* Render data standar */}
      <h1>{project.title}</h1>
      <p className="text-muted-foreground">
        Client: {project.podsFields?.clientName}
      </p>

      <hr />

      {/* Di sinilah keajaiban terjadi! */}
      {mdxSource ? (
        <MDXRemote source={mdxSource} components={components} />
      ) : (
        // Tampilkan editor utama jika mdxContent kosong
        <div dangerouslySetInnerHTML={{ __html: project.content || '' }} />
      )}
    </article>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((project) => ({
    slug: project.slug,
  }));
}
