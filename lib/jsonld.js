/**
 * SecComply — lib/jsonld.js
 *
 * Security fix C-09: Safe JSON-LD structured data helpers for blog pages.
 *
 * Problem: Using template literals to build JSON-LD script content is dangerous.
 * If a blog title or FAQ contains </script><script>alert(1)</script>, it breaks
 * out of the JSON context and executes as live JavaScript.
 *
 * Solution: Always use JSON.stringify() — it escapes all special characters
 * including <, >, &, ", and ' — preventing any injection.
 *
 * Usage in [slug].js:
 *   import { buildArticleSchema, buildFaqSchema, buildBreadcrumbSchema, JsonLd } from '../../lib/jsonld';
 *
 *   // In your component JSX:
 *   <JsonLd schema={buildArticleSchema({ title, description, author, datePublished, dateModified, slug })} />
 *   <JsonLd schema={buildFaqSchema(faqItems)} />
 *   <JsonLd schema={buildBreadcrumbSchema(slug, title)} />
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://seccomply.net';

// ── Article Schema ────────────────────────────────────────────────────────────
export function buildArticleSchema({ title, description, author, datePublished, dateModified, slug }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author || 'SecComply Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SecComply',
      url: SITE_URL,
    },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    url: `${SITE_URL}/resources/blog/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/resources/blog/${slug}`,
    },
  };
}

// ── FAQ Schema ────────────────────────────────────────────────────────────────
// faqItems: [{ question: string, answer: string }]
export function buildFaqSchema(faqItems = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

// ── Breadcrumb Schema ─────────────────────────────────────────────────────────
export function buildBreadcrumbSchema(slug, title) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',      item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE_URL}/resources` },
      { '@type': 'ListItem', position: 3, name: 'Blog',      item: `${SITE_URL}/resources/blog` },
      { '@type': 'ListItem', position: 4, name: title,       item: `${SITE_URL}/resources/blog/${slug}` },
    ],
  };
}

// ── @graph combined schema ────────────────────────────────────────────────────
export function buildGraphSchema(...schemas) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}

// ── Safe JsonLd component ─────────────────────────────────────────────────────
// SAFE: dangerouslySetInnerHTML is OK here because JSON.stringify escapes
// ALL special characters — angle brackets, quotes, slashes are all encoded.
// This is the ONLY acceptable way to inject JSON-LD into a <script> tag in React.
export function JsonLd({ schema }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
