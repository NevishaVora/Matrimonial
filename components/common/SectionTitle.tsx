interface SectionTitleProps {
    subtitle?: string;
    title: string;
    description?: string;
    center?: boolean;
}

export default function SectionTitle({
    subtitle,
    title,
    description,
    center = true,
}: SectionTitleProps) {
    return (
        <div
            className={`mb-6 ${center ? "text-center mx-auto" : "text-left"
                }`}
        >
            {subtitle && (
                <span className="inline-block text-[var(--color-golden)] font-semibold uppercase tracking-[3px] mb-3">
                    {subtitle}
                </span>
            )}

            <h2 className="mt-0 mb-0 text-3xl md:text-4xl font-bold leading-tight text-[var(--color-maroon)]">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-[var(--color-maroon)] max-w-2xl mx-auto text-lg leading-8">
                    {description}
                </p>
            )}
        </div>
    );
}