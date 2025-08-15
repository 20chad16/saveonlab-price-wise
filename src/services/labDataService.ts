
import { type Marker, type Panel, type MarkerCategory } from '@/data/labData';

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
  
  // Configuration for external data sources
  private readonly DATA_SOURCES = {
    // GitHub raw JSON endpoints (replace with your actual repo URLs)
    github: {
      markers: 'https://github.com/20chad16/saveonlab-price-wise/blob/main/markers.json',
      panels: 'https://github.com/20chad16/saveonlab-price-wise/blob/main/panels.json',
      markerCategories: 'https://github.com/20chad16/saveonlab-price-wise/blob/main/marker-categories.json',
      lastUpdated: 'https://github.com/20chad16/saveonlab-price-wise/blob/main/last-updated.json'
    },
    // Fallback to static data
    fallback: true
  };

  private async fetchFromGitHub(): Promise<LabDataResponse> {
    try {
      const [markersRes, panelsRes, categoriesRes, lastUpdatedRes] = await Promise.all([
        fetch(this.DATA_SOURCES.github.markers),
        fetch(this.DATA_SOURCES.github.panels),
        fetch(this.DATA_SOURCES.github.markerCategories),
        fetch(this.DATA_SOURCES.github.lastUpdated)
      ]);

      if (!markersRes.ok || !panelsRes.ok || !categoriesRes.ok || !lastUpdatedRes.ok) {
        throw new Error('Failed to fetch data from GitHub');
      }

      const [markers, panels, markerCategories, lastUpdatedData] = await Promise.all([
        markersRes.json(),
        panelsRes.json(),
        categoriesRes.json(),
        lastUpdatedRes.json()
      ]);

      return {
        markers,
        panels,
        markerCategories,
        lastUpdatedISO: lastUpdatedData.lastUpdatedISO
      };
    } catch (error) {
      console.error('Error fetching from GitHub:', error);
      throw error;
    }
  }

  private async fetchFallbackData(): Promise<LabDataResponse> {
    // Dynamic import of static data as fallback
    const { markers, panels, markerCategories, lastUpdatedISO } = await import('@/data/labData');
    return {
      markers,
      panels,
      markerCategories,
      lastUpdatedISO
    };
  }

  async getLabData(): Promise<LabDataResponse> {
    // Check if we have valid cached data
    if (this.cache && Date.now() - this.cacheTimestamp < this.CACHE_DURATION) {
      return this.cache;
    }

    try {
      // Try to fetch from external sources first
      const response = await this.fetchFromGitHub();
      
      this.cache = response;
      this.cacheTimestamp = Date.now();
      
      return response;
    } catch (error) {
      console.warn('Failed to fetch from external sources, falling back to static data:', error);
      
      if (this.DATA_SOURCES.fallback) {
        const response = await this.fetchFallbackData();
        
        this.cache = response;
        this.cacheTimestamp = Date.now();
        
        return response;
      }
      
      throw error;
    }
  }

  clearCache(): void {
    this.cache = null;
    this.cacheTimestamp = 0;
  }
}

export const labDataService = new LabDataService();
