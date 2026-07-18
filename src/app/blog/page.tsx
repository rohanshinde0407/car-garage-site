import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BLOG_POSTS, FEATURED_POSTS } from "@/lib/blog";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CtaSection } from "@/components/ui/CtaSection";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Car care tips, maintenance guides and expert advice from the Shivrudra Cars team in Pune.",
  path: "/blog",
});

export default function BlogPage() {
  const otherPosts = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <>
      {/* ── Hero ── */}
      <Section>
        <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />
        <div data-reveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            The <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="mt-6 text-lg text-ink/60 max-w-2xl">
            Expert tips, maintenance guides and insights to keep your car at its best.
          </p>
        </div>
      </Section>

      {/* ── Featured Posts ── */}
      <Section className="bg-cream">
        <SectionHeading title="Featured Articles" />
        <div className="mt-12 grid gap-6 md:grid-cols-3" data-reveal-children>
          {FEATURED_POSTS.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-ink/8 bg-white overflow-hidden card-hover hover:shadow-soft"
            >
              <div className="h-40 bg-gradient-to-br from-gold/10 to-ink/5" />
              <div className="p-6">
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                  {post.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-ink/40">
                  <span>{post.readTime} read</span>
                  <span>·</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── All Posts ── */}
      <Section>
        <SectionHeading title="More Articles" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-reveal-children>
          {otherPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border border-ink/8 bg-white p-6 card-hover hover:border-gold/30 hover:shadow-soft"
            >
              <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                {post.category}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-ink/40">
                <span>{post.readTime} read</span>
                <span>·</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── CTA ── */}
      <CtaSection
        title="Need Expert Car Care?"
        subtitle="Book a service or ask us anything — we're here to help."
      />
    </>
  );
}
