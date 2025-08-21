import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'STORYQUEST', href: '#storyquest' },
    { 
      name: 'LIBRARY', 
      href: '#library',
      dropdown: [
        { name: 'Read', href: '#read' },
        { name: 'Listen', href: '#listen' }
      ]
    },
    { name: 'BOKOBOKIDS VILLAGE', href: '#village' },
    { name: 'GAMES', href: '#games' },
    { name: 'ABOUT US', href: '#about' },
    { name: 'CONTACTS', href: '#contacts' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold font-fredoka text-primary-foreground">B</span>
            </div>
            <span className="text-2xl font-bold font-fredoka text-foreground">
              Bokobokids
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setLibraryOpen(true)}
                    onMouseLeave={() => setLibraryOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium font-baloo">
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    <AnimatePresence>
                      {libraryOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                        >
                          {item.dropdown.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="block px-4 py-3 text-card-foreground hover:bg-muted transition-colors font-baloo"
                            >
                              {dropItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium font-baloo"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            
            <Button 
              variant="default"
              className="bg-gradient-hero hover:shadow-lg transition-all duration-300 font-semibold font-baloo px-6"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border bg-card"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setLibraryOpen(!libraryOpen)}
                          className="flex items-center justify-between w-full px-4 py-2 text-card-foreground hover:text-primary transition-colors font-baloo"
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            size={16} 
                            className={`transform transition-transform ${libraryOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {libraryOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-8 space-y-2"
                            >
                              {item.dropdown.map((dropItem) => (
                                <a
                                  key={dropItem.name}
                                  href={dropItem.href}
                                  className="block px-4 py-2 text-muted-foreground hover:text-primary transition-colors font-baloo"
                                >
                                  {dropItem.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-card-foreground hover:text-primary transition-colors font-baloo"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Button 
                    variant="default"
                    className="w-full bg-gradient-hero font-semibold font-baloo"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;