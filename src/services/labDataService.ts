
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
      console.log('🔍 DEBUGGING: Attempting to fetch from GitHub URLs:', urls);
      console.log('🔍 GitHub config:', API_CONFIG.github);
      const [markersRes, panelsRes, categoriesRes, lastUpdatedRes] = await Promise.all([
        fetch(urls.markers),
        fetch(urls.panels),
        fetch(urls.markerCategories),
        fetch(urls.lastUpdated)
      ]);

      console.log('🔍 GitHub fetch responses:', {
        markers: markersRes.status,
        panels: panelsRes.status,
        categories: categoriesRes.status,
        lastUpdated: lastUpdatedRes.status
      });

      // Log the actual URLs that failed
      if (!markersRes.ok) console.log('❌ Markers URL failed:', urls.markers);
      if (!panelsRes.ok) console.log('❌ Panels URL failed:', urls.panels);
      if (!categoriesRes.ok) console.log('❌ Categories URL failed:', urls.markerCategories);
      if (!lastUpdatedRes.ok) console.log('❌ LastUpdated URL failed:', urls.lastUpdated);

      if (!markersRes.ok || !panelsRes.ok || !categoriesRes.ok || !lastUpdatedRes.ok) {
        console.log('❌ GITHUB FETCH FAILED. Detailed status info:');
        console.log('- Markers:', markersRes.status, markersRes.statusText, 'URL:', urls.markers);
        console.log('- Panels:', panelsRes.status, panelsRes.statusText, 'URL:', urls.panels);
        console.log('- Categories:', categoriesRes.status, categoriesRes.statusText, 'URL:', urls.markerCategories);
        console.log('- LastUpdated:', lastUpdatedRes.status, lastUpdatedRes.statusText, 'URL:', urls.lastUpdated);
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
    console.log('🚀 GET LAB DATA: Starting data fetch...');
    console.log('💾 CACHE STATUS:', {
      hasCache: !!this.cache,
      cacheAge: this.cacheTimestamp ? Date.now() - this.cacheTimestamp : 'none',
      cacheDuration: API_CONFIG.cache.duration,
      isValid: this.cache && Date.now() - this.cacheTimestamp < API_CONFIG.cache.duration
    });
    
    // Check if we have valid cached data using API_CONFIG cache duration
    if (this.cache && Date.now() - this.cacheTimestamp < API_CONFIG.cache.duration) {
      console.log('✅ USING CACHE:', this.cache.panels[0]);
      return this.cache;
    }

    try {
      // Try to fetch from external sources first
      console.log('🔄 FETCHING FROM GITHUB...');
      const response = await this.fetchFromGitHub();
      
      console.log('✅ GITHUB SUCCESS - GOT DATA:', {
        panelsCount: response.panels.length,
        firstPanel: response.panels[0]
      });
      
      this.cache = response;
      this.cacheTimestamp = Date.now();
      
      return response;
    } catch (error) {
      console.warn('❌ GITHUB SYNC FAILED - falling back to static data:', error);
      console.log('🔧 TO FIX: Ensure your JSON files are pushed to: https://github.com/20chad16/saveonlab-price-wise/tree/main/');
      
      if (API_CONFIG.fallback.enabled) {
        console.log('⚠️ USING STATIC FALLBACK DATA');
        const response = await this.fetchFallbackData();
        
        console.log('📄 STATIC DATA:', {
          panelsCount: response.panels.length,
          firstPanel: response.panels[0]
        });
        
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
    // Also clear localStorage cache if enabled
    if (API_CONFIG.cache.enableLocalStorage) {
      localStorage.removeItem(API_CONFIG.cache.localStorageKey);
    }
  }
}

export const labDataService = new LabDataService();
