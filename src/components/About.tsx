import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Globe, 
  Award,
  Utensils,
  GraduationCap,
  Home,
  Heart
} from 'lucide-react';

const About = () => {
  const impactAreas = [
    {
      icon: Utensils,
      title: 'FEED COMMUNITIES',
      description: 'Providing 30 meals monthly to children in need across global communities',
      stat: '1.8M+ MEALS'
    },
    {
      icon: GraduationCap,
      title: 'EMPOWER CAREERS',
      description: 'Funding accredited job training and guaranteed employment pathways',
      stat: '2,400+ TRAINED'
    },
    {
      icon: Home,
      title: 'BUILD HOMES',
      description: 'Expanding affordable and subsidized housing through strategic partnerships',
      stat: '148 FAMILIES'
    },
    {
      icon: Heart,
      title: 'TRANSFORM LIVES',
      description: 'Creating sustainable change through community-driven initiatives',
      stat: '50K+ IMPACTED'
    }
  ];

  const principles = [
    {
      icon: Target,
      title: 'TRANSPARENCY',
      description: 'Every dollar tracked, every impact measured, every result shared with our global community.'
    },
    {
      icon: Users,
      title: 'COLLABORATION',
      description: 'Partnering with leading organizations to amplify impact and create lasting change.'
    },
    {
      icon: Globe,
      title: 'SUSTAINABILITY',
      description: 'Building systems that create ongoing value for members while transforming communities.'
    },
    {
      icon: Award,
      title: 'EXCELLENCE',
      description: 'Delivering premium experiences that exceed expectations and drive meaningful results.'
    }
  ];

  return (
    <div id="about" className="bg-slate-900">
      {/* Mission Statement Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
            alt="Diverse group of volunteers working together" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div className="inline-block">
                  <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                  <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                    WHAT IS
                    <br />
                    <span className="text-amber-400">DO GOOD SOCIETY</span>
                  </h2>
                </div>
                
                <p className="text-xl text-white/80 leading-relaxed font-light">
                  We are the world's most impactful membership community, where every action creates 
                  measurable change. Through strategic partnerships and innovative programs, we transform 
                  individual contributions into global movements.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 leading-relaxed">
                      <span className="text-amber-400 font-semibold">DIRECT IMPACT:</span> Every membership 
                      dollar is tracked and allocated to specific outcomes you can see and measure.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 leading-relaxed">
                      <span className="text-amber-400 font-semibold">GLOBAL REACH:</span> Operating across 
                      180+ communities worldwide with verified local partnerships.
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-white/70 leading-relaxed">
                      <span className="text-amber-400 font-semibold">MEMBER BENEFITS:</span> Premium savings, 
                      exclusive travel opportunities, and recognition within our elite community.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-amber-400/10 to-transparent p-12 border border-amber-400/20">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white tracking-wide">IMPACT BY NUMBERS</h3>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-black text-amber-400 mb-2">$286</div>
                      <div className="text-white/60 text-sm tracking-wider">AVG MEMBER SAVINGS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-amber-400 mb-2">850+</div>
                      <div className="text-white/60 text-sm tracking-wider">ACTIVE VOLUNTEERS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-amber-400 mb-2">45+</div>
                      <div className="text-white/60 text-sm tracking-wider">GLOBAL PARTNERS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-amber-400 mb-2">98%</div>
                      <div className="text-white/60 text-sm tracking-wider">SATISFACTION RATE</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unity Section with Full-Width Image */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Diverse hands coming together in unity" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-slate-900/85"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              TOGETHER WE ARE
              <br />
              <span className="text-amber-400">UNSTOPPABLE</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              When passionate individuals unite with a shared purpose, extraordinary change becomes inevitable. 
              Join a community where your voice matters and your actions create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-32 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              OUR IMPACT AREAS
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Four pillars of transformation that define our global mission and drive measurable change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-slate-900/80 border border-amber-400/20 p-8 hover:border-amber-400/40 transition-all duration-500"
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center group-hover:from-amber-400/30 group-hover:to-amber-600/30 transition-all duration-300">
                    <area.icon className="h-8 w-8 text-amber-400" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{area.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">{area.description}</p>
                    <div className="text-amber-400 font-black text-lg tracking-wider">{area.stat}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2088&q=80" 
            alt="Confident woman leader speaking" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="w-16 h-1 bg-amber-400 mb-6"></div>
                <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                  EMPOWERING
                  <br />
                  <span className="text-amber-400">LEADERS</span>
                </h2>
              </div>
              
              <p className="text-xl text-white/80 leading-relaxed font-light">
                Our community is built by leaders, for leaders. We believe that when empowered individuals 
                come together with shared values and clear purpose, they can move mountains and transform societies.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white/70 leading-relaxed">
                    <span className="text-amber-400 font-semibold">LEADERSHIP DEVELOPMENT:</span> Access exclusive 
                    training programs designed to amplify your impact and influence.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white/70 leading-relaxed">
                    <span className="text-amber-400 font-semibold">GLOBAL NETWORK:</span> Connect with 
                    changemakers, entrepreneurs, and visionaries from every corner of the world.
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white/70 leading-relaxed">
                    <span className="text-amber-400 font-semibold">RECOGNITION PLATFORM:</span> Showcase your 
                    achievements and inspire others through our global recognition program.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" 
                    alt="Professional woman in business setting" 
                    className="w-full h-48 object-cover border border-amber-400/20"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                    alt="Professional man in leadership role" 
                    className="w-full h-32 object-cover border border-amber-400/20"
                  />
                </div>
                <div className="space-y-6 pt-12">
                  <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Executive leadership meeting" 
                  className="w-full h-32 object-cover border border-amber-400/20"
                  />
                  <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Collaborative team strategy session" 
                  className="w-full h-48 object-cover border border-amber-400/20"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80" 
            alt="Professional handshake partnership" 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-slate-900/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
              OUR PRINCIPLES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex space-x-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center flex-shrink-0">
                  <principle.icon className="h-8 w-8 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{principle.title}</h3>
                  <p className="text-white/70 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-amber-400/10 to-amber-600/10 border-t border-amber-400/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              READY TO CREATE
              <br />
              <span className="text-amber-400">LASTING IMPACT?</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Join thousands of changemakers who are transforming communities worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-12 py-4 rounded-none font-bold text-lg tracking-wider hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105">
                BECOME A MEMBER
              </button>
              <button className="bg-transparent border-2 border-amber-400 text-amber-400 px-12 py-4 rounded-none font-bold text-lg tracking-wider hover:bg-amber-400/10 transition-all duration-300">
                LEARN MORE
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;