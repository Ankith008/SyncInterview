import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) return Response.json({ error: "Invalid" });

  await prisma.user.update({
    where: { email },
    data: { emailVerified: true },
  });

  return Response.redirect("http://localhost:3000/login");
}
