import { useState, useCallback } from "react";

export const useCopyClipboard = (resetInterval = 1000) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = useCallback(
    async (text: string, key: string): Promise<boolean> => {
      let isSuccess = false;

      // 1. 최신 Clipboard API 시도 (HTTPS 환경)
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(text);
          isSuccess = true;
        } catch (err) {
          console.warn("Clipboard API 실패, fallback 실행", err);
        }
      }

      // 2. 모바일/HTTP 환경 fallback (textarea 활용)
      if (!isSuccess) {
        try {
          const textArea = document.createElement("textarea");
          textArea.value = text;
          textArea.style.position = "fixed";
          textArea.style.left = "-9999px";
          textArea.style.top = "0";

          // 모바일 Safari 줌 방지 및 포커스 처리
          textArea.setAttribute("readonly", "");
          document.body.appendChild(textArea);

          // iOS 선택 지원
          if (navigator.userAgent.match(/ipad|iphone/i)) {
            const range = document.createRange();
            range.selectNodeContents(textArea);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);
            textArea.setSelectionRange(0, 999999);
          } else {
            textArea.select();
          }

          isSuccess = document.execCommand("copy");
          document.body.removeChild(textArea);
        } catch (err) {
          console.error("복사 실패", err);
          isSuccess = false;
        }
      }

      if (isSuccess) {
        setCopiedKey(key);
        setTimeout(() => {
          setCopiedKey(null);
        }, resetInterval);
      }

      return isSuccess;
    },
    [resetInterval],
  );

  return { copiedKey, copyToClipboard };
};
