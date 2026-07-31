const masterFlashcards = [
  // ==========================================
  // KEY CONCEPTS & DEFINITIONS
  // ==========================================
  {
    category: "Key Concepts",
    front: "Utility",
    back: "Functionality offered by a product or service to meet a particular need ('fit for purpose').",
    hint: "What the service DOES."
  },
  {
    category: "Key Concepts",
    front: "Warranty",
    back: "Assurance that a product or service will meet agreed requirements ('fit for use'). Covers availability, capacity, security, and continuity.",
    hint: "HOW the service performs."
  },
  {
    category: "Key Concepts",
    front: "Outcome vs Output",
    back: "Output: A tangible or intangible deliverable produced by an activity.\nOutcome: A result for a stakeholder enabled by one or more outputs.",
    hint: "Output = What you make; Outcome = What you achieve."
  },
  {
    category: "Key Concepts",
    front: "Service Offering",
    back: "A formal description of one or more services combining Goods (transferred ownership), Access to Resources, and Service Actions.",
    hint: "Goods + Access + Actions."
  },
  {
    category: "Key Concepts",
    front: "Customer vs User vs Sponsor",
    back: "Customer: Defines requirements and takes responsibility for outcomes.\nUser: Uses services day-to-day.\nSponsor: Authorizes the budget.",
    hint: "Customer = Requirements | User = Usage | Sponsor = Budget."
  },
  {
    category: "Key Concepts",
    front: "Risk",
    back: "A possible event that could cause harm or loss, or make it more difficult to achieve objectives.",
    hint: "Uncertainty of outcomes."
  },
  {
    category: "Key Concepts",
    front: "Cost",
    back: "The amount of money spent on a specific activity or resource. Services remove costs for consumers while introducing others.",
    hint: "Financial impact of service consumption."
  },
  {
    category: "Key Concepts",
    front: "Service Relationship Management",
    back: "Joint activities performed by a service provider and service consumer to ensure continual value co-creation.",
    hint: "Provider + Consumer collaboration."
  },

  // ==========================================
  // THE 7 GUIDING PRINCIPLES
  // ==========================================
  {
    category: "Guiding Principles",
    front: "Focus on Value",
    back: "Everything the organization does must link back—directly or indirectly—to value for itself, its customers, and other stakeholders.",
    hint: "Know who the customer is and how they define value."
  },
  {
    category: "Guiding Principles",
    front: "Start Where You Are",
    back: "Do not build from scratch without considering what is already available. Measure existing services directly using objective data.",
    hint: "Analyze current state before replacing."
  },
  {
    category: "Guiding Principles",
    front: "Progress Iteratively with Feedback",
    back: "Organize work into smaller, manageable chunks that can be executed and evaluated quickly using feedback loops.",
    hint: "Small steps + constant review."
  },
  {
    category: "Guiding Principles",
    front: "Collaborate and Promote Visibility",
    back: "Work across boundaries to build trust and eliminate silos. Share work, plans, and priorities openly.",
    hint: "Break down internal silos."
  },
  {
    category: "Guiding Principles",
    front: "Think and Work Holistically",
    back: "No service or component stands alone. Understand how all parts interact to deliver value end-to-end.",
    hint: "Integrated system perspective."
  },
  {
    category: "Guiding Principles",
    front: "Keep It Simple and Practical",
    back: "Use the minimum number of steps to achieve an objective. Eliminate steps that do not produce value or satisfy compliance.",
    hint: "Outcome-focused simplicity."
  },
  {
    category: "Guiding Principles",
    front: "Optimize and Automate",
    back: "Streamline and optimize workflows first before applying technology/automation. Save human intervention for complex decisions.",
    hint: "Optimize first, automate second."
  },

  // ==========================================
  // THE FOUR DIMENSIONS
  // ==========================================
  {
    category: "Four Dimensions",
    front: "Organizations and People",
    back: "Covers organizational structures, roles, responsibilities, authorities, culture, leadership, and communication.",
    hint: "Culture, structure, and staff skills."
  },
  {
    category: "Four Dimensions",
    front: "Information and Technology",
    back: "Covers knowledge bases, information systems, databases, security, workflow tools, and communication tech.",
    hint: "Tools, architecture, and data."
  },
  {
    category: "Four Dimensions",
    front: "Partners and Suppliers",
    back: "Covers contracts, vendor relationships, outsourcing strategies, and multi-supplier management (e.g., SIAM).",
    hint: "Third-party vendors and contracts."
  },
  {
    category: "Four Dimensions",
    front: "Value Streams and Processes",
    back: "Covers activities, workflows, procedures, and value stream mapping to ensure efficient transformation of inputs to outputs.",
    hint: "Workflows and process steps."
  },
  {
    category: "Four Dimensions",
    front: "PESTLE Factors",
    back: "External constraints/drivers that influence all 4 dimensions: Political, Economic, Social, Technological, Legal, Environmental.",
    hint: "External environmental factors."
  },

  // ==========================================
  // SERVICE VALUE SYSTEM & CHAIN
  // ==========================================
  {
    category: "SVS & Value Chain",
    front: "Service Value System (SVS)",
    back: "Describes how all components and activities of an organization work together to enable value creation. Input = Opportunity/Demand; Output = Value.",
    hint: "Inputs: Opportunity/Demand ➔ Output: Value."
  },
  {
    category: "SVS & Value Chain",
    front: "Plan (SVC Activity)",
    back: "Ensures a shared understanding of the vision, current status, and improvement direction for all four dimensions and services.",
    hint: "Shared understanding & strategic vision."
  },
  {
    category: "SVS & Value Chain",
    front: "Engage (SVC Activity)",
    back: "Provides a good understanding of stakeholder needs, transparency, and continual engagement across all interactions.",
    hint: "Stakeholder relationships & needs."
  },
  {
    category: "SVS & Value Chain",
    front: "Design and Transition (SVC Activity)",
    back: "Ensures products and services continually meet stakeholder expectations for quality, cost, and time-to-market.",
    hint: "Specifications & service readiness."
  },
  {
    category: "SVS & Value Chain",
    front: "Obtain/Build (SVC Activity)",
    back: "Ensures service components are available when and where they are needed, meeting agreed specifications.",
    hint: "Acquiring or creating components."
  },
  {
    category: "SVS & Value Chain",
    front: "Deliver and Support (SVC Activity)",
    back: "Ensures services are delivered and supported according to agreed specifications and stakeholder expectations.",
    hint: "Daily operations, support & incidents."
  },

  // ==========================================
  // KEY MANAGEMENT PRACTICES
  // ==========================================
  {
    category: "Practices",
    front: "Incident",
    back: "An unplanned interruption to a service or reduction in the quality of a service.",
    hint: "Goal: Restore normal operation ASAP."
  },
  {
    category: "Practices",
    front: "Problem vs Known Error",
    back: "Problem: Cause or potential cause of one or more incidents.\nKnown Error: A problem that has been analyzed and has a documented workaround.",
    hint: "Problem = Unknown Cause | Known Error = Analyzed + Workaround."
  },
  {
    category: "Practices",
    front: "Workaround",
    back: "A temporary solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available.",
    hint: "Mitigates impact without fixing root cause."
  },
  {
    category: "Practices",
    front: "Standard Change",
    back: "A low-risk, pre-authorized change that follows an established procedure and requires no additional review.",
    hint: "Pre-approved, routine modifications."
  },
  {
    category: "Practices",
    front: "Emergency Change",
    back: "A change that must be implemented as soon as possible, often to resolve a major incident or deploy a security patch.",
    hint: "Expedited assessment and approval."
  },
  {
    category: "Practices",
    front: "Service Desk",
    back: "The single point of contact between the service provider and all users. Handles incidents, service requests, and user communications.",
    hint: "Single point of contact."
  },
  {
    category: "Practices",
    front: "Service Request",
    back: "A request from a user or user's representative that initiates a service action that has been agreed as a normal part of service delivery.",
    hint: "Routine requests (passwords, software, access)."
  },
  {
    category: "Practices",
    front: "Service Level Agreement (SLA)",
    back: "A documented agreement between a service provider and a customer that identifies both required services and the expected level of performance.",
    hint: "Provider-to-Customer performance targets."
  },
  {
    category: "Practices",
    front: "OLA vs Underpinning Contract",
    back: "OLA (Operational Level Agreement): Agreement between provider and an internal department.\nUC: Legal contract between provider and external vendor.",
    hint: "OLA = Internal teams | UC = External vendor."
  },
  {
    category: "Practices",
    front: "Configuration Item (CI)",
    back: "Any component that needs to be managed in order to deliver an IT service.",
    hint: "Hardware, software, network, or documentation asset."
  },
  {
    category: "Practices",
    front: "Event",
    back: "Any change of state that has significance for the management of a service or other configuration item (CI).",
    hint: "State changes recorded in logs/alerts."
  },
  {
    category: "Practices",
    front: "Release Management vs Deployment Management",
    back: "Release Management: Makes new/changed features available for user consumption.\nDeployment Management: Moves hardware/software/components to live environments.",
    hint: "Release = Make available | Deployment = Move to live."
  },
  {
    category: "Practices",
    front: "Continual Improvement Register (CIR)",
    back: "A database or document used to track, manage, and prioritize improvement ideas across the entire organization.",
    hint: "Central tracking for improvement ideas."
  },
  {
    category: "Practices",
    front: "Continual Improvement Model Steps",
    back: "1. What is the vision?\n2. Where are we now?\n3. Where do we want to be?\n4. How do we get there?\n5. Take action\n6. Did we get there?\n7. How do we keep momentum going?",
    hint: "7-step iterative cycle."
  }
];
