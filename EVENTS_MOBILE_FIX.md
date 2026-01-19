# Events Page Mobile Fix Plan

## Issues Identified
1. Event cards have `min-h-[400px]` - too tall for mobile screens
2. Flip card effect creates cards occupying 60-70% of mobile screen height
3. Featured event section has excessive padding and info density
4. Code snippet displays and stat grids are too large on mobile

## Fixes to Implement

### 1. Event Cards Height
- Change `min-h-[400px] sm:min-h-[450px] md:min-h-[480px]` → `min-h-[260px] sm:min-h-[300px] md:min-h-[360px]`

### 2. Card Content Padding
- Change `p-6` → `p-4` on mobile, keep `p-6` on sm+

### 3. Featured Event Section
- Reduce `p-8` → `p-4` on mobile
- Reduce icon sizes from `size-20` → `size-12` on mobile
- Make code snippet display more compact
- Reduce stat card padding on mobile

### 4. Stat Cards
- Reduce padding from `p-3` → `p-2` on mobile
- Reduce icon sizes from `size-5` → `size-4` on mobile

### 5. Code Snippet Display
- Reduce padding from `p-4` → `p-3` on mobile
- Reduce font size from `text-sm` → `text-xs` on mobile

## Progress
- [x] Fix event card minimum heights (400px → 260px on mobile)
- [x] Fix card content padding for mobile (p-6 → p-4)
- [x] Fix featured event section for mobile (p-8 → p-4, size-20 → size-12)
- [x] Fix stat card sizes for mobile (p-3 → p-2, size-5 → size-4)
- [x] Fix code snippet display for mobile (compact single-line format)
- [x] Fix header margins and spacing for mobile

