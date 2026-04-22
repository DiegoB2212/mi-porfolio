import { ListCheck, Network, Search, Glasses} from "lucide-react";

const highlights = [
  {
    icon: ListCheck,
    title: "Analytical Thinking",
    description:
      "Breaking down problems objectively to understand their core before taking action.",
  },
  {
    icon: Network,
    title: "Structured Design",
    description:
      "Creating clear, well-planned solutions based on logic and organization.",
  },
  {
    icon: Search,
    title: "Precise Execution",
    description: "Turning ideas into reliable results through careful and accurate implementation.",
  },
  {
    icon: Glasses,
    title: "Continuous Learning",
    description:
      "Driven by curiosity to constantly improve and explore new technologies.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Designing solutions through
              <span className="font-serif italic font-normal text-white">
                {" "}
                analysis, clarity, and precise execution.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I built my strongest foundations during my engineering studies, where I developed a structured way of thinking and problem-solving. Over time, my curiosity led me to explore deeper into software development, constantly learning and refining my skills.
              </p>
              <p>
                I approach every challenge with an analytical mindset — first understanding the problem from an objective perspective, then designing a clear and structured solution, and finally executing it with precision. My goal is not just to build, but to build with purpose, clarity, and efficiency.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I aim to design efficient solutions by prioritizing strategic problem analysis over immediate implementation."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
