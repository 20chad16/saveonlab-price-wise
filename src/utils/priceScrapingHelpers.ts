// Helper utilities for price scraping and GitHub updates

export interface PriceChangeResult {
  id: string;
  currentPrice: number;
  scrapedPrice: number;
  priceChanged: boolean;
  provider: string;
  name: string;
  url: string;
  timestamp: string;
  error?: string;
}

export interface GitHubFileResponse {
  sha: string;
  content: string;
}

/**
 * Extract price from Quest Diagnostics HTML
 */
export const extractQuestPrice = (html: string): number | null => {
  // Multiple patterns for Quest Diagnostics
  const patterns = [
    /\$(\d+(?:\.\d{2})?)/g,
    /price["\s:]+\$?(\d+(?:\.\d{2})?)/gi,
    /"price"\s*:\s*"?\$?(\d+(?:\.\d{2})?)"?/gi,
    /data-price["\s=]*"?(\d+(?:\.\d{2})?)"?/gi
  ];

  for (const pattern of patterns) {
    const matches = html.match(pattern);
    if (matches && matches.length > 0) {
      const priceStr = matches[0].replace(/[^\d.]/g, '');
      const price = parseFloat(priceStr);
      if (!isNaN(price) && price > 0) {
        return price;
      }
    }
  }

  return null;
};

/**
 * Extract price from LabCorp HTML
 */
export const extractLabCorpPrice = (html: string): number | null => {
  // Multiple patterns for LabCorp
  const patterns = [
    /"price"\s*:\s*(\d+(?:\.\d{2})?)/gi,
    /\$(\d+(?:\.\d{2})?)/g,
    /price-amount["\s>]*\$?(\d+(?:\.\d{2})?)/gi,
    /test-price["\s>]*\$?(\d+(?:\.\d{2})?)/gi
  ];

  for (const pattern of patterns) {
    const matches = html.match(pattern);
    if (matches && matches.length > 0) {
      const priceStr = matches[0].replace(/[^\d.]/g, '');
      const price = parseFloat(priceStr);
      if (!isNaN(price) && price > 0) {
        return price;
      }
    }
  }

  return null;
};

/**
 * Create updated panels.json with new prices
 */
export const updatePanelsWithNewPrices = (
  originalPanels: any[],
  priceChanges: PriceChangeResult[]
): any[] => {
  const updatedPanels = [...originalPanels];
  
  priceChanges.forEach(change => {
    if (change.priceChanged) {
      const panelIndex = updatedPanels.findIndex(panel => panel.id === change.id);
      if (panelIndex !== -1) {
        updatedPanels[panelIndex] = {
          ...updatedPanels[panelIndex],
          price: change.scrapedPrice,
          lastPriceUpdate: change.timestamp
        };
      }
    }
  });

  return updatedPanels;
};

/**
 * Create price change summary for notifications
 */
export const createPriceChangeSummary = (
  priceChanges: PriceChangeResult[]
): string => {
  const changedPrices = priceChanges.filter(change => change.priceChanged);
  
  if (changedPrices.length === 0) {
    return "No price changes detected.";
  }

  let summary = `🔄 ${changedPrices.length} price change(s) detected:\n\n`;
  
  changedPrices.forEach(change => {
    const direction = change.scrapedPrice > change.currentPrice ? "📈" : "📉";
    const difference = Math.abs(change.scrapedPrice - change.currentPrice);
    const percentChange = ((difference / change.currentPrice) * 100).toFixed(1);
    
    summary += `${direction} ${change.name} (${change.provider})\n`;
    summary += `   $${change.currentPrice} → $${change.scrapedPrice} (${percentChange}%)\n\n`;
  });

  return summary;
};

/**
 * Validate price extraction results
 */
export const validatePriceResult = (
  originalPrice: number,
  scrapedPrice: number,
  maxPercentChange: number = 50
): boolean => {
  if (scrapedPrice <= 0) return false;
  
  const percentChange = Math.abs((scrapedPrice - originalPrice) / originalPrice) * 100;
  
  // Flag suspicious price changes (more than maxPercentChange%)
  return percentChange <= maxPercentChange;
};

/**
 * GitHub API helpers for n8n workflow
 */
export const githubApiHelpers = {
  /**
   * Encode content for GitHub API
   */
  encodeContent: (content: string): string => {
    return btoa(unescape(encodeURIComponent(content)));
  },

  /**
   * Create commit message with timestamp
   */
  createCommitMessage: (type: 'price-update' | 'timestamp-update'): string => {
    const timestamp = new Date().toISOString();
    const messages = {
      'price-update': `🔄 Automated price update - ${timestamp}`,
      'timestamp-update': `⏰ Update last modified timestamp - ${timestamp}`
    };
    return messages[type];
  },

  /**
   * Create last-updated.json content
   */
  createLastUpdatedContent: (): string => {
    return JSON.stringify({
      lastUpdatedISO: new Date().toISOString()
    }, null, 2);
  }
};

/**
 * N8N workflow configuration templates
 */
export const n8nWorkflowTemplates = {
  questPriceExtraction: `
// Quest Diagnostics price extraction for n8n Code node
const html = $input.first().binary.data.toString();
const currentPanel = $input.first().json;

const extractedPrice = extractQuestPrice(html);

if (extractedPrice !== null) {
  const priceChanged = Math.abs(extractedPrice - currentPanel.price) > 0.01;
  
  return [{
    json: {
      id: currentPanel.id,
      currentPrice: currentPanel.price,
      scrapedPrice: extractedPrice,
      priceChanged,
      provider: currentPanel.provider,
      name: currentPanel.name,
      url: currentPanel.url,
      timestamp: new Date().toISOString(),
      valid: validatePriceResult(currentPanel.price, extractedPrice)
    }
  }];
} else {
  return [{
    json: {
      id: currentPanel.id,
      currentPrice: currentPanel.price,
      scrapedPrice: currentPanel.price,
      priceChanged: false,
      provider: currentPanel.provider,
      name: currentPanel.name,
      url: currentPanel.url,
      timestamp: new Date().toISOString(),
      error: "Price not found in HTML"
    }
  }];
}
  `,

  labcorpPriceExtraction: `
// LabCorp price extraction for n8n Code node
const html = $input.first().binary.data.toString();
const currentPanel = $input.first().json;

const extractedPrice = extractLabCorpPrice(html);

if (extractedPrice !== null) {
  const priceChanged = Math.abs(extractedPrice - currentPanel.price) > 0.01;
  
  return [{
    json: {
      id: currentPanel.id,
      currentPrice: currentPanel.price,
      scrapedPrice: extractedPrice,
      priceChanged,
      provider: currentPanel.provider,
      name: currentPanel.name,
      url: currentPanel.url,
      timestamp: new Date().toISOString(),
      valid: validatePriceResult(currentPanel.price, extractedPrice)
    }
  }];
} else {
  return [{
    json: {
      id: currentPanel.id,
      currentPrice: currentPanel.price,
      scrapedPrice: currentPanel.price,
      priceChanged: false,
      provider: currentPanel.provider,
      name: currentPanel.name,
      url: currentPanel.url,
      timestamp: new Date().toISOString(),
      error: "Price not found in HTML"
    }
  }];
}
  `
};