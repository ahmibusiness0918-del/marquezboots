import { useState } from 'react';
import { Menu, X, MapPin, Phone, Clock, Facebook, Star } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-900/95 backdrop-blur-sm z-50 border-b border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-600">Marquez Boots</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-stone-100 hover:text-amber-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-stone-100 hover:text-amber-500 transition-colors">About</button>
              <button onClick={() => scrollToSection('collections')} className="text-stone-100 hover:text-amber-500 transition-colors">Collections</button>
              <button onClick={() => scrollToSection('store-info')} className="text-stone-100 hover:text-amber-500 transition-colors">Visit Us</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-stone-100 hover:text-amber-500 transition-colors">Reviews</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-stone-100"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-stone-100 hover:text-amber-500">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-stone-100 hover:text-amber-500">About</button>
              <button onClick={() => scrollToSection('collections')} className="block w-full text-left py-2 text-stone-100 hover:text-amber-500">Collections</button>
              <button onClick={() => scrollToSection('store-info')} className="block w-full text-left py-2 text-stone-100 hover:text-amber-500">Visit Us</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-stone-100 hover:text-amber-500">Reviews</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/marquez-main-photo.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-stone-100 mb-6 tracking-tight">
            Discover Your Next Pair of Boots
          </h2>
          <p className="text-2xl md:text-3xl text-amber-500 mb-4 font-semibold">
            Marquez Boots – Hemet, CA
          </p>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto">
            Authentic Mexican Products for the Whole Family
          </p>
          <button
            onClick={() => scrollToSection('store-info')}
            className="bg-amber-600 hover:bg-amber-700 text-stone-100 font-bold py-4 px-10 text-lg transition-all transform hover:scale-105 shadow-xl"
          >
            Visit Us Today
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Why Choose Marquez Boots?
            </h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 shadow-lg border-t-4 border-amber-600">
              <div className="text-amber-600 mb-4 flex justify-center">
                <Star size={48} fill="currentColor" />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3 text-center">Authentic Mexican Products</h4>
              <p className="text-stone-700 leading-relaxed text-center">
                Family-owned local store offering genuine Mexican boots, hats, belts, and apparel that reflect true elegancia del oeste.
              </p>
            </div>

            <div className="bg-white p-8 shadow-lg border-t-4 border-amber-600">
              <div className="text-amber-600 mb-4 flex justify-center">
                <MapPin size={48} />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3 text-center">Local Hemet Service</h4>
              <p className="text-stone-700 leading-relaxed text-center">
                Proudly serving the Hemet community with personalized service and expert knowledge of western fashion.
              </p>
            </div>

            <div className="bg-white p-8 shadow-lg border-t-4 border-amber-600">
              <div className="text-amber-600 mb-4 flex justify-center">
                <Clock size={48} />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3 text-center">Same-Day Pickup</h4>
              <p className="text-stone-700 leading-relaxed text-center">
                Open 7 days a week from 9 AM to 9 PM. Visit our Hemet store and walk out with your perfect pair today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 px-4 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-stone-100 mb-4">
              Our Collections
            </h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-stone-300 text-lg">
              Quality western wear for men, women, and children
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Men's Boots */}
            <div className="bg-stone-900 overflow-hidden shadow-2xl group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/1.jpg"
                  alt="Men's Cowboy Boots"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-amber-500 mb-2">Men's Boots</h4>
                <p className="text-stone-300 mb-4">
                  Premium leather cowboy boots built for comfort and durability
                </p>
                <button
                  onClick={() => scrollToSection('store-info')}
                  className="text-amber-500 hover:text-amber-400 font-semibold inline-flex items-center"
                >
                  Browse Collection →
                </button>
              </div>
            </div>

            {/* Women's Boots */}
            <div className="bg-stone-900 overflow-hidden shadow-2xl group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/2.jpg"
                  alt="Women's Cowboy Boots"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-amber-500 mb-2">Women's Boots</h4>
                <p className="text-stone-300 mb-4">
                  Stylish and elegant boots that blend fashion with function
                </p>
                <button
                  onClick={() => scrollToSection('store-info')}
                  className="text-amber-500 hover:text-amber-400 font-semibold inline-flex items-center"
                >
                  Browse Collection →
                </button>
              </div>
            </div>

            {/* Western Accessories */}
            <div className="bg-stone-900 overflow-hidden shadow-2xl group">
              <div className="relative h-80 overflow-hidden">
                <img
                  src="/3.jpg"
                  alt="Western Accessories"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-amber-500 mb-2">Western Accessories</h4>
                <p className="text-stone-300 mb-4">
                  Hats, belts, and apparel to complete your authentic western look
                </p>
                <button
                  onClick={() => scrollToSection('store-info')}
                  className="text-amber-500 hover:text-amber-400 font-semibold inline-flex items-center"
                >
                  Browse Collection →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Info Section */}
      <section id="store-info" className="py-20 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              Visit Our Store
            </h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-stone-700 text-lg">
              Stop by and experience our full collection in person
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-white p-8 shadow-lg border-l-4 border-amber-600">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-amber-600 flex-shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">Address</h4>
                    <p className="text-stone-700 text-lg leading-relaxed">
                      267 N Sanderson Ave<br />
                      Hemet, CA 92545
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 shadow-lg border-l-4 border-amber-600">
                <div className="flex items-start space-x-4">
                  <Phone className="text-amber-600 flex-shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">Phone</h4>
                    <a href="tel:9517956762" className="text-stone-700 text-lg hover:text-amber-600 transition-colors">
                      (951) 795-6762
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 shadow-lg border-l-4 border-amber-600">
                <div className="flex items-start space-x-4">
                  <Clock className="text-amber-600 flex-shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-2">Hours</h4>
                    <p className="text-stone-700 text-lg">
                      Sunday - Saturday<br />
                      9:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-600 p-8 shadow-lg text-center">
                <p className="text-stone-100 text-xl font-bold">
                  Same-Day Pickup Available in Hemet
                </p>
              </div>
            </div>

            <div className="h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.8395!2d-116.9717!3d33.7471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db6a0e0d0d0d0d%3A0x0!2s267%20N%20Sanderson%20Ave%2C%20Hemet%2C%20CA%2092545!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="shadow-lg"
                title="Marquez Boots Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-stone-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-stone-100 mb-4">
              What Our Customers Say
            </h3>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-stone-300 text-lg">
              Rated by locals for boots and western wear
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-900 p-8 shadow-xl border-t-4 border-amber-600">
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-300 mb-4 italic">
                "Best selection of cowboy boots in Hemet! The staff is incredibly helpful and knowledgeable. Found the perfect pair on my first visit."
              </p>
              <p className="text-amber-500 font-semibold">- Maria G.</p>
            </div>

            <div className="bg-stone-900 p-8 shadow-xl border-t-4 border-amber-600">
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-300 mb-4 italic">
                "Family-owned business with genuine care for their customers. Quality products at fair prices. This is my go-to store for all western wear."
              </p>
              <p className="text-amber-500 font-semibold">- Carlos R.</p>
            </div>

            <div className="bg-stone-900 p-8 shadow-xl border-t-4 border-amber-600">
              <div className="flex text-amber-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-stone-300 mb-4 italic">
                "Outstanding customer service! They helped outfit my whole family with boots and hats. The quality is exceptional and the prices are great."
              </p>
              <p className="text-amber-500 font-semibold">- Jennifer M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12 px-4 border-t border-amber-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold text-amber-500 mb-4">Marquez Boots</h4>
              <p className="text-stone-400 leading-relaxed">
                Your trusted source for authentic western boots, hats, and apparel in Hemet, California.
              </p>
            </div>

            <div>
              <h5 className="text-lg font-bold text-stone-100 mb-4">Contact Us</h5>
              <div className="space-y-2">
                <p className="flex items-center">
                  <MapPin size={16} className="mr-2 text-amber-500" />
                  267 N Sanderson Ave, Hemet, CA 92545
                </p>
                <p className="flex items-center">
                  <Phone size={16} className="mr-2 text-amber-500" />
                  <a href="tel:9517956762" className="hover:text-amber-500 transition-colors">
                    (951) 795-6762
                  </a>
                </p>
                <p className="flex items-center">
                  <Clock size={16} className="mr-2 text-amber-500" />
                  Sun-Sat: 9 AM - 9 PM
                </p>
              </div>
            </div>

            <div>
              <h5 className="text-lg font-bold text-stone-100 mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61565370211445"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-700 p-3 rounded-full transition-colors"
                >
                  <Facebook size={24} />
                </a>
              </div>
              <p className="mt-6 text-stone-400 italic">
                Contact us today and step into your next pair of boots!
              </p>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center">
            <p className="text-stone-500">
              &copy; {new Date().getFullYear()} Marquez Boots. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
