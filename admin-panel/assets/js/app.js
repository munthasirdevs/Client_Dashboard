// XenonOS Global Application Logic
// Handles component injection and shared interactions

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveLink();
    setupGlobalInteractions();
});

function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('aside a');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            // Remove relative path prefix for comparison
            const cleanHref = href.replace('../', '');
            if (currentPath.endsWith(cleanHref) || currentPath.includes('/' + cleanHref)) {
                link.classList.add('bg-[var(--color-surface-container-low)]', 'text-[var(--color-primary)]', 'translate-x-1');
                link.classList.remove('text-slate-400');
                
                // Add indicator to the dot
                const dot = link.querySelector('span');
                if (dot) dot.classList.add('bg-[var(--color-primary)]');
            }
        }
    });
}

function setupGlobalInteractions() {
    // Handle mobile sidebar toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const sidebar = document.querySelector('aside');
    
    if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('-translate-x-full');
            sidebar.classList.toggle('translate-x-0');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 1024 && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
                sidebar.classList.add('-translate-x-full');
                sidebar.classList.remove('translate-x-0');
            }
        });
    }
}
