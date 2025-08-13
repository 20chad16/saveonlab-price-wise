// Utility to help export current static data to JSON format for GitHub hosting
import React from 'react';
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

// Add to window for easy access in dev console
if (import.meta.env.DEV) {
  (window as any).exportLabData = exportDataForGitHub;
}

// Development helper component
export const DevDataExporter: React.FC = () => {
  if (!import.meta.env.DEV) return null;
  
  return React.createElement('div', {
    className: "fixed bottom-4 right-4 z-50"
  }, 
    React.createElement('button', {
      onClick: exportDataForGitHub,
      className: "bg-primary text-primary-foreground px-4 py-2 rounded-md shadow-lg hover:bg-primary/90 transition-colors"
    }, "Export Data for GitHub")
  );
};