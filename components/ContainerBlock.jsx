import Head from "next/head";
import { useRouter } from "next/router";
import { Sidebar } from "./Sidebar";

// import { Navbar } from "./Navbar";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Construction Cost Calculator",
    description: `Construction Cost Calculator by Emmanuel Otieno`,
    image: "/icon.svg",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="icon" href="/icon.svg" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Emmanuel Otieno" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>

      <main>
        <Sidebar />
        <div className="lg:mx-80 w-full mx-0">{children}</div>
      </main>
    </>
  );
}
