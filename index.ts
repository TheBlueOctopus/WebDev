import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { Slider } from '@syncfusion/ej2-inputs';
import { SliderTooltipEventArgs, SliderTickEventArgs } from '@syncfusion/ej2-inputs';
/**
 * Default sample
 */


// Initialize Slider component
let snapincObj : any = new Slider({
    // Set slider minimum and maximum values
    min: 0, max: 100,
    // Set the value for slider
    value: [30,70],
    // Set the step value
    step: 10,
    // Initialize ticks with placement, largestep, smallstep
    ticks: { placement:  'After', largeStep: 20, smallStep: 5, showSmallTicks: false, format :'c0'  },
     tooltip: {
        placement: 'Before', isVisible: true,
        format :'c0'
        
    },
    type:'Range',
    created: (args: any) => {
        snapincObj.openTooltip();
    }
});
snapincObj.appendTo('#snapinc');
