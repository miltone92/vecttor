import GridLayout from './index';
import { StorybookRenderer } from '../../lib/utils';
import Tile from '../Tile';
import Background from '../../assets/images/CTA-Tile-BGImage-NoFilter.png';

export default {
  title: 'Components/GridLayout',
  component: GridLayout
};

export const Default = (args) => <GridLayout {...args} />;
Default.args = {
  renderer: StorybookRenderer,
  columns: 4,
  smallColumns: 1,
  backgroundColor: '#f5f5f5',
  gap: 1,
  content: [
    {
      componentType: Tile,
      backgroundImageAlt: 'Background Image',
      backgroundImage: Background,
      title: `JOIN
              CHURCHOME`,
      body: 'Get curated events and videos and grow your faith',
      ctaText: 'Join Us'
    },
    {
      componentType: Tile,
      backgroundImageAlt: 'Background Image',
      backgroundImage: Background,
      title: `JOIN
              CHURCHOME`,
      body: 'Get curated events and videos and grow your faith',
      ctaText: 'Join Us'
    },
    {
      componentType: Tile,
      backgroundImageAlt: 'Background Image',
      backgroundImage: Background,
      title: `JOIN
              CHURCHOME`,
      body: 'Get curated events and videos and grow your faith',
      ctaText: 'Join Us'
    },
    {
      componentType: Tile,
      backgroundImageAlt: 'Background Image',
      backgroundImage: Background,
      title: `JOIN
              CHURCHOME`,
      body: 'Get curated events and videos and grow your faith',
      ctaText: 'Join Us'
    },
    {
      componentType: Tile,
      backgroundImageAlt: 'Background Image',
      backgroundImage: Background,
      title: `JOIN
              CHURCHOME`,
      body: 'Get curated events and videos and grow your faith',
      ctaText: 'Join Us'
    }
  ]
};
