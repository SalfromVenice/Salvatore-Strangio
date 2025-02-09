import { LinkedinLogo, Mailbox } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

export const ContactsSection = () => {
    const { t } = useTranslation();
    const mailTo = `mailto:sal.strangio@gmail.com?subject=${t("mail_obj")}`;

    return (
        <div id="contact_me" className="mx-auto h-fit max-w-[35rem]">
            <h2 className="t uppercase">{t("contact_me")}</h2>
            <div className="flex justify-center gap-6 pt-8 xs:gap-12 xs:pt-12">
                <a
                    href="https://www.linkedin.com/in/salvatore-strangio/"
                    target="_blank"
                    className="flex cursor-pointer gap-1 text-lg leading-8 underline-offset-4 transition-all hover:text-accent-light hover:underline hover:drop-shadow-light xs:items-end dark:hover:text-accent-dark dark:hover:drop-shadow-dark"
                >
                    <LinkedinLogo size={32} />
                    LinkedIn
                </a>
                <a
                    href={mailTo}
                    className="flex cursor-pointer gap-1 text-lg leading-8 capitalize underline-offset-4 transition-all hover:text-accent-light hover:underline hover:drop-shadow-light xs:items-end dark:hover:text-accent-dark dark:hover:drop-shadow-dark"
                >
                    <Mailbox size={32} />
                    {t("mail_me")}
                </a>
            </div>
        </div>
    );
};
