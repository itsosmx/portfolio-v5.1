"use server"
import { IProjectProps } from '@/types';
import { request, gql } from 'graphql-request';

const endpoint = process.env.GRAPHQL_ENDPOINT as string;

export async function getProjects() {
  try {
    const query = gql`
    query Projects {
      projectsIdConnection(orderBy: developedAt_DESC) {
        edges {
          node {
            title
            github
            createdAt
            description {
              html
              text
            }
            headline
            id
            developedAt
            demo
            slug
            technologies
            thumbnail {
              url
            }
            toolset
            updatedAt
            operated
          }
        }
      }
    }
    `
    const data = await request(endpoint, query);
    //@ts-ignore
    const projects = Object.values(data?.projectsIdConnection?.edges).map(({ node }) => node);
    return projects as IProjectProps[];
  } catch (error) {
    console.error(error);
  }
}