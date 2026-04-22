import { TabView, TabPanel } from 'primereact/tabview';
import WorldMap from './ui/world-map';

export function TabFields() {
  return (
    <TabView>
      <TabPanel>
        <WorldMap
          dots={[
            {
              start: {
                lat: 37.38496,
                lng: 27.25643,
              },
              end: { lat: 43.675819, lng: 7.289429 },
            },
          ]}
        />
      </TabPanel>
    </TabView>
  );
}
