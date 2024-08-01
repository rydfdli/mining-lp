import Image from "next/image";

const ServiceItem = ({ title, image }) => {
    return (
        <div className="w-full h-[380px] rounded-md after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-70 after:rounded-md">
            <Image src={image} alt="img-1" fill className="object-cover rounded-md" />
            <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full">
                <h1 className="text-white text-center">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default ServiceItem;