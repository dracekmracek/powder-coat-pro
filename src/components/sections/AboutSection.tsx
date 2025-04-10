import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeader from '@/components/SectionHeader';
import { Check, Award, Clock, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection: React.FC = () => {
  // Benefit data s ikonami
  const benefits = [
    {
      title: "Kvalita",
      description: "Prvotřídní zpracování zakázek",
      icon: <Award className="h-5 w-5" />,
      color: "bg-blue-100/80 text-blue-600",
      gradient: "from-blue-50 to-blue-100/50",
      border: "border-blue-200/30",
      iconBg: "bg-blue-500"
    },
    {
      title: "Zkušenosti",
      description: "Více než 25 let v oboru",
      icon: <Clock className="h-5 w-5" />,
      color: "bg-amber-100/80 text-amber-600",
      gradient: "from-amber-50 to-amber-100/50",
      border: "border-amber-200/30",
      iconBg: "bg-amber-500"
    },
    {
      title: "Komplexnost",
      description: "Kompletní zpracování zakázky",
      icon: <Check className="h-5 w-5" />,
      color: "bg-green-100/80 text-green-600",
      gradient: "from-green-50 to-green-100/50",
      border: "border-green-200/30", 
      iconBg: "bg-green-500"
    },
    {
      title: "Flexibilita",
      description: "Rychlá reakce na požadavky",
      icon: <Users className="h-5 w-5" />,
      color: "bg-purple-100/80 text-purple-600",
      gradient: "from-purple-50 to-purple-100/50",
      border: "border-purple-200/30",
      iconBg: "bg-purple-500"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-muted/20 z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-r from-transparent via-primary/5 to-transparent blur-3xl z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="O naší společnosti"
          accent={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <ScrollReveal className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md border border-border/30"
            >
              <h3 className="text-2xl font-semibold mb-4 text-foreground relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Specialisté na práškové lakování
                </span>
                <span className="ml-2">s dlouholetou tradicí</span>
                <div className="h-1 w-16 bg-primary/20 rounded-full mt-2"></div>
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Naší prioritou je spokojenost zákazníka - od začátku obchodního vztahu až po dlouhodobé užívání našich služeb. Klademe důraz na flexibilitu, komplexnost a stoprocentní péči o každou zakázku.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className={`flex items-start p-4 rounded-lg border ${benefit.border} bg-gradient-to-br ${benefit.gradient} backdrop-blur-sm hover:shadow-md transition-all duration-300`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className={`w-10 h-10 rounded-full ${benefit.color} flex-shrink-0 flex items-center justify-center shadow-sm mr-4 overflow-hidden relative`}>
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]"></div>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.a
                href="#technology"
                className="mt-8 flex items-center group cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('technology');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80, // Odečítám 80px pro odsazení (např. pro fixní navigaci)
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <span className="text-primary font-medium">Zjistěte více o našich službách</span>
                <ChevronRight className="h-4 w-4 ml-1 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </ScrollReveal>
          
          <ScrollReveal delay={200} className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <motion.div 
                className="relative mx-auto overflow-hidden rounded-xl shadow-lg border border-white/20 aspect-4/3 max-w-md bg-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full mix-blend-multiply blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full mix-blend-multiply blur-3xl"></div>
                
                {/* Image container with gradient overlay */}
                <div className="relative w-full h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
                  <img 
                    src="/powder-coat-pro/images/imageBetrim.png" 
                    alt="Lakovna Betrim" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  
                  {/* Company stats cards */}
                  <div className="absolute top-4 right-4 z-20">
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white transition-colors duration-300">
                      <CardContent className="p-3">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground">Založeno</p>
                          <p className="text-xl font-bold text-primary">1997</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 z-20">
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white transition-colors duration-300">
                      <CardContent className="p-3">
                        <div className="flex items-center space-x-2">
                          <Award className="h-4 w-4 text-primary" />
                          <p className="text-sm font-medium">ISO 9001:2015</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {/* Inner border effect */}
                <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none"></div>
              </motion.div>
              
              {/* Floating accent elements */}
              <motion.div 
                className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/10 rounded-full z-0 hidden md:block"
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -left-2 top-1/2 w-8 h-20 bg-gradient-to-b from-primary/20 to-transparent rounded-full z-0 hidden md:block"
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
