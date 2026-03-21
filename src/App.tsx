/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopNav } from './components/TopNav';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import { ProjectWorkspace } from './pages/ProjectWorkspace';
import { Files } from './pages/Files';
import { Billing } from './pages/Billing';
import { OrderService } from './pages/OrderService';
import { Profile } from './pages/Profile';
import { Inbox } from './pages/Inbox';
import { Page } from './types';
import SettingsHub from './pages/settings/SettingsHub';
import AccountSecurity from './pages/settings/AccountSecurity';
import Notifications from './pages/settings/Notifications';
import PrivacyData from './pages/settings/PrivacyData';
import PreferencesInfo from './pages/settings/PreferencesInfo';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'projects': return <Projects onSelectProject={() => setCurrentPage('project-details')} />;
      case 'project-details': return <ProjectDetails onBack={() => setCurrentPage('projects')} />;
      case 'workspace': return <ProjectWorkspace />;
      case 'files': return <Files />;
      case 'billing': return <Billing />;
      case 'services': return <OrderService />;
      case 'profile': return <Profile />;
      case 'notifications': return <Inbox />;
      case 'settings': return <SettingsHub onNavigate={setCurrentPage} />;
      case 'settings-account': return <AccountSecurity onNavigate={setCurrentPage} />;
      case 'settings-notifications': return <Notifications onNavigate={setCurrentPage} />;
      case 'settings-privacy': return <PrivacyData onNavigate={setCurrentPage} />;
      case 'settings-preferences': return <PreferencesInfo onNavigate={setCurrentPage} />;
      default: return <Dashboard />;
    }
  };

  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard': return 'Command Center';
      case 'projects': return 'Projects List';
      case 'project-details': return 'Project Details';
      case 'workspace': return 'Project Workspace';
      case 'files': return 'Files & Deliverables';
      case 'billing': return 'Billing Overview';
      case 'services': return 'Solutions Catalog';
      case 'profile': return 'Your Profile';
      case 'notifications': return 'Inbox';
      case 'settings': return 'Settings Hub';
      case 'settings-account': return 'Security Hub';
      case 'settings-notifications': return 'Notification Preferences';
      case 'settings-privacy': return 'Privacy & Data';
      case 'settings-preferences': return 'Preferences & System Info';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="ml-64 min-h-screen flex flex-col">
        <TopNav title={getPageTitle()} />
        
        <div className={`pt-24 px-10 pb-12 flex-1 ${currentPage === 'workspace' ? 'p-0' : ''}`}>
          {renderPage()}
        </div>

        {currentPage !== 'workspace' && (
          <footer className="px-10 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                Systems Operational
              </span>
              <span className="h-1 w-1 bg-white/10 rounded-full"></span>
              <span>Last Updated: 2 mins ago</span>
            </div>
            <div>
              © 2026 Xenon Studios • v3.1.0-nexus
            </div>
          </footer>
        )}
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#6366F1]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[40%] bg-[#6366F1]/5 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
}
