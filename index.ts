import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { Slider } from '@syncfusion/ej2-inputs';
import {
  SliderTooltipEventArgs,
  SliderTickEventArgs,
} from '@syncfusion/ej2-inputs';
/**
 * Default sample
 */

// Initialize Slider component
let snapincObj: any = new Slider({
  // Set slider minimum and maximum values
  min: 0,
  max: 64,
  // Set the value for slider
  value: [0, 40],
  // Set the step value
  step: 1,
  // Initialize ticks with placement, largestep, smallstep
  ticks: {
    placement: 'After',
    largeStep: 8,
    smallStep: 1,
    showSmallTicks: true,
    format: 'c0',
  },
  tooltip: {
    placement: 'Before',
    isVisible: false,
    format: 'c0',
  },
  type: 'Range',
  created: (args: any) => {
    snapincObj.openTooltip();
  },
});
snapincObj.appendTo('#snapinc');
