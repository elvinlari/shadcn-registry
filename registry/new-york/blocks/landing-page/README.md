# Landing Page Components

This registry includes a comprehensive landing page and its custom components.

## Components Included

### 1. Landing Page
A complete landing page with:
- Hero section with announcement banner
- Company logos marquee
- Video player section
- Pricing section with tabs
- About section
- Contact section with form
- Floating navigation

### 2. Custom Components

#### Announcement
A banner component for announcements with support for tags and titles.

```tsx
import { Announcement, AnnouncementTag, AnnouncementTitle } from './components/ui/announcement'

<Announcement>
  <AnnouncementTag>New</AnnouncementTag>
  <AnnouncementTitle>Feature Release</AnnouncementTitle>
</Announcement>
```

#### Marquee
A scrolling marquee component with fade effects.

```tsx
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from './components/ui/marquee'

<Marquee>
  <MarqueeFade side="left" />
  <MarqueeFade side="right" />
  <MarqueeContent>
    <MarqueeItem>Item 1</MarqueeItem>
    <MarqueeItem>Item 2</MarqueeItem>
  </MarqueeContent>
</Marquee>
```

#### Video Player
A custom video player with controls.

```tsx
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerPlayButton,
  // ... other controls
} from './components/ui/video-player'

<VideoPlayer>
  <VideoPlayerContent src="video.mp4" />
  <VideoPlayerControlBar>
    <VideoPlayerPlayButton />
    {/* Other controls */}
  </VideoPlayerControlBar>
</VideoPlayer>
```

#### Floating Navigation
A navigation bar that appears when scrolling.

```tsx
import { FloatingNav } from './components/floating-nav'

<FloatingNav />
```

## Installation

To use these components in your project:

1. Install the landing page component:
```bash
npx shadcn add landing-page
```

2. Or install individual components:
```bash
npx shadcn add announcement
npx shadcn add marquee
npx shadcn add video-player
npx shadcn add floating-nav
```


## Dependencies

The landing page uses these shadcn/ui components:
- Button
- Card
- Badge 
- Tabs

And these external dependencies (handled gracefully with fallbacks):
- `@icons-pack/react-simple-icons` 
- `@number-flow/react` 

## Customization

All components are built with Tailwind CSS and follow shadcn/ui patterns:
- Use CSS variables for theming
- Support dark mode automatically
- Fully customizable via className props

## Notes

- All components are responsive and accessible
- Video player includes basic functionality 
