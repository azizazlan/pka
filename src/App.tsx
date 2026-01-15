import { Suspense } from 'solid-js';
import type { ParentComponent } from 'solid-js';
import { A, useLocation } from '@solidjs/router';

const App: ParentComponent = (props) => {
  return (
    <main>
      <Suspense>{props.children}</Suspense>
    </main>
  );
};

export default App;
