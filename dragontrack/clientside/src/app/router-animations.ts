import {
    sequence,
    trigger,
    stagger,
    animate,
    style,
    group,
    query,
    transition,
    keyframes,
    animateChild,
    AnimationTriggerMetadata,
    AnimationQueryMetadata,
    AnimationGroupMetadata,
  } from '@angular/animations'
  
  const extendedquery = (style : any, animate : any, optional = { optional: true }) => query(style, animate, optional)
  
  const fade : (AnimationQueryMetadata | AnimationGroupMetadata )[] = [
    extendedquery(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    extendedquery(':enter', [style({ opacity: 0 })]),
      extendedquery(':leave', [animate('0.3s ease-out', style({ opacity: 0 }))]),
      extendedquery(':enter', [
        style({ opacity: 0, zIndex: 1 }),
        animate('0.3s ease-out', style({ opacity: 1 })),
      ])
  ]
  
  export const routerTransition : AnimationTriggerMetadata = trigger('routerTransition', [
    transition('* => *', fade),
  ])