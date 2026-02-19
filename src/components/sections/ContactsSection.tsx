import { LinkedinLogoIcon, MailboxIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

export const ContactsSection = () => {
    const { t } = useTranslation();
    const mailTo = `mailto:sal.strangio@gmail.com?subject=${t("mail_obj")}`;
    const tailwindClasses =
        "flex cursor-pointer gap-1 text-lg leading-8 capitalize underline-offset-4 transition-all hover:text-accent-light hover:underline hover:drop-shadow-light xs:items-end dark:hover:text-accent-dark dark:hover:drop-shadow-dark";

    return (
        <div id="contact_me" className="mx-auto h-fit max-w-140">
            <h2 className="t uppercase">{t("contact_me")}</h2>
            <div className="flex justify-center gap-6 pt-8 xs:gap-12 xs:pt-12">
                <a
                    title={t("visit")}
                    href="https://www.linkedin.com/in/salvatore-strangio/"
                    target="_blank"
                    className={tailwindClasses}
                >
                    <LinkedinLogoIcon size={32} />
                    LinkedIn
                </a>
                <a title={t("mail")} href={mailTo} className={tailwindClasses}>
                    <MailboxIcon size={32} />
                    {t("mail_me")}
                </a>
            </div>
        </div>
    );
};
