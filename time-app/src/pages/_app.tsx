import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
