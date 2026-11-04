import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function AppPage(): ReactNode {
  const appUrl = useBaseUrl('/app-static/index.html');

  return (
    <Layout
      title="Hello world app"
      description="Published React + TypeScript sample application">
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <iframe
            src={appUrl}
            title="Hello world React app"
            style={{
              width: '100%',
              minHeight: '480px',
              border: '1px solid var(--ifm-color-emphasis-200)',
              borderRadius: '16px',
              background: '#fff',
            }}
          />
        </div>
      </main>
    </Layout>
  );
}
