import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, MapPin, Phone, Mail, Plane, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <main className="p-4 md:p-10 max-w-6xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-10 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-2xl shadow-md">
        <h1 className="text-5xl font-extrabold tracking-tight">Explore the World with Dimick Travel</h1>
        <p className="text-xl">Curated trips, unforgettable experiences — all online, all for you.</p>
        <Button className="mt-4 px-8 py-3 text-lg font-medium">Start Your Journey</Button>
      </section>

      {/* Feature Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <MapPin className="mx-auto text-blue-600" size={36} />
            <h2 className="text-xl font-semibold">Bespoke Destinations</h2>
            <p>Custom-planned getaways to fit your dreams, from local escapes to international adventures.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <CalendarDays className="mx-auto text-blue-600" size={36} />
            <h2 className="text-xl font-semibold">Flexible Itineraries</h2>
            <p>Your time, your pace — enjoy total freedom with our adaptable travel plans.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <Phone className="mx-auto text-blue-600" size={36} />
            <h2 className="text-xl font-semibold">Remote Agent Support</h2>
            <p>Our team is just a message away — from the moment you book to the moment you return.</p>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold">Why Dimick Travel?</h2>
        <p className="text-muted-foreground text-lg">
          We're not just agents — we're passionate explorers dedicated to crafting unique, seamless travel experiences. Every trip is designed with care, flexibility, and your preferences in mind.
        </p>
      </section>

      {/* Contact Section */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p>Have questions or want to start planning? Reach out any time!</p>
        <div className="flex flex-col items-center space-y-1">
          <p className="flex items-center gap-2"><Mail size={18} /> hello@dimicktravel.com</p>
          <p className="flex items-center gap-2"><Phone size={18} /> +61 400 000 000</p>
        </div>
      </section>
    </main>
  );
}
