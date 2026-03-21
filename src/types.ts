import React from 'react';

export type Page = 
  | 'dashboard' 
  | 'projects' 
  | 'workspace' 
  | 'files' 
  | 'billing' 
  | 'services' 
  | 'profile' 
  | 'settings'
  | 'settings-account'
  | 'settings-notifications'
  | 'settings-privacy'
  | 'settings-preferences';

export interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: 'active' | 'pending' | 'completed';
  dueDate: string;
  team: string[];
  icon: string;
}

export interface Activity {
  id: string;
  type: 'task' | 'file' | 'message' | 'login';
  content: string;
  project?: string;
  user?: string;
  time: string;
}

export interface Invoice {
  id: string;
  date: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  unit: string;
  tags: string[];
  icon: string;
  color: string;
}
