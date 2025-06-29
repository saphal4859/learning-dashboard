import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    const injectSequentially = () => {
      const loader = document.createElement('script');
      loader.src = "https://cdn.botpress.cloud/webchat/v3.0/inject.js";
      loader.async = true;

      loader.onload = () => {
        // Inject your Botpress instance-specific JS only after inject.js is ready
        const configScript = document.createElement('script');
        configScript.src = "https://files.bpcontent.cloud/2025/06/25/05/20250625052221-1YAGW3BG.js";
        configScript.async = true;
        document.body.appendChild(configScript);
      };

      document.body.appendChild(loader);
    };

    injectSequentially();
  }, []);

  return null;
}
