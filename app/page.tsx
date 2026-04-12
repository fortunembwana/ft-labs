import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home () {
    return (
        <main className="flex flex-col items-center">

        {/* HERO */}
        <section className="text-center py-24 px-6max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Building Modern Digital Solutions
            </h1>

            <p className="text-gray-500 text-lg mb-8">
                FT Labs helps Businesses grow with fast, scalable and visually
                stunnong web applications  powered by modern technologies.
            </p>

            <div className="flex gap-4 jistify-center">
                <Button size="lg">Get Started</Button>
                <Button variant="outline" size="lg">View Services</Button>
            </div>
        </section>

        <section className="text-center py-10">
            <p className="text-gray-400 text-sm">
                Trusted by Startups and Growing Businesses
            </p>
        </section>

        {/* SERVICES */}
        <section className="grid md:grid-cols-3 gap-6 px-6 max-w-6xl py-16">

            <Card>
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">Web Development</h3>
                    <p className="tex-gray-500">
                    High-perfomance web apllications using Next.js and modern stacks.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">API Development</h3>
                    <p className="text-gray-500">
                        Secure and scalable backend systems for your applications.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">UI/UX Design</h3>
                    <p className="text-gray-500">
                        Clean and intuitive interfaces focused on user exprience.
                    </p>
                </CardContent>
            </Card>
        </section>

        ( /* CTA */)
        <section className="text-center py-20 px-6">
            <h2 className="text-3xl font-bold mb-4">
                Ready to build something great?
            </h2>

            <p className="text-gray-500 mb-6">
                Let's work together to bring yiur ideas to life.
            </p>

            <Button size="lg">Contact Us</Button>
        </section>

        </main>

    );
}