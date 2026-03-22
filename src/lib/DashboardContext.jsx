import { createContext, useContext, useReducer } from 'react'

const defaultAgents = [
  {
    id: 'super-agent',
    name: 'Super Agent',
    icon: 'hub',
    description: 'Central orchestrator — research, content, multi-step workflows',
    category: 'core',
    status: 'active',
    model: 'Mixture-of-Agents',
    tasksCompleted: 847,
    successRate: 94.2,
    creditsUsed: 3420,
    color: '#81ecff',
  },
  {
    id: 'brand-agent',
    name: 'Brand Agent',
    icon: 'palette',
    description: 'Brand consistency, copy review, tone-of-voice enforcement',
    category: 'marketing',
    status: 'active',
    model: 'Claude Opus 4.6',
    tasksCompleted: 312,
    successRate: 97.1,
    creditsUsed: 1250,
    color: '#81ecff',
  },
  {
    id: 'product-agent',
    name: 'Product Agent',
    icon: 'inventory_2',
    description: 'Formulation tracking, supplier comms, QA documentation',
    category: 'operations',
    status: 'active',
    model: 'Claude Sonnet 4.6',
    tasksCompleted: 189,
    successRate: 96.8,
    creditsUsed: 890,
    color: '#00d4ec',
  },
  {
    id: 'marketing-agent',
    name: 'Marketing Agent',
    icon: 'campaign',
    description: 'Content creation, social posts, email sequences, ad copy',
    category: 'marketing',
    status: 'active',
    model: 'Claude Opus 4.6',
    tasksCompleted: 534,
    successRate: 92.5,
    creditsUsed: 2100,
    color: '#81ecff',
  },
  {
    id: 'analytics-agent',
    name: 'Analytics Agent',
    icon: 'analytics',
    description: 'Sales metrics, customer insights, funnel analysis, KPI tracking',
    category: 'data',
    status: 'active',
    model: 'Claude Sonnet 4.6',
    tasksCompleted: 267,
    successRate: 98.3,
    creditsUsed: 1050,
    color: '#55e3e3',
  },
  {
    id: 'supplier-agent',
    name: 'Supplier Agent',
    icon: 'local_shipping',
    description: 'Supplier outreach, negotiation prep, order tracking, COA review',
    category: 'operations',
    status: 'active',
    model: 'Claude Sonnet 4.6',
    tasksCompleted: 98,
    successRate: 95.0,
    creditsUsed: 420,
    color: '#00d4ec',
  },
  {
    id: 'design-agent',
    name: 'Design Agent',
    icon: 'brush',
    description: 'Packaging mockups, social graphics, presentation design',
    category: 'creative',
    status: 'idle',
    model: 'Gemini + DALL-E',
    tasksCompleted: 156,
    successRate: 89.7,
    creditsUsed: 780,
    color: '#d7e5ec',
  },
  {
    id: 'customer-agent',
    name: 'Customer Agent',
    icon: 'support_agent',
    description: 'Customer support, FAQ responses, review management',
    category: 'support',
    status: 'idle',
    model: 'Claude Haiku 4.5',
    tasksCompleted: 0,
    successRate: 0,
    creditsUsed: 0,
    color: '#a7abb9',
  },
  {
    id: 'autopilot',
    name: 'Autopilot',
    icon: 'auto_mode',
    description: 'Autonomous multi-step workflows — runs tasks in the background',
    category: 'core',
    status: 'active',
    model: 'Multi-Model Orchestration',
    tasksCompleted: 45,
    successRate: 91.1,
    creditsUsed: 560,
    color: '#81ecff',
  },
]

const defaultHubs = [
  {
    id: 'hub-launch',
    name: 'Q3 2026 Launch',
    description: 'Product launch coordination — RESET + PRALINES first drop',
    icon: 'rocket_launch',
    conversations: 23,
    lastActive: '2 hours ago',
    agents: ['super-agent', 'brand-agent', 'marketing-agent'],
  },
  {
    id: 'hub-suppliers',
    name: 'Supplier Pipeline',
    description: 'Manufacturer evaluation, sampling, and contract negotiation',
    icon: 'factory',
    conversations: 15,
    lastActive: '4 hours ago',
    agents: ['supplier-agent', 'product-agent'],
  },
  {
    id: 'hub-content',
    name: 'Content Engine',
    description: 'Social media content calendar, email sequences, blog posts',
    icon: 'edit_note',
    conversations: 38,
    lastActive: '30 min ago',
    agents: ['marketing-agent', 'brand-agent', 'design-agent'],
  },
  {
    id: 'hub-formulation',
    name: 'Formulation Lab',
    description: 'RESET, RITUAL, PRALINES recipe development and testing',
    icon: 'science',
    conversations: 11,
    lastActive: '1 day ago',
    agents: ['product-agent'],
  },
]

const defaultDriveFiles = [
  { id: 'f1', name: 'Brand Guidelines v3.2', type: 'doc', size: '2.4 MB', modified: 'Mar 20, 2026', agent: 'brand-agent' },
  { id: 'f2', name: 'RESET Formulation Brief', type: 'doc', size: '1.1 MB', modified: 'Mar 19, 2026', agent: 'product-agent' },
  { id: 'f3', name: 'Q3 Launch Deck', type: 'slides', size: '8.7 MB', modified: 'Mar 22, 2026', agent: 'marketing-agent' },
  { id: 'f4', name: 'Supplier Evaluation Matrix', type: 'sheet', size: '340 KB', modified: 'Mar 18, 2026', agent: 'supplier-agent' },
  { id: 'f5', name: 'Social Content Calendar', type: 'sheet', size: '520 KB', modified: 'Mar 21, 2026', agent: 'marketing-agent' },
  { id: 'f6', name: 'Packaging Mockups — PRALINES', type: 'image', size: '15.2 MB', modified: 'Mar 17, 2026', agent: 'design-agent' },
  { id: 'f7', name: 'Customer Persona Research', type: 'doc', size: '890 KB', modified: 'Mar 15, 2026', agent: 'analytics-agent' },
  { id: 'f8', name: 'Competitor Analysis Report', type: 'doc', size: '1.8 MB', modified: 'Mar 14, 2026', agent: 'super-agent' },
]

const DashboardContext = createContext(null)
const DashboardDispatchContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'SET_VIEW':
      return { ...state, currentView: action.view }
    case 'TOGGLE_AGENT':
      return {
        ...state,
        agents: state.agents.map((a) =>
          a.id === action.agentId
            ? { ...a, status: a.status === 'active' ? 'idle' : 'active' }
            : a
        ),
      }
    case 'ADD_AGENT':
      return { ...state, agents: [...state.agents, action.agent] }
    case 'DELETE_AGENT':
      return { ...state, agents: state.agents.filter((a) => a.id !== action.agentId) }
    case 'SELECT_HUB':
      return { ...state, selectedHub: action.hubId }
    case 'ADD_HUB':
      return { ...state, hubs: [...state.hubs, action.hub] }
    default:
      return state
  }
}

const initialState = {
  currentView: 'overview',
  agents: defaultAgents,
  hubs: defaultHubs,
  driveFiles: defaultDriveFiles,
  selectedHub: null,
  credits: { used: 10470, total: 15000, resetDate: 'Apr 1, 2026' },
  team: { name: 'DAY//AFTR LABS', members: 3, plan: 'Pro' },
}

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <DashboardContext.Provider value={state}>
      <DashboardDispatchContext.Provider value={dispatch}>
        {children}
      </DashboardDispatchContext.Provider>
    </DashboardContext.Provider>
  )
}

export function useDashboard() {
  return useContext(DashboardContext)
}

export function useDashboardDispatch() {
  return useContext(DashboardDispatchContext)
}
