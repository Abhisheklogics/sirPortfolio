const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills & Expertise" },
  { href: "/projects", label: "Projects" },
  { href: "/publication", label: "Patents" },
  { href: "/book", label: "Publications" },
  { href: "/AchievementsRecognitions", label: "Achievements & Recognitions" },
  { href: "/gallery", label: "Gallery" },
];

const baseUrl = "https://www.amarjeetsinghchauhan.com";

export default async function sitemap() {
  try {
    const routes = navLinks.map((link) => ({
      url: `${baseUrl}${link.href}`,
      lastModified: new Date().toISOString(),
    }));

    return routes;
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    return [];
  }
}
