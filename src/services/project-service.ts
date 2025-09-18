// services/project-service.ts
import { graphqlClient } from '@/lib/graphql-client';
import { Project, ProjectSlug } from '@/lib/types'; // Impor 'Kontrak Data' kita!
import { gql } from 'graphql-request';

// Query untuk mendapatkan satu proyek berdasarkan slug
const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($id: ID!) {
    project(id: $id, idType: SLUG) {
      databaseId
      slug
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      services {
        nodes {
          name
          slug
        }
      }
      podsFields {
        clientName
        projectUrl
        testimonialText
        mdxContent
      }
    }
  }
`;

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const data = await graphqlClient.request<{ project: Project }>(
      GET_PROJECT_BY_SLUG,
      { id: slug }
    );
    return data.project;
  } catch (error) {
    console.error('Error in getProjectBySlug:', error);
    // Implementasikan error handling yang lebih baik di sini
    return null;
  }
}

// Anda bisa menambahkan fungsi lain di sini, seperti getAllProjectSlugs(), dll.

// Ganti query ini untuk sementara
const GET_ALL_PROJECTS = gql`
  query GetAllProjectsMinimal {
    projects(first: 100) {
      nodes {
        slug
        title
        services {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        podsFields {
          clientName
        }
      }
    }
  }
`;

// Query untuk mendapatkan HANYA slug dari semua proyek
const GET_ALL_PROJECT_SLUGS = gql`
  query GetAllProjectSlugs {
    projects(first: 100) {
      nodes {
        slug
      }
    }
  }
`;

export async function getAllProjects(): Promise<Project[]> {
  try {
    const data = await graphqlClient.request<{
      projects: { nodes: Project[] };
    }>(GET_ALL_PROJECTS);
    return data.projects.nodes;
  } catch (error) {
    console.error('Error in getAllProjects:', error);
    return [];
  }
}

export async function getAllProjectSlugs(): Promise<ProjectSlug[]> {
  try {
    const data = await graphqlClient.request<{
      projects: { nodes: ProjectSlug[] };
    }>(GET_ALL_PROJECT_SLUGS);
    return data.projects.nodes;
  } catch (error) {
    console.error('Error in getAllProjectSlugs:', error);
    return [];
  }
}
