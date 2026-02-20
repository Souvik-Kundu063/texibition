# TODO: Replace READY_TO_JOIN CTA with CONTACT_US Section

## Task Analysis
- **File to edit**: `/Users/apple/Documents/texibition-1/src/app/pages/Home.tsx`
- **Section location**: CTA Section (around line 450-490)
- **Goal**: Replace existing "READY_TO_JOIN?" CTA with futuristic "CONTACT_US" section

## Steps to Complete

### Step 1: Add Required Icon Imports
- Import `Phone` and `Mail` icons from lucide-react

### Step 2: Replace CTA Section
- Replace the entire `<section className="py-10 sm:py-12 lg:py-10 relative">` block
- Maintain dark gradient background with subtle glow effects
- Keep neon blue + purple accent colors

### Step 3: Implement New Design
- Glassmorphism effect:
  - backdrop-filter: blur(18px)
  - background: rgba(255,255,255,0.06)
  - soft neon border (1px solid rgba(0,255,255,0.3))
  - subtle purple/blue outer glow
- Rounded corners (20px-24px)
- Futuristic typography with angle brackets

### Step 4: Create 5 Contact Cards
- Responsive grid: 2 per row (desktop/tablet), 1 per row (mobile)
- Each card contains:
  - Designation (neon label)
  - Name (bold futuristic)
  - Phone with icon
  - Email with icon
- Hover animation: scale(1.03), stronger neon glow, 0.3s transition

### Step 5: Add Entrance Animations
- Fade-up animation for cards
- Stagger delay for each card

## Contact Details to Display
1. Convenor - Mr. Partha Pratim Dasgupta - +91 89611 42172 - techclub@brainwareuniversity.ac.in
2. Treasurer - Dr. Arighna Basak - +91 94337 78573 - techclub@brainwareuniversity.ac.in
3. Lead Organizer - Madhusudan Mahatha - +91 6289600599 - madhusudanmahatha14@gmail.com
4. Lead Organizer - Tushar Daiya - +91 9123720395 - tdaiya02@gmail.com
5. Lead Organizer - Souvik Kundu - +91 7718427880 - souvikkundu7718@gmail.com

## Verification
- [x] Dark gradient background maintained
- [x] Neon blue + purple accents present
- [x] Glassmorphism effect applied
- [x] Responsive layout works (2 cols desktop, 1 col mobile)
- [x] Hover animations functional
- [x] Entrance animations with stagger delay
- [x] Typography matches existing theme

## Status: COMPLETED ✅
Build successful - no errors

