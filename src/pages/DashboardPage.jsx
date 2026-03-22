import { DashboardProvider, useDashboard } from '../lib/DashboardContext'
import Sidebar from '../components/dashboard/Sidebar'
import OverviewPanel from '../components/dashboard/OverviewPanel'
import AgentsPanel from '../components/dashboard/AgentsPanel'
import HubsPanel from '../components/dashboard/HubsPanel'
import DrivePanel from '../components/dashboard/DrivePanel'
import AnalyticsPanel from '../components/dashboard/AnalyticsPanel'
import AutopilotPanel from '../components/dashboard/AutopilotPanel'
import SettingsPanel from '../components/dashboard/SettingsPanel'

function DashboardContent() {
  const { currentView } = useDashboard()

  const panels = {
    overview: OverviewPanel,
    agents: AgentsPanel,
    hubs: HubsPanel,
    drive: DrivePanel,
    analytics: AnalyticsPanel,
    autopilot: AutopilotPanel,
    settings: SettingsPanel,
  }

  const Panel = panels[currentView] || OverviewPanel

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-64 p-8 pt-10">
        <Panel />
      </main>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  )
}
