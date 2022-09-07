import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaClient } from '@prisma/client'
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from 'next';
let userAccount = null;

const prisma = new PrismaClient();

const bcrypt = require('bcrypt');

export default NextAuth({
  cookie: {
    secure: true,
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60
  },
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        const user = await prisma.bhakt.findFirst({
          where: {
            email: credentials.email
          }
        })
        if (user !== null && user.password_hash === credentials.password) {
          return {
            email: user.email,
            id: user.id,
            full_name: user.full_name
          };
        } else {
          console.log("Incorrect password or user not found");
          return null;
        }
      }
    })
  ],
  callbacks: {
    async signIn(user: any, account: any, profile: any) {
      console.log(`userSignin : ${user}`)
      return user.user;
    },
    async register(firstName: any, lastName: any, email: any, password: any) {
      return true
    },
    async session(session: any, token: any) {
      console.log(session)
      console.log(token)
      session.user = token.user
      session.token = token
      return session
    },
    async jwt({token, user, account, profile, isNewUser}) {
      token.id = 1;
      console.log(`userJwt : ${user}, ${token}`)
      console.log(token);
      return token;
    }
  }
})
