const SEO_ONLY_HOSTS = new Set([
  "nerdasservice.com",
  "www.nerdasservice.com",
  // Variants kept for safer DNS aliasing.
  "nerdasserivice.com",
  "www.nerdasserivice.com",
  "nerdasservvce.com",
  "www.nerdasservvce.com",
]);

const EDITORIAL_HOSTS = new Set([
  "odisseiadoputo.cc",
  "www.odisseiadoputo.cc",
]);

const PRIMARY_BRAND_NAME = "Nerdasservice";
const BRAND_TAGLINE_PT =
  "Reviews e guias de compra com foco em utilidade real e links de afiliado transparentes.";
const BRAND_TAGLINE_EN =
  "Buying guides and reviews focused on real utility and transparent affiliate links.";

const STATIC_PREFIXES = [
  "/css/",
  "/js/",
  "/img/",
  "/fonts/",
  "/creatives/",
  "/vendor/",
];

const STATIC_PATHS = new Set([
  "/favicon.png",
  "/robots.txt",
  "/sitemap.xml",
  "/feed.xml",
  "/CNAME",
]);

const STATIC_FILE_EXT_RE =
  /\.(?:css|js|png|jpe?g|gif|svg|webp|ico|xml|txt|json|map|woff2?|ttf|eot|otf)$/i;

function isSeoOnlyHost(hostname) {
  return SEO_ONLY_HOSTS.has((hostname || "").toLowerCase());
}

function isEditorialHost(hostname) {
  return EDITORIAL_HOSTS.has((hostname || "").toLowerCase());
}

function isStaticAsset(pathname) {
  if (STATIC_PATHS.has(pathname)) return true;
  if (STATIC_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return true;
  return STATIC_FILE_EXT_RE.test(pathname);
}

function stripSeoPrefix(pathname) {
  if (pathname === "/seo" || pathname === "/seo/") return "/";
  if (pathname.startsWith("/seo/")) return pathname.slice(4);
  return pathname;
}

function toSeoPath(pathname) {
  if (pathname === "/") return "/seo/";
  if (pathname === "/seo" || pathname === "/seo/") return "/seo/";
  if (pathname.startsWith("/seo/")) return pathname;
  return `/seo${pathname}`;
}

function isHtmlResponse(response) {
  const contentType = response.headers.get("content-type") || "";
  return contentType.includes("text/html");
}

class TextSetter {
  constructor(text) {
    this.text = text;
  }

  element(element) {
    element.setInnerContent(this.text);
  }
}

class TitleRewriter {
  element(element) {
    element.setInnerContent("Nerdasservice");
  }
}

class MetaContentRewriter {
  constructor(text) {
    this.text = text;
  }

  element(element) {
    element.setAttribute("content", this.text);
  }
}

class CanonicalRewriter {
  constructor(requestUrl) {
    this.requestUrl = requestUrl;
  }

  element(element) {
    const canonical = `${this.requestUrl.origin}${this.requestUrl.pathname}${this.requestUrl.search}`;
    element.setAttribute("href", canonical);
  }
}

class SeoHrefRewriter {
  constructor(origin) {
    this.origin = origin;
  }

  element(element) {
    const href = element.getAttribute("href");
    if (!href) return;

    if (href === "/seo" || href === "/seo/") {
      element.setAttribute("href", "/");
      return;
    }

    if (href.startsWith("/seo/")) {
      element.setAttribute("href", href.slice(4) || "/");
      return;
    }

    if (href.startsWith("https://odisseiadoputo.cc/seo/")) {
      const suffix = href.replace("https://odisseiadoputo.cc/seo", "");
      element.setAttribute("href", `${this.origin}${suffix || "/"}`);
      return;
    }

    if (href === "https://odisseiadoputo.cc/seo" || href === "https://odisseiadoputo.cc/seo/") {
      element.setAttribute("href", `${this.origin}/`);
    }
  }
}

class HeadStyleInjector {
  constructor(mode) {
    this.mode = mode;
  }

  element(element) {
    if (this.mode === "seo-only") {
      element.append(
        `<style>
          body[data-brand-host="nerdasservice"] .site-nav-list a[href="/about/"],
          body[data-brand-host="nerdasservice"] .site-nav-list a[href="/apoie/"],
          body[data-brand-host="nerdasservice"] .site-footer a[href$="/about/"],
          body[data-brand-host="nerdasservice"] .site-footer a[href$="/apoie/"] {
            display: none !important;
          }
        </style>`,
        { html: true }
      );
      return;
    }

    if (this.mode === "editorial") {
      element.append(
        `<style>
          .site-nav-list a[href="/seo/"],
          .site-nav-list a[href="/seo"],
          .site-footer a[href$="/seo/"],
          .site-footer a[href$="/seo"] {
            display: none !important;
          }
        </style>`,
        { html: true }
      );
    }
  }
}

class BodyMarker {
  constructor(value) {
    this.value = value;
  }

  element(element) {
    element.setAttribute("data-brand-host", this.value);
  }
}

function rewriteSeoOnlyHtml(upstreamResponse, url) {
  const rewriter = new HTMLRewriter()
    .on("head", new HeadStyleInjector("seo-only"))
    .on("body", new BodyMarker("nerdasservice"))
    .on("title", new TitleRewriter())
    .on(".site-brand-word", new TextSetter(PRIMARY_BRAND_NAME))
    .on(".site-footer-brand strong", new TextSetter(PRIMARY_BRAND_NAME))
    .on(".site-footer-tag .lang-pt", new TextSetter(BRAND_TAGLINE_PT))
    .on(".site-footer-tag .lang-en", new TextSetter(BRAND_TAGLINE_EN))
    .on("meta[property='og:site_name']", new MetaContentRewriter(PRIMARY_BRAND_NAME))
    .on("meta[name='author']", new MetaContentRewriter(PRIMARY_BRAND_NAME))
    .on("meta[name='description']", new MetaContentRewriter(BRAND_TAGLINE_PT))
    .on("meta[property='og:description']", new MetaContentRewriter(BRAND_TAGLINE_PT))
    .on("meta[name='twitter:description']", new MetaContentRewriter(BRAND_TAGLINE_PT))
    .on("meta[property='og:url']", new MetaContentRewriter(`${url.origin}${url.pathname}${url.search}`))
    .on("link[rel='canonical']", new CanonicalRewriter(url))
    .on("a", new SeoHrefRewriter(url.origin));

  return rewriter.transform(upstreamResponse);
}

function rewriteEditorialHtml(upstreamResponse) {
  const rewriter = new HTMLRewriter()
    .on("head", new HeadStyleInjector("editorial"))
    .on("body", new BodyMarker("odisseia"));

  return rewriter.transform(upstreamResponse);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const seoOnlyHost = isSeoOnlyHost(url.hostname);
    const editorialHost = isEditorialHost(url.hostname);

    if (!seoOnlyHost) {
      if (editorialHost && (url.pathname === "/seo" || url.pathname.startsWith("/seo/"))) {
        const target = new URL(request.url);
        target.pathname = "/";
        target.search = "";
        return Response.redirect(target.toString(), 302);
      }

      const response = await env.ASSETS.fetch(request);
      if (!editorialHost || !isHtmlResponse(response)) {
        return response;
      }

      return rewriteEditorialHtml(response);
    }

    if (url.pathname === "/seo" || url.pathname.startsWith("/seo/")) {
      const redirectUrl = new URL(request.url);
      redirectUrl.pathname = stripSeoPrefix(url.pathname);
      return Response.redirect(redirectUrl.toString(), 301);
    }

    const targetUrl = new URL(request.url);
    if (!isStaticAsset(targetUrl.pathname)) {
      targetUrl.pathname = toSeoPath(targetUrl.pathname);
    }

    const upstreamRequest = new Request(targetUrl.toString(), request);
    const upstreamResponse = await env.ASSETS.fetch(upstreamRequest);

    if (!isHtmlResponse(upstreamResponse)) {
      return upstreamResponse;
    }

    return rewriteSeoOnlyHtml(upstreamResponse, url);
  },
};
