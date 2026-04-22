'use client';

import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import DottedMap from 'dotted-map';

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({ dots = [], lineColor = '#0ea5e9' }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<{
    label: string;
    x: number;
    y: number;
  } | null>(null);

  const map = new DottedMap({ height: 100, grid: 'diagonal' });

  const svgMap = map.getSVG({
    radius: 0.3,
    color: '#00000040',
    shape: 'circle',
    backgroundColor: 'white',
  });

  const projectPoint = (lat: number, lng: number) => {
    // dotted-map verwendet Mercator-Projektion intern
    // Interne Konstanten der Library (height: 100, grid: "diagonal"):
    const X_MIN = -18701674.453269962;
    const Y_MAX = 11361819.887676764;
    const X_RANGE = 37403348.906539924;
    const Y_RANGE = 18884783.128941886;
    const MAP_WIDTH = 198;
    const MAP_HEIGHT = 100;

    // Web Mercator (EPSG:3857)
    const R = 6378137;
    const mx = (R * (lng * Math.PI)) / 180;
    const my = R * Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));

    // Auf SVG-Koordinaten mappen (198x100), dann auf 800x400 skalieren
    const x = ((mx - X_MIN) / X_RANGE) * MAP_WIDTH * (800 / MAP_WIDTH);
    const y = ((Y_MAX - my) / Y_RANGE) * MAP_HEIGHT * (400 / MAP_HEIGHT);

    return { x, y };
  };
  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const handlePointHover = (
    e: React.MouseEvent<SVGCircleElement>,
    label: string,
    x: number,
    y: number
  ) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const scaleX = rect.width / 800;
    const scaleY = rect.height / 400;
    setTooltip({ label, x: x * scaleX, y: y * scaleY });
  };

  return (
    <div className="w-full aspect-[2/1] dark:bg-black bg-white rounded-lg relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 * i, ease: 'easeOut' }}
              />
            </g>
          );
        })}

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            {[
              { pt: dot.start, key: 'start' },
              { pt: dot.end, key: 'end' },
            ].map(({ pt, key }) => {
              const pos = projectPoint(pt.lat, pt.lng);
              return (
                <g key={`${key}-${i}`}>
                  <circle cx={pos.x} cy={pos.y} r="3" fill={lineColor} opacity="0.5">
                    <animate
                      attributeName="r"
                      from="3"
                      to="10"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      from="0.5"
                      to="0"
                      dur="1.5s"
                      begin="0s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="3"
                    fill={lineColor}
                    className="cursor-pointer"
                    onMouseEnter={(e) => pt.label && handlePointHover(e, pt.label, pos.x, pos.y)}
                    onMouseLeave={() => setTooltip(null)}
                  />
                </g>
              );
            })}
          </g>
        ))}
      </svg>

      {tooltip && (
        <motion.div
          className="absolute z-10 pointer-events-none bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg px-2.5 py-1 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: 'translate(-50%, -160%)',
          }}
        >
          {tooltip.label}
        </motion.div>
      )}
    </div>
  );
}
