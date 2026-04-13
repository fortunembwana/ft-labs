import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Server, Palette } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center">

      {/* HERO */}
      <section className="relative text-center py-28 px-6 max-w-4xl overflow-hidden">

        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl" />

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Build Fast. <br /> Scale Smarter.
        </h1>

        <p className="text-gray-500 text-lg mb-8">
          FT Labs helps businesses grow with fast, scalable and visually
          stunning web applications powered by modern technologies.
        </p>

        <div className="flex gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight size={16} />
            </Button>
          </Link>

          <Link href="#services">
            <Button variant="outline" size="lg">
              View Services
            </Button>
          </Link>
        </div>
      </section>

      {/* TRUST */}
      <section className="text-center py-10">
        <p className="text-gray-400 text-sm">
          Trusted by startups and growing businesses
        </p>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl py-20"
      >

        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6">
            <Code className="mb-4 text-indigo-500" />
            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
            <p className="text-gray-500">
              High-performance web applications using Next.js and modern stacks.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6">
            <Server className="mb-4 text-purple-500" />
            <h3 className="font-semibold text-lg mb-2">API Development</h3>
            <p className="text-gray-500">
              Secure and scalable backend systems for your applications.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6">
            <Palette className="mb-4 text-pink-500" />
            <h3 className="font-semibold text-lg mb-2">UI/UX Design</h3>
            <p className="text-gray-500">
              Clean and intuitive interfaces focused on user experience.
            </p>
          </CardContent>
        </Card>

      </section>

      {/* WHY US */}
      <section className="text-center py-24 px-6 max-w-4xl">

        <h2 className="text-3xl font-bold mb-6">
          Why Choose FT Labs?
        </h2>

        <p className="text-gray-500 mb-10">
          We combine modern technologies with clean design to deliver
          fast, reliable and scalable solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">

          <div>
            <h4 className="font-semibold mb-2">⚡ Performance</h4>
            <p className="text-gray-500 text-sm">
              Optimized for speed and efficiency.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">🔒 Security</h4>
            <p className="text-gray-500 text-sm">
              Built with best practices in mind.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">📈 Scalability</h4>
            <p className="text-gray-500 text-sm">
              Ready to grow with your business.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6 bg-gray-50 w-full">

        <h2 className="text-3xl font-bold mb-4">
          Ready to build something great?
        </h2>

        <p className="text-gray-500 mb-6">
          Let’s work together to bring your ideas to life.
        </p>

        <Link href="/contact">
          <Button size="lg">Contact Us</Button>
        </Link>

      </section>

    </main>
  );
}