/**
 * Utilities for detecting and safely importing optional peer dependencies.
 * Ensures graceful fallbacks when optional packages are not installed.
 */

/**
 * Check if react-dnd and react-dnd-html5-backend are available.
 * These packages enable drag-and-drop functionality for column management.
 */
export function isReactDndAvailable(): boolean {
  try {
    // Try to require react-dnd to check if it's installed
    require.resolve('react-dnd')
    require.resolve('react-dnd-html5-backend')
    return true
  } catch {
    return false
  }
}

/**
 * Check if react-resize-detector is available.
 * This package enables responsive height calculation for tables.
 */
export function isResizeDetectorAvailable(): boolean {
  try {
    require.resolve('react-resize-detector')
    return true
  } catch {
    return false
  }
}

/**
 * Safely import react-dnd with fallback handling.
 * Returns null if the package is not installed.
 */
export async function importReactDnd() {
  if (!isReactDndAvailable()) {
    return null
  }
  try {
    const module = await import('react-dnd')
    return module
  } catch {
    console.warn('Failed to import react-dnd despite being available')
    return null
  }
}

/**
 * Safely import react-dnd-html5-backend with fallback handling.
 * Returns null if the package is not installed.
 */
export async function importReactDndBackend() {
  if (!isReactDndAvailable()) {
    return null
  }
  try {
    const module = await import('react-dnd-html5-backend')
    return module
  } catch {
    console.warn('Failed to import react-dnd-html5-backend despite being available')
    return null
  }
}

/**
 * Safely import react-resize-detector with fallback handling.
 * Returns null if the package is not installed.
 */
export async function importResizeDetector() {
  if (!isResizeDetectorAvailable()) {
    return null
  }
  try {
    const module = await import('react-resize-detector')
    return module
  } catch {
    console.warn('Failed to import react-resize-detector despite being available')
    return null
  }
}
