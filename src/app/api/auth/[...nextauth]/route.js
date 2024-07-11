import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import User from "../../../../../models/user";
import dbConnect from "../../../../../lib/mongodb";
import bcrypt from "bcrypt";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log("Tentativa de autorização para:", credentials.email);
        
        try {
          await dbConnect();
          console.log("Conexão com o banco de dados estabelecida");
          
          const user = await User.findOne({ email: credentials.email });
          console.log("Usuário encontrado:", user ? "Sim" : "Não");

          if (user) {
            const isValid = await bcrypt.compare(credentials.password, user.password);
            console.log("Senha válida:", isValid);
            if (isValid) {
              console.log("Autorização bem-sucedida");
              return { id: user._id, email: user.email, name: user.name };
            }
          }
          console.log("Autorização falhou");
          return null;
        } catch (error) {
          console.error("Erro durante a autorização:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/loginform",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };