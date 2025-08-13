// Utility to help export current static data to JSON format for GitHub hosting
import { markers, panels, markerCategories, lastUpdatedISO } from '@/data/labData';

export const exportDataForGitHub = () => {
  const dataFiles = {
    'markers.json': JSON.stringify(markers, null, 2),
    'panels.json': JSON.stringify(panels, null, 2),
    'marker-categories.json': JSON.stringify(markerCategories, null, 2),
    'last-updated.json': JSON.stringify({ lastUpdatedISO }, null, 2)
  };

  // Download files for manual upload to GitHub
  Object.entries(dataFiles).forEach(([filename, content]) => {
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  console.log('Data files exported successfully!');
  console.log('Upload these files to your GitHub repository to enable dynamic data loading.');
};

// Development helper - add this to a button in dev mode
export const DevDataExporter = () => {
  if (import.meta.env.DEV) {
    return null; // Remove JSX for now, can be added to a component when needed
  }
  return null;
};