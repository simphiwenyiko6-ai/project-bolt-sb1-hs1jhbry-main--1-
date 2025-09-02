import React from 'react';
import { Award, Users, Camera, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Camera className="w-8 h-8" />, number: '500+', label: 'Sessions Completed' },
    { icon: <Users className="w-8 h-8" />, number: '200+', label: 'Happy Clients' },
    { icon: <Award className="w-8 h-8" />, number: '5', label: 'Years Experience' },
    { icon: <Heart className="w-8 h-8" />, number: '∞', label: 'Passion for Art' }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-orange-500">Me</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Welcome to my world of photography! I'm Sarah Johnson, a passionate photographer with over 5 years of experience capturing life's most precious moments. My journey began with a simple love for storytelling through images, and it has evolved into a profession that brings me immense joy.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I specialize in portrait, wedding, and lifestyle photography, always striving to create images that not only look beautiful but also evoke emotions and preserve memories for generations to come.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-orange-500 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                alt="Photographer portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 p-6 rounded-2xl shadow-lg">
              <Camera className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;