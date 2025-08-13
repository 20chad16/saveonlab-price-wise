// API Configuration for external data sources
export const API_CONFIG = {
  // GitHub configuration
  github: {
    enabled: true,
    baseUrl: 'https://raw.githubusercontent.com',
    // TODO: Update these with your actual repository details
    owner: 'your-username', // Replace with your GitHub username
    repo: 'lab-data', // Replace with your repository name
    branch: 'main',
    endpoints: {
      markers: '/markers.json',
      panels: '/panels.json',
      markerCategories: '/marker-categories.json',
      lastUpdated: '/last-updated.json'
    }
  },
  
  // Supabase Edge Function configuration (alternative)
  supabase: {
    enabled: false,
    functionName: 'get-lab-data',
    url: `${import.meta.env.VITE_SUPABASE_URL}/functions/v1`
  },
  
  // Custom API configuration
  custom: {
    enabled: false,
    baseUrl: 'https://your-api.com/api/v1'
  },
  
  // Cache settings
  cache: {
    duration: 5 * 60 * 1000, // 5 minutes
    enableLocalStorage: true,
    localStorageKey: 'lab_data_cache'
  },
  
  // Fallback settings
  fallback: {
    enabled: true,
    useStaticData: true
  }
};

// Helper function to build GitHub URLs
export const buildGitHubUrl = (endpoint: string): string => {
  const { baseUrl, owner, repo, branch } = API_CONFIG.github;
  return `${baseUrl}/${owner}/${repo}/${branch}${endpoint}`;
};

// Helper function to check if external APIs are configured
export const isExternalApiConfigured = (): boolean => {
  return API_CONFIG.github.enabled && 
         API_CONFIG.github.owner !== 'your-username';
};