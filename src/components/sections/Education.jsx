import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GraduationCap, School } from 'lucide-react'
import { motion } from 'framer-motion'

const EducationSection = () => {
  const education = [
    {
      institution: 'School of CS&IT, MANUU',
      location: 'Hyderabad, Telangana',
      degree: 'Bachelor of Technology (Computer Science)',
      period: '2021 - 2025',
      grade: 'CGPA: 8.46',
      icon: GraduationCap,
      current: true,
    },
    {
      institution: 'Aligarh Muslim University',
      location: 'Aligarh, India',
      degree: 'Senior Secondary School',
      period: '2017 - 2019',
      grade: 'Percentage: 82.8%',
      icon: School,
      current: false,
    },
  ]

  return (
    <section className="py-24 relative" id="education">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-primary/5 rounded-3xl"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{ duration: 35, repeat: Infinity }}
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
              <GraduationCap className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-medium">Academic Background</span>
          </motion.div>
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Educational
            <motion.span
              className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              {' '}
              Journey
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My academic foundation in computer science and technology that
            shaped my development career.
          </motion.p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => {
            const IconComponent = edu.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card
                  className={`group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 ${
                    edu.current ? 'ring-2 ring-primary/30' : ''
                  }`}
                >
                  {/* Animated timeline line */}
                  <motion.div
                    className="absolute left-8 top-0 bottom-0 w-px bg-border/30"
                    initial={{ height: 0 }}
                    whileInView={{ height: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <motion.div
                      className="absolute top-8 left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                    >
                      <motion.div
                        className={`w-4 h-4 rounded-full border-2 ${
                          edu.current
                            ? 'bg-primary border-primary shadow-lg shadow-primary/30'
                            : 'bg-background border-border'
                        }`}
                        animate={
                          edu.current
                            ? {
                                scale: [1, 1.2, 1],
                                boxShadow: [
                                  '0 0 0 0 rgba(var(--primary), 0.7)',
                                  '0 0 0 10px rgba(var(--primary), 0)',
                                  '0 0 0 0 rgba(var(--primary), 0)',
                                ],
                              }
                            : {}
                        }
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>

                  {edu.current && (
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: 'spring' }}
                    >
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                        <motion.div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs font-medium text-green-600 dark:text-green-400">
                          Current
                        </span>
                      </div>
                    </motion.div>
                  )}

                  <CardHeader className="pl-20 pb-4">
                    <motion.div
                      className="absolute left-4 top-6"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + index * 0.2,
                        type: 'spring',
                        stiffness: 200,
                      }}
                    >
                      <motion.div
                        className="p-3 rounded-xl bg-primary/10 border border-primary/20"
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
                            delay: index * 1,
                          }}
                        >
                          <IconComponent className="h-6 w-6 text-primary" />
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.2 }}
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {edu.institution}
                        </CardTitle>
                      </motion.div>
                      <CardDescription className="text-base">
                        📍 {edu.location}
                      </CardDescription>
                    </motion.div>
                  </CardHeader>

                  <CardContent className="pl-20 space-y-4">
                    <motion.div
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    >
                      <div>
                        <motion.h3
                          className="font-semibold text-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          {edu.degree}
                        </motion.h3>
                        <motion.div
                          className="flex items-center gap-2 mt-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + index * 0.2 }}
                        >
                          <motion.div
                            className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-sm font-medium text-green-600 dark:text-green-400">
                              {edu.grade}
                            </span>
                          </motion.div>
                        </motion.div>
                      </div>
                      <motion.div
                        className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.2 }}
                      >
                        <span className="text-sm font-medium text-primary">
                          {edu.period}
                        </span>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default EducationSection
