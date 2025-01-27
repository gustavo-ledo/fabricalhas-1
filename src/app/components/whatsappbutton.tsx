import WhatsappIcon from "./setIcons/whatsapp";

export default function WhatsappButton() {
    return (
        <div className="lg:w-[80px] lg:h-[80px] w-[45px] h-[45] text-white cursor-pointer hover:bg-green-400 flex items-center justify-center rounded-full fixed bottom-4 right-4 lg:bottom-10 lg:right-10 z-50 bg-green-500 shadow-lg">
            <a 
                href="https://api.whatsapp.com/send?phone=5541992340296" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <WhatsappIcon height="40" width="40" />
            </a>
        </div>
    );
}
