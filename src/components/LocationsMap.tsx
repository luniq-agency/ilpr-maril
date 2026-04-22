import WorldMap from '@/src/components/ui/world-map';

const locations = [
  {
    start: {
      lat: 37.38496,
      lng: 27.25643,
      label: '🇹🇷 Didim',
    },
    end: { lat: 43.675819, lng: 7.289429, label: ' 🇫🇷 Nizza' },
  },
  {
    start: {
      lat: 41.015137,
      lng: 28.97953,
      label: '🇹🇷 Istanbul',
    },
    end: {
      lat: 25.7617,
      lng: -80.1918,
      label: '🇺🇸 Miami',
    },
  },
];
export default function LocationsMap() {
  return <WorldMap dots={locations} lineColor="#D1994A" />;
}
