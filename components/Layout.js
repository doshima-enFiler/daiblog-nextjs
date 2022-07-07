import Head from "next/head"
import Link from "next/link"

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "daiblog"

  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className="site-title">
          <Link href="/">
            <a>{siteTitle}</a>
          </Link>
        </h1>
      </header>

      <main>
        {title ? <h1 className="page-title">{title}</h1> : ``}
        <div className="page-main">
          {children}
        </div>
      </main>

      <footer>
        &copy; {siteTitle}
      </footer>
    </div>
  )
}

export default Layout