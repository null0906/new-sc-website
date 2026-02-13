import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'

export default function PrivacyPolicyPage() {

  return (
    <>
      <Head>
        <title>Privacy Policy — SecComply</title>
        <meta name="description" content="SecComply Privacy Policy. How we collect, use, and protect your information." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/css/variables.css" />
        <link rel="stylesheet" href="/assets/css/base.css" />
        <link rel="stylesheet" href="/assets/css/animations.css" />
        <link rel="stylesheet" href="/assets/css/components.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </Head>
      <div dangerouslySetInnerHTML={{__html: ``}} />
    </>
  )
}
