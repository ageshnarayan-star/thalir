/**
 * THALIR — Clickable Prototype Application Engine
 * Seed-stage evaluation clickable prototype.
 * Clean modern architecture with state store, screen router,
 * Web Speech synthesis for AAC, interactive modals, and pitch presenter tools.
 */

// Application State
const state = {
  currentScreen: 'welcome',
  previousScreen: null,
  historyStack: [],
  viewMode: 'frame', // 'frame' | 'expanded'
  activeRole: 'parent',
  selectedCategoryFilter: 'All',
  selectedResourceTab: 'For Parents',
  aacSentence: '',
  aacSpeaking: false,
  mapViewActive: false,
  timelineFilter: 'all', // 'all' | 'Therapist' | 'School' | 'Parent'
  data: JSON.parse(JSON.stringify(typeof THALIR_DATA !== 'undefined' ? THALIR_DATA : ((typeof window !== 'undefined' && window.THALIR_DATA) || (typeof global !== 'undefined' && global.THALIR_DATA) || {})))
};

// Lucide Icon SVG Fallback Helper (ensures crisp icons everywhere)
function getIconSvg(name, className = "w-5 h-5") {
  const iconMap = {
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'arrow-left': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    'home': '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    'file-text': '<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/>',
    'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    'message-circle': '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    'calendar': '<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>',
    'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    'bell': '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    'lock': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>',
    'check': '<polyline points="20 6 9 17 4 12"/>',
    'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
    'check-circle-2': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    'x-circle': '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
    'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
    'volume-2': '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
    'sparkles': '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>',
    'book-open': '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    'droplet': '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    'utensils': '<path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M15 11v11"/><path d="M5 2v20"/><path d="M2 4h6"/>',
    'life-buoy': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" x2="9.17" y1="4.93" y2="9.17"/><line x1="14.83" x2="19.07" y1="14.83" y2="19.07"/><line x1="14.83" x2="19.07" y1="9.17" y2="4.93"/><line x1="4.93" x2="9.17" y1="19.07" y2="14.83"/>',
    'bath': '<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C4.67 2.5 4 3.17 4 4v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M17 19v2"/><path d="M2 12a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5v-1a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>',
    'pause-circle': '<circle cx="12" cy="12" r="10"/><line x1="10" x2="10" y1="15" y2="9"/><line x1="14" x2="14" y1="15" y2="9"/>',
    'smile': '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    'frown': '<circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/>',
    'share-2': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
    'map-pin': '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    'settings': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    'compass': '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x2="12.01" y1="17" y2="17"/>'
  };

  const inner = iconMap[name] || '<circle cx="12" cy="12" r="10"/>';
  return `<svg xmlns="http://www.w3.org/2000/svg" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
}

// Show Floating Toast
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.innerHTML = `${getIconSvg('check-circle', 'w-4 h-4 text-emerald-300')} <span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Speak sentence using Web Speech API
function speakText(text) {
  if (!text || !('speechSynthesis' in window)) {
    showToast('Spoken: "' + text + '"');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.0;
  
  const speakBtn = document.getElementById('btn-speak-sentence');
  if (speakBtn) speakBtn.classList.add('speaking');
  
  utterance.onend = () => {
    if (speakBtn) speakBtn.classList.remove('speaking');
  };
  utterance.onerror = () => {
    if (speakBtn) speakBtn.classList.remove('speaking');
  };
  window.speechSynthesis.speak(utterance);
}

// Screen Router & Navigation
function navigateTo(screenId, addToHistory = true) {
  if (addToHistory && state.currentScreen !== screenId) {
    state.historyStack.push(state.currentScreen);
  }
  state.previousScreen = state.currentScreen;
  state.currentScreen = screenId;

  // Update pitch switcher dropdown
  const selector = document.getElementById('screen-quick-select');
  if (selector) selector.value = screenId;

  renderApp();
  
  // Scroll content to top
  const scroller = document.querySelector('.app-screen-scroller');
  if (scroller) scroller.scrollTop = 0;
}

function navigateBack() {
  if (state.historyStack.length > 0) {
    const prev = state.historyStack.pop();
    navigateTo(prev, false);
  } else {
    navigateTo('dashboard', false);
  }
}

// Render Application Shell & Active Screen
function renderApp() {
  const container = document.getElementById('app-main-content');
  if (!container) return;

  const showNav = state.currentScreen !== 'welcome' && state.currentScreen !== 'role';
  const bottomNav = document.getElementById('bottom-nav-bar');
  if (bottomNav) {
    bottomNav.style.display = showNav ? 'flex' : 'none';
    updateActiveNavIndicator();
  }

  const appHeader = document.getElementById('app-header-bar');
  if (appHeader) {
    appHeader.style.display = showNav ? 'flex' : 'none';
  }

  // Render individual screen
  switch (state.currentScreen) {
    case 'welcome':
      container.innerHTML = renderScreenWelcome();
      break;
    case 'role':
      container.innerHTML = renderScreenRole();
      break;
    case 'dashboard':
      container.innerHTML = renderScreenDashboard();
      break;
    case 'profile':
      container.innerHTML = renderScreenProfile();
      break;
    case 'progress':
      container.innerHTML = renderScreenProgress();
      break;
    case 'progress_history':
      container.innerHTML = renderScreenProgressHistory();
      break;
    case 'care_passport':
      container.innerHTML = renderScreenCarePassport();
      break;
    case 'school':
      container.innerHTML = renderScreenSchool();
      break;
    case 'appointments':
      container.innerHTML = renderScreenAppointments();
      break;
    case 'professionals':
      container.innerHTML = renderScreenProfessionals();
      break;
    case 'communication':
      container.innerHTML = renderScreenCommunication();
      break;
    case 'awareness':
      container.innerHTML = renderScreenAwareness();
      break;
    case 'resources':
      container.innerHTML = renderScreenResources();
      break;
    case 'notifications':
      container.innerHTML = renderScreenNotifications();
      break;
    case 'care_team':
      container.innerHTML = renderScreenCareTeam();
      break;
    case 'settings':
      container.innerHTML = renderScreenSettings();
      break;
    default:
      container.innerHTML = renderScreenDashboard();
  }

  attachScreenListeners();
}

// Update Active Nav Item
function updateActiveNavIndicator() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));

  const screenToNav = {
    'dashboard': 'nav-home',
    'progress': 'nav-progress',
    'progress_history': 'nav-progress',
    'care_passport': 'nav-care',
    'appointments': 'nav-care',
    'school': 'nav-connect',
    'professionals': 'nav-connect',
    'communication': 'nav-connect',
    'awareness': 'nav-connect',
    'resources': 'nav-connect',
    'profile': 'nav-profile',
    'care_team': 'nav-profile',
    'settings': 'nav-profile',
    'notifications': 'nav-home'
  };

  const targetNavId = screenToNav[state.currentScreen];
  if (targetNavId) {
    const el = document.getElementById(targetNavId);
    if (el) el.classList.add('active');
  }
}

// ==========================================================================
// SCREEN 1 — WELCOME
// ==========================================================================
function renderScreenWelcome() {
  return `
    <div style="min-height: 80vh; display: flex; flex-direction: column; justify-content: space-between; padding: 24px 8px 12px; text-align: center;">
      <div style="margin-top: 10px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--primary-sage); background: var(--surface-sage-light); padding: 4px 12px; border-radius: 9999px; border: 1px solid var(--surface-sage-border);">
          CONNECTED CARE ECOSYSTEM
        </span>
      </div>

      <div style="margin: 40px 0 20px;">
        <!-- Brand Mark (Strictly NO LOGO per prompt) -->
        <h1 style="font-size: 34px; font-weight: 800; letter-spacing: 0.16em; color: var(--primary-forest); text-transform: uppercase; margin-bottom: 6px;">
          THALIR
        </h1>
        <p style="font-size: 15px; font-weight: 600; color: var(--primary-sage); letter-spacing: 0.02em; margin-bottom: 28px;">
          Empowering Every Child’s Journey
        </p>

        <div style="max-width: 320px; margin: 0 auto; background: var(--surface-card); border: 1px solid var(--border-card); border-radius: var(--radius-xl); padding: 22px 18px; box-shadow: var(--shadow-card);">
          <p style="font-size: 15px; font-weight: 700; color: var(--text-charcoal); margin-bottom: 10px; line-height: 1.4;">
            One connected care platform for special children and their families.
          </p>
          <p style="font-size: 13px; color: var(--text-slate); line-height: 1.5; font-style: italic;">
            “Bring care, communication, progress and support together in one place.”
          </p>
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <button id="btn-welcome-start" class="thalir-btn thalir-btn-primary thalir-btn-full" style="padding: 14px 20px; font-size: 15px; border-radius: var(--radius-lg); margin-bottom: 16px;">
          <span>Get Started</span>
          ${getIconSvg('chevron-right', 'w-4 h-4')}
        </button>
        <p style="font-size: 12px; color: var(--text-muted); line-height: 1.45; max-width: 280px; margin: 0 auto;">
          Designed for parents, caregivers and the professionals supporting every child.
        </p>
      </div>
    </div>
  `;
}

// ==========================================================================
// SCREEN 2 — CHOOSE YOUR ROLE
// ==========================================================================
function renderScreenRole() {
  return `
    <div style="padding: 12px 4px;">
      <div style="margin-bottom: 22px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          ROLE SELECTION
        </span>
        <h2 style="font-size: 22px; font-weight: 800; color: var(--text-charcoal); margin-top: 4px;">
          How will you use Thalir?
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 4px;">
          Select your primary role to experience tailored workflows.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
        <!-- Card 1: Parent / Caregiver (Primary clickable option) -->
        <div id="role-card-parent" class="thalir-card interactive" style="border: 2px solid var(--primary-sage); background: #FAFDFB; position: relative; padding: 18px;">
          <div style="position: absolute; top: -10px; right: 16px; background: var(--primary-forest); color: #FFFFFF; font-size: 10px; font-weight: 700; padding: 2px 10px; border-radius: 9999px; letter-spacing: 0.04em;">
            PRIMARY DEMO FLOW
          </div>
          <div style="display: flex; align-items: flex-start; gap: 14px;">
            <div style="width: 44px; height: 44px; border-radius: 12px; background: var(--surface-sage-light); color: var(--primary-forest); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              ${getIconSvg('heart', 'w-6 h-6')}
            </div>
            <div style="flex: 1;">
              <h3 style="font-size: 16px; font-weight: 700; color: var(--primary-forest); margin-bottom: 4px;">
                Parent / Caregiver
              </h3>
              <p style="font-size: 12px; color: var(--text-slate); line-height: 1.45;">
                Centralize your child’s Care Passport, track multidisciplinary progress, and coordinate care with full ownership.
              </p>
              <div style="margin-top: 10px; display: inline-flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: var(--primary-sage);">
                <span>Explore Parent Experience</span>
                ${getIconSvg('chevron-right', 'w-3.5 h-3.5')}
              </div>
            </div>
          </div>
        </div>

        <!-- Card 2: Educator / School -->
        <div id="role-card-educator" class="thalir-card interactive" style="padding: 18px;">
          <div style="display: flex; align-items: flex-start; gap: 14px;">
            <div style="width: 44px; height: 44px; border-radius: 12px; background: #EFF6FF; color: #1E40AF; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              ${getIconSvg('book-open', 'w-6 h-6')}
            </div>
            <div style="flex: 1;">
              <h3 style="font-size: 16px; font-weight: 700; color: var(--text-charcoal); margin-bottom: 4px;">
                Educator / School
              </h3>
              <p style="font-size: 12px; color: var(--text-slate); line-height: 1.45;">
                Share classroom milestones, view IEP accommodations, and bridge the home-school communication gap.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 3: Therapist / Professional -->
        <div id="role-card-therapist" class="thalir-card interactive" style="padding: 18px;">
          <div style="display: flex; align-items: flex-start; gap: 14px;">
            <div style="width: 44px; height: 44px; border-radius: 12px; background: #F0FDFA; color: #0D7463; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              ${getIconSvg('sparkles', 'w-6 h-6')}
            </div>
            <div style="flex: 1;">
              <h3 style="font-size: 16px; font-weight: 700; color: var(--text-charcoal); margin-bottom: 4px;">
                Therapist / Professional
              </h3>
              <p style="font-size: 12px; color: var(--text-slate); line-height: 1.45;">
                Record developmental milestones, update the Progress Passport, and collaborate with pediatric care circles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Small Privacy Message -->
      <div style="background: var(--surface-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 14px; display: flex; align-items: center; gap: 12px; text-align: left;">
        <div style="color: var(--primary-sage); flex-shrink: 0;">
          ${getIconSvg('lock', 'w-5 h-5')}
        </div>
        <p style="font-size: 12px; color: var(--text-slate); line-height: 1.45;">
          “Your child’s information is shared only with the people you choose.”
        </p>
      </div>
    </div>
  `;
}

// ==========================================================================
// SCREEN 3 — PARENT DASHBOARD
// ==========================================================================
function renderScreenDashboard() {
  const child = state.data.child;

  return `
    <div>
      <!-- Top Welcome Banner -->
      <div style="margin-bottom: 18px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
          <span style="font-size: 12px; font-weight: 600; color: var(--primary-sage); text-transform: uppercase; letter-spacing: 0.05em;">
            Care Overview
          </span>
          <div id="btn-switch-child" class="child-selector-pill">
            <span class="child-avatar-dot">${child.name[0]}</span>
            <span>${child.name} · ${child.age}</span>
            ${getIconSvg('chevron-right', 'w-3 h-3 text-muted')}
          </div>
        </div>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.02em;">
          Good morning, Ananya
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          “Here’s your child’s care overview for today.”
        </p>
      </div>

      <!-- TODAY CARD -->
      <div class="thalir-card">
        <div class="section-label">
          <span>TODAY</span>
          <span style="font-size: 11px; color: var(--primary-sage); font-weight: 600; cursor: pointer;" onclick="navigateTo('appointments')">View Schedule</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <!-- Item 1: Speech Therapy -->
          <div class="interactive" onclick="navigateTo('appointments')" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: var(--surface-subtle); border-radius: var(--radius-md); border-left: 3px solid var(--primary-sage);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="color: var(--primary-forest);">
                ${getIconSvg('message-square', 'w-4 h-4')}
              </div>
              <div>
                <p style="font-size: 13px; font-weight: 600; color: var(--text-charcoal);">Speech therapy</p>
                <p style="font-size: 11px; color: var(--text-muted);">Dr. Meera Krishnan · CareSteps Centre</p>
              </div>
            </div>
            <span class="status-pill sage">10:30 AM</span>
          </div>

          <!-- Item 2: School Update -->
          <div class="interactive" onclick="navigateTo('school')" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: var(--surface-subtle); border-radius: var(--radius-md); border-left: 3px solid #3B82F6;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="color: #2563EB;">
                ${getIconSvg('book-open', 'w-4 h-4')}
              </div>
              <div>
                <p style="font-size: 13px; font-weight: 600; color: var(--text-charcoal);">School update</p>
                <p style="font-size: 11px; color: var(--text-muted);">Ms. Kavya · Classroom Participation</p>
              </div>
            </div>
            <span class="status-pill blue">New</span>
          </div>

          <!-- Item 3: Home Activity -->
          <div class="interactive" onclick="navigateTo('care_passport')" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: var(--surface-subtle); border-radius: var(--radius-md); border-left: 3px solid #10B981;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="color: #059669;">
                ${getIconSvg('home', 'w-4 h-4')}
              </div>
              <div>
                <p style="font-size: 13px; font-weight: 600; color: var(--text-charcoal);">Home activity</p>
                <p style="font-size: 11px; color: var(--text-muted);">Sensory wind-down & visual routine</p>
              </div>
            </div>
            <span class="status-pill sage">6:00 PM</span>
          </div>
        </div>
      </div>

      <!-- CHILD OVERVIEW -->
      <div class="thalir-card">
        <div class="section-label">
          <span>CHILD OVERVIEW</span>
          <span style="font-size: 11px; color: var(--primary-sage); font-weight: 600; cursor: pointer;" onclick="navigateTo('progress')">Progress Passport</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 6px;">
          <!-- Communication 72% -->
          <div class="interactive" onclick="navigateTo('progress')" style="padding: 6px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 13px; font-weight: 600; color: var(--text-charcoal);">Communication</span>
              <span style="font-size: 13px; font-weight: 700; color: var(--primary-forest);">72% progress</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: 72%;"></div>
            </div>
            <p style="font-size: 11px; color: var(--text-muted);">Goal: Use functional communication during daily routines.</p>
          </div>

          <!-- Daily routines 84% -->
          <div class="interactive" onclick="navigateTo('progress')" style="padding: 6px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 13px; font-weight: 600; color: var(--text-charcoal);">Daily routines</span>
              <span style="font-size: 13px; font-weight: 700; color: var(--primary-forest);">84% progress</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: 84%; background: linear-gradient(90deg, #10B981, #34D399);"></div>
            </div>
            <p style="font-size: 11px; color: var(--text-muted);">Goal: Independent morning transition and checklist routine.</p>
          </div>

          <!-- Social participation 58% -->
          <div class="interactive" onclick="navigateTo('progress')" style="padding: 6px 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 13px; font-weight: 600; color: var(--text-charcoal);">Social participation</span>
              <span style="font-size: 13px; font-weight: 700; color: var(--primary-forest);">58% progress</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: 58%; background: linear-gradient(90deg, #F59E0B, #FBBF24);"></div>
            </div>
            <p style="font-size: 11px; color: var(--text-muted);">Goal: Engage in guided 15-minute small group activities.</p>
          </div>
        </div>
      </div>

      <!-- QUICK ACTIONS -->
      <div style="margin-top: 14px;">
        <div class="section-label">
          <span>QUICK ACTIONS</span>
        </div>

        <div class="quick-actions-grid">
          <div class="action-tile-btn" onclick="navigateTo('progress')">
            <div class="action-tile-icon">${getIconSvg('trending-up', 'w-5 h-5')}</div>
            <span class="action-tile-title">Progress</span>
          </div>

          <div class="action-tile-btn" onclick="navigateTo('care_passport')">
            <div class="action-tile-icon">${getIconSvg('file-text', 'w-5 h-5')}</div>
            <span class="action-tile-title">Care Passport</span>
          </div>

          <div class="action-tile-btn" onclick="navigateTo('school')">
            <div class="action-tile-icon">${getIconSvg('book-open', 'w-5 h-5')}</div>
            <span class="action-tile-title">School Updates</span>
          </div>

          <div class="action-tile-btn" onclick="navigateTo('appointments')">
            <div class="action-tile-icon">${getIconSvg('calendar', 'w-5 h-5')}</div>
            <span class="action-tile-title">Appointments</span>
          </div>

          <div class="action-tile-btn" onclick="navigateTo('professionals')">
            <div class="action-tile-icon">${getIconSvg('search', 'w-5 h-5')}</div>
            <span class="action-tile-title">Find Support</span>
          </div>

          <div class="action-tile-btn" onclick="navigateTo('communication')">
            <div class="action-tile-icon">${getIconSvg('volume-2', 'w-5 h-5')}</div>
            <span class="action-tile-title">Communication</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// SCREEN 4 — CHILD PROFILE
// ==========================================================================
function renderScreenProfile() {
  const child = state.data.child;

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <button class="thalir-btn thalir-btn-secondary" style="padding: 6px 12px; font-size: 12px;" onclick="openModal('modal-edit-profile')">
          Edit Profile
        </button>
      </div>

      <!-- Child Identity Banner -->
      <div class="thalir-card" style="text-align: center; padding: 22px 16px;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--surface-sage-light); color: var(--primary-forest); font-size: 26px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; border: 2px solid var(--surface-sage-border);">
          ${child.name[0]}
        </div>
        <h2 style="font-size: 22px; font-weight: 800; color: var(--text-charcoal); margin-bottom: 2px;">
          ${child.name}’s Profile
        </h2>
        <p style="font-size: 13px; color: var(--primary-sage); font-weight: 600;">
          Age: ${child.age} · DOB: ${child.dob}
        </p>
        <div style="margin-top: 10px;">
          <span class="status-pill sage">Neurodevelopmental Support Profile</span>
        </div>
      </div>

      <!-- Support Areas -->
      <div class="thalir-card">
        <div class="section-label">
          <span>Support Areas</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${child.supportAreas.map(area => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; background: var(--surface-subtle); border-radius: var(--radius-md);">
              <div>
                <p style="font-size: 13px; font-weight: 600; color: var(--text-charcoal);">${area.name}</p>
                <p style="font-size: 11px; color: var(--text-muted);">${area.desc}</p>
              </div>
              <span class="status-pill ${area.color}">${area.level}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Communication Preferences -->
      <div class="thalir-card">
        <div class="section-label">
          <span>Communication Preferences</span>
        </div>
        <div style="background: var(--surface-sage-light); border: 1px solid var(--surface-sage-border); border-radius: var(--radius-md); padding: 12px 14px;">
          <p style="font-size: 13px; font-weight: 600; color: var(--primary-forest); line-height: 1.5;">
            “${child.communicationPreferences}”
          </p>
        </div>
      </div>

      <!-- Important Notes & Sensory Profile -->
      <div class="thalir-card">
        <div class="section-label">
          <span>Important Notes</span>
        </div>
        <p style="font-size: 13px; color: var(--text-slate); line-height: 1.5; margin-bottom: 8px;">
          ${child.importantNotes}
        </p>
      </div>

      <!-- Emergency Information -->
      <div class="thalir-card">
        <div class="section-label">
          <span>Emergency Information</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 13px;">
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Primary Contact:</span>
            <span style="font-weight: 600; color: var(--text-charcoal);">${child.emergencyInfo.primaryContact}</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Pediatrician:</span>
            <span style="font-weight: 600; color: var(--text-charcoal);">${child.emergencyInfo.pediatrician}</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Allergies:</span>
            <span style="font-weight: 600; color: #B91C1C;">${child.emergencyInfo.allergies}</span>
          </div>
          <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-muted);">Blood Group:</span>
            <span style="font-weight: 600; color: var(--text-charcoal);">${child.emergencyInfo.bloodGroup}</span>
          </div>
        </div>
      </div>

      <!-- Care Team -->
      <div class="thalir-card">
        <div class="section-label">
          <span>Care Team</span>
          <span style="font-size: 11px; color: var(--primary-sage); font-weight: 600; cursor: pointer;" onclick="navigateTo('care_team')">Manage Access</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 0;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #D1FAE5; color: #065F46; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center;">AN</div>
              <div>
                <p style="font-size: 13px; font-weight: 600;">Ananya</p>
                <p style="font-size: 11px; color: var(--text-muted);">Parent / Guardian</p>
              </div>
            </div>
            <span class="status-pill sage">Primary Admin</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 0;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #DBEAFE; color: #1E40AF; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center;">KV</div>
              <div>
                <p style="font-size: 13px; font-weight: 600;">Ms. Kavya</p>
                <p style="font-size: 11px; color: var(--text-muted);">Class Teacher · Greenfield Academy</p>
              </div>
            </div>
            <span class="status-pill blue">Educator</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 6px 0;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #CCFBF1; color: #115E59; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center;">MK</div>
              <div>
                <p style="font-size: 13px; font-weight: 600;">Dr. Meera Krishnan</p>
                <p style="font-size: 11px; color: var(--text-muted);">Speech Therapist · CareSteps</p>
              </div>
            </div>
            <span class="status-pill teal">Clinical Lead</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// SCREEN 5 — PROGRESS PASSPORT (CORE FEATURE)
// ==========================================================================
function renderScreenProgress() {
  const pp = state.data.progressPassport;

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <button class="thalir-btn thalir-btn-secondary" style="padding: 6px 12px; font-size: 12px;" onclick="navigateTo('progress_history')">
          ${getIconSvg('clock', 'w-3.5 h-3.5')}
          <span>View History</span>
        </button>
      </div>

      <!-- Title & Positioning Subtitle -->
      <div style="margin-bottom: 18px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          SHARED CONTINUOUS PICTURE
        </span>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          Progress Passport
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          “A shared view of your child’s development and everyday progress.”
        </p>
      </div>

      <!-- Collaborative Indicator Callout -->
      <div style="background: var(--surface-sage-light); border: 1px solid var(--surface-sage-border); border-radius: var(--radius-md); padding: 10px 14px; margin-bottom: 16px; display: flex; align-items: center; gap: 10px;">
        <div style="color: var(--primary-forest); flex-shrink: 0;">
          ${getIconSvg('users', 'w-5 h-5')}
        </div>
        <p style="font-size: 12px; color: var(--primary-forest); line-height: 1.45;">
          <strong>Coordinated Care Circle:</strong> Updates from <strong>Parent</strong>, <strong>School</strong>, and <strong>Therapist</strong> create a unified developmental timeline.
        </p>
      </div>

      <!-- Categories List -->
      <div style="display: flex; flex-direction: column; gap: 14px;">
        ${pp.categories.map(cat => `
          <div class="thalir-card" style="margin-bottom: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <div>
                <h3 style="font-size: 16px; font-weight: 700; color: var(--text-charcoal);">${cat.name}</h3>
                <span style="font-size: 11px; color: var(--primary-sage); font-weight: 600;">${cat.trend}</span>
              </div>
              <span style="font-size: 18px; font-weight: 800; color: var(--primary-forest);">${cat.progress}%</span>
            </div>

            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width: ${cat.progress}%;"></div>
            </div>

            <!-- Current Goal -->
            <div style="margin: 10px 0 8px; padding: 8px 10px; background: var(--surface-subtle); border-radius: var(--radius-md);">
              <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 2px;">CURRENT GOAL</p>
              <p style="font-size: 12px; font-weight: 500; color: var(--text-charcoal);">${cat.currentGoal}</p>
            </div>

            <!-- Recent Update -->
            <div style="margin-top: 8px; border-left: 2px solid var(--surface-sage-border); padding-left: 10px;">
              <p style="font-size: 12px; color: var(--text-slate); line-height: 1.45; font-style: italic;">
                “${cat.latestUpdate}”
              </p>
              <p style="font-size: 11px; color: var(--text-muted); margin-top: 4px;">
                Updated by: <strong style="color: var(--primary-forest);">${cat.updatedBy}</strong>
              </p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Bottom Actions -->
      <div style="display: flex; gap: 10px; margin-top: 18px;">
        <button class="thalir-btn thalir-btn-primary" style="flex: 1;" onclick="openModal('modal-add-progress')">
          ${getIconSvg('plus', 'w-4 h-4')}
          <span>Add Progress Update</span>
        </button>
        <button class="thalir-btn thalir-btn-secondary" style="flex: 1;" onclick="navigateTo('progress_history')">
          <span>View Progress History</span>
        </button>
      </div>
    </div>
  `;
}

// ==========================================================================
// SUB-SCREEN — PROGRESS HISTORY TIMELINE
// ==========================================================================
function renderScreenProgressHistory() {
  const timeline = state.data.progressPassport.timeline;

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateTo('progress')">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back to Passport</span>
        </button>
        <span class="status-pill sage">Continuous Journey</span>
      </div>

      <div style="margin-bottom: 16px;">
        <h2 style="font-size: 22px; font-weight: 800; color: var(--text-charcoal);">
          Progress History
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          Chronological observations from Parent, School, and Therapist.
        </p>
      </div>

      <!-- Stakeholder Filter Pills -->
      <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 16px;">
        <button class="pitch-btn" style="color: ${state.timelineFilter === 'all' ? '#FFFFFF' : 'var(--text-charcoal)'}; background: ${state.timelineFilter === 'all' ? 'var(--primary-forest)' : '#FFFFFF'}; border: 1px solid var(--border-light);" onclick="setTimelineFilter('all')">
          All Updates (${timeline.length})
        </button>
        <button class="pitch-btn" style="color: ${state.timelineFilter === 'Therapist' ? '#FFFFFF' : 'var(--text-charcoal)'}; background: ${state.timelineFilter === 'Therapist' ? 'var(--primary-forest)' : '#FFFFFF'}; border: 1px solid var(--border-light);" onclick="setTimelineFilter('Therapist')">
          Therapist
        </button>
        <button class="pitch-btn" style="color: ${state.timelineFilter === 'School' ? '#FFFFFF' : 'var(--text-charcoal)'}; background: ${state.timelineFilter === 'School' ? 'var(--primary-forest)' : '#FFFFFF'}; border: 1px solid var(--border-light);" onclick="setTimelineFilter('School')">
          School
        </button>
        <button class="pitch-btn" style="color: ${state.timelineFilter === 'Parent' ? '#FFFFFF' : 'var(--text-charcoal)'}; background: ${state.timelineFilter === 'Parent' ? 'var(--primary-forest)' : '#FFFFFF'}; border: 1px solid var(--border-light);" onclick="setTimelineFilter('Parent')">
          Parent
        </button>
      </div>

      <!-- Timeline Track -->
      <div class="timeline-track">
        ${timeline
          .filter(item => state.timelineFilter === 'all' || item.authorRole.includes(state.timelineFilter))
          .map(item => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="thalir-card" style="margin-bottom: 0; padding: 14px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 4px;">
                <div>
                  <span class="status-pill ${item.authorRole.includes('Therapist') ? 'teal' : item.authorRole.includes('Teacher') ? 'blue' : 'sage'}">
                    ${item.authorRole}
                  </span>
                  <span style="font-size: 11px; color: var(--text-muted); margin-left: 6px;">${item.date}</span>
                </div>
                <span style="font-size: 11px; font-weight: 600; color: var(--primary-forest);">${item.category}</span>
              </div>
              <p style="font-size: 13px; color: var(--text-charcoal); line-height: 1.45; margin-top: 6px;">
                ${item.note}
              </p>
              <p style="font-size: 11px; color: var(--text-muted); margin-top: 6px;">
                Recorded by: <strong>${item.authorName}</strong>
              </p>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="text-align: center; margin-top: 20px;">
        <button class="thalir-btn thalir-btn-secondary" onclick="openModal('modal-add-progress')">
          ${getIconSvg('plus', 'w-4 h-4')}
          <span>Add New Timeline Note</span>
        </button>
      </div>
    </div>
  `;
}

function setTimelineFilter(filter) {
  state.timelineFilter = filter;
  renderApp();
}

// ==========================================================================
// SCREEN 6 — CARE PASSPORT (CENTRAL RECORD)
// ==========================================================================
function renderScreenCarePassport() {
  const cp = state.data.carePassport;

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <button class="thalir-btn thalir-btn-sage" style="padding: 6px 12px; font-size: 12px;" onclick="openModal('modal-share-passport')">
          ${getIconSvg('share-2', 'w-3.5 h-3.5')}
          <span>Share With Care Team</span>
        </button>
      </div>

      <div style="margin-bottom: 18px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          CENTRAL CARE RECORD
        </span>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          Care Passport
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          The single source of truth for your child’s health, education, and daily routines.
        </p>
      </div>

      <!-- Section 1: Child Information -->
      <div class="thalir-card">
        <div class="section-label">
          <span>Child Information</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div>
            <p style="font-size: 15px; font-weight: 700; color: var(--text-charcoal);">${cp.childInfo.name} · ${cp.childInfo.age}</p>
            <p style="font-size: 12px; color: var(--text-slate); margin-top: 2px;">${cp.childInfo.supportSummary}</p>
          </div>
          <div style="background: var(--surface-subtle); padding: 10px; border-radius: var(--radius-md); font-size: 12px; color: var(--text-slate);">
            <strong>Core Strengths:</strong> ${cp.childInfo.strengths}
          </div>
        </div>
      </div>

      <!-- Section 2: Medical & Therapy -->
      <div class="thalir-card">
        <div class="section-label">
          <span>Medical & Therapy</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div>
            <p style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">CURRENT THERAPIES</p>
            ${cp.medicalTherapy.currentTherapies.map(t => `
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px dashed var(--border-light); font-size: 13px;">
                <div>
                  <span style="font-weight: 600; color: var(--text-charcoal);">${t.name}</span>
                  <p style="font-size: 11px; color: var(--text-muted);">${t.clinician}</p>
                </div>
                <span class="status-pill teal">${t.frequency}</span>
              </div>
            `).join('')}
          </div>

          <div>
            <p style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">CLINICAL & APPOINTMENT HISTORY</p>
            <p style="font-size: 12px; color: var(--text-slate); margin-top: 4px; line-height: 1.45;">
              ${cp.medicalTherapy.medicalNotes}
            </p>
            <p style="font-size: 11px; color: var(--primary-forest); font-weight: 600; margin-top: 4px;">
              ${cp.medicalTherapy.appointmentHistory}
            </p>
          </div>
        </div>
      </div>

      <!-- Section 3: School Support -->
      <div class="thalir-card">
        <div class="section-label">
          <span>School Support</span>
        </div>
        <div>
          <p style="font-size: 14px; font-weight: 700; color: var(--text-charcoal);">${cp.schoolSupport.school}</p>
          <p style="font-size: 12px; color: var(--primary-sage); font-weight: 600;">${cp.schoolSupport.class} · Teacher: ${cp.schoolSupport.teacher}</p>

          <div style="margin-top: 10px;">
            <p style="font-size: 12px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 6px;">LEARNING ACCOMMODATIONS</p>
            <ul style="padding-left: 18px; font-size: 12px; color: var(--text-slate); line-height: 1.5;">
              ${(cp.schoolSupport.learningAccommodations || cp.schoolSupport.accommodations || []).map(acc => `<li>${acc}</li>`).join('')}
            </ul>
          </div>

          <div style="margin-top: 10px; background: #EFF6FF; border-radius: var(--radius-md); padding: 8px 10px;">
            <p style="font-size: 11px; font-weight: 700; color: #1E40AF;">RECENT OBSERVATION</p>
            <p style="font-size: 12px; color: #1E3A8A; margin-top: 2px;">“${cp.schoolSupport.recentObservations}”</p>
          </div>
        </div>
      </div>

      <!-- Section 4: Daily Support -->
      <div class="thalir-card">
        <div class="section-label">
          <span>Daily Support</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 12px;">
          <div>
            <strong style="color: var(--text-charcoal);">Routines:</strong>
            <p style="color: var(--text-slate); margin-top: 2px;">${cp.dailySupport.routines}</p>
          </div>
          <div>
            <strong style="color: var(--text-charcoal);">Communication Preferences:</strong>
            <p style="color: var(--text-slate); margin-top: 2px;">${cp.dailySupport.communicationPreferences}</p>
          </div>
          <div>
            <strong style="color: var(--text-charcoal);">Sensory Preferences:</strong>
            <p style="color: var(--text-slate); margin-top: 2px;">${cp.dailySupport.sensoryPreferences}</p>
          </div>
          <div>
            <strong style="color: var(--text-charcoal);">Guidelines for Caregivers:</strong>
            <p style="color: var(--text-slate); margin-top: 2px;">${cp.dailySupport.caregiverGuidelines}</p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display: flex; gap: 10px; margin-top: 18px;">
        <button class="thalir-btn thalir-btn-primary" style="flex: 1;" onclick="openModal('modal-update-passport')">
          ${getIconSvg('file-text', 'w-4 h-4')}
          <span>Update Care Passport</span>
        </button>
        <button class="thalir-btn thalir-btn-sage" style="flex: 1;" onclick="openModal('modal-share-passport')">
          ${getIconSvg('share-2', 'w-4 h-4')}
          <span>Share With Care Team</span>
        </button>
      </div>

      <div style="text-align: center; margin-top: 14px;">
        <p style="font-size: 12px; color: var(--text-muted);">
          ${getIconSvg('lock', 'w-3.5 h-3.5 inline mr-1')}
          Parents have granular control over who can view or edit this passport.
        </p>
      </div>
    </div>
  `;
}

// ==========================================================================
// SCREEN 7 — SCHOOL CONNECT
// ==========================================================================
function renderScreenSchool() {
  const sc = state.data.schoolConnect;

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <div style="display: flex; gap: 8px;">
          <button class="thalir-btn thalir-btn-sage" style="padding: 6px 12px; font-size: 12px;" onclick="openModal('modal-message-teacher')">
            ${getIconSvg('message-circle', 'w-3.5 h-3.5')}
            <span>Message Teacher</span>
          </button>
        </div>
      </div>

      <div style="margin-bottom: 18px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          EDUCATOR COLLABORATION
        </span>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          School Connect
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          “Keep parents and educators connected around the child.”
        </p>
      </div>

      <!-- NEW UPDATES -->
      <div class="thalir-card">
        <div class="section-label">
          <span>NEW UPDATES</span>
          <span class="status-pill blue">Verified School Feed</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${sc.newUpdates.map(u => `
            <div style="padding: 12px; background: var(--surface-subtle); border-radius: var(--radius-md); border-left: 3px solid #3B82F6;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                <span style="font-size: 13px; font-weight: 700; color: var(--text-charcoal);">${u.title}</span>
                <span style="font-size: 11px; color: var(--text-muted);">${u.timestamp}</span>
              </div>
              <p style="font-size: 13px; color: var(--text-slate); line-height: 1.45; font-style: italic;">
                “${u.content}”
              </p>
              <div style="margin-top: 6px; display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 11px; font-weight: 600; color: #1E40AF;">— ${u.author}</span>
                <span class="status-pill blue" style="font-size: 10px;">${u.tag}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- SCHOOL CALENDAR -->
      <div class="thalir-card">
        <div class="section-label">
          <span>SCHOOL CALENDAR</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${sc.calendar.map(event => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; background: var(--surface-subtle); border-radius: var(--radius-md);">
              <div>
                <p style="font-size: 13px; font-weight: 600; color: var(--text-charcoal);">${event.title}</p>
                <p style="font-size: 11px; color: var(--text-muted);">${event.location} · ${event.lead}</p>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <span class="status-pill ${event.type.includes('Parent') ? 'sage' : event.type.includes('Activity') ? 'amber' : 'purple'}">
                  ${event.type}
                </span>
                <p style="font-size: 11px; font-weight: 600; color: var(--text-charcoal); margin-top: 4px;">${event.date}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Bottom CTAs -->
      <div style="display: flex; gap: 10px; margin-top: 14px;">
        <button class="thalir-btn thalir-btn-primary" style="flex: 1;" onclick="openModal('modal-message-teacher')">
          ${getIconSvg('message-circle', 'w-4 h-4')}
          <span>Message Teacher</span>
        </button>
        <button class="thalir-btn thalir-btn-secondary" style="flex: 1;" onclick="openModal('modal-share-school-update')">
          ${getIconSvg('share-2', 'w-4 h-4')}
          <span>Share Update</span>
        </button>
      </div>
    </div>
  `;
}

// ==========================================================================
// SCREEN 8 — CARE SCHEDULE & APPOINTMENTS
// ==========================================================================
function renderScreenAppointments() {
  const apts = state.data.appointments;

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <button class="thalir-btn thalir-btn-secondary" style="padding: 6px 12px; font-size: 12px;" onclick="showToast('Calendar view synced with Google Calendar & iCal')">
          ${getIconSvg('calendar', 'w-3.5 h-3.5')}
          <span>View Calendar</span>
        </button>
      </div>

      <div style="margin-bottom: 18px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          COORDINATED TIMETABLE
        </span>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          Care Schedule
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          Upcoming sessions with your child’s multidisciplinary team.
        </p>
      </div>

      <!-- Appointment List -->
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${apts.map(apt => `
          <div class="thalir-card" style="margin-bottom: 0; border-left: 4px solid ${apt.isToday ? 'var(--primary-sage)' : '#CBD5E1'};">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div>
                <span class="status-pill ${apt.isToday ? 'sage' : 'blue'}" style="margin-bottom: 4px;">
                  ${apt.time}
                </span>
                <h3 style="font-size: 16px; font-weight: 700; color: var(--text-charcoal); margin-top: 4px;">
                  ${apt.service}
                </h3>
              </div>
              <span style="font-size: 11px; font-weight: 600; color: var(--text-muted); background: var(--surface-subtle); padding: 3px 8px; border-radius: 9999px;">
                ${apt.professional}
              </span>
            </div>

            <div style="margin-top: 10px; font-size: 12px; color: var(--text-slate);">
              <p><strong>Location:</strong> ${apt.location}</p>
              <p style="margin-top: 2px;"><strong>Session Focus:</strong> ${apt.focus}</p>
            </div>

            <div style="margin-top: 12px; padding-top: 8px; border-top: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 11px; color: var(--primary-forest); font-weight: 600;">Prep notes linked</span>
              <button class="thalir-btn thalir-btn-sage" style="padding: 4px 10px; font-size: 11px;" onclick="showToast('Appointment reminders sent to Care Team')">
                Session Log
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Actions -->
      <div style="display: flex; gap: 10px; margin-top: 18px;">
        <button class="thalir-btn thalir-btn-primary" style="flex: 1;" onclick="openModal('modal-add-appointment')">
          ${getIconSvg('plus', 'w-4 h-4')}
          <span>Add Appointment</span>
        </button>
        <button class="thalir-btn thalir-btn-secondary" style="flex: 1;" onclick="showToast('Monthly calendar view ready')">
          <span>View Calendar</span>
        </button>
      </div>
    </div>
  `;
}

// ==========================================================================
// SCREEN 9 — FIND PROFESSIONALS
// ==========================================================================
function renderScreenProfessionals() {
  const pros = state.data.professionals;
  const categories = [
    'All',
    'Speech & Language',
    'Occupational Therapy',
    'Psychology',
    'Behavioural Support',
    'Special Education',
    'Physiotherapy'
  ];

  const filteredPros = state.selectedCategoryFilter === 'All' 
    ? pros 
    : pros.filter(p => p.specialization === state.selectedCategoryFilter);

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <button class="thalir-btn ${state.mapViewActive ? 'thalir-btn-primary' : 'thalir-btn-secondary'}" style="padding: 6px 12px; font-size: 12px;" onclick="toggleMapView()">
          ${getIconSvg('map-pin', 'w-3.5 h-3.5')}
          <span>${state.mapViewActive ? 'List View' : 'Map View'}</span>
        </button>
      </div>

      <div style="margin-bottom: 14px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          VERIFIED SUPPORT DIRECTORY
        </span>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          Find the Right Support
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          “Explore professionals and services based on your child’s needs.”
        </p>
      </div>

      <!-- Trust Assurance Note -->
      <div style="background: #F8FAF9; border: 1px solid var(--surface-sage-border); border-radius: var(--radius-md); padding: 8px 12px; margin-bottom: 14px; font-size: 12px; color: var(--primary-forest); display: flex; align-items: center; gap: 8px;">
        ${getIconSvg('shield', 'w-4 h-4 text-emerald-700 flex-shrink-0')}
        <span>All listed clinicians and inclusion mentors are verified by clinical advisory panels.</span>
      </div>

      <!-- Category Filter Pills -->
      <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 14px;">
        ${categories.map(cat => `
          <button class="pitch-btn" style="white-space: nowrap; font-size: 12px; background: ${state.selectedCategoryFilter === cat ? 'var(--primary-forest)' : '#FFFFFF'}; color: ${state.selectedCategoryFilter === cat ? '#FFFFFF' : 'var(--text-charcoal)'}; border: 1px solid ${state.selectedCategoryFilter === cat ? 'var(--primary-forest)' : 'var(--border-light)'};" onclick="setProCategoryFilter('${cat}')">
            ${cat}
          </button>
        `).join('')}
      </div>

      ${state.mapViewActive ? renderMapView() : `
        <!-- Professional Cards List -->
        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${filteredPros.map(p => `
            <div class="thalir-card" style="margin-bottom: 0;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                  <h3 style="font-size: 16px; font-weight: 700; color: var(--text-charcoal);">
                    ${p.name}
                  </h3>
                  <p style="font-size: 13px; font-weight: 600; color: var(--primary-sage); margin-top: 1px;">
                    ${p.title}
                  </p>
                </div>
                <div style="display: flex; align-items: center; gap: 3px; background: #FEF3C7; padding: 2px 7px; border-radius: var(--radius-full); font-size: 12px; font-weight: 700; color: #92400E;">
                  ${getIconSvg('star', 'w-3 h-3 fill-amber-500 text-amber-500')}
                  <span>${p.rating}</span>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 12px; margin: 10px 0; font-size: 12px; color: var(--text-muted); flex-wrap: wrap;">
                <span>${getIconSvg('map-pin', 'w-3.5 h-3.5 inline mr-1')} ${p.distance}</span>
                <span>•</span>
                <span>${p.experience}</span>
                <span>•</span>
                <span class="status-pill sage" style="font-size: 11px;">${p.availability}</span>
              </div>

              <p style="font-size: 12px; color: var(--text-slate); line-height: 1.45; margin-bottom: 12px;">
                ${p.bio}
              </p>

              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 10px;">
                <span style="font-size: 11px; color: var(--text-muted);">${p.location}</span>
                <button class="thalir-btn thalir-btn-primary" style="padding: 6px 14px; font-size: 12px;" onclick="openProModal('${p.id}')">
                  View Profile
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;
}

function setProCategoryFilter(cat) {
  state.selectedCategoryFilter = cat;
  renderApp();
}

function toggleMapView() {
  state.mapViewActive = !state.mapViewActive;
  renderApp();
}

function renderMapView() {
  return `
    <div class="thalir-card" style="padding: 0; overflow: hidden; border-radius: var(--radius-lg);">
      <div style="height: 320px; background: #E5EBE7; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <!-- Simulated Map Grid Pattern -->
        <div style="position: absolute; inset: 0; opacity: 0.15; background-image: radial-gradient(#1A3E33 1.5px, transparent 1.5px); background-size: 20px 20px;"></div>
        
        <!-- Pins -->
        <div style="position: absolute; top: 35%; left: 38%; cursor: pointer;" onclick="openProModal('prof-1')">
          <div style="background: var(--primary-forest); color: #fff; padding: 4px 8px; border-radius: 9999px; font-size: 11px; font-weight: 700; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; gap: 4px;">
            ${getIconSvg('map-pin', 'w-3 h-3')}
            <span>Dr. Meera · 3.2km</span>
          </div>
        </div>

        <div style="position: absolute; top: 60%; left: 62%; cursor: pointer;" onclick="openProModal('prof-2')">
          <div style="background: #1E40AF; color: #fff; padding: 4px 8px; border-radius: 9999px; font-size: 11px; font-weight: 700; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; gap: 4px;">
            ${getIconSvg('map-pin', 'w-3 h-3')}
            <span>David Chen · 4.1km</span>
          </div>
        </div>

        <div style="position: absolute; top: 22%; left: 68%; cursor: pointer;" onclick="openProModal('prof-5')">
          <div style="background: #047857; color: #fff; padding: 4px 8px; border-radius: 9999px; font-size: 11px; font-weight: 700; box-shadow: 0 4px 10px rgba(0,0,0,0.3); display: flex; align-items: center; gap: 4px;">
            ${getIconSvg('map-pin', 'w-3 h-3')}
            <span>Sunita Nair · 2.4km</span>
          </div>
        </div>

        <div style="position: absolute; bottom: 12px; background: rgba(255,255,255,0.92); backdrop-filter: blur(4px); padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 600; color: var(--primary-forest); box-shadow: var(--shadow-subtle);">
          📍 6 Trusted Providers near Alwarpet & Adyar
        </div>
      </div>
      <div style="padding: 12px; text-align: center; background: #FFFFFF;">
        <p style="font-size: 12px; color: var(--text-slate);">Tap any clinic marker to review clinical background and verify slots.</p>
      </div>
    </div>
  `;
}

function openProModal(profId) {
  const p = state.data.professionals.find(item => item.id === profId) || state.data.professionals[0];
  const modal = document.getElementById('modal-pro-profile');
  if (!modal) return;

  const content = document.getElementById('modal-pro-content');
  if (content) {
    content.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: var(--surface-sage-light); color: var(--primary-forest); font-size: 20px; font-weight: 800; display: flex; align-items: center; justify-content: center;">
            ${p.name.split(' ').map(n=>n[0]).slice(-2).join('')}
          </div>
          <div>
            <h3 style="font-size: 18px; font-weight: 800; color: var(--text-charcoal);">${p.name}</h3>
            <p style="font-size: 13px; font-weight: 600; color: var(--primary-sage);">${p.title}</p>
            <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px; font-size: 11px;">
              <span class="status-pill sage">★ ${p.rating} Rating</span>
              <span class="status-pill blue">${p.experience}</span>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 14px; background: var(--surface-subtle); padding: 10px; border-radius: var(--radius-md);">
          <p style="font-size: 12px; color: var(--text-muted); font-weight: 600;">CLINIC / CONSULTING LOCATION</p>
          <p style="font-size: 13px; color: var(--text-charcoal); font-weight: 500; margin-top: 2px;">${p.location} (${p.distance})</p>
          <p style="font-size: 12px; color: var(--primary-forest); font-weight: 600; margin-top: 2px;">● ${p.availability}</p>
        </div>

        <div style="margin-bottom: 14px;">
          <p style="font-size: 12px; color: var(--text-muted); font-weight: 600; margin-bottom: 4px;">BIOGRAPHY & SPECIALIZATION</p>
          <p style="font-size: 13px; color: var(--text-slate); line-height: 1.5;">${p.bio}</p>
        </div>

        <div class="clinical-disclaimer-box calm-sage">
          <p>
            Connected care: When booked through Thalir, consultations can directly sync into Arjun's Care Passport with parental consent.
          </p>
        </div>
      </div>
    `;
  }
  openModal('modal-pro-profile');
}

// ==========================================================================
// SCREEN 10 — ASSISTIVE COMMUNICATION (AAC VISUAL BOARD)
// ==========================================================================
function renderScreenCommunication() {
  const buttons = state.data.aacButtons;

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <span class="status-pill sage">AAC System</span>
      </div>

      <div style="margin-bottom: 14px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          ASSISTIVE COMMUNICATION
        </span>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          Communication
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          “A simple way for children to express everyday needs.”
        </p>
      </div>

      <!-- ACTIVE SENTENCE DISPLAY BAR -->
      <div class="aac-sentence-bar">
        <div class="sentence-display" id="aac-active-sentence">
          ${state.aacSentence 
            ? `<span>“${state.aacSentence}”</span>`
            : `<span class="sentence-placeholder">Tap tiles below to build a message...</span>`
          }
        </div>
        <div class="aac-actions">
          <button id="btn-speak-sentence" class="btn-speak ${state.aacSpeaking ? 'speaking' : ''}" onclick="speakAacSentence()">
            ${getIconSvg('volume-2', 'w-4 h-4')}
            <span>Speak</span>
          </button>
          <button class="btn-clear" onclick="clearAacSentence()">
            Clear
          </button>
        </div>
      </div>

      <!-- AAC 10 ACCESSIBLE BUTTONS -->
      <div class="aac-grid">
        ${buttons.map(b => `
          <div class="aac-tile" onclick="pressAacButton('${b.code}', '${b.phrase}')">
            <div class="aac-tile-icon">
              ${getIconSvg(b.icon, 'w-7 h-7')}
            </div>
            <span class="aac-tile-code">${b.label}</span>
          </div>
        `).join('')}
      </div>

      <!-- Custom Board & Add Phrase Actions -->
      <div style="display: flex; gap: 10px; margin-top: 14px;">
        <button class="thalir-btn thalir-btn-secondary" style="flex: 1;" onclick="openModal('modal-add-phrase')">
          ${getIconSvg('plus', 'w-4 h-4')}
          <span>Add Phrase</span>
        </button>
        <button class="thalir-btn thalir-btn-sage" style="flex: 1;" onclick="openModal('modal-custom-board')">
          ${getIconSvg('sparkles', 'w-4 h-4')}
          <span>Create Custom Board</span>
        </button>
      </div>

      <!-- Non-diagnostic / Non-medical Disclaimer -->
      <div class="clinical-disclaimer-box" style="margin-top: 16px;">
        <div style="color: #92400E; flex-shrink: 0;">
          ${getIconSvg('help-circle', 'w-4 h-4')}
        </div>
        <p>
          <strong>Important:</strong> This is an assistive communication concept, not a medical diagnosis or treatment tool. It facilitates functional everyday expression.
        </p>
      </div>
    </div>
  `;
}

function pressAacButton(code, phrase) {
  state.aacSentence = phrase;
  const display = document.getElementById('aac-active-sentence');
  if (display) {
    display.innerHTML = `<span style="color: var(--primary-forest); font-weight: 700;">“${phrase}”</span>`;
  }
  // Audio Speech Output
  speakText(phrase);
}

function speakAacSentence() {
  if (!state.aacSentence) {
    speakText("I want water.");
    state.aacSentence = "I want water.";
    const display = document.getElementById('aac-active-sentence');
    if (display) display.innerHTML = `<span style="color: var(--primary-forest); font-weight: 700;">“I want water.”</span>`;
  } else {
    speakText(state.aacSentence);
  }
}

function clearAacSentence() {
  state.aacSentence = '';
  const display = document.getElementById('aac-active-sentence');
  if (display) {
    display.innerHTML = `<span class="sentence-placeholder">Tap tiles below to build a message...</span>`;
  }
}

// ==========================================================================
// SCREEN 11 — EARLY AWARENESS
// ==========================================================================
function renderScreenAwareness() {
  const ea = state.data.earlyAwareness;

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <span class="status-pill sage">Education & Guidance</span>
      </div>

      <div style="margin-bottom: 14px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          AWARENESS & DEVELOPMENT
        </span>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          Early Awareness
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          “Learn about developmental and behavioural concerns and understand when to seek professional guidance.”
        </p>
      </div>

      <!-- CLINICAL DISCLAIMER BANNER (MANDATORY EXACT WORDING) -->
      <div class="clinical-disclaimer-box" style="margin-bottom: 16px;">
        <div style="color: #854D0E; flex-shrink: 0;">
          ${getIconSvg('alert-triangle', 'w-5 h-5')}
        </div>
        <p style="font-size: 13px; font-weight: 600; color: #713F12; line-height: 1.45;">
          “Awareness information is not a diagnosis. Only a qualified professional can provide a clinical assessment.”
        </p>
      </div>

      <!-- Questionnaire CTA -->
      <div class="thalir-card" style="background: #F0FDF4; border-color: #BBF7D0; margin-bottom: 16px;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div>
            <h3 style="font-size: 15px; font-weight: 700; color: #166534;">Self-Reflection Tool</h3>
            <p style="font-size: 12px; color: #15803D; margin-top: 2px;">Explore an Awareness Questionnaire to reflect on support needs.</p>
          </div>
          <button class="thalir-btn thalir-btn-primary" style="padding: 8px 14px; font-size: 12px; white-space: nowrap;" onclick="openModal('modal-questionnaire')">
            Start Questionnaire
          </button>
        </div>
      </div>

      <!-- Educational Domain Cards -->
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${ea.cards.map((c, idx) => `
          <div class="thalir-card" style="margin-bottom: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h3 style="font-size: 16px; font-weight: 700; color: var(--text-charcoal);">${c.title}</h3>
              <button class="thalir-btn thalir-btn-sage" style="padding: 4px 10px; font-size: 11px;" onclick="toggleCardDetails('ea-details-${idx}')">
                Learn More
              </button>
            </div>
            <p style="font-size: 13px; color: var(--text-slate); margin-top: 6px; line-height: 1.45;">
              ${c.summary}
            </p>
            <div id="ea-details-${idx}" style="display: none; margin-top: 10px; padding-top: 10px; border-top: 1px dashed var(--border-light); font-size: 12px; color: var(--text-slate); line-height: 1.5;">
              <p>${c.details}</p>
              <div style="margin-top: 8px; background: var(--surface-subtle); padding: 8px 10px; border-radius: var(--radius-md);">
                <strong style="color: var(--primary-forest);">When to seek guidance:</strong> If concerns persist across home and school settings, consult a multidisciplinary developmental pediatrician.
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function toggleCardDetails(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

// ==========================================================================
// SCREEN 12 — FAMILY RESOURCES
// ==========================================================================
function renderScreenResources() {
  const res = state.data.familyResources;
  const tabs = ['For Parents', 'For Caregivers', 'For Educators', 'Understanding Your Child'];

  const filtered = res.filter(r => r.section === state.selectedResourceTab);

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <span class="status-pill sage">Knowledge Base</span>
      </div>

      <div style="margin-bottom: 14px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          FAMILY & EDUCATOR GUIDES
        </span>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          Resources
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          Practical guides, everyday strategies, and inclusive tools.
        </p>
      </div>

      <!-- Resource Navigation Tabs -->
      <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 14px;">
        ${tabs.map(tab => `
          <button class="pitch-btn" style="white-space: nowrap; font-size: 12px; background: ${state.selectedResourceTab === tab ? 'var(--primary-forest)' : '#FFFFFF'}; color: ${state.selectedResourceTab === tab ? '#FFFFFF' : 'var(--text-charcoal)'}; border: 1px solid ${state.selectedResourceTab === tab ? 'var(--primary-forest)' : 'var(--border-light)'};" onclick="setResourceTab('${tab}')">
            ${tab}
          </button>
        `).join('')}
      </div>

      <!-- Resource Articles -->
      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${(filtered.length ? filtered : res.slice(0, 3)).map(article => `
          <div class="thalir-card" style="margin-bottom: 0;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span class="status-pill sage">${article.category}</span>
              <span style="font-size: 11px; color: var(--text-muted);">${article.readTime}</span>
            </div>
            <h3 style="font-size: 15px; font-weight: 700; color: var(--text-charcoal); margin: 6px 0 4px;">
              ${article.title}
            </h3>
            <p style="font-size: 12px; color: var(--text-slate); line-height: 1.45;">
              ${article.description}
            </p>
            <div style="margin-top: 10px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 8px;">
              <span style="font-size: 11px; color: var(--text-muted);">By ${article.author}</span>
              <button class="thalir-btn thalir-btn-secondary" style="padding: 4px 10px; font-size: 11px;" onclick="showToast('Article saved to your Offline Reading library')">
                Read Guide
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function setResourceTab(tab) {
  state.selectedResourceTab = tab;
  renderApp();
}

// ==========================================================================
// SCREEN 13 — NOTIFICATIONS
// ==========================================================================
function renderScreenNotifications() {
  const notifs = state.data.notifications;

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <button class="thalir-btn thalir-btn-secondary" style="padding: 4px 10px; font-size: 11px;" onclick="markAllNotifsRead()">
          Mark all as read
        </button>
      </div>

      <div style="margin-bottom: 16px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          REAL-TIME ALERTS
        </span>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          Notifications
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          Updates from Arjun’s school, therapists, and care team.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${notifs.map(n => `
          <div class="thalir-card interactive" style="margin-bottom: 0; background: ${n.read ? 'var(--surface-card)' : '#FAFDFB'}; border-left: 3px solid ${n.read ? 'var(--border-light)' : 'var(--primary-sage)'};" onclick="handleNotificationClick('${n.id}', '${n.targetScreen}')">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h3 style="font-size: 14px; font-weight: ${n.read ? '600' : '700'}; color: var(--text-charcoal);">
                ${n.title}
              </h3>
              ${!n.read ? '<span class="status-pill sage" style="font-size: 10px;">Unread</span>' : ''}
            </div>
            <p style="font-size: 12px; color: var(--text-slate); margin-top: 4px;">
              ${n.summary}
            </p>
            <div style="margin-top: 6px; display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 11px; color: var(--text-muted);">${n.timestamp}</span>
              <span style="font-size: 11px; font-weight: 600; color: var(--primary-sage); display: flex; align-items: center; gap: 2px;">
                <span>View details</span>
                ${getIconSvg('chevron-right', 'w-3 h-3')}
              </span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function handleNotificationClick(notifId, targetScreen) {
  const n = state.data.notifications.find(item => item.id === notifId);
  if (n) n.read = true;
  navigateTo(targetScreen);
}

function markAllNotifsRead() {
  state.data.notifications.forEach(n => n.read = true);
  showToast('All notifications marked as read');
  renderApp();
}

// ==========================================================================
// SCREEN 14 — CARE TEAM
// ==========================================================================
function renderScreenCareTeam() {
  const team = state.data.careTeam;

  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <button class="thalir-btn thalir-btn-primary" style="padding: 6px 12px; font-size: 12px;" onclick="openModal('modal-invite-member')">
          ${getIconSvg('plus', 'w-3.5 h-3.5')}
          <span>Invite Member</span>
        </button>
      </div>

      <div style="margin-bottom: 16px;">
        <span style="font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--primary-sage);">
          COORDINATED SUPPORT CIRCLE
        </span>
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          My Care Team
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          Active professionals and caregivers connected to Arjun’s care journey.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px;">
        ${team.map(m => `
          <div class="thalir-card" style="margin-bottom: 0;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 40px; height: 40px; border-radius: 50%; background: var(--surface-sage-light); color: var(--primary-forest); font-size: 14px; font-weight: 700; display: flex; align-items: center; justify-content: center;">
                  ${m.initials}
                </div>
                <div>
                  <h3 style="font-size: 15px; font-weight: 700; color: var(--text-charcoal);">${m.name}</h3>
                  <p style="font-size: 12px; color: var(--text-muted);">${m.role}</p>
                </div>
              </div>
              <span class="status-pill ${m.avatarColor}">${m.badge}</span>
            </div>

            <div style="margin: 10px 0 8px; padding: 8px 10px; background: var(--surface-subtle); border-radius: var(--radius-md);">
              <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 2px;">ACCESS LEVEL</p>
              <p style="font-size: 12px; font-weight: 600; color: var(--primary-forest);">${m.accessLevel}</p>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: var(--text-muted); padding-top: 4px;">
              <span>${m.affiliation}</span>
              <button class="thalir-btn thalir-btn-secondary" style="padding: 3px 8px; font-size: 11px;" onclick="openModal('modal-share-passport')">
                Permissions
              </button>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="text-align: center; margin-top: 18px;">
        <button class="thalir-btn thalir-btn-sage thalir-btn-full" onclick="openModal('modal-invite-member')">
          ${getIconSvg('plus', 'w-4 h-4')}
          <span>Invite Care Team Member</span>
        </button>
      </div>
    </div>
  `;
}

// ==========================================================================
// SCREEN 15 — SETTINGS & PRIVACY
// ==========================================================================
function renderScreenSettings() {
  return `
    <div>
      <div class="screen-sub-header">
        <button class="btn-back" onclick="navigateBack()">
          ${getIconSvg('arrow-left', 'w-4 h-4')}
          <span>Back</span>
        </button>
        <span class="status-pill sage">Settings</span>
      </div>

      <div style="margin-bottom: 16px;">
        <h2 style="font-size: 24px; font-weight: 800; color: var(--text-charcoal); letter-spacing: -0.01em;">
          Settings
        </h2>
        <p style="font-size: 13px; color: var(--text-slate); margin-top: 2px;">
          Manage accounts, permissions, and security.
        </p>
      </div>

      <!-- PROMINENT PRIVACY EXPLANATION CARD (MANDATORY REQUIREMENT) -->
      <div class="thalir-card" style="background: #F0FDF4; border: 1.5px solid #86EFAC;">
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <div style="color: #166534; flex-shrink: 0; margin-top: 2px;">
            ${getIconSvg('shield', 'w-5 h-5')}
          </div>
          <div>
            <h3 style="font-size: 15px; font-weight: 700; color: #166534;">
              You control your child’s information.
            </h3>
            <p style="font-size: 13px; color: #15803D; margin-top: 4px; line-height: 1.45;">
              “Choose who can view or contribute to your child’s care information.”
            </p>
          </div>
        </div>
      </div>

      <!-- Settings Sections List -->
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div class="thalir-card interactive" style="margin-bottom: 0; padding: 14px;" onclick="navigateTo('profile')">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${getIconSvg('user', 'w-4 h-4 text-slate-500')}
              <div>
                <p style="font-size: 14px; font-weight: 600; color: var(--text-charcoal);">Profile</p>
                <p style="font-size: 11px; color: var(--text-muted);">Ananya (Mother / Primary Admin)</p>
              </div>
            </div>
            ${getIconSvg('chevron-right', 'w-4 h-4 text-muted')}
          </div>
        </div>

        <div class="thalir-card interactive" style="margin-bottom: 0; padding: 14px;" onclick="navigateTo('profile')">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${getIconSvg('heart', 'w-4 h-4 text-slate-500')}
              <div>
                <p style="font-size: 14px; font-weight: 600; color: var(--text-charcoal);">Child Profiles</p>
                <p style="font-size: 11px; color: var(--text-muted);">Arjun · 8 years</p>
              </div>
            </div>
            ${getIconSvg('chevron-right', 'w-4 h-4 text-muted')}
          </div>
        </div>

        <div class="thalir-card interactive" style="margin-bottom: 0; padding: 14px;" onclick="navigateTo('care_team')">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${getIconSvg('users', 'w-4 h-4 text-slate-500')}
              <div>
                <p style="font-size: 14px; font-weight: 600; color: var(--text-charcoal);">Care Team Access</p>
                <p style="font-size: 11px; color: var(--text-muted);">4 active members with tailored roles</p>
              </div>
            </div>
            ${getIconSvg('chevron-right', 'w-4 h-4 text-muted')}
          </div>
        </div>

        <div class="thalir-card interactive" style="margin-bottom: 0; padding: 14px;" onclick="openModal('modal-share-passport')">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${getIconSvg('lock', 'w-4 h-4 text-slate-500')}
              <div>
                <p style="font-size: 14px; font-weight: 600; color: var(--text-charcoal);">Privacy & Permissions</p>
                <p style="font-size: 11px; color: var(--text-muted);">Granular data sharing and audit trail</p>
              </div>
            </div>
            ${getIconSvg('chevron-right', 'w-4 h-4 text-muted')}
          </div>
        </div>

        <div class="thalir-card interactive" style="margin-bottom: 0; padding: 14px;" onclick="navigateTo('notifications')">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${getIconSvg('bell', 'w-4 h-4 text-slate-500')}
              <div>
                <p style="font-size: 14px; font-weight: 600; color: var(--text-charcoal);">Notifications</p>
                <p style="font-size: 11px; color: var(--text-muted);">Push, therapy alerts, and school notes</p>
              </div>
            </div>
            ${getIconSvg('chevron-right', 'w-4 h-4 text-muted')}
          </div>
        </div>

        <div class="thalir-card interactive" style="margin-bottom: 0; padding: 14px;" onclick="showToast('Language selector: English (US/UK), Tamil, Hindi')">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${getIconSvg('compass', 'w-4 h-4 text-slate-500')}
              <div>
                <p style="font-size: 14px; font-weight: 600; color: var(--text-charcoal);">Language</p>
                <p style="font-size: 11px; color: var(--text-muted);">English (Bilingual support enabled)</p>
              </div>
            </div>
            ${getIconSvg('chevron-right', 'w-4 h-4 text-muted')}
          </div>
        </div>

        <div class="thalir-card interactive" style="margin-bottom: 0; padding: 14px;" onclick="showToast('Thalir Family Help Center available 24/7')">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${getIconSvg('help-circle', 'w-4 h-4 text-slate-500')}
              <div>
                <p style="font-size: 14px; font-weight: 600; color: var(--text-charcoal);">Help & Support</p>
                <p style="font-size: 11px; color: var(--text-muted);">Guides, FAQs, and coordinator support</p>
              </div>
            </div>
            ${getIconSvg('chevron-right', 'w-4 h-4 text-muted')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// MODAL CONTROLS & SUBMISSION HANDLERS
// ==========================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function submitAddProgress() {
  const cat = document.getElementById('prog-category').value;
  const note = document.getElementById('prog-observation').value;
  const author = document.getElementById('prog-author').value;

  if (!note) {
    alert('Please enter an observation note.');
    return;
  }

  // Add to state data timeline
  state.data.progressPassport.timeline.unshift({
    id: 'tl-' + Date.now(),
    category: cat,
    authorRole: author,
    authorName: author.includes('Parent') ? 'Ananya' : author.includes('Teacher') ? 'Ms. Kavya' : 'Dr. Meera Krishnan',
    date: 'Just now',
    note: note,
    tag: 'Live Update'
  });

  closeModal('modal-add-progress');
  showToast('Progress update recorded to shared passport');
  renderApp();
}

function submitAddAppointment() {
  const service = document.getElementById('apt-service').value;
  const date = document.getElementById('apt-date').value;
  const prof = document.getElementById('apt-prof').value;

  state.data.appointments.unshift({
    id: 'apt-' + Date.now(),
    service: service,
    time: date || 'Next week · Scheduled',
    professional: prof,
    location: 'CareSteps Clinic / Academy',
    focus: 'Clinical developmental review',
    isToday: false
  });

  closeModal('modal-add-appointment');
  showToast('Appointment successfully scheduled');
  renderApp();
}

function submitMessageTeacher() {
  const msg = document.getElementById('teacher-message-text').value;
  if (!msg) return;

  closeModal('modal-message-teacher');
  showToast('Message sent to Ms. Kavya (Class Teacher)');
}

function submitSharePermissions() {
  closeModal('modal-share-passport');
  showToast('Care Passport permissions updated successfully');
}

function submitQuestionnaire() {
  const summaryBox = document.getElementById('quiz-result-box');
  if (summaryBox) {
    summaryBox.style.display = 'block';
  }
}

function resetQuestionnaire() {
  const summaryBox = document.getElementById('quiz-result-box');
  if (summaryBox) summaryBox.style.display = 'none';
  closeModal('modal-questionnaire');
}

// Device View Mode Toggle
function setViewMode(mode) {
  state.viewMode = mode;
  const container = document.getElementById('device-wrapper');
  const btnFrame = document.getElementById('btn-mode-frame');
  const btnExpanded = document.getElementById('btn-mode-expanded');

  if (mode === 'frame') {
    container.classList.remove('mode-expanded');
    container.classList.add('mode-frame');
    if (btnFrame) btnFrame.classList.add('active');
    if (btnExpanded) btnExpanded.classList.remove('active');
  } else {
    container.classList.remove('mode-frame');
    container.classList.add('mode-expanded');
    if (btnExpanded) btnExpanded.classList.add('active');
    if (btnFrame) btnFrame.classList.remove('active');
  }
}

// Global DOM & Screen Event Listeners
function attachScreenListeners() {
  const startBtn = document.getElementById('btn-welcome-start');
  if (startBtn) {
    startBtn.onclick = () => navigateTo('role');
  }

  const roleParent = document.getElementById('role-card-parent');
  if (roleParent) {
    roleParent.onclick = () => navigateTo('dashboard');
  }

  const roleEducator = document.getElementById('role-card-educator');
  if (roleEducator) {
    roleEducator.onclick = () => navigateTo('school');
  }

  const roleTherapist = document.getElementById('role-card-therapist');
  if (roleTherapist) {
    roleTherapist.onclick = () => navigateTo('progress');
  }

  const childSelector = document.getElementById('btn-switch-child');
  if (childSelector) {
    childSelector.onclick = () => navigateTo('profile');
  }
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
