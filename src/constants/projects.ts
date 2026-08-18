export type Accent = 'blue' | 'orange' | 'cyan' | 'green'

export interface Project {
  id: string
  title: string
  subtitle: string
  category: string
  description: string
  overview: string
  features: string[]
  implementation: string
  impact: string[]
  stack: string[]
  accent: Accent
  percent: number
}

export const projects: Project[] = [
  {
    id: 'gram-ai',
    title: 'Gram AI',
    subtitle: 'Generative AI Assistant · RAG Platform',
    category: 'GEN AI / RAG',
    description:
      'LLM-powered assistant with retrieval-augmented generation — grounded, context-aware answers over documents with streaming responses.',
    overview:
      'Gram AI is a generative AI assistant built to deliver accurate, natural, and context-aware responses. It combines large language models with retrieval-augmented generation (RAG) to answer questions grounded in user-provided documents and knowledge bases — so every answer is backed by evidence instead of hallucination.',
    features: [
      'Natural conversational AI: human-like responses powered by LLMs with prompt engineering',
      'RAG pipeline: answers grounded in uploaded documents and knowledge sources',
      'Context and memory: maintains conversation context for coherent multi-turn interactions',
      'Streaming responses: real-time token-by-token answer generation',
      'Multi-format support: works with text, PDF, and structured data inputs',
    ],
    implementation:
      'Built with LLM APIs orchestrated through LangChain using structured prompt templates. The RAG pipeline uses vector embeddings (FAISS) for semantic retrieval, with a Python FastAPI/Flask backend handling async requests and a React chat interface rendering streaming output.',
    impact: [
      'Reduced information lookup time by 70% with instant AI answers',
      'High relevance scores on grounded retrieval responses',
      'Scalable architecture supporting multiple simultaneous conversations',
      'Shows end-to-end Gen AI development — from prompt design to deployment',
    ],
    stack: ['LLMs', 'LangChain', 'RAG', 'Python', 'React'],
    accent: 'blue',
    percent: 93,
  },
  {
    id: 'pubmed-assistant',
    title: 'PubMed Research Assistant',
    subtitle: 'RAG Chatbot · Biomedical Literature',
    category: 'RAG / RESEARCH',
    description:
      'End-to-end RAG pipeline over PubMed — query expansion, FAISS semantic retrieval, LLM reranking, and grounded summaries.',
    overview:
      'A research assistant chatbot that answers biomedical questions by retrieving relevant papers from PubMed and generating grounded, cited summaries — turning hours of literature review into minutes of conversation.',
    features: [
      'Query expansion: rewrites user questions into multiple search variants for better recall',
      'Semantic retrieval: FAISS vector search over paper embeddings instead of keyword-only matching',
      'Reranking: LLM-based reranking to surface the most relevant passages',
      'Grounded answers: every response cites the papers it is based on',
      'Chat-friendly UI: plain-language Q&A over complex biomedical topics',
    ],
    implementation:
      'Harvests and preprocesses papers from the PubMed API, embeds abstracts with PubMedBERT, and orchestrates the retrieval pipeline with LangChain. Generation uses the LLaMA 3.2 model with retrieved context, served through a Streamlit interface.',
    impact: [
      'Dramatically faster literature review on niche biomedical queries',
      'Answers stay verifiable — responses link back to source papers',
      'Demonstrates a full production-grade RAG loop: ingestion, retrieval, and generation',
    ],
    stack: ['FAISS', 'LangChain', 'PubMedBERT', 'LLaMA 3.2', 'Streamlit'],
    accent: 'orange',
    percent: 91,
  },
  {
    id: 'agri-bot',
    title: 'AI-Based Agri-Bot',
    subtitle: 'Smart Farming · IoT + ML',
    category: 'AI / IOT',
    description:
      'Smart India Hackathon project — IoT sensing, ML crop prediction, and automated irrigation with real-time monitoring.',
    overview:
      'An IoT and AI-powered agricultural assistant designed to revolutionize farming through intelligent automation. Sensors read the field in real time, a machine learning model recommends the right crops, and irrigation runs itself — all visible on a live dashboard.',
    features: [
      'Real-time environmental monitoring: soil pH, humidity, temperature, and moisture sensors',
      'AI-powered crop prediction: Random Forest model recommends optimal crops from soil conditions',
      'Smart irrigation: automated watering based on soil moisture and weather predictions',
      'Cloud dashboard: live data visualization and historical analytics',
      'Mobile alerts: instant notifications for critical field conditions',
    ],
    implementation:
      'Hardware layer uses Arduino and Raspberry Pi with pH, moisture, and humidity sensors. Machine learning runs on Random Forest via Scikit-learn with feature engineering, served by a Python Flask backend (SQLite, REST APIs) and a React + Chart.js frontend.',
    impact: [
      'Reduced water usage by 35% through smart irrigation',
      'Improved crop yield predictions to 87% accuracy',
      'Automated 90% of routine farming monitoring tasks',
      'Selected for the Smart India Hackathon final round',
    ],
    stack: ['Python', 'Random Forest', 'IoT', 'Flask', 'React'],
    accent: 'cyan',
    percent: 92,
  },
  {
    id: 'college-predictor',
    title: 'ML-Based College Predictor',
    subtitle: 'Educational Decision Support System',
    category: 'ML PROJECT',
    description:
      'ML-based college recommendation system that predicts admission chances from historical cutoff data.',
    overview:
      'An intelligent college recommendation system that helps students make informed higher-education decisions based on their academic performance and preferences — no more guessing which colleges are realistic.',
    features: [
      'Cutoff analysis: processes historical cutoff data from 500+ colleges',
      'Personalized recommendations: ML matches student profiles with suitable institutions',
      'Probability scoring: calculates admission chances with confidence intervals',
      'Interactive dashboard: user-friendly interface for exploring options',
      'Trend analysis: historical insights and future predictions',
    ],
    implementation:
      'Built with Random Forest and Logistic Regression models on engineered features, with Pandas and NumPy for data cleaning and normalization. Results are visualized with Matplotlib and Seaborn and deployed as a Streamlit web app on cloud hosting.',
    impact: [
      'Achieved 92% accuracy in admission predictions',
      'Helped 200+ students in college selection',
      'Reduced decision-making time by 60%',
      'Featured in college career guidance sessions',
    ],
    stack: ['Scikit-learn', 'Python', 'Pandas', 'Streamlit'],
    accent: 'green',
    percent: 78,
  },
  {
    id: 'story-matching',
    title: 'Story Matching System',
    subtitle: 'NLP Content Recommendation Engine',
    category: 'NLP PROJECT',
    description:
      'Advanced NLP recommender that matches books and movies by narrative theme using deep learning.',
    overview:
      'An NLP-powered content recommendation engine that analyzes text input and finds books, movies, and shows with similar narrative themes — understanding what a story is about, not just its keywords.',
    features: [
      'Semantic text analysis: BERT-based understanding of narrative themes and contexts',
      'Multi-modal recommendations: suggests books, movies, and TV shows',
      'Similarity scoring: TF-IDF and cosine similarity for precise matching',
      'Genre classification: automatic categorization of content types',
      'Personalized results: learns and adapts to user preferences',
    ],
    implementation:
      'Combines BERT, TF-IDF, Word2Vec, and sentence transformers for representation and matching. Data is sourced from IMDb, Goodreads, and Wikipedia APIs, served by a Python Flask backend with PostgreSQL and a caching layer, deployed via Docker with REST endpoints.',
    impact: [
      'Processed 10,000+ books and movies in the database',
      'Achieved 85% user satisfaction in recommendations',
      'Average response time under 2 seconds',
      'Implemented in a local library recommendation system',
    ],
    stack: ['BERT', 'TF-IDF', 'Word2Vec', 'Flask'],
    accent: 'cyan',
    percent: 80,
  },
  {
    id: 'rest-api',
    title: 'RESTful API System',
    subtitle: 'Enterprise Store Management Platform',
    category: 'BACKEND',
    description:
      'Spring Boot backend with full CRUD, JWT authentication, and role-based access control.',
    overview:
      'A comprehensive store-management backend with a robust API architecture, secure authentication, and role-based access control — production-ready for enterprise operations.',
    features: [
      'Complete CRUD operations: full product, inventory, and user management',
      'Role-based access: admin, manager, and employee permission levels',
      'JWT authentication: secure token-based authentication system',
      'API documentation: Swagger/OpenAPI integration',
      'Database optimization: indexed queries and connection pooling',
    ],
    implementation:
      'Built on Spring Boot with Spring Security and JPA/Hibernate, backed by MySQL with connection pooling and transaction management. Follows RESTful principles with JSON responses and structured error handling, tested with JUnit and Mockito.',
    impact: [
      'Improved data retrieval performance by 30%',
      'Reduced API response time to under 200ms',
      'Implemented in a live production environment',
      'Zero security vulnerabilities in penetration testing',
    ],
    stack: ['Spring Boot', 'MySQL', 'JWT', 'Swagger'],
    accent: 'orange',
    percent: 76,
  },
]

export const ACCENT_STYLES: Record<Accent, { text: string; border: string; bg: string; soft: string }> = {
  blue: {
    text: 'text-blue',
    border: 'border-blue',
    bg: 'bg-blue',
    soft: 'bg-blue/10',
  },
  orange: {
    text: 'text-orange',
    border: 'border-orange',
    bg: 'bg-orange',
    soft: 'bg-orange/10',
  },
  cyan: {
    text: 'text-cyan',
    border: 'border-cyan',
    bg: 'bg-cyan',
    soft: 'bg-cyan/10',
  },
  green: {
    text: 'text-green',
    border: 'border-green',
    bg: 'bg-green',
    soft: 'bg-green/10',
  },
}