"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Copy, Check, Code, Palette, Zap, Package, FileText } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// This page displays items from the custom registry with comprehensive documentation.

export default function Home() {
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

  const CodeBlock = ({ children, id }: { children: string; id: string }) => (
    <div className="relative">
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
          <h1 className="text-4xl font-bold tracking-tight">Lynqsides Shadcn Registry</h1>
          <Badge variant="secondary">v1.0</Badge>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive collection of beautiful, accessible components built with React, TypeScript, and Tailwind CSS.
          Perfect for building modern web applications.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Badge variant="outline" className="gap-1">
            <Code className="h-3 w-3" />
            TypeScript
          </Badge>
          <Badge variant="outline" className="gap-1">
            <Palette className="h-3 w-3" />
            Tailwind CSS
          </Badge>
          <Badge variant="outline" className="gap-1">
            <Zap className="h-3 w-3" />
            Shadcn/ui
          </Badge>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button size="lg" asChild>
            <a href="/docs" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              View Documentation
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/hero" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Preview Landing Page
            </a>
          </Button>
        </div>
      </header>

      {/* Quick Start */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Quick Start
          </CardTitle>
          <CardDescription>
            Get started with our components in seconds
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Install the CLI</h4>
            <CodeBlock id="cli-install">npx shadcn@latest init</CodeBlock>
          </div>
          <div>
            <h4 className="font-medium mb-2">Add the landing page component</h4>
            <CodeBlock id="registry-add">pnpm dlx shadcn@latest add https://shadcn-elvinlari-registry.vercel.app/r/landing-page.json</CodeBlock>
          </div>
        </CardContent>
      </Card>

      {/* Landing Page Documentation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Landing Page
                <Badge>Featured</Badge>
              </CardTitle>
              <CardDescription>
                A comprehensive landing page with hero, pricing, about, and contact sections.
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="/hero" target="_blank" className="flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" />
                  Preview
                </a>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hero section with announcement banner</li>
                    <li>• Animated company logos marquee</li>
                    <li>• Video player with custom controls</li>
                    <li>• Pricing section with toggleable plans</li>
                    <li>• About section with feature highlights</li>
                    <li>• Contact form with validation</li>
                    <li>• Floating navigation on scroll</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Dependencies</h4>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">@icons-pack/react-simple-icons</Badge>
                    <Badge variant="secondary">@number-flow/react</Badge>
                    <Badge variant="secondary">media-chrome</Badge>
                    <Badge variant="secondary">react-fast-marquee</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="installation" className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Install the complete landing page</h4>
                <CodeBlock id="landing-install">pnpm dlx shadcn@latest add https://shadcn-elvinlari-registry.vercel.app/r/landing-page.json</CodeBlock>
              </div>
              <div>
                <h4 className="font-medium mb-2">Or install individual components</h4>
                <CodeBlock id="individual-install">{`pnpm dlx shadcn@latest add https://shadcn-elvinlari-registry.vercel.app/r/announcement.json
pnpm dlx shadcn@latest add https://shadcn-elvinlari-registry.vercel.app/r/marquee.json
pnpm dlx shadcn@latest add https://shadcn-elvinlari-registry.vercel.app/r/video-player.json`}</CodeBlock>
              </div>
            </TabsContent>
            
            <TabsContent value="usage" className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Import and use</h4>
                <CodeBlock id="usage-import">{`import { LandingPage } from "@/components/landing-page"

export default function Page() {
  return <LandingPage />
}`}</CodeBlock>
              </div>
            </TabsContent>
            
            <TabsContent value="components" className="space-y-4">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Announcement</CardTitle>
                    <CardDescription>Banner component for announcements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock id="announcement-usage">{`import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement"

<Announcement>
  <AnnouncementTag>New</AnnouncementTag>
  <AnnouncementTitle>Feature Release</AnnouncementTitle>
</Announcement>`}</CodeBlock>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Marquee</CardTitle>
                    <CardDescription>Scrolling marquee with fade effects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock id="marquee-usage">{`import { Marquee } from "@/components/ui/marquee"

<Marquee>
  {/* Your scrolling content */}
</Marquee>`}</CodeBlock>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Video Player</CardTitle>
                    <CardDescription>Custom video player with controls</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CodeBlock id="video-usage">{`import { VideoPlayer } from "@/components/ui/video-player"

<VideoPlayer>
  <media-video src="video.mp4" />
</VideoPlayer>`}</CodeBlock>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="border-t pt-8 mt-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>Built with ❤️ using Shadcn/ui, Tailwind CSS, and TypeScript</p>
          <p className="mt-2">
            <a href="https://ui.shadcn.com" className="hover:underline" target="_blank" rel="noopener noreferrer">
              Learn more about Shadcn/ui
            </a>
          </p>
        </div>
      </footer>

    </div>
  )
}
