import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";

export default function ProjectsPage() {
  const navigate = useNavigate();

  const allProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern, responsive e-commerce platform built with React and Node.js. Features include real-time inventory, payment processing, and admin dashboard with advanced analytics.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      liveUrl: "https://mern-food-delivery-app-frontend-wmbb.onrender.com/",
      githubUrl: "https://github.com/Alioune-Ndoye/my-neojap-portfolio",
      highlights: ["50% faster loading", "99.9% uptime", "10k+ users"],
      featured: true,
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Real-time analytics dashboard with machine learning insights, predictive analytics, and beautiful data visualizations for enterprise clients.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Vue.js", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
      liveUrl: "https://hubsearch-1.onrender.com",
      githubUrl: "https://github.com",
      highlights: ["Real-time ML", "Custom charts", "Enterprise grade"],
      featured: true,
    },
    {
      title: "Social Media Management Suite",
      description:
        "Comprehensive social media management platform with scheduling, analytics, team collaboration, and multi-platform posting capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=600&fit=crop",
      technologies: ["Next.js", "GraphQL", "Redis", "AWS", "TypeScript"],
      liveUrl: "https://jamlive.onrender.com/",
      githubUrl: "https://github.com",
      highlights: ["5+ platforms", "Team collaboration", "Smart scheduling"],
      featured: true,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, animated portfolio showcasing my work with smooth transitions and responsive design built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: ["Responsive design", "Smooth animations", "SEO optimized"],
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, user authentication, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS", "WebSockets"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: ["Real-time sync", "Team features", "Mobile responsive"],
    },
    {
      title: "Design System",
      description:
        "Comprehensive design system with reusable UI components, documentation, and accessibility guidelines for modern web applications.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      technologies: ["React", "Storybook", "TypeScript", "Accessibility"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: ["30+ components", "Full docs", "WCAG compliant"],
    },
    {
      title: "Content Management System",
      description:
        "Headless CMS with rich text editing, media management, and flexible content modeling for developers and content creators.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
      technologies: ["Next.js", "PostgreSQL", "GraphQL", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: ["Headless API", "Version control", "Webhooks"],
    },
    {
      title: "Real-time Chat Application",
      description:
        "A full-featured chat application with real-time messaging, video calls, and end-to-end encryption for secure communication.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      technologies: ["React", "WebSockets", "Node.js", "MongoDB", "WebRTC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      highlights: ["End-to-end encryption", "Video calls", "File sharing"],
    },
  ];

  const featuredProjects = allProjects.filter((p) => p.featured);
  const otherProjects = allProjects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="py-16 md:py-20 bg-gradient-to-b from-muted/50 to-background border-b border-border">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              className="mb-8 gap-2"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Button>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore my complete portfolio of work, showcasing expertise in full-stack development,
              design systems, and innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects Section */}
      {featuredProjects.length > 0 && (
        <section className="py-20 border-b border-border">
          <div className="container px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Featured Projects
            </motion.h2>

            <div className="grid gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <div className="grid lg:grid-cols-2 gap-8 items-center p-6 lg:p-8">
                      {/* Image */}
                      <motion.div
                        className="relative overflow-hidden rounded-lg group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 md:h-80 object-cover rounded-lg"
                          />
                        </motion.div>
                      </motion.div>

                      {/* Content */}
                      <div className="space-y-6">
                        <div>
                          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                            Featured
                          </Badge>
                          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {project.description}
                          </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-3 gap-4">
                          {project.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="text-center p-3 rounded-lg bg-muted/50"
                            >
                              <div className="text-sm text-muted-foreground">{highlight}</div>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-2">
                          <Button asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Live
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="py-20">
        <div className="container px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Other Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 group">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" asChild className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 border-t border-border">
        <div className="container px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project. I'm always open to discussing new opportunities.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:ali_ndoye@yahoo.com">Get In Touch</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
