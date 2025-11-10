"use client";

import { useState } from "react";
import Image from "next/image";
import { PortraitGenerator } from "../components/PortraitGenerator";

export default function Page() {
  const [generatedSrc, setGeneratedSrc] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <main style={{
      maxWidth: 960,
      margin: '0 auto',
      padding: '40px 20px'
    }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Hyperrealistic Portrait Generator</h1>
      <p style={{ color: '#4b5563', marginBottom: 24 }}>
        Ultra-detailed studio photography with cinematic lighting and editorial tone.
      </p>

      <PortraitGenerator
        onStart={() => { setIsGenerating(true); setError(null); }}
        onSuccess={(src) => { setGeneratedSrc(src); setIsGenerating(false); }}
        onError={(msg) => { setError(msg); setIsGenerating(false); }}
      />

      {isGenerating && (
        <div style={{ marginTop: 24, color: '#374151' }}>Generating portrait? this can take a moment.</div>
      )}

      {error && (
        <div style={{ marginTop: 24, color: '#b91c1c' }}>{error}</div>
      )}

      {generatedSrc && (
        <div style={{ marginTop: 24 }}>
          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={generatedSrc} alt="Generated hyperrealistic portrait" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
        </div>
      )}
    </main>
  );
}
