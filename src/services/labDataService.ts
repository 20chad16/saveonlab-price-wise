
import { type Marker, type Panel, type MarkerCategory } from '@/data/labData';
import { buildGitHubUrl, API_CONFIG } from '@/services/apiConfig';

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
  
  // Get URLs from API config
  private getDataUrls() {
    return {
      markers: buildGitHubUrl(API_CONFIG.github.endpoints.markers),
      panels: buildGitHubUrl(API_CONFIG.github.endpoints.panels),
      markerCategories: buildGitHubUrl(API_CONFIG.github.endpoints.markerCategories),
      lastUpdated: buildGitHubUrl(API_CONFIG.github.endpoints.lastUpdated)
    };
  }

  private async fetchFromGitHub(): Promise<LabDataResponse> {
    try {
      const urls = this.getDataUrls();
      console.log('Attempting to fetch from GitHub URLs:', urls);
      const [markersRes, panelsRes, categoriesRes, lastUpdatedRes] = await Promise.all([
        fetch(urls.markers),
        fetch(urls.panels),
        fetch(urls.markerCategories),
        fetch(urls.lastUpdated)
      ]);

      console.log('GitHub fetch responses:', {
        markers: markersRes.status,
        panels: panelsRes.status,
        categories: categoriesRes.status,
        lastUpdated: lastUpdatedRes.status
      });

      if (!markersRes.ok || !panelsRes.ok || !categoriesRes.ok || !lastUpdatedRes.ok) {
        throw new Error(`Failed to fetch data from GitHub. Status codes: markers=${markersRes.status}, panels=${panelsRes.status}, categories=${categoriesRes.status}, lastUpdated=${lastUpdatedRes.status}`);
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
      
      if (API_CONFIG.fallback.enabled) {
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
