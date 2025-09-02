import React from 'react';
import { Star, Quote, Award, Users } from 'lucide-react';

const Impact: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Emma & James Wilson',
      role: 'Wedding Clients',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Sarah captured our wedding day perfectly! Every emotion, every moment was beautifully preserved. We couldn\'t be happier with the results.'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Portrait Client',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The family portraits Sarah took are absolutely stunning. She made everyone feel comfortable and the photos turned out amazing.'
    },
    {
      id: 3,
      name: 'Tech Innovations Corp',
      role: 'Corporate Client',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Professional, creative, and reliable. Sarah documented our company event flawlessly and delivered exceptional results.'
    }
  ];

  const achievements = [
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24hrs', label: 'Average Delivery' },
    { number: '5★', label: 'Average Rating' },
    { number: '100%', label: 'Repeat Clients' }
  ];

  const partners = [
    { name: 'Sanlam', logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'YCC', logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' },
    { name: 'RLabs', logo: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop' }
  ];

  const recognitions = [
    {
      title: '2025 Media Businesswomen of the Year',
      organization: 'Media Excellence Awards',
      year: '2025'
    },
    {
      title: 'Visual Storytelling Excellence Award',
      organization: 'Photography Institute',
      year: '2024'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="text-orange-500">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about their experience working with me.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-300 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partners & Collaborations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Partners & <span className="text-orange-500">Collaborations</span>
            </h3>
            <p className="text-lg text-gray-300">
              Trusted by leading organizations and brands
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-24 h-12 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-white">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition & Awards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Recognition & <span className="text-orange-500">Awards</span>
            </h3>
            <p className="text-lg text-gray-300">
              Honored for excellence in visual storytelling and business leadership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-orange-500 mt-1">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {recognition.title}
                    </h4>
                    <p className="text-gray-300 mb-2">{recognition.organization}</p>
                    <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {recognition.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-orange-500 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <Quote className="w-8 h-8 text-orange-500 mb-4" />
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-8">
            Ready to create beautiful memories together?
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;