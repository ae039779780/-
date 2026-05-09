export const platformStats = [
  { value: '9+', label: 'Specialized Agents', icon: 'smart_toy' },
  { value: '9', label: 'LLM Models', icon: 'hub' },
  { value: '15K+', label: 'Monthly Credits', icon: 'toll' },
  { value: '94.2%', label: 'Task Success Rate', icon: 'verified' },
]

export const agentShowcaseData = [
  {
    id: 'super-agent',
    name: 'Super Agent',
    icon: 'hub',
    tagline: 'The Orchestrator',
    description: 'Central intelligence that coordinates across 9 LLMs to route tasks to the optimal model for each step.',
    capabilities: ['Multi-step research', 'Content workflows', 'Cross-agent orchestration', 'Context synthesis'],
    model: 'Mixture-of-Agents',
    category: 'Core',
  },
  {
    id: 'brand-agent',
    name: 'Brand Agent',
    icon: 'palette',
    tagline: 'Identity Guardian',
    description: 'Enforces brand consistency across every touchpoint — copy, visuals, tone, and positioning.',
    capabilities: ['Brand voice enforcement', 'Visual identity checks', 'Copy generation', 'Style guide compliance'],
    model: 'Claude Opus',
    category: 'Marketing',
  },
  {
    id: 'product-agent',
    name: 'Product Agent',
    icon: 'inventory_2',
    tagline: 'Product Intelligence',
    description: 'Manages product specs, formulation data, SKU details, and competitive positioning.',
    capabilities: ['SKU management', 'Formulation analysis', 'Competitive research', 'Product documentation'],
    model: 'Claude Sonnet',
    category: 'Operations',
  },
  {
    id: 'marketing-agent',
    name: 'Marketing Agent',
    icon: 'campaign',
    tagline: 'Growth Engine',
    description: 'Plans campaigns, writes copy, schedules content, and analyzes marketing performance.',
    capabilities: ['Campaign planning', 'Social media content', 'Email sequences', 'Performance analytics'],
    model: 'Claude Sonnet',
    category: 'Marketing',
  },
  {
    id: 'analytics-agent',
    name: 'Analytics Agent',
    icon: 'bar_chart',
    tagline: 'Data Decoder',
    description: 'Processes raw data into actionable insights — revenue, engagement, funnel metrics, and forecasting.',
    capabilities: ['Revenue analysis', 'Funnel metrics', 'Trend forecasting', 'Custom reports'],
    model: 'Claude Haiku',
    category: 'Data',
  },
  {
    id: 'supplier-agent',
    name: 'Supplier Agent',
    icon: 'local_shipping',
    tagline: 'Supply Chain Ops',
    description: 'Manages supplier relationships, evaluates manufacturers, and tracks procurement timelines.',
    capabilities: ['Supplier evaluation', 'Cost optimization', 'Timeline tracking', 'Quality assurance'],
    model: 'Claude Sonnet',
    category: 'Operations',
  },
  {
    id: 'design-agent',
    name: 'Design Agent',
    icon: 'draw',
    tagline: 'Creative Director',
    description: 'Generates design assets, mockups, packaging concepts, and visual content at scale.',
    capabilities: ['Asset generation', 'Packaging design', 'UI mockups', 'Brand visuals'],
    model: 'Claude Opus',
    category: 'Creative',
  },
  {
    id: 'customer-agent',
    name: 'Customer Agent',
    icon: 'support_agent',
    tagline: 'Customer Ops',
    description: 'Handles customer inquiries, manages feedback loops, and generates support documentation.',
    capabilities: ['Support automation', 'FAQ generation', 'Feedback analysis', 'Ticket routing'],
    model: 'Claude Haiku',
    category: 'Support',
  },
  {
    id: 'autopilot-agent',
    name: 'Autopilot',
    icon: 'auto_mode',
    tagline: 'Autonomous Executor',
    description: 'Runs multi-step workflows in the background — research, content creation, analysis — without supervision.',
    capabilities: ['Background execution', 'Multi-step workflows', 'Progress tracking', 'Autonomous decisions'],
    model: 'Mixture-of-Agents',
    category: 'Core',
  },
]

export const platformFeatures = [
  { icon: 'smart_toy', title: 'AI Agents', description: 'Deploy specialized agents for marketing, operations, design, analytics, and more.', link: '/platform/agents' },
  { icon: 'workspaces', title: 'Project Hubs', description: 'Persistent workspaces with context that spans every conversation and file.' },
  { icon: 'cloud_upload', title: 'AI Drive', description: 'Centralized file storage where agents collaborate on docs, sheets, slides, and images.' },
  { icon: 'auto_mode', title: 'Autopilot', description: 'Queue multi-step workflows and let agents execute autonomously in the background.', link: '/platform/claw' },
  { icon: 'bar_chart', title: 'Analytics', description: 'Track agent performance, credit consumption, and task success rates in real time.' },
  { icon: 'integration_instructions', title: 'Integrations', description: 'Connect Gmail, Google Drive, Slack, Shopify, GitHub, Supabase, and more.', link: '/platform/enterprise' },
]

export const pricingTiers = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    credits: '2,400 / day',
    description: 'Get started with AI workspace basics.',
    features: ['3 Agents', '1 Hub', '100MB AI Drive', 'Basic Analytics', 'Community Support'],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Plus',
    price: 24.99,
    period: '/month',
    credits: '10,000 / month',
    description: 'For professionals scaling their workflow.',
    features: ['9 Agents', '5 Hubs', '1GB AI Drive', 'Full Analytics', 'Autopilot Access', 'Priority Support', 'Agent Store'],
    cta: 'Get Plus',
    highlighted: true,
  },
  {
    name: 'Pro',
    price: 249.99,
    period: '/month',
    credits: '125,000 / month',
    description: 'For teams and power users.',
    features: ['Unlimited Agents', 'Unlimited Hubs', '10GB AI Drive', 'Advanced Analytics', 'Autopilot Pro', 'Custom Agents', 'Team Management', 'API Access', 'Dedicated Support'],
    cta: 'Get Pro',
    highlighted: false,
  },
]

export const featureComparison = [
  { feature: 'AI Agents', free: '3', plus: '9', pro: 'Unlimited' },
  { feature: 'Project Hubs', free: '1', plus: '5', pro: 'Unlimited' },
  { feature: 'AI Drive Storage', free: '100MB', plus: '1GB', pro: '10GB' },
  { feature: 'Monthly Credits', free: '2,400/day', plus: '10,000', pro: '125,000' },
  { feature: 'Autopilot', free: false, plus: true, pro: true },
  { feature: 'Custom Agents', free: false, plus: false, pro: true },
  { feature: 'Team Members', free: '1', plus: '3', pro: '10' },
  { feature: 'Analytics', free: 'Basic', plus: 'Full', pro: 'Advanced' },
  { feature: 'API Access', free: false, plus: false, pro: true },
  { feature: 'Integrations', free: '2', plus: '5', pro: 'Unlimited' },
  { feature: 'Support', free: 'Community', plus: 'Priority', pro: 'Dedicated' },
]

export const clawCapabilities = [
  { icon: 'auto_mode', title: 'Autonomous Execution', description: 'Runs multi-step workflows without supervision. Define the goal, Claw handles the rest.' },
  { icon: 'schedule', title: 'Always-On', description: 'Works 24/7 across time zones. Queue tasks at night, wake up to results.' },
  { icon: 'hub', title: 'Multi-Agent Coordination', description: 'Orchestrates specialized agents for complex tasks that span multiple domains.' },
  { icon: 'visibility', title: 'Full Transparency', description: 'Every step logged, every decision explained. Complete audit trail of autonomous work.' },
  { icon: 'tune', title: 'Adaptive Learning', description: 'Learns your preferences, brand voice, and workflows over time for increasingly precise output.' },
  { icon: 'security', title: 'Human-in-the-Loop', description: 'Critical decisions always require your approval. You set the boundaries, Claw operates within them.' },
]

export const enterpriseFeatures = [
  { icon: 'group', title: 'Team Management', description: 'Role-based access, member permissions, and org-level controls for your entire team.' },
  { icon: 'integration_instructions', title: 'Custom Integrations', description: 'Connect Slack, Shopify, Instagram, GitHub, Supabase, Gmail, Drive, and more.' },
  { icon: 'smart_toy', title: 'Custom Agent Builder', description: 'Build domain-specific agents with custom prompts, data sources, and model selection.' },
  { icon: 'lock', title: 'Enterprise Security', description: 'SOC 2 compliant, SSO, audit logs, and data encryption at rest and in transit.' },
  { icon: 'api', title: 'API Access', description: 'Full REST API for programmatic agent management, task scheduling, and data retrieval.' },
  { icon: 'support_agent', title: 'Dedicated Support', description: 'Named account manager, 99.9% SLA, and priority support queue.' },
]

export const integrations = [
  { name: 'Gmail', icon: 'mail', connected: true },
  { name: 'Google Drive', icon: 'folder', connected: true },
  { name: 'Google Calendar', icon: 'calendar_month', connected: false },
  { name: 'Slack', icon: 'chat', connected: true },
  { name: 'Shopify', icon: 'shopping_cart', connected: false },
  { name: 'Instagram API', icon: 'photo_camera', connected: false },
  { name: 'Supabase', icon: 'database', connected: true },
  { name: 'GitHub', icon: 'code', connected: true },
]

export const clawUseCases = [
  {
    title: 'Competitor Analysis Report',
    agents: ['Analytics Agent', 'Marketing Agent'],
    steps: ['Scan competitor websites', 'Analyze pricing strategies', 'Compare product features', 'Generate insights report'],
    duration: '~25 min',
  },
  {
    title: 'Weekly Content Pipeline',
    agents: ['Marketing Agent', 'Design Agent', 'Brand Agent'],
    steps: ['Research trending topics', 'Draft social media posts', 'Generate visual assets', 'Schedule across platforms'],
    duration: '~40 min',
  },
  {
    title: 'Supplier Outreach Campaign',
    agents: ['Supplier Agent', 'Customer Agent'],
    steps: ['Identify qualified manufacturers', 'Draft outreach emails', 'Score supplier responses', 'Update evaluation matrix'],
    duration: '~30 min',
  },
  {
    title: 'SEO & Performance Audit',
    agents: ['Analytics Agent', 'Product Agent'],
    steps: ['Crawl site structure', 'Analyze keyword rankings', 'Audit page performance', 'Generate optimization plan'],
    duration: '~20 min',
  },
]
