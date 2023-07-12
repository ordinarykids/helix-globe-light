import Helix from './iconSet/Helix'
import Laptop from './iconSet/Laptop'
import LineBarChart from './iconSet/LineBarChart'
import Network from './iconSet/Network'

export type IconType =
  | 'helix'
  | 'network'
  | 'laptop'
  |'lineBarChart'

interface IconProps {
  icon: IconType
}

const icons = {
  helix: Helix,
  laptop: Laptop,
  lineBarChart: LineBarChart,
  network: Network,
}

export default function Icon({ icon }: IconProps) {
  const IconComponent = icons[icon]
  return <IconComponent />
}
