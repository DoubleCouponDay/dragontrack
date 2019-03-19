import {
    sequence,
    trigger,
    stagger,
    animate,
    style,
    group,
    query as q,
    transition,
    keyframes,
    animateChild,
    AnimationTriggerMetadata,
    AnimationQueryMetadata,
    AnimationGroupMetadata,
  } from '@angular/animations'
  
  const query = (style, animate, optional = { optional: true }) => q(style, animate, optional)
  
  const fade : (AnimationQueryMetadata | AnimationGroupMetadata )[] = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter', [style({ opacity: 0 })]),
    group([
      query(':leave', [animate('0.3s ease-out', style({ opacity: 0 }))]),
      query(':enter', [
        style({ opacity: 0, zIndex: 1 }),
        animate('0.3s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ]
  
  export const routerTransition : AnimationTriggerMetadata = trigger('routerTransition', [
    transition('* => *', fade),
  ])