import WhatsappIcon from "./setIcons/whatsapp";

export default function WhatsappButton() {
    return (
        <div className="w-[80px] h-[80px] text-white cursor-pointer hover:bg-green-400 flex items-center justify-center rounded-full fixed bottom-10 right-10 z-50 bg-green-500 shadow-lg">
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
