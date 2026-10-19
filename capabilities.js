/* Verified capability map. Public copy omits private employment context. */
const CAPABILITIES = [
  {
    "id": "agents",
    "name": "Agentic AI",
    "tagline": "Language into action",
    "kind": "Production systems",
    "color": "#c4f279",
    "capabilities": [
      "I have designed tool-using ReAct agents, stateful LangGraph workflows, and planner–validator–executor pipelines.",
      "I have integrated natural-language querying with streaming APIs, SQL analysis, survey statistics, PLSR, and word-cloud tools.",
      "I have built multi-agent research and prediction workflows, short-term retrieval memory, and reusable agentic skills."
    ],
    "tools": [
      "LangGraph",
      "LangChain",
      "CrewAI",
      "ReAct",
      "MCP",
      "n8n",
      "OpenAI API"
    ],
    "links": [
      [
        "Donation workflow",
        "https://github.com/antibloch/donor_agent"
      ]
    ],
    "evidence": "I built a production survey-analysis agent that connects natural-language requests to analysis tools. I also developed an internal platform for creating, distributing, and tracking reusable agentic skills."
  },
  {
    "id": "evaluation",
    "name": "Agent evaluation",
    "tagline": "Reliability by design",
    "kind": "Engineering practice",
    "color": "#a1c8ff",
    "capabilities": [
      "I have designed reproducible agent evaluation with independently derived reference answers and separate content and trajectory judgments.",
      "I have diagnosed failures across prompts, tool arguments, database queries, output assembly, and transport.",
      "I have used regression catalogues, source-bound transcripts, prompt inventories, and numeric equivalence fixtures.",
      "I have bounded tool execution with read-only SQL guardrails, statement timeouts, step limits, and parallel tool batching."
    ],
    "tools": [
      "Regression evaluation",
      "Oracle / judge workflows",
      "SQL guardrails",
      "Prompt engineering",
      "Codex",
      "Claude Code",
      "GitHub Copilot"
    ],
    "links": [],
    "evidence": "I built a reproducible evaluation workflow around a production analytics agent, with independent reference answers, content and tool-trajectory checks, and regression cases. I implemented guardrails and execution limits to make tool use more reliable."
  },
  {
    "id": "language",
    "name": "LLMs & retrieval",
    "tagline": "Context into knowledge",
    "kind": "Applied ML",
    "color": "#c0a1ff",
    "capabilities": [
      "I have built retrieval-augmented generation with embeddings, semantic search, and vector stores.",
      "I have fine-tuned language and vision-language models, including multi-GPU workflows and LoRA/QLoRA methods.",
      "I have implemented sentiment analysis, toxicity ranking, summarization, grammatical acceptability, and signal-based text classification."
    ],
    "tools": [
      "Hugging Face",
      "PyTorch",
      "TensorFlow",
      "TRL",
      "Unsloth",
      "Axolotl",
      "LoRA / QLoRA",
      "FAISS",
      "ChromaDB",
      "pgvector",
      "Pinecone",
      "BERT / RoBERTa",
      "BART / T5",
      "Sentence Transformers"
    ],
    "links": [
      [
        "Document question answering",
        "https://github.com/antibloch/doc_qa_project"
      ],
      [
        "Fine-tuning workflows",
        "https://github.com/antibloch/llm_finetuning"
      ]
    ],
    "evidence": "I have built retrieval applications and fine-tuning workflows. My research includes privacy-preserving federated LLM fine-tuning, and my professional work includes multi-GPU fine-tuning of language and vision-language models for railway intelligence."
  },
  {
    "id": "vision",
    "name": "Spatial intelligence",
    "tagline": "Pixels into worlds",
    "kind": "Industry & experiments",
    "color": "#78ddd1",
    "capabilities": [
      "I have developed point-cloud and vision-language pipelines for railway scene understanding.",
      "I have worked with LiDAR segmentation, object detection, tracking, and 2D-to-3D projection.",
      "I have built neural rendering and reconstruction experiments with NeRF, Gaussian Splatting, SuGaR, and SIREN.",
      "I have integrated deblurring, denoising, super-resolution, and diffusion-based restoration; optimize inference for deployment."
    ],
    "tools": [
      "Open3D",
      "OpenCV",
      "COLMAP",
      "NeRF",
      "Gaussian Splatting",
      "SuGaR",
      "SAM",
      "YOLO",
      "SegFormer",
      "Detectron2",
      "PointNet / PointNet++",
      "RandLA-Net",
      "SphereFormer",
      "NAFNet",
      "ESRGAN / RRDB",
      "Diffusion"
    ],
    "links": [
      [
        "Point-cloud segmentation",
        "https://github.com/superdianuj/SAM_pointcloud_segment"
      ],
      [
        "Gaussian Splatting experiments",
        "https://github.com/antibloch/gaussian-splatting"
      ]
    ],
    "evidence": "I developed point-cloud and vision-language pipelines for railway scene understanding and optimized models for real-time vision. I also engineered 3D neural rendering and image-restoration systems, alongside experiments implementing existing research methods."
  },
  {
    "id": "privacy",
    "name": "Trustworthy ML",
    "tagline": "Learning with boundaries",
    "kind": "Research",
    "color": "#ffbb8d",
    "capabilities": [
      "I have researched membership inference and model inversion attacks, and evaluate defenses.",
      "I have explored machine unlearning and dataset condensation for selective retraining and efficient data removal.",
      "I have studied privacy-preserving federated fine-tuning, adversarial behavior, poisoning detection, and inference leakage."
    ],
    "tools": [
      "Membership inference",
      "Model inversion",
      "Federated learning",
      "Machine unlearning",
      "Dataset condensation",
      "Trustworthy AI",
      "Opacus",
      "TensorFlow Privacy",
      "ART"
    ],
    "links": [],
    "evidence": "I investigated membership inference and model inversion attacks on vision models and developed defenses. I have also researched privacy-preserving LLM fine-tuning, machine unlearning, and dataset condensation, with implementation experiments to evaluate their behavior."
  },
  {
    "id": "medical",
    "name": "Medical & scientific AI",
    "tagline": "Data into discovery",
    "kind": "Research & implementations",
    "color": "#f4a9d4",
    "capabilities": [
      "I have developed CNN models for brain-tumor segmentation and MRI classification.",
      "I have applied dataset condensation to medical-imaging training workflows.",
      "I have explored graph-based image segmentation, EEG visualization, brain connectivity generation, protein sequences, and SMILES classification."
    ],
    "tools": [
      "U-Net",
      "CNNs",
      "GCNs",
      "GANs",
      "MNE",
      "RDKit",
      "MRI analysis",
      "Sequence classification"
    ],
    "links": [],
    "evidence": "I developed CNN models for brain-tumor segmentation and MRI classification and implemented dataset condensation for training optimization. I have also explored scientific ML through neuroimaging, molecular sequence, and graph-based analysis implementations."
  },
  {
    "id": "signals",
    "name": "Signals & forecasting",
    "tagline": "Patterns beneath the surface",
    "kind": "Research & prototypes",
    "color": "#ffe18a",
    "capabilities": [
      "I have processed radar I/Q and ECG signals for heart-rate and breathing-rate estimation and validation.",
      "I have worked with FFT, wavelets, variational mode decomposition, self-mixing interferometry, and spectral representations.",
      "I have built sensor-fusion and human-activity pipelines with accelerometer, gyroscope, GPS, and BLE data.",
      "I have developed time-series forecasts and donor-readiness models using LSTM, Transformers, and gradient boosting."
    ],
    "tools": [
      "NumPy",
      "SciPy",
      "FFT / STFT",
      "Wavelets",
      "VMD",
      "LSTM / BiLSTM",
      "GRU",
      "WaveNet",
      "XGBoost",
      "ARIMA / VAR",
      "MATLAB",
      "C / C++"
    ],
    "links": [
      [
        "Donor readiness scoring",
        "https://github.com/antibloch/donor_readiness_scorer"
      ]
    ],
    "evidence": "I have published research in optical sensing, epidemiological modeling, and mobile sensor-based contact tracing. I built radar and ECG processing prototypes and developed donor-readiness prediction using time-series features, LSTM, Transformer, and gradient-boosted models."
  },
  {
    "id": "backend",
    "name": "AI backends & data",
    "tagline": "Models into services",
    "kind": "Production engineering",
    "color": "#80c9ff",
    "capabilities": [
      "I have built REST and streaming APIs for model inference, agent orchestration, and interactive applications.",
      "I have integrated relational data, retrieval stores, caching, and ONNX model scoring.",
      "I have implemented authentication and registration flows and connect model outputs to usable dashboards."
    ],
    "tools": [
      "Python",
      "SQL",
      "FastAPI",
      "Flask",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "ONNX Runtime",
      "Streamlit"
    ],
    "links": [
      [
        "Agent API workflow",
        "https://github.com/antibloch/donor_agent"
      ]
    ],
    "evidence": "I integrated a production tool-using agent with FastAPI streaming and PostgreSQL analysis. I also built agent API workflows and a separate donor-scoring application that serves trained models through ONNX Runtime."
  },
  {
    "id": "systems",
    "name": "Deployment & research systems",
    "tagline": "Experiments into operation",
    "kind": "Tools & workflows",
    "color": "#c7d5b0",
    "capabilities": [
      "I have packaged services with Docker and Docker Compose; work with Linux, Nginx, and GitLab CI/CD.",
      "I have run GPU training and fine-tuning workflows and optimize models for resource-constrained inference.",
      "I have worked across Azure, RunPod, and Hetzner Cloud; maintain reproducible experiments and evaluation artifacts."
    ],
    "tools": [
      "Docker",
      "Docker Compose",
      "Linux",
      "Nginx",
      "GitLab CI/CD",
      "Azure",
      "RunPod",
      "Hetzner Cloud",
      "GPU training",
      "Model optimization"
    ],
    "links": [],
    "evidence": "I have worked with containerized services, cloud platforms, GPU training pipelines, and reproducible research workflows. I optimized inference for resource-constrained deployment and maintained evaluation artifacts for repeatable experiments."
  },
  {
    "id": "interfaces",
    "name": "Interfaces & mobile",
    "tagline": "Systems people can use",
    "kind": "Application engineering",
    "color": "#b8a8ff",
    "capabilities": [
      "I have built React frontends, interactive visualizations, and analytical dashboards.",
      "I have developed Flutter/Dart applications with GPS, Bluetooth Low Energy, and background data upload.",
      "I have connected web and mobile experiences to APIs, authentication, and model-powered workflows."
    ],
    "tools": [
      "JavaScript",
      "HTML / CSS",
      "React",
      "Flutter",
      "Dart",
      "D3.js",
      "GPS",
      "BLE",
      "Python",
      "C++"
    ],
    "links": [
      [
        "Mobile contact tracing",
        "https://github.com/antibloch/AppCOVIDv1"
      ]
    ],
    "evidence": "I built an end-to-end mobile sensor-based contact-tracing system with Flutter, GPS, and Bluetooth Low Energy features. I have also developed web interfaces, interactive dashboards, and a model-scoring application."
  }
];
