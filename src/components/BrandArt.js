import React, { useId } from 'react';
import './BrandArt.css';

/* Original inline SVG artwork — no external image files needed. */

export function LogoMark({ size = 28 }) {
  const uid = useId().replace(/:/g, '');
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id={`lm-grad-${uid}`} x1="2" y1="2" x2="46" y2="46">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#bcd6ff" />
          <stop offset="100%" stopColor="#1a6fff" />
        </linearGradient>
      </defs>
      {/* outer pipe-ring */}
      <circle cx="24" cy="24" r="20.5" stroke={`url(#lm-grad-${uid})`} strokeWidth="3.4" />
      {/* inner pipe-ring (bore) */}
      <circle cx="24" cy="24" r="14" stroke={`url(#lm-grad-${uid})`} strokeWidth="1.3" opacity="0.5" />
      {/* the "G" stroke, built from an open ring + bar */}
      <path
        d="M31 17.8a8.4 8.4 0 1 0 1.6 8.7H26.6"
        stroke={`url(#lm-grad-${uid})`}
        strokeWidth="3.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function SSPipeArt({ variant = 'hero' }) {
  const uid = useId().replace(/:/g, '');
  const size = variant === 'icon' ? 32 : 220;

  const Pipe = ({ cx, cy, r, gid }) => (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={`url(#${gid})`} stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <circle cx={cx} cy={cy} r={r * 0.58} fill="#03080f" />
      <circle cx={cx} cy={cy} r={r * 0.58} fill="none" stroke="rgba(77,159,255,0.45)" strokeWidth={Math.max(1, r * 0.05)} />
      <path
        d={`M ${cx - r * 0.62} ${cy - r * 0.55} A ${r * 0.9} ${r * 0.9} 0 0 1 ${cx + r * 0.1} ${cy - r * 0.88}`}
        stroke="rgba(255,255,255,0.55)"
        strokeWidth={Math.max(1, r * 0.09)}
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );

  return (
    <svg
      width={size}
      height={variant === 'icon' ? 32 : 190}
      viewBox="0 0 200 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id={`pipe-grad-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8f1ff" />
          <stop offset="45%" stopColor="#8aa8cc" />
          <stop offset="100%" stopColor="#1a4fa0" />
        </linearGradient>
        <linearGradient id={`pipe-grad-light-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#c8d8f0" />
          <stop offset="100%" stopColor="#4d9fff" />
        </linearGradient>
      </defs>

      {/* soft glow backdrop (skipped for tiny icon variant) */}
      {variant !== 'icon' && (
        <ellipse cx="100" cy="140" rx="95" ry="18" fill="rgba(26,111,255,0.18)" />
      )}

      {/* bottom row */}
      <Pipe cx={44} cy={132} r={26} gid={`pipe-grad-${uid}`} />
      <Pipe cx={100} cy={132} r={26} gid={`pipe-grad-light-${uid}`} />
      <Pipe cx={156} cy={132} r={26} gid={`pipe-grad-${uid}`} />

      {/* middle row */}
      <Pipe cx={72} cy={86} r={24} gid={`pipe-grad-light-${uid}`} />
      <Pipe cx={128} cy={86} r={24} gid={`pipe-grad-${uid}`} />

      {/* top pipe */}
      <Pipe cx={100} cy={42} r={22} gid={`pipe-grad-light-${uid}`} />
    </svg>
  );
}
