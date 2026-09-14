export default function SectionHeading({ title, intro }) {
  return (
    <div className="mb-10 md:mb-14 max-w-2xl">
      <h2 className="font-display text-3xl md:text-[2.5rem] leading-[1.1] text-bone">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-bone-dim text-[15px] md:text-base leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
