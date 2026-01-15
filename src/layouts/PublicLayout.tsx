import { Component, createSignal, onMount, Show } from 'solid-js';
import { A, useNavigate, useLocation } from '@solidjs/router';

interface PublicLayoutProps {
  children: any;
}

const PublicLayout: Component<PublicLayoutProps> = (props) => {
  const navigate = useNavigate();


  return (
    <div class="min-h-screen flex flex-col pt-1">
      <main class="flex-grow">
        {props.children}
      </main>
    </div>
  );
};

export default PublicLayout; 