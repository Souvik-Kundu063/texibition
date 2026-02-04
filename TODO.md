# TODO: Fix 3D Carousel Lag Performance

## Problem Analysis
The `react-spring-3d-carousel` in Home.tsx is causing significant lag due to:
- Heavy 3D CSS transforms requiring constant GPU usage
- Large images loading without optimization
- No virtualization - all 9 slides rendered simultaneously
- Continuous animation frames causing jank

## Solution Plan

### Step 1: Replace with Embla Carousel (Already Installed)
- `embla-carousel-react` is already in dependencies and is highly optimized
- Uses native CSS scrolling with hardware acceleration
- Has built-in lazy loading support

### Step 2: Optimize Image Loading
- Add `loading="lazy"` to carousel images
- Add proper aspect ratios to prevent layout shifts
- Use CSS transforms instead of JS-based 3D for better performance

### Step 3: Reduce Animation Complexity
- Replace continuous 3D carousel with a simpler horizontal scroll
- Add subtle parallax effect on scroll instead
- Use CSS transitions for hover effects

### Step 4: Implement Virtualization (Optional)
- Only render visible slides if needed

## Implementation Steps

1. **Edit Home.tsx:**
   - Replace `import Carousel from "react-spring-3d-carousel"` with embla imports
   - Replace the 3D carousel component with optimized embla carousel
   - Add lazy loading to images
   - Simplify the carousel with horizontal scroll + card effects

2. **Test the changes:**
   - Verify carousel works on different screen sizes
   - Check performance with DevTools
   - Ensure auto-rotation still works

## Files to Modify
- `src/app/pages/Home.tsx`

## Expected Outcome
- Significantly reduced CPU/GPU usage
- Smoother scrolling and animations
- Better mobile performance
- No visual degradation of the carousel experience

