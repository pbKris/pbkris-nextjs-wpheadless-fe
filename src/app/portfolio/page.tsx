// app/portfolio/page.tsx
import { getAllProjects } from '@/services/project-service';
// Anda mungkin perlu membuat komponen ProjectCard terpisah untuk kode yang bersih
import Image from 'next/image';
import Link from 'next/link';

export default async function PortfolioPage() {
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-4xl font-bold">My Portfolio</h1>

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.databaseId}
              href={`/portfolio/${project.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-lg border shadow-sm transition-all group-hover:shadow-md">
                {project.featuredImage?.node?.sourceUrl && (
                  <div className="relative aspect-video">
                    <Image
                      src={project.featuredImage.node.sourceUrl}
                      alt={project.featuredImage.node.altText || project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm text-muted-foreground">
                    {project.podsFields?.clientName}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
