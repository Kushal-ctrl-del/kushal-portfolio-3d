export type Project = {
  slug: string;
  name: string;
  kind: string;
  status: "live" | "in-development";
  summary: string;
  stack: string[];
  links: { live?: string; source: string };
  object:
    | "three" | "eluno" | "panel" | "lens"
    | "resume" | "comrade" | "sole";
};

const GITHUB = "https://github.com/Kushal-ctrl-del";

export const PROJECTS: Project[] = [
  {
    slug: "three",
    name: "THREE",
    kind: "AI support agent for Indian D2C brands",
    status: "in-development",
    summary:
      "A support agent that detects intent, retrieves order and policy data with RAG, and takes safe actions. Risky actions like refunds and cancellations wait for human approval. The operator dashboard shows pending approvals drifting along an orbit by urgency.",
    stack: ["FastAPI", "LangGraph", "Groq (Llama 3.3 70B)", "Supabase Postgres", "Next.js"],
    links: { source: GITHUB }, // TODO: replace with repo URL
    object: "three",
  },
  {
    slug: "eluno-oms",
    name: "Eluno OMS",
    kind: "AI order management for an eyewear brand",
    status: "live",
    summary:
      "An AI-powered order management system for an eyewear brand, built and shipped in a day and a half.",
    stack: ["Next.js 14", "Groq", "Supabase", "Vercel"],
    links: { live: "https://eluno-ops.vercel.app", source: GITHUB }, // TODO: replace source with repo URL
    object: "eluno",
  },
  {
    slug: "the-panel",
    name: "The Panel",
    kind: "Multi-agent AI focus group",
    status: "in-development",
    summary:
      "Describe an idea, a pitch, or a decision and a panel of distinct AI personas argues it out. A live consensus meter shows where the panel is leaning.",
    stack: ["Multi-agent orchestration", "Groq", "Gemini API", "Claude API"],
    links: { source: GITHUB }, // TODO: replace with repo URL
    object: "panel",
  },
  {
    slug: "lens-ai",
    name: "LENS AI",
    kind: "AI business intelligence dashboard",
    status: "live",
    summary:
      "Upload a CSV or Excel file and get KPIs, charts, and plain-English answers. The whole pipeline runs client-side: parse the file, summarize the data, query Gemini, render the insight.",
    stack: ["React", "Gemini 2.0 Flash", "Recharts", "PapaParse", "Framer Motion", "Vercel"],
    links: { live: "https://lensai-eight.vercel.app", source: GITHUB }, // TODO: replace source with repo URL
    object: "lens",
  },
  {
    slug: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    kind: "Resume analysis with structured Claude output",
    status: "live",
    summary:
      "Scores a resume against a job description: ATS score, missing keywords, and section-level rewrites. Claude is prompted for strict JSON that drives the interface. Supabase handles auth and history.",
    stack: ["Next.js", "Claude API", "Supabase", "Tailwind CSS", "Netlify"],
    links: { live: "https://resume-analyze-me.netlify.app", source: GITHUB }, // TODO: replace source with repo URL
    object: "resume",
  },
  {
    slug: "comrade-ai",
    name: "Comrade AI",
    kind: "Developer reference tool",
    status: "live",
    summary:
      "A chat-based developer reference tool built on the Claude API, with a persistent persona and multi-turn context.",
    stack: ["React", "Claude API", "Tailwind CSS", "Framer Motion", "Vercel"],
    links: { live: "https://comrade-ai-eight.vercel.app", source: GITHUB }, // TODO: replace source with repo URL
    object: "comrade",
  },
  {
    slug: "sole",
    name: "SOLE",
    kind: "Sneaker e-commerce PWA",
    status: "live",
    summary:
      "A full-stack storefront with Razorpay UPI payments, Supabase auth, product catalog, cart, and order management, built as an installable PWA.",
    stack: ["Next.js", "Supabase", "Razorpay", "Tailwind CSS", "Vercel"],
    links: { live: "https://sole-sneaks.vercel.app", source: GITHUB }, // TODO: replace source with repo URL
    object: "sole",
  },
];
