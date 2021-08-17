import { BreakPoint } from '@angular/flex-layout';

const points: {[name: string]: number} = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};


const keys = Object.keys(points);

export const CUSTOMEBREAKPOINTS = keys
  .map((key, index) => {
    const min = points[key];
    const max = points[keys[index + 1]];
    const priority = 1000 - index * 100;
    return { key, min, max, priority };
  })
  .reduce((bps, point) => {
    const camel = point.key[0].toUpperCase() + point.key.slice(1);
    bps.push({
      alias: point.key,
      mediaQuery: ['screen', `(min-width: ${point.min}px)`, `(max-width: ${point.max - 0.02}px)`].filter(Boolean).join(' and '),
      priority: point.priority,
      suffix: camel,
      overlapping: false,
    });
    if (point.max) {
      bps.push({
        alias: `gt-${point.key}`,
        mediaQuery: ['screen', `(min-width: ${point.max}px)`].filter(Boolean).join(' and '),
        priority: -(point.priority + 50),
        suffix: `Gt${camel}`,
        overlapping: true,
      });
    }
    if (point.min) {
      bps.push({
        alias: `lt-${point.key}`,
        mediaQuery: ['screen', `(max-width: ${point.min - 0.02}px)`].filter(Boolean).join(' and '),
        priority: (point.priority + 50),
        suffix: `Lt${camel}`,
        overlapping: true,
      });
    }
    return bps;
  }, [] as BreakPoint[]);

// [
//   {
//     "alias": "xs",
//     "mediaQuery": "screen and (min-width: 0px) and (max-width: 599.98px)",
//     "priority": 1000,
//     "suffix": "Xs",
//     "overlapping": false
//   },
//   {
//     "alias": "sm",
//     "mediaQuery": "screen and (min-width: 600px) and (max-width: 959.98px)",
//     "priority": 900,
//     "suffix": "Sm",
//     "overlapping": false
//   },
//   {
//     "alias": "md",
//     "mediaQuery": "screen and (min-width: 960px) and (max-width: 1279.98px)",
//     "priority": 800,
//     "suffix": "Md",
//     "overlapping": false
//   },
//   {
//     "alias": "lg",
//     "mediaQuery": "screen and (min-width: 1280px) and (max-width: 1919.98px)",
//     "priority": 700,
//     "suffix": "Lg",
//     "overlapping": false
//   },
//   {
//     "alias": "xl",
//     "mediaQuery": "screen and (min-width: 1920px) and (max-width: 4999.98px)",
//     "priority": 600,
//     "suffix": "Xl",
//     "overlapping": false
//   },
//   {
//     "alias": "lt-sm",
//     "overlapping": true,
//     "mediaQuery": "screen and (max-width: 599.98px)",
//     "priority": 950,
//     "suffix": "LtSm"
//   },
//   {
//     "alias": "lt-md",
//     "overlapping": true,
//     "mediaQuery": "screen and (max-width: 959.98px)",
//     "priority": 850,
//     "suffix": "LtMd"
//   },
//   {
//     "alias": "lt-lg",
//     "overlapping": true,
//     "mediaQuery": "screen and (max-width: 1279.98px)",
//     "priority": 750,
//     "suffix": "LtLg"
//   },
//   {
//     "alias": "lt-xl",
//     "overlapping": true,
//     "priority": 650,
//     "mediaQuery": "screen and (max-width: 1919.98px)",
//     "suffix": "LtXl"
//   },
//   {
//     "alias": "gt-xs",
//     "overlapping": true,
//     "mediaQuery": "screen and (min-width: 600px)",
//     "priority": -950,
//     "suffix": "GtXs"
//   },
//   {
//     "alias": "gt-sm",
//     "overlapping": true,
//     "mediaQuery": "screen and (min-width: 960px)",
//     "priority": -850,
//     "suffix": "GtSm"
//   },
//   {
//     "alias": "gt-md",
//     "overlapping": true,
//     "mediaQuery": "screen and (min-width: 1280px)",
//     "priority": -750,
//     "suffix": "GtMd"
//   },
//   {
//     "alias": "gt-lg",
//     "overlapping": true,
//     "mediaQuery": "screen and (min-width: 1920px)",
//     "priority": -650,
//     "suffix": "GtLg"
//   }
// ]
