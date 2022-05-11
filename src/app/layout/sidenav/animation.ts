import { trigger, state, style, transition, animate } from '@angular/animations';

export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'min-width': '50px'
    })
  ),
  state('open',
    style({
      'min-width': '200px'
    })
  ),
  transition('close => open', animate('200ms ease-in')),
  transition('open => close', animate('200ms ease-in')),
]);

export const profileUpdate = trigger('profileUpdate', [
  state('close',
    style({
      'max-width': '60px',
      padding: '0px',
    })
  ),
  state('open',
    style({
      'max-width': '150px',
      padding: '15px',
      'border-radius': '100%'
    })
  ),
  transition('close => open', animate('400ms ease-in')),
  transition('open => close', animate('200ms ease-in')),
]);


export const onMainContentChange = trigger('onMainContentChange', [
  state('close',
    style({
  
    })
  ),
  state('open',
    style({
      'margin-left': '140px'
    })
  ),
  transition('close => open', animate('200ms ease-in')),
  transition('open => close', animate('200ms ease-in')),
]);


export const animateText = trigger('animateText', [
  state('hide',
    style({
      display: 'none',
      opacity: 0,
    })
  ),
  state('show',
    style({
      display: 'block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('200ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);
