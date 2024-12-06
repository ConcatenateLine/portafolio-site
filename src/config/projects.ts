export interface Project {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    quote: string;
    technologies?: string[];
    link?: string;
}

export const mainProject: Project = {
    title: "REVOLUTIONARY CLOUD ARCHITECTURE DEPLOYMENT",
    subtitle: "Senior Software Engineer Pioneers Scalable Solutions",
    description: "Architected and implemented a high-performance distributed system handling 10M+ daily transactions. Reduced infrastructure costs by 60% while improving response times by 300%.",
    image: "/project-main.jpg",
    quote: "A masterclass in modern cloud architecture and distributed systems design",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform", "Go"]
};

export const projects: Project[] = [
    {
        title: "AI-POWERED CODE ANALYSIS PLATFORM",
        subtitle: "Machine Learning Meets Software Development",
        description: "Developed an innovative code analysis platform that uses AI to detect patterns, vulnerabilities, and optimization opportunities in real-time. The system processes over 1M lines of code daily with 99.9% accuracy.",
        image: "/project-ai.jpg",
        quote: "Revolutionary approach to automated code review and optimization",
        technologies: ["Python", "TensorFlow", "FastAPI", "MongoDB", "Docker"]
    },
    {
        title: "BLOCKCHAIN-BASED SUPPLY CHAIN SOLUTION",
        subtitle: "Transforming Supply Chain Transparency",
        description: "Created a decentralized supply chain tracking system using blockchain technology. Implemented smart contracts for automated compliance and reduced verification time by 85%.",
        image: "/project-blockchain.jpg",
        quote: "Setting new standards in supply chain transparency and efficiency",
        technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"]
    },
    {
        title: "REAL-TIME ANALYTICS DASHBOARD",
        subtitle: "Data Visualization Reimagined",
        description: "Built a highly responsive analytics platform processing 50TB of data daily. Features include real-time visualization, predictive analytics, and custom reporting tools.",
        image: "/project-analytics.jpg",
        quote: "Turning complex data into actionable insights",
        technologies: ["React", "D3.js", "GraphQL", "PostgreSQL", "Redis"]
    },
    {
        title: "MICROSERVICES MIGRATION SUCCESS",
        subtitle: "Legacy System Modernization",
        description: "Led the successful migration of a monolithic application to a microservices architecture. Improved deployment frequency by 400% and reduced system downtime by 75%.",
        image: "/project-micro.jpg",
        quote: "Exemplary execution of modern architectural principles",
        technologies: ["Spring Boot", "Kafka", "Docker", "Kubernetes", "MongoDB"]
    }
];
