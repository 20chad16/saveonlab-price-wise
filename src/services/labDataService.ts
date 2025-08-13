import { type Marker, type Panel } from "@/data/labData";

export interface LabDataResponse {
  markers: Marker[];
  panels: Panel[];
  markerCategories: Record<string, Marker[]>;
  lastUpdatedISO: string;
}

class LabDataService {
  private static instance: LabDataService;
  private cache: LabDataResponse | null = null;
  private cacheTimestamp: number = 0;
  private readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  static getInstance(): LabDataService {
    if (!LabDataService.instance) {
      LabDataService.instance = new LabDataService();
    }
    return LabDataService.instance;
  }

  async getLabData(): Promise<LabDataResponse> {
    // Check cache first
    const now = Date.now();
    if (this.cache && (now - this.cacheTimestamp) < this.CACHE_DURATION) {
      return this.cache;
    }

    try {
      // For now, fall back to static data. Later we'll replace this with API call
      const { markers, panels, markerCategories, lastUpdatedISO } = await import("@/data/labData");
      
      this.cache = {
        markers,
        panels,
        markerCategories,
        lastUpdatedISO
      };
      this.cacheTimestamp = now;
      
      return this.cache;
    } catch (error) {
      console.error('Failed to fetch lab data:', error);
      throw new Error('Unable to load lab data');
    }
  }

  // Method to fetch from remote JSON (for when you set up GitHub hosting)
  async fetchFromRemote(url: string): Promise<LabDataResponse> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Cache the remote data
      this.cache = data;
      this.cacheTimestamp = Date.now();
      
      return data;
    } catch (error) {
      console.error('Failed to fetch remote lab data:', error);
      // Fall back to static data
      return this.getLabData();
    }
  }

  clearCache(): void {
    this.cache = null;
    this.cacheTimestamp = 0;
  }
}

export const labDataService = LabDataService.getInstance();