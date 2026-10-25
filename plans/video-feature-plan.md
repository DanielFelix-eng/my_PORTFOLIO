# Plan: Add Video Short Videos to Portfolio Project Sections

## Goal
Add video short videos to project sections so that when someone clicks "Demo", they are taken to a video hosted in the `public/` directory.

## Constraints & Decisions

### 1. Video Storage
- Videos are stored directly in `client/public/`
- Video URLs in project data use root paths such as `/AI-vedio.mp4`

### 2. Data Structure
- Add `videoUrl` field to each project object in `client/src/data/projects.js`
- Format: `videoUrl: '/videos/[project-slug].mp4'` (or custom per-project)

### 3. Demo Link Behavior
- Add a "Demo" button/link in `ProjectCard` component
- When clicked, it navigates to the video player or opens the video URL
- Two options:
  - **Option A**: Link opens video in new tab (`target="_blank" rel="noreferrer"`)
  - **Option B**: Navigate to a dedicated VideoPlayer page within the app

Recommended: **Option A** for simplicity - open video in new tab, since video playback control is simpler.

### 4. Components to Modify

#### A. `client/src/data/projects.js`
Add `videoUrl` only to projects with an uploaded video:
```js
videoUrl: '/AI-vedio.mp4',
```

#### B. `client/src/components/ProjectCard.jsx`
Add Demo button after the project description:
```jsx
{project.videoUrl && (
  <a className="project-card-demo" href={project.videoUrl} target="_blank" rel="noreferrer">
    Demo ↗
  </a>
)}
```

#### C. Optional: `client/src/pages/ProjectDetailPage.jsx`
Add video player section at the bottom of the project detail page, below the links section.

### 5. Public Directory Structure
```
client/public/
├── ai-customer-support-saas-01.webp.png
├── AI-vedio.mp4
└── API-RATE_LIMITER.mp4
```

### 6. Flow
1. User visits portfolio → sees project cards with "Demo" button
2. User clicks "Demo" → opens the matching video in a new tab from the public root
3. Video plays natively in the browser

### 7. Risks & Open Questions
- **Video formats**: Ensure MP4 format with broad browser compatibility
- **Autoplay policy**: Browsers mute autoplay by default; consider adding muted playback
- **Fallback**: If no videoUrl is set, hide the Demo button or show a placeholder
- **Bandwidth**: Large video files could impact page load; consider poster images

### 8. Validation
- After implementation, verify:
  - Demo button appears on project cards
  - Clicking Demo opens video in new tab
  - Video plays correctly in supported browsers
  - No Demo button shown when videoUrl is missing