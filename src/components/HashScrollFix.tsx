'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * HashScrollFix Component
 *
 * Handles smooth scrolling to hash anchors on route changes.
 * Mounts once in the root layout to provide global hash scroll behavior.
 *
 * This is necessary because Next.js App Router doesn't automatically
 * scroll to hash targets when navigating between pages.
 *
 * Features:
 * - Retries up to 20 frames to find the target element (handles lazy-loaded sections)
 * - Smooth scroll behavior
 * - No crashes if element not found
 */
export default function HashScrollFix() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const targetId = hash.substring(1); // Remove the '#'
    let attempts = 0;
    const maxAttempts = 20;

    const scrollToElement = () => {
      const element = document.getElementById(targetId);

      if (element) {
        // Small delay to ensure layout is stable
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
        return;
      }

      // Element not found yet, retry
      attempts++;
      if (attempts < maxAttempts) {
        requestAnimationFrame(scrollToElement);
      }
    };

    // Start attempting to scroll after a brief delay for hydration
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(scrollToElement);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
