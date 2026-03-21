import { Project, Activity, Invoice, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Nebula Cloud Interface',
    description: 'Designing a high-fidelity cloud management dashboard for decentralized infrastructure monitoring.',
    progress: 65,
    status: 'active',
    dueDate: 'Oct 24',
    team: ['https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2'],
    icon: 'cloud_queue'
  },
  {
    id: '2',
    name: 'Quantum API Gateway',
    description: 'Developing a secure, low-latency API gateway for high-frequency financial transactions.',
    progress: 12,
    status: 'pending',
    dueDate: 'Nov 12',
    team: ['https://i.pravatar.cc/150?u=3'],
    icon: 'terminal'
  },
  {
    id: '3',
    name: 'Elysian App Redesign',
    description: 'Full ecosystem visual overhaul for the Elysian mobile app focusing on glassmorphism principles.',
    progress: 100,
    status: 'completed',
    dueDate: 'Aug 15',
    team: ['https://i.pravatar.cc/150?u=4', 'https://i.pravatar.cc/150?u=5'],
    icon: 'auto_awesome'
  },
  {
    id: '4',
    name: 'Vortex Marketplace',
    description: 'Developing an NFT marketplace with real-time bidding and 3D asset visualization features.',
    progress: 45,
    status: 'active',
    dueDate: 'Dec 05',
    team: ['https://i.pravatar.cc/150?u=6', 'https://i.pravatar.cc/150?u=7'],
    icon: 'shopping_bag'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    type: 'task',
    content: 'Task completed in Neo-Finance Redesign',
    time: '2 hours ago'
  },
  {
    id: '2',
    type: 'file',
    content: 'File uploaded to Mobile App v2',
    time: '5 hours ago'
  },
  {
    id: '3',
    type: 'message',
    content: 'New message from Sarah Jenkins',
    time: 'Yesterday'
  },
  {
    id: '4',
    type: 'login',
    content: 'Session login from Chrome Mac OS',
    time: '2 days ago'
  }
];

export const INVOICES: Invoice[] = [
  { id: 'INV-2023-012', date: 'Oct 24, 2023', dueDate: 'Nov 07, 2023', amount: 2400, status: 'paid' },
  { id: 'INV-2023-011', date: 'Oct 20, 2023', dueDate: 'Nov 03, 2023', amount: 1240, status: 'pending' },
  { id: 'INV-2023-010', date: 'Sep 15, 2023', dueDate: 'Sep 29, 2023', amount: 3100, status: 'overdue' },
  { id: 'INV-2023-009', date: 'Sep 01, 2023', dueDate: 'Sep 15, 2023', amount: 1550, status: 'paid' }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Custom UI/UX Design',
    description: 'Transformation of your digital identity through high-fidelity prototypes and conversion-optimized interfaces.',
    price: '$4,999',
    unit: 'project',
    tags: ['Design Systems', 'User Testing'],
    icon: 'brush',
    color: 'indigo'
  },
  {
    id: '2',
    name: 'Full-stack Engineering',
    description: 'End-to-end engineering from scalable backends to reactive frontends. Built for high performance.',
    price: '$120',
    unit: 'hr',
    tags: ['React', 'Node.js'],
    icon: 'code',
    color: 'orange'
  },
  {
    id: '3',
    name: 'Cloud Infrastructure',
    description: 'AWS/Azure architecture setup with automated CI/CD pipelines and 99.9% uptime guarantee.',
    price: '$1,250',
    unit: 'mo',
    tags: ['DevOps', 'Security'],
    icon: 'cloud_done',
    color: 'indigo'
  },
  {
    id: '4',
    name: 'Security Audit',
    description: 'Comprehensive penetration testing and vulnerability assessment for enterprise applications.',
    price: '$2,800',
    unit: 'audit',
    tags: ['Pentest', 'Compliance'],
    icon: 'security',
    color: 'red'
  }
];
