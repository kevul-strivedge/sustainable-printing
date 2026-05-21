const STEPS = [
  { number: 1, label: "PRINTING",  description: "Configure your card option" },
  { number: 2, label: "ARTWORK",   description: "Upload or design" },
  { number: 3, label: "DELIVERY",  description: "Choose delivery option" },
  { number: 4, label: "PAYMENT",   description: "Secure payment" },
];

interface Props {
  currentStep: number;
}

export default function StepProgressBar({ currentStep }: Props) {
  return (
    <div className="flex w-full border border-gray-200 shadow-sm rounded-sm mb-8 overflow-hidden">
      {STEPS.map((step) => {
        const isActive = step.number === currentStep;
        const isDone   = step.number < currentStep;

        return (
          <div
            key={step.number}
            className={`flex items-center justify-center gap-2.5 flex-1 py-2.5 px-3 rounded-sm ${
              isActive ? "bg-[#036B34]" : "bg-white"
            }`}
          >
            {/* Number circle */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 ${
                isActive
                  ? "bg-white border-white"
                  : isDone
                  ? "bg-[#3d9e5f] border-[#3d9e5f]"
                  : "bg-white border-[#3d9e5f]"
              }`}
            >
              {isDone ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6l2.5 2.5L9.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <span className={`text-[12px] font-bold ${isActive ? "text-[#1e4620]" : "text-[#3d9e5f]"}`}>
                  {step.number}
                </span>
              )}
            </div>

            {/* Labels */}
            <div className="hidden sm:block leading-tight">
              <p className={`text-[11px] font-bold uppercase tracking-wide whitespace-nowrap ${isActive ? "text-white" : "text-[#036B34]"}`}>
                Step {step.number} &ndash; {step.label}
              </p>
              <p className={`text-[11px] whitespace-nowrap ${isActive ? "text-white/75" : "text-[#036B34]"}`}>
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
