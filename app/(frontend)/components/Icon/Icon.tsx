import Clipboard from './iconSet/Clipboard'
import ComputerData from './iconSet/ComputerData'
import DataFolders from './iconSet/DataFolders'
import Heart from './iconSet/Heart'
import Helix from './iconSet/Helix'
import IncreasingBarChart from './iconSet/IncreasingBarChart'
import Laptop from './iconSet/Laptop'
import Lightbulb from './iconSet/Lightbulb'
import LineBarChart from './iconSet/LineBarChart'
import MagnifyingGlass from './iconSet/MagnifyingGlass'
import Network from './iconSet/Network'
import ShieldPlusSign from './iconSet/ShieldPlusSign'
import SpeechBubbles from './iconSet/SpeechBubbles'
import TestTube from './iconSet/TestTube'
import Timer from './iconSet/Timer'

export type IconType =
  | 'clipboard'
  | 'computerData'
  | 'dataFolders'
  | 'heart'
  | 'helix'
  | 'increasingBarChart'
  | 'laptop'
  | 'lightbulb'
  | 'lineBarChart'
  | 'magnifyingGlass'
  | 'network'
  | 'shieldPlusSign'
  | 'speechBubbles'
  | 'testTube'
  | 'timer'

export type IconColor =
  | '#7ABC71'
  | '#F8BE08'
  | '#F45B83'
  | '#3F4C77'

interface IconProps {
  icon: IconType
  color?: IconColor
}

const icons = {
  clipboard: Clipboard,
  computerData: ComputerData,
  dataFolders: DataFolders,
  heart: Heart,
  helix: Helix,
  increasingBarChart: IncreasingBarChart,
  laptop: Laptop,
  lightbulb: Lightbulb,
  lineBarChart: LineBarChart,
  magnifyingGlass: MagnifyingGlass,
  network: Network,
  shieldPlusSign: ShieldPlusSign,
  speechBubbles: SpeechBubbles,
  testTube: TestTube,
  timer: Timer,
}

export default function Icon({ icon, color }: IconProps) {
  const IconComponent = icons[icon]
  return <IconComponent color={color} />
}
