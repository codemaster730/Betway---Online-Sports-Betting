import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/main.scss";
import Layout from '@/components/Layout';
import RouteGuard from '@/components/RouteGuard'
import { useRouter } from 'next/router';

const urls_with_no_layout = [
  "/login",
  "/register"
]

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPath, setIsPath] = useState(false);
  const router = useRouter();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    setIsLoading(false);
  }, []);

  if (urls_with_no_layout.findIndex(url => url === router.asPath) > -1)
    return (
      <ThemeProvider enableSystem={false}>
        <RouteGuard>
          <Component {...pageProps} />
        </RouteGuard>
      </ThemeProvider>
    )

  return (
    <ThemeProvider enableSystem={false}>
      <RouteGuard>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RouteGuard>
    </ThemeProvider>
  )
}
