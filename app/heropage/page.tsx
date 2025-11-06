import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen from-pink-200 via-purple-200 to-blue-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Your Heropage</h1>
      <Button variant="default" className="text-lg">Click Me</Button>
    </div>
  )
}