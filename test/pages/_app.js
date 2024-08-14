import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      const validRoutes = ['/skills', '/projects', '/experience', '/education', '/about', '/'];
      if (!validRoutes.some(route => url.startsWith(route))) {
        console.log("hi")
        router.push('/404');
      }

    };

    router.events.on('routeChangeStart', handleRouteChange);


    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;