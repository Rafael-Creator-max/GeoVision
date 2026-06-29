import { Bell, GitBranch, LayoutDashboard, TrendingUp } from 'lucide-react';

export const modules = [
  {
    icon: TrendingUp,
    title: 'Demand Forecasting',
    description: 'Short-term and medium-term electricity demand forecasts based on historical load, calendar patterns and weather signals.',
  },
  {
    icon: Bell,
    title: 'Alerts',
    description: 'Operational warnings for expected demand peaks, unusual consumption patterns and forecast deviations.',
  },
  {
    icon: LayoutDashboard,
    title: 'Operational Dashboards',
    description: 'Clear views for demand, weather impact, forecast accuracy and planning metrics.',
  },
  {
    icon: GitBranch,
    title: 'Scenario Planning',
    description: 'What-if analysis for weather changes, demand spikes and future operational planning.',
  },
];
