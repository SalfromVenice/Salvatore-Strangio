export const Frame = () => {
    const commonStyle = "absolute z-0 bg-accent-light dark:bg-accent-dark";
    const horizontalStyle = "h-px w-screen left-0";
    const verticalStyle = "h-full min-h-screen w-px top-0";

    return (
        <>
            <div
                className={`${commonStyle} top-6 ${horizontalStyle} sm:top-8`}
            />
            <div
                className={`${commonStyle} left-6 ${verticalStyle} sm:left-8`}
            />
            <div
                className={`${commonStyle} right-6 ${verticalStyle} sm:right-8`}
            />
            <div
                className={`${commonStyle} bottom-6 ${horizontalStyle} sm:bottom-8`}
            />
        </>
    );
};
