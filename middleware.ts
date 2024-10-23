import { authMiddleware } from "@clerk/nextjs/server";

// This configuration allows the /api/webhook and /api/uploadthing routes to be publicly accessible
export default authMiddleware({
  publicRoutes: ["/api/webhook", "/api/uploadthing"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
