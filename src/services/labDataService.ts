
import { markers, panels, markerCategories, lastUpdatedISO, type Marker, type Panel, type MarkerCategory } from '@/data/labData';

export interface LabDataResponse {
  markers: Marker[];
  panels: Panel[];
  markerCategories: Record<MarkerCategory, Marker[]>;
  lastUpdatedISO: string;
}

class LabDataService {
  private cache: LabDataResponse | null = null;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  private cacheTimestamp: number = 0;

  async getLabData(): Promise<LabDataResponse> {
    // Check if we have valid cached data
    if (this.cache && Date.now() - this.cacheTimestamp < this.CACHE_DURATION) {
      return this.cache;
    }

    // For now, return static data with a simulated delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const response: LabDataResponse = {
      markers,
      panels,
      markerCategories,
      lastUpdatedISO
    };

    this.cache = response;
    this.cacheTimestamp = Date.now();
    
    return response;
  }

  clearCache(): void {
    this.cache = null;
    this.cacheTimestamp = 0;
  }
}

export const labDataService = new LabDataService();
