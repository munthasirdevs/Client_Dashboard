// Global Tailwind Configuration
if (typeof tailwind !== 'undefined') {
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    surface: '#0b0f19',
                    'surface-container': '#111827',
                    'surface-container-low': '#0e1420',
                    'surface-container-high': '#1f2937',
                    'surface-container-highest': '#2d3748',
                    'on-surface': '#dfe2f1',
                    'on-surface-variant': '#c7c4d7',
                    primary: '#6366f1',
                    'primary-container': '#6366f1',
                    'on-primary-fixed': '#07006c',
                    'outline-variant': '#464554',
                    tertiary: '#ffb783',
                },
                fontFamily: {
                    sans: ['Outfit', 'sans-serif'],
                    headline: ['Syne', 'sans-serif'],
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Initialize Global Event Listeners
    initGlobalEventListeners();
});

function initGlobalEventListeners() {
    // Password Toggles
    const toggleBtns = document.querySelectorAll('.toggle-password');
    toggleBtns.forEach(btn => {
        const targetId = btn.getAttribute('data-target');
        const input = document.getElementById(targetId);
        if (input) {
            btn.onclick = () => {
                const isShow = input.type === 'text';
                input.type = isShow ? 'password' : 'text';
                btn.innerHTML = isShow ? '<i data-lucide="eye" class="w-[18px] h-[18px]"></i>' : '<i data-lucide="eye-off" class="w-[18px] h-[18px]"></i>';
                lucide.createIcons();
            };
        }
    });

    // Delete Buttons
    const deleteBtns = document.querySelectorAll('.btn-delete');
    deleteBtns.forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const item = btn.closest('.deletable-item') || btn.parentElement;
            if (confirm('Are you sure you want to delete this item?')) {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.95)';
                setTimeout(() => item.remove(), 300);
            }
        };
    });

    // Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.onclick = handleDemoLogout;
    }
}

// Demo Login/Logout
function handleDemoLogin(email) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    window.location.href = 'dashboard.html';
}

function handleDemoLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    window.location.href = 'login.html';
}

// Prototoype Helpers
const createNewProject = () => alert('Project creation wizard would open here.');
const supportAction = () => alert('Support ticketing system is offline.');

// Global UI Navigation Handlers
function toggleMobileMenu() {
    const sidebar = document.getElementById('app-sidebar');
    if (sidebar) {
        if (sidebar.classList.contains('-translate-x-full')) {
            sidebar.classList.remove('-translate-x-full');
            sidebar.classList.add('translate-x-0');
        } else {
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('-translate-x-full');
        }
    }
}
