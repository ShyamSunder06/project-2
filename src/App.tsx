import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  MessageCircle, 
  Database, 
  Brain, 
  Search,
  Shield,
  Cpu,
  Github,
  ExternalLink,
  Server,
  Rocket,
  Lock
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Document Processing & Query System
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            An intelligent system that processes unstructured data from various file formats and enables natural language querying through an AI-powered interface.
          </p>
        </motion.div>
      </header>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">🧩 Problem Statement</h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-4">
              Enterprises struggle with vast repositories of unstructured and semi-structured data locked in diverse document formats. Traditional document processing tools:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-300 mb-4">
              <li>Cannot flexibly extract meaningful information at scale</li>
              <li>Lack the ability to understand context across multiple documents</li>
              <li>Require rigid, predefined templates that limit adaptability</li>
              <li>Often involve costly, time-consuming manual processing</li>
            </ul>
            <p className="text-gray-300">
              Companies need an intelligent system that can dynamically understand document content, extract relevant information, and respond to natural language queries while maintaining data privacy and security.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">💡 Our Solution</h2>
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Server className="mr-2 text-indigo-400" /> Local Deployment & Privacy
              </h3>
              <p className="text-gray-300 mb-2">
                Our solution runs entirely in your local environment via Docker containers, ensuring:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-gray-300">
                <li>Complete data privacy - sensitive documents never leave your infrastructure</li>
                <li>Easy deployment within existing security frameworks</li>
                <li>Full control over data access and processing</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Rocket className="mr-2 text-indigo-400" /> Intelligent Processing Pipeline
              </h3>
              <p className="text-gray-300 mb-2">
                The system processes your document repository through these steps:
              </p>
              <ol className="list-decimal ml-6 space-y-1 text-gray-300">
                <li>Multi-format parsing (PDF, DOCX, images, videos) using specialized Agentic AI</li>
                <li>Automated extraction of key information from each document</li>
                <li>Storage of file-to-information mappings in Redis as key-value pairs</li>
                <li>Efficient retrieval using both keyword matching and semantic search</li>
                <li>Smart document filtering to reduce processing costs</li>
              </ol>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <Lock className="mr-2 text-indigo-400" /> Continuous Learning & Efficiency
              </h3>
              <p className="text-gray-300 mb-2">
                Our approach delivers significant advantages:
              </p>
              <ul className="list-disc ml-6 space-y-1 text-gray-300">
                <li>Only relevant documents are vectorized and processed by the LLM, reducing costs</li>
                <li>Agents continuously improve through user feedback</li>
                <li>Natural language interface allows anyone to query document repositories</li>
                <li>Document relationships are discovered automatically through semantic analysis</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">⚙️ How It Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">🛠️ Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-800 p-4 rounded-lg"
              >
                <p className="text-lg font-medium text-gray-300">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <ExternalLink className="w-6 h-6" />
          </a>
        </div>
        <p>© 2024 Document Processing & Query System • Built by Shyam</p>
      </footer>
    </div>
  );
}

const steps = [
  {
    title: "1. Document Ingestion",
    description: "Companies upload their document repositories, which can include various formats (PDFs, Word documents, images, videos)."
  },
  {
    title: "2. Agentic Processing",
    description: "Specialized AI agents parse different document types, extracting key information and insights from each file."
  },
  {
    title: "3. Knowledge Storage",
    description: "The extracted information is stored in Redis as key-value pairs, where the filename is the key and critical document insights are the value."
  },
  {
    title: "4. Smart Querying",
    description: "Users ask questions through a natural language interface. The system converts queries to keywords and matches them against stored information."
  },
  {
    title: "5. Semantic Search",
    description: "Matching documents are vectorized for semantic similarity search, finding the most relevant information."
  },
  {
    title: "6. Intelligent Response",
    description: "Only the most relevant documents are processed by the LLM, which generates comprehensive answers based on the context."
  }
];

const techStack = [
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Redis",
  "Docker",
  "AutoGen / CrewAI",
  "Vector Databases",
  "LLMs (Gemma, GPT)",
  "Semantic Search"
];

export default App;