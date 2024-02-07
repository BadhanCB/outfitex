import { MdCopyright } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="wrapper my-4 px-4 md:px-8 lg:px-12">
            <h2 className="flex items-center justify-center gap-2 text-center capitalize">
                Copyright <MdCopyright /> {new Date().getFullYear()} outfitex.
                All rights reserved
            </h2>
        </footer>
    );
};

export default Footer;
