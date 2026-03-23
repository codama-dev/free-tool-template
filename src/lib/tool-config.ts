/**
 * TOOL CONFIGURATION
 *
 * Update these values for each new tool.
 * This is the single source of truth for tool-specific settings.
 */

export const TOOL_CONFIG = {
  /** Display name of the tool (e.g. "JSON Formatter") */
  name: 'TOOL_NAME',

  /** Short tagline (e.g. "Format and validate JSON instantly") */
  tagline: 'TOOL_TAGLINE',

  /** Full URL of the deployed tool */
  url: 'https://TOOL_SUBDOMAIN.codama.dev/',

  /** localStorage key prefix to avoid collisions between tools */
  storagePrefix: 'codama-tool',
} as const
