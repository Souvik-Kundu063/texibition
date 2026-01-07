# Todo List - Fix Blank Page Issue

## Issues Found:
1. `CodeOfConduct` component is used in routes but NOT imported in App.tsx
2. CSS class typo in Home.tsx: `grayscalehover` should be `grayscale hover:grayscale-0`

## Fixes Applied:
- [x] Fix App.tsx: Added CodeOfConduct import, removed unused Register import
- [x] Fix Home.tsx: Corrected CSS typo `grayscalehover:grayscale-0` → `grayscale hover:grayscale-0`
- [ ] Verify the fixes work

