declare global {
  interface Window {
    H: {
      service: {
        Platform: new (options: { apikey: string }) => any;
      };
      Map: new (element: HTMLElement, layer: any, options: any) => any;
      mapevents: {
        Behavior: new (events: any) => void;
        MapEvents: new (map: any) => any;
      };
      ui: {
        UI: {
          createDefault: (map: any, layers: any) => void;
        };
      };
      geo: {
        LineString: {
          fromFlexiblePolyline: (polyline: string) => any;
        };
      };
      map: {
        Marker: new (coords: { lat: number; lng: number }) => any;
        Polyline: new (lineString: any, options: { style: { strokeColor: string; lineWidth: number } }) => any;
      };
    };
  }
}

export interface DirectionsResult {
  distance: string;
  duration: string;
  steps: Array<{
    instruction: string;
    distance: number;
  }>;
}

export interface GeocodingResult {
  items: Array<{
    position: {
      lat: number;
      lng: number;
    };
  }>;
}

export interface RouteResult {
  routes: Array<{
    sections: Array<{
      polyline: string;
      summary: {
        length: number;
        duration: number;
      };
      actions: Array<{
        instruction: string;
        length: number;
      }>;
    }>;
  }>;
} 