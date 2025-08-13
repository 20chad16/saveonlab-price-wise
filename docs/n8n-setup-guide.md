# N8N Price Scraping Workflow Setup

## Overview
This guide helps you set up an n8n workflow to automatically scrape lab panel prices daily and update your GitHub repository.

## Prerequisites
- n8n instance (cloud or self-hosted)
- GitHub personal access token with repository write permissions
- Your GitHub repository URL

## Workflow Structure

### 1. Schedule Trigger
- **Node**: Schedule Trigger
- **Settings**: 
  - Trigger Times: `0 6 * * *` (daily at 6 AM)
  - Timezone: Your local timezone

### 2. Load Current Data
- **Node**: HTTP Request
- **Settings**:
  - Method: GET
  - URL: `https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/panels.json`
  - Response Format: JSON

### 3. Process Each Panel
- **Node**: Split In Batches
- **Settings**:
  - Batch Size: 1 (process one panel at a time to avoid rate limiting)

### 4. Scrape Panel Price
- **Node**: HTTP Request
- **Settings**:
  - Method: GET
  - URL: `{{ $json.url }}` (from panels.json)
  - Response Format: Text
  - Headers:
    - User-Agent: `Mozilla/5.0 (compatible; PriceBot/1.0)`

### 5. Extract Price Information
- **Node**: Code
- **JavaScript Code**:

```javascript
// Quest Diagnostics price extraction
if ($input.first().json.provider === "Quest Diagnostics") {
  const html = $input.first().binary.data.toString();
  
  // Quest price patterns
  const priceRegex = /\$(\d+(?:\.\d{2})?)/g;
  const matches = html.match(priceRegex);
  
  if (matches && matches.length > 0) {
    // Take the first price found (usually the main panel price)
    const newPrice = parseFloat(matches[0].replace('$', ''));
    
    return [{
      json: {
        id: $input.first().json.id,
        currentPrice: $input.first().json.price,
        scrapedPrice: newPrice,
        priceChanged: Math.abs(newPrice - $input.first().json.price) > 0.01,
        provider: $input.first().json.provider,
        name: $input.first().json.name,
        url: $input.first().json.url,
        timestamp: new Date().toISOString()
      }
    }];
  }
}

// LabCorp price extraction
if ($input.first().json.provider === "LabCorp") {
  const html = $input.first().binary.data.toString();
  
  // LabCorp price patterns (adjust based on their HTML structure)
  const priceRegex = /price[\"\s:]+\$?(\d+(?:\.\d{2})?)/gi;
  const matches = html.match(priceRegex);
  
  if (matches && matches.length > 0) {
    const newPrice = parseFloat(matches[0].replace(/[^\\d.]/g, ''));
    
    return [{
      json: {
        id: $input.first().json.id,
        currentPrice: $input.first().json.price,
        scrapedPrice: newPrice,
        priceChanged: Math.abs(newPrice - $input.first().json.price) > 0.01,
        provider: $input.first().json.provider,
        name: $input.first().json.name,
        url: $input.first().json.url,
        timestamp: new Date().toISOString()
      }
    }];
  }
}

// Return unchanged if no price found
return [{
  json: {
    id: $input.first().json.id,
    currentPrice: $input.first().json.price,
    scrapedPrice: $input.first().json.price,
    priceChanged: false,
    provider: $input.first().json.provider,
    name: $input.first().json.name,
    url: $input.first().json.url,
    timestamp: new Date().toISOString(),
    error: "Price not found in HTML"
  }
}];
```

### 6. Filter Price Changes
- **Node**: IF
- **Settings**:
  - Condition: `{{ $json.priceChanged }}` equals `true`

### 7. Update GitHub Repository
- **Node**: HTTP Request (for price changes)
- **Settings**:
  - Method: PUT
  - URL: `https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/panels.json`
  - Headers:
    - Authorization: `token YOUR_GITHUB_TOKEN`
    - Content-Type: `application/json`
  - Body (JSON):

```json
{
  "message": "Update panel prices - {{ new Date().toISOString() }}",
  "content": "{{ $base64($json.updatedPanelsJson) }}",
  "sha": "{{ $json.currentFileSha }}"
}
```

### 8. Update Last Updated Timestamp
- **Node**: HTTP Request
- **Settings**:
  - Method: PUT
  - URL: `https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/last-updated.json`
  - Body:

```json
{
  "message": "Update timestamp - {{ new Date().toISOString() }}",
  "content": "{{ $base64('{\\"lastUpdatedISO\\":\\"' + new Date().toISOString() + '\\"}') }}",
  "sha": "{{ $json.lastUpdatedSha }}"
}
```

### 9. Send Notification (Optional)
- **Node**: Discord/Slack/Email
- **Settings**: Configure based on your preferred notification method

## Price Extraction Patterns

### Quest Diagnostics
- Look for: `$XX.XX` patterns in HTML
- Common locations: `.price`, `.cost`, `data-price` attributes
- Backup: Text content containing "Price: $XX.XX"

### LabCorp
- Look for: Price information in JSON-LD structured data
- HTML patterns: `.price-amount`, `.test-price`
- API calls: Check network tab for AJAX price requests

## Error Handling

Add error handling nodes after each HTTP request:
- **Node**: IF (check for errors)
- **Condition**: `{{ $json.error }}` exists
- **Action**: Log error and continue with next panel

## Testing

1. Start with a small subset of panels
2. Test price extraction patterns manually
3. Verify GitHub updates work correctly
4. Monitor for rate limiting issues

## Rate Limiting

- Add delays between requests (2-3 seconds)
- Use different User-Agent strings
- Consider using rotating proxies for large-scale scraping
- Respect robots.txt files

## Security

- Store GitHub token as n8n credential
- Use environment variables for sensitive data
- Enable workflow access restrictions
- Monitor for failed authentication attempts

## Monitoring

Set up alerts for:
- Failed price extractions
- GitHub API errors
- Significant price changes (>20%)
- Workflow execution failures
