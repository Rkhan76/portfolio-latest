import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'
const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rakshaankhan1@gmail.com',
      href: 'mailto:rakshaankhan1@gmail.com',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-8803530829',
      href: 'tel:+918803530829',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-500/10 border-green-500/20',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      href: null,
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-500/10 border-orange-500/20',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Rkhan76',
      href: 'https://github.com/Rkhan76',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mohd-rakhshan-khan',
      href: 'https://linkedin.com/in/mohd-rakhshan-khan',
      color: 'text-blue-700 dark:text-blue-300',
      bgColor: 'bg-blue-700/10 border-blue-700/20',
    },
  ]

  return (
    <section className="py-24 relative" id="contact">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-primary/5 rounded-3xl"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 40, repeat: Infinity }}
        style={{ backgroundSize: '200% 200%' }}
      />

      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Mail className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-medium">Get In Touch</span>
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's
            <motion.span
              className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              {' '}
              Connect
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <motion.h3
                className="text-2xl font-semibold mb-6 flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="w-2 h-8 bg-gradient-to-b from-primary to-pink-500 rounded-full"
                  animate={{ height: [32, 40, 32] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Contact Information
              </motion.h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <motion.div
                      key={index}
                      className="group flex items-center gap-4 p-4 rounded-xl hover:bg-card/50 transition-all duration-300"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <motion.div
                        className={`p-3 rounded-xl border ${contact.bgColor}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <motion.div
                          animate={{
                            y: [0, -2, 0],
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: index * 0.5,
                          }}
                        >
                          <IconComponent
                            className={`h-5 w-5 ${contact.color}`}
                          />
                        </motion.div>
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium mb-1">{contact.label}</h4>
                        {contact.href ? (
                          <motion.a
                            href={contact.href}
                            target={
                              contact.href.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              contact.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 truncate block"
                            whileHover={{ x: 3 }}
                          >
                            {contact.value}
                          </motion.a>
                        ) : (
                          <p className="text-muted-foreground truncate">
                            {contact.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <h4 className="font-semibold flex items-center gap-2">
                <motion.div
                  className="w-1 h-4 bg-primary rounded-full"
                  animate={{ height: [16, 20, 16] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Quick Actions
              </h4>
              <div className="flex flex-wrap gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="group" asChild>
                    <a href="mailto:rakshaankhan1@gmail.com">
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                      </motion.div>
                      Email Me
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="group" asChild>
                    <a
                      href="https://linkedin.com/in/mohd-rakhshan-khan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                      </motion.div>
                      LinkedIn
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center gap-3">
                  <motion.div
                    className="w-2 h-6 bg-gradient-to-b from-primary to-pink-500 rounded-full"
                    animate={{ height: [24, 32, 24] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  Send Me a Message
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <label
                        htmlFor="name"
                        className="text-sm font-medium flex items-center gap-2"
                      >
                        <motion.div
                          className="w-1 h-3 bg-primary rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      <label
                        htmlFor="email"
                        className="text-sm font-medium flex items-center gap-2"
                      >
                        <motion.div
                          className="w-1 h-3 bg-primary rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                        />
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <motion.div
                        className="w-1 h-3 bg-primary rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.4,
                        }}
                      />
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </motion.div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <label
                      htmlFor="message"
                      className="text-sm font-medium flex items-center gap-2"
                    >
                      <motion.div
                        className="w-1 h-3 bg-primary rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.6,
                        }}
                      />
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="border-border/50 focus:border-primary/50 transition-colors resize-none"
                    />
                  </motion.div>
                </form>
              </CardContent>
              <CardFooter>
                <motion.div
                  className="w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full gap-2 group" size="lg">
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                        rotate: [0, 15, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Send className="h-4 w-4" />
                    </motion.div>
                    Send Message
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactSection
