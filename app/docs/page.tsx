"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Copy, Check, Package, FileText, Component, Video, Megaphone, Play, Home } from "lucide-react"

export default function DocsPage() {
  const [copiedStates, setCopiedStates] = React.useState<Record<string, boolean>>({})

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates(prev => ({ ...prev, [id]: true }))
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [id]: false }))
      }, 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const CopyButton = ({ text, id }: { text: string; id: string }) => (
    <Button
      variant="outline"
      size="sm"
      onClick={() => copyToClipboard(text, id)}
      className="h-8 w-8 p-0"
    >
      {copiedStates[id] ? (
        <Check className="h-3 w-3" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
    </Button>
  )

  const CodeBlock = ({ children, id, title }: { children: string; id: string; title?: string }) => (
    <div className="relative">
      {title && <p className="text-sm font-medium mb-2">{title}</p>}
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
        <code>{children}</code>
      </pre>
      <div className="absolute top-2 right-2">
        <CopyButton text={children} id={id} />
      </div>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      {/* Header */}
      <header className="flex flex-col gap-4 text-center">
        <div className="flex items-center justify-center gap-2">
          <FileText className="h-8 w-8" />
          <h1 className="text-4xl font-bold tracking-tight">Documentation</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Complete documentation for the Lynqsides Shadcn Registry components and landing page.
        </p>
        <div className="flex items-center justify-center">
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            <Home className="h-4 w-4 mr-2" />
            Back to Registry
          </Button>
        </div>
      </header>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Component className="h-8 w-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-lg">Landing Page</CardTitle>
            <CardDescription>Complete landing page component</CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Megaphone className="h-8 w-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-lg">Announcement</CardTitle>
            <CardDescription>Announcement banner component</CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Play className="h-8 w-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-lg">Marquee</CardTitle>
            <CardDescription>Scrolling marquee component</CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardHeader className="text-center">
            <Video className="h-8 w-8 mx-auto mb-2 text-primary" />
            <CardTitle className="text-lg">Video Player</CardTitle>
            <CardDescription>Custom video player</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Getting Started
          </CardTitle>
          <CardDescription>
            Learn how to install and use components from our registry
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Installation</h3>
            <Tabs defaultValue="automatic" className="w-full">
              <TabsList>
                <TabsTrigger value="automatic">Automatic (Recommended)</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
              
              <TabsContent value="automatic" className="space-y-4">
                <CodeBlock
                  id="step1"
                  title="1. Initialize Shadcn in your project"
                >npx shadcn@latest init</CodeBlock>
                
                <CodeBlock
                  id="step2"
                  title="2. Add our registry"
                >npx shadcn@latest add https://shadcn-elvinlari-registry.vercel.app/</CodeBlock>
                
                <CodeBlock
                  id="step3"
                  title="3. Install components"
                >npx shadcn@latest add landing-page</CodeBlock>
              </TabsContent>
              
              <TabsContent value="manual" className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Manual installation requires copying multiple files. We recommend using the CLI for the best experience.
                    Each component page includes the source code that you can copy and paste into your project.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Dependencies</h3>
            <p className="text-muted-foreground mb-4">Our components use these external packages:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Badge variant="outline">@icons-pack/react-simple-icons</Badge>
              <Badge variant="outline">@number-flow/react</Badge>
              <Badge variant="outline">media-chrome</Badge>
              <Badge variant="outline">react-fast-marquee</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              These will be automatically installed when using the CLI.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Landing Page Documentation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Component className="h-5 w-5" />
                Landing Page
                <Badge>Featured</Badge>
              </CardTitle>
              <CardDescription>
                A comprehensive landing page with hero, pricing, about, and contact sections.
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a href="/hero" target="_blank" className="flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                Preview
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="customization">Customization</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Features</h4>
                <ul className="text-sm text-muted-foreground space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Hero section with announcement banner
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Animated company logos marquee
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Video player with custom controls
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Pricing section with toggleable plans
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    About section with feature highlights
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Contact form with validation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Floating navigation on scroll
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Responsive design & dark mode
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="usage" className="space-y-4">
              <CodeBlock
                id="landing-usage"
                title="Basic Usage"
              >{`import { LandingPage } from "@/components/landing-page"

export default function HomePage() {
  return <LandingPage />
}`}</CodeBlock>
              
              <CodeBlock
                id="landing-nextjs"
                title="As a Next.js Page"
              >{`// app/page.tsx
import { LandingPage } from "@/components/landing-page"

export default function Page() {
  return (
    <main>
      <LandingPage />
    </main>
  )
}`}</CodeBlock>
            </TabsContent>
            
            <TabsContent value="customization" className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Theme Customization</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  The landing page automatically supports light and dark themes through CSS variables:
                </p>
                <CodeBlock
                  id="theme-vars"
                >{`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  /* ... more variables */
}`}</CodeBlock>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Content Customization</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Easily customize content by modifying the data objects:
                </p>
                <CodeBlock
                  id="content-custom"
                >{`const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: { monthly: 29, yearly: 24 },
    features: ['Feature 1', 'Feature 2'],
    // ... more plan data
  }
]

const logos = [
  { name: 'Company', icon: CompanyIcon, url: 'https://company.com' }
]`}</CodeBlock>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Individual Components */}
      <Card>
        <CardHeader>
          <CardTitle>Individual Components</CardTitle>
          <CardDescription>
            Each component can also be used independently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* Announcement */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Megaphone className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Announcement</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                A banner component for announcements with tag and title support.
              </p>
              <CodeBlock
                id="announcement-usage"
              >{`import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement"

<Announcement>
  <AnnouncementTag>New</AnnouncementTag>
  <AnnouncementTitle>Feature Release</AnnouncementTitle>
</Announcement>`}</CodeBlock>
              <div className="mt-3">
                <CodeBlock
                  id="announcement-install"
                >npx shadcn@latest add announcement</CodeBlock>
              </div>
            </div>

            {/* Marquee */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Play className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Marquee</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                A scrolling marquee component with fade effects and customizable speed.
              </p>
              <CodeBlock
                id="marquee-usage"
              >{`import { Marquee } from "@/components/ui/marquee"

<Marquee speed={20} direction="left">
  <div className="mx-8">Item 1</div>
  <div className="mx-8">Item 2</div>
  <div className="mx-8">Item 3</div>
</Marquee>`}</CodeBlock>
              <div className="mt-3">
                <CodeBlock
                  id="marquee-install"
                >npx shadcn@latest add marquee</CodeBlock>
              </div>
            </div>

            {/* Video Player */}
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Video className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Video Player</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                A custom video player component built with media-chrome for advanced video controls.
              </p>
              <CodeBlock
                id="video-usage"
              >{`import { VideoPlayer } from "@/components/ui/video-player"

<VideoPlayer>
  <media-video 
    src="your-video.mp4"
    poster="poster.jpg"
  />
</VideoPlayer>`}</CodeBlock>
              <div className="mt-3">
                <CodeBlock
                  id="video-install"
                >npx shadcn@latest add video-player</CodeBlock>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" asChild>
              <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Shadcn/ui Documentation
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Tailwind CSS Docs
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                React Documentation
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="border-t pt-8 mt-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>Documentation built with ❤️ for the Lynqsides Shadcn Registry</p>
          <p className="mt-2">
            Need help? Check out the{" "}
            <a href="https://ui.shadcn.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Shadcn/ui documentation
            </a>{" "}
            for more information.
          </p>
        </div>
      </footer>
    </div>
  )
}
