// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//Los archivos dentro de la carpeta pages/api son mapeados a /api/*** y son tratados como Api Endpoints, al igual que los archivos dentro de pages/

import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export default async function comments(req, res) {

  const { name, email, comment, slug } = req.body;

  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug }}}) { id }
    }
  `


  const result = await graphQLClient.request(query, req.body)

  return res.status(200).send(result);
}

