import { Metadata } from "next";
import DigitalArts from "./digital-arts";

export const metadata: Metadata = {
    title: "Digital Arts | Talha Kerpicci",
    metadataBase: new URL("https://talhakerpicci.com/digital-arts"),
    description: "Explore digital arts images by Talha Kerpicci",
    openGraph: {
        title: "Digital Arts | Talha Kerpicci",
        url: "https://talhakerpicci.com/digital-arts",
        description: "Explore digital arts by Talha Kerpicci",
        images: "https://raw.githubusercontent.com/talhakerpicci/talhakerpicci.com/main/public/images/illustrations/digital-arts.png",
    },
};

export default function Page() {
    return (
        <div>
            <DigitalArts />
        </div>
    );
}
