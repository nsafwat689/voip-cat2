/**
 * Accessibility Utilities — Task 21
 * Helpers used across components for keyboard nav, focus management, ARIA.
 */

/** Trap focus inside a modal/dialog element */
export function trapFocus(containerEl: HTMLElement) {
  const focusable = containerEl.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  }

  containerEl.addEventListener('keydown', handleKeyDown);
  first?.focus();
  return () => containerEl.removeEventListener('keydown', handleKeyDown);
}

/** Skip-to-content link injector */
export function injectSkipLink() {
  if (document.getElementById('skip-to-main')) return;
  const link = document.createElement('a');
  link.id        = 'skip-to-main';
  link.href      = '#main-content';
  link.className = 'sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:text-sm focus:font-bold';
  link.textContent = 'Skip to main content';
  document.body.insertBefore(link, document.body.firstChild);
}

/** Returns accessible label for icon-only buttons */
export function iconButtonLabel(label: string) {
  return { 'aria-label': label, role: 'button' as const };
}
