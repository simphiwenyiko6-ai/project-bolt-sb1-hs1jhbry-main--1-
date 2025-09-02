import React from 'react';
import { Camera, Video, Palette, GraduationCap, BookOpen, Calendar } from 'lucide-react';

interface ServicesProps {
  onCategorySelect: (category: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onCategorySelect }) => {
  const services = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Wedding Photography',
      description: 'Capturing the magic of your special day with timeless elegance and romantic storytelling.',
      features: ['Ceremony coverage', 'Reception photography', 'Bridal portraits', 'Detail shots'],
      price: 'Starting at $350',
      backgroundImage: 'https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'wedding'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Portrait Photography',
      description: 'Professional portraits that capture personality, emotion, and authentic moments beautifully.',
      features: ['Family portraits', 'Senior photos', 'Professional headshots', 'Maternity sessions'],
      price: 'Starting at $250',
      backgroundImage: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'portrait'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Event Photography',
      description: 'Professional event coverage that captures every important moment and celebration.',
      features: ['Corporate events', 'Birthday parties', 'Conferences', 'Award ceremonies'],
      price: 'Starting at $400',
      backgroundImage: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'event'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Lifestyle Photography',
      description: 'Authentic lifestyle photography that captures real moments and genuine emotions.',
      features: ['Urban shoots', 'Fashion lifestyle', 'Adventure photos', 'Travel photography'],
      price: 'Starting at $300',
      backgroundImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'lifestyle'
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Corporate Photography',
      description: 'Professional corporate photography for businesses, teams, and executive portraits.',
      features: ['Team photography', 'Executive portraits', 'Office environments', 'Company events'],
      price: 'Starting at $500',
      backgroundImage: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'corporate'
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: 'Book Services',
      description: 'Ready to start your project? Schedule a consultation to discuss your vision and requirements.',
      features: ['Free consultation', 'Custom packages', 'Flexible scheduling', 'Quick response'],
      price: 'Free Consultation',
      backgroundImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      isBooking: true,
      category: 'contact'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I offer a comprehensive range of visual services to help you tell your story, build your brand, and capture your most important moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.backgroundImage}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[500px]">
                <div>
                  <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-200 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-200">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="text-2xl font-bold text-orange-500 mb-4">{service.price}</div>
                  <button 
                    onClick={() => {
                      if (service.isBooking) {
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        onCategorySelect(service.category);
                      }
                    }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    service.isBooking 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg' 
                      : 'bg-white/90 hover:bg-white text-gray-900'
                  }`}>
                    {service.isBooking ? 'Book Now' : 'View Gallery'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-8">
            Need a custom package? Let's discuss your specific requirements.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;