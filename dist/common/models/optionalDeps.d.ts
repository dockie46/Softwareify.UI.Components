/**
 * Utilities for detecting and safely importing optional peer dependencies.
 * Ensures graceful fallbacks when optional packages are not installed.
 */
/**
 * Check if react-dnd and react-dnd-html5-backend are available.
 * These packages enable drag-and-drop functionality for column management.
 */
export declare function isReactDndAvailable(): boolean;
/**
 * Check if react-resize-detector is available.
 * This package enables responsive height calculation for tables.
 */
export declare function isResizeDetectorAvailable(): boolean;
/**
 * Safely import react-dnd with fallback handling.
 * Returns null if the package is not installed.
 */
export declare function importReactDnd(): Promise<typeof import("react-dnd") | null>;
/**
 * Safely import react-dnd-html5-backend with fallback handling.
 * Returns null if the package is not installed.
 */
export declare function importReactDndBackend(): Promise<typeof import("react-dnd-html5-backend") | null>;
/**
 * Safely import react-resize-detector with fallback handling.
 * Returns null if the package is not installed.
 */
export declare function importResizeDetector(): Promise<typeof import("react-resize-detector") | null>;
