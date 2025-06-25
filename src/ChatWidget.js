import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    const inject = (src) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = true;
      document.body.appendChild(s);
    };

    inject("https://cdn.botpress.cloud/webchat/v3.0/inject.js");
    inject("https://files.bpcontent.cloud/2025/06/25/05/20250625052221-1YAGW3BG.js");
  }, []);

  return null;
}
