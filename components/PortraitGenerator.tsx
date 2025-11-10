"use client";

import { useCallback } from "react";

export function PortraitGenerator({
  onStart,
  onSuccess,
  onError,
}: {
  onStart: () => void;
  onSuccess: (src: string) => void;
  onError: (message: string) => void;
}) {
  const handleGenerate = useCallback(async () => {
    try {
      onStart();
      const res = await fetch("/api/generate", {
        method: "POST",
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed with ${res.status}`);
      }
      const data = await res.json();
      if (data?.imageBase64) {
        const src = `data:image/png;base64,${data.imageBase64}`;
        onSuccess(src);
      } else if (data?.imageUrl) {
        onSuccess(data.imageUrl);
      } else {
        throw new Error("No image returned by API");
      }
    } catch (err: any) {
      onError(err?.message || "Failed to generate image");
    }
  }, [onStart, onSuccess, onError]);

  return (
    <button
      onClick={handleGenerate}
      style={{
        background: '#111827',
        color: 'white',
        border: 0,
        padding: '12px 18px',
        borderRadius: 8,
        cursor: 'pointer',
        boxShadow: '0 6px 16px rgba(0,0,0,0.15)'
      }}
    >
      Generate Portrait
    </button>
  );
}
