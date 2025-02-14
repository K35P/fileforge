import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, FileText, Settings, Lock, Cloud, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-gray-900 text-gray-200">
      <h1 className="text-5xl font-bold text-white">Welcome to FileForge</h1>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl">
        We're tired of overpriced tools limiting productivity. FileForge is here to provide a free, open-source, and powerful file management experience.
      </p>
      <Button className="mt-6 px-6 py-2 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <Card className="p-6 bg-gray-800 text-white border-0">
          <Rocket className="w-12 h-12 text-blue-600 mx-auto" />
          <CardContent>
            <h2 className="text-2xl font-semibold mt-4">Fast & Reliable</h2>
            <p className="text-gray-400 mt-2">Optimized for speed and efficiency in file conversion.</p>
          </CardContent>
        </Card>
        <Card className="p-6 bg-gray-800 text-white border-0">
          <FileText className="w-12 h-12 text-blue-600 mx-auto" />
          <CardContent>
            <h2 className="text-2xl font-semibold mt-4">Multiple Formats</h2>
            <p className="text-gray-400 mt-2">Supports a wide range of file types for seamless conversion.</p>
          </CardContent>
        </Card>
        <Card className="p-6 bg-gray-800 text-white border-0">
          <Settings className="w-12 h-12 text-blue-600 mx-auto" />
          <CardContent>
            <h2 className="text-2xl font-semibold mt-4">Customization</h2>
            <p className="text-gray-400 mt-2">Tailor your experience with powerful settings and tools.</p>
          </CardContent>
        </Card>
        <Card className="p-6 bg-gray-800 text-white border-0">
          <Lock className="w-12 h-12 text-blue-600 mx-auto" />
          <CardContent>
            <h2 className="text-2xl font-semibold mt-4">Privacy First</h2>
            <p className="text-gray-400 mt-2">We don’t track or store your data. Your files, your rules.</p>
          </CardContent>
        </Card>
        <Card className="p-6 bg-gray-800 text-white border-0">
          <Cloud className="w-12 h-12 text-blue-600 mx-auto" />
          <CardContent>
            <h2 className="text-2xl font-semibold mt-4">Cloud Sync</h2>
            <p className="text-gray-400 mt-2">Easily integrate with your favorite cloud storage providers.</p>
          </CardContent>
        </Card>
        <Card className="p-6 bg-gray-800 text-white border-0">
          <CheckCircle className="w-12 h-12 text-blue-600 mx-auto" />
          <CardContent>
            <h2 className="text-2xl font-semibold mt-4">100% Free & Open-Source</h2>
            <p className="text-gray-400 mt-2">No subscriptions, no hidden fees—just a powerful set of tools.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
