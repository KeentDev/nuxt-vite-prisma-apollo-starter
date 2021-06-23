import { PrismaClient } from "@prisma/client"
import { ApolloServer, gql } from 'apollo-server'
import * as dotenv from 'dotenv'
const prisma = new PrismaClient();

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    accounts: [Account]
  }
  
  type Account {
    id: Int
    username: String
    password: String
    emailAddress: String
    """
    - -1: Archived
    - 0: Inactive
    - 1: Active
    """
    status: Int
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
    accounts: () => {
      return prisma.account.findMany({})
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);

  dotenv.config();
});