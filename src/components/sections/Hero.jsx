import { Button } from '@/components/ui/button'
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Phone,
  MapPin,
  Download,
} from 'lucide-react'
import heroImg from '@/assets/images/hero-section-img.png'
import heroImgDark from '@/assets/images/hero-section-img-dark.png'
import { Badge } from '../ui/badge'
import resumePdf from '@/assets/files/Resume-V1.pdf'
import { useTheme } from '../theme-provider'
import { motion } from 'framer-motion'

export default function Hero() {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div
        className="grid lg:grid-cols-2 gap-12 items-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium">Available for work</span>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-6xl font-bold leading-tight"
              variants={itemVariants}
            >
              Hi, I'm{' '}
              <motion.span
                className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Mohd Rakhshan Khan
              </motion.span>
            </motion.h1>

            <motion.div className="space-y-2" variants={itemVariants}>
              <motion.p
                className="text-2xl lg:text-3xl font-semibold text-muted-foreground"
                whileHover={{ scale: 1.02 }}
              >
                Full-Stack Developer
              </motion.p>
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                variants={itemVariants}
              >
                Passionate about crafting exceptional digital experiences with
                modern web technologies. Building innovative solutions that make
                an impact. Specialized in MERN stack development with expertise
                in React, Node.js, and modern web frameworks.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3"
            variants={itemVariants}
          >
            {[
              { icon: Mail, label: 'Email', value: 'rakshaankhan1@gmail.com' },
              { icon: Phone, label: 'Phone', value: '+91-8803530829' },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Hyderabad, Telangana, India',
                span: 'sm:col-span-2 lg:col-span-1 xl:col-span-2',
              },
            ].map((contact, index) => (
              <motion.div
                key={contact.label}
                className={`flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors ${
                  contact.span || ''
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className="p-2 rounded-md bg-primary/10"
                  whileHover={{ rotate: 5 }}
                >
                  <contact.icon className="h-4 w-4 text-primary" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground">
                    {contact.label}
                  </p>
                  <p className="text-sm font-medium truncate">
                    {contact.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="group" asChild>
                <a href="mailto:rakshaankhan1@gmail.com">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                  </motion.div>
                  Get in Touch
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="group" asChild>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <Download className="mr-2 h-4 w-4" />
                  </motion.div>
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex gap-4" variants={itemVariants}>
            {[
              {
                icon: Github,
                href: 'https://github.com/Rkhan76',
                label: 'GitHub',
              },
              {
                icon: Linkedin,
                href: 'https://linkedin.com/in/mohd-rakhshan-khan',
                label: 'LinkedIn',
              },
            ].map((social, index) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex items-center justify-center order-1 lg:order-2"
          variants={itemVariants}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl scale-110"
              animate={{
                scale: [1.1, 1.2, 1.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div className="relative p-4" {...floatingAnimation}>
              <motion.img
                src={theme === 'dark' ? heroImgDark : heroImg}
                alt="Mohd Rakhshan Khan - Full Stack Developer"
                className="w-full max-w-md h-auto object-contain"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
